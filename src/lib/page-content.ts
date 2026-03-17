import 'server-only'

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { Prisma } from '@prisma/client'
import { defaultConversionCtas } from '@/lib/cta-config'
import type { ConversionCtaConfig } from '@/lib/cta-config'
import { prisma } from '@/lib/prisma'

export type PageContentId =
  | 'home'
  | 'projects'
  | 'services'
  | 'about'
  | 'privacy'
  | 'terms'
  | 'cookies'
  | 'ctas'

export type PageContentValueMap = Record<string, string>

export interface PageContentEntry {
  pageId: PageContentId | string
  draft: PageContentValueMap
  published: PageContentValueMap
  updatedAt: string | null
  publishedAt: string | null
  updatedById: string | null
  publishedById: string | null
}

type LegacyPageSettingsMap = Record<string, Record<string, string>>
type FallbackPageSettingsMap = Record<string, Omit<PageContentEntry, 'pageId' | 'updatedById' | 'publishedById'>>

const settingsDir = join(process.cwd(), 'data')
const settingsPath = join(settingsDir, 'admin-page-settings.json')

function canUseLocalFallback() {
  return process.env.NODE_ENV !== 'production'
}

function toValueMap(value: unknown): PageContentValueMap {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {}
  }

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>)
      .filter(([, entryValue]) => typeof entryValue === 'string')
      .map(([key, entryValue]) => [key, entryValue as string])
  )
}

function emptyPageEntry(pageId: string): PageContentEntry {
  return {
    pageId,
    draft: {},
    published: {},
    updatedAt: null,
    publishedAt: null,
    updatedById: null,
    publishedById: null,
  }
}

async function readFallbackSettings(): Promise<FallbackPageSettingsMap> {
  try {
    const content = await readFile(settingsPath, 'utf8')
    const parsed = JSON.parse(content) as FallbackPageSettingsMap | LegacyPageSettingsMap
    const migrated: FallbackPageSettingsMap = {}

    for (const [pageId, value] of Object.entries(parsed)) {
      const candidate = value as Partial<PageContentEntry>
      if (candidate && typeof candidate === 'object' && 'draft' in candidate && 'published' in candidate) {
        migrated[pageId] = {
          draft: toValueMap(candidate.draft),
          published: toValueMap(candidate.published),
          updatedAt: candidate.updatedAt || null,
          publishedAt: candidate.publishedAt || null,
        }
      } else {
        migrated[pageId] = {
          draft: toValueMap(value),
          published: toValueMap(value),
          updatedAt: null,
          publishedAt: null,
        }
      }
    }

    return migrated
  } catch {
    return {}
  }
}

async function writeFallbackSettings(settings: FallbackPageSettingsMap) {
  await mkdir(settingsDir, { recursive: true })
  await writeFile(settingsPath, JSON.stringify(settings, null, 2), 'utf8')
}

function serializeRecord(record: {
  pageId: string
  draft: unknown
  published: unknown
  updatedAt: Date | string | null
  publishedAt: Date | string | null
  updatedById?: string | null
  publishedById?: string | null
}): PageContentEntry {
  return {
    pageId: record.pageId,
    draft: toValueMap(record.draft),
    published: toValueMap(record.published),
    updatedAt:
      typeof record.updatedAt === 'string'
        ? record.updatedAt
        : record.updatedAt?.toISOString() || null,
    publishedAt:
      typeof record.publishedAt === 'string'
        ? record.publishedAt
        : record.publishedAt?.toISOString() || null,
    updatedById: record.updatedById ?? null,
    publishedById: record.publishedById ?? null,
  }
}

function toJsonInput(values: PageContentValueMap): Prisma.InputJsonValue {
  return values
}

