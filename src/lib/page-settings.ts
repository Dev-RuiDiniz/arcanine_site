import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { adminPageEditorConfigs } from '@/lib/admin-page-configs'
import type { AdminPageEditorConfig } from '@/lib/admin-page-configs'

interface PageSettingsEntry {
  draft?: Record<string, string>
  published?: Record<string, string>
}

type PageSettingsMap = Record<string, PageSettingsEntry | Record<string, string>>

const settingsPath = join(process.cwd(), 'data', 'admin-page-settings.json')

function getDefaultValues(pageId: AdminPageEditorConfig['pageId']) {
  return adminPageEditorConfigs[pageId].sections
    .flatMap((section) => section.fields)
    .reduce<Record<string, string>>((acc, field) => {
      acc[field.id] = field.defaultValue || ''
      return acc
    }, {})
}

function normalizeEntry(value: PageSettingsEntry | Record<string, string>) {
  if (
    value &&
    typeof value === 'object' &&
    'draft' in value &&
    'published' in value
  ) {
    const typed = value as PageSettingsEntry
    const published = typed.published || {}
    const draft = typed.draft || {}
    return Object.keys(published).length > 0 ? published : draft
  }

  return (value as Record<string, string>) || {}
}

export async function getPublishedPageSettings(
  pageId: AdminPageEditorConfig['pageId']
) {
  const defaults = getDefaultValues(pageId)

  try {
    const raw = await readFile(settingsPath, 'utf8')
    const allSettings = JSON.parse(raw) as PageSettingsMap
    const pageSettings = allSettings[pageId]
    if (!pageSettings) {
      return defaults
    }
    return {
      ...defaults,
      ...normalizeEntry(pageSettings),
    }
  } catch {
    return defaults
  }
}