export async function getPageContent(pageId: PageContentId | string): Promise<PageContentEntry> {
  if (prisma) {
    const record = await prisma.pageContent.findUnique({
      where: { pageId },
    })

    if (record) {
      return serializeRecord(record)
    }
  }

  if (canUseLocalFallback()) {
    const fallbackSettings = await readFallbackSettings()
    const fallbackEntry = fallbackSettings[pageId]

    if (fallbackEntry) {
      return {
        pageId,
        draft: fallbackEntry.draft,
        published: fallbackEntry.published,
        updatedAt: fallbackEntry.updatedAt,
        publishedAt: fallbackEntry.publishedAt,
        updatedById: null,
        publishedById: null,
      }
    }
  }

  return emptyPageEntry(pageId)
}

export async function getPublishedPageContent(pageId: PageContentId | string) {
  const entry = await getPageContent(pageId)
  return entry.published
}

export async function mergePublishedPageContent<T extends PageContentValueMap>(
  pageId: PageContentId | string,
  defaults: T
): Promise<T> {
  const published = await getPublishedPageContent(pageId)
  return {
    ...defaults,
    ...published,
  }
}

export async function getGlobalConversionCtas(): Promise<ConversionCtaConfig> {
  const published = await getPublishedPageContent('ctas')

  return {
    budget: {
      label: published.cta_budget_label || defaultConversionCtas.budget.label,
      href: published.cta_budget_url || defaultConversionCtas.budget.href,
    },
    meeting: {
      label: published.cta_meeting_label || defaultConversionCtas.meeting.label,
      href: published.cta_meeting_url || defaultConversionCtas.meeting.href,
    },
    whatsapp: {
      label: published.cta_whatsapp_label || defaultConversionCtas.whatsapp.label,
      href: published.cta_whatsapp_url || defaultConversionCtas.whatsapp.href,
    },
  }
}

export async function savePageDraft(
  pageId: PageContentId | string,
  values: PageContentValueMap,
  userId: string
) {
  if (prisma) {
    return prisma.pageContent.upsert({
      where: { pageId },
      create: {
        pageId,
        draft: toJsonInput(values),
        published: {},
        updatedById: userId,
      },
      update: {
        draft: toJsonInput(values),
        updatedById: userId,
      },
    })
  }

  if (!canUseLocalFallback()) {
    throw new Error('DATABASE_URL is required to save page content outside local development.')
  }

  const fallbackSettings = await readFallbackSettings()
  const existing = fallbackSettings[pageId] || {
    draft: {},
    published: {},
    updatedAt: null,
    publishedAt: null,
  }

  fallbackSettings[pageId] = {
    ...existing,
    draft: values,
    updatedAt: new Date().toISOString(),
  }

  await writeFallbackSettings(fallbackSettings)
}

export async function publishPageDraft(
  pageId: PageContentId | string,
  userId: string
) {
  if (prisma) {
    const existing = await prisma.pageContent.findUnique({
      where: { pageId },
    })

    const draft = toValueMap(existing?.draft)

    const record = await prisma.pageContent.upsert({
      where: { pageId },
      create: {
        pageId,
        draft: toJsonInput(draft),
        published: toJsonInput(draft),
        updatedById: userId,
        publishedById: userId,
        publishedAt: new Date(),
      },
      update: {
        published: toJsonInput(draft),
        updatedById: userId,
        publishedById: userId,
        publishedAt: new Date(),
      },
    })

    return serializeRecord(record)
  }

  if (!canUseLocalFallback()) {
    throw new Error('DATABASE_URL is required to publish page content outside local development.')
  }

  const fallbackSettings = await readFallbackSettings()
  const existing = fallbackSettings[pageId] || {
    draft: {},
    published: {},
    updatedAt: null,
    publishedAt: null,
  }

  fallbackSettings[pageId] = {
    ...existing,
    published: existing.draft || {},
    publishedAt: new Date().toISOString(),
  }

  await writeFallbackSettings(fallbackSettings)

  return {
    pageId,
    draft: fallbackSettings[pageId].draft,
    published: fallbackSettings[pageId].published,
    updatedAt: fallbackSettings[pageId].updatedAt,
    publishedAt: fallbackSettings[pageId].publishedAt,
    updatedById: userId,
    publishedById: userId,
  }
}
