import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

export const leadPayloadSchema = z.object({
  name: z.string().trim().min(2, 'Informe o nome completo.'),
  email: z.string().trim().email('Informe um e-mail válido.'),
  phone: z.string().trim().min(8, 'Informe um telefone ou WhatsApp válido.').optional().or(z.literal('')),
  message: z.string().trim().min(10, 'Descreva o contexto com mais detalhes.'),
  source: z.string().trim().min(2, 'Informe a origem do lead.'),
  company: z.string().trim().min(2).optional().or(z.literal('')),
  subject: z.string().trim().min(2).optional().or(z.literal('')),
  intent: z.string().trim().min(2).optional().or(z.literal('')),
  projectType: z.string().trim().min(2).optional().or(z.literal('')),
  budgetRange: z.string().trim().min(2).optional().or(z.literal('')),
})

export type LeadPayload = z.infer<typeof leadPayloadSchema>

export interface LeadRecord {
  id: string
  name: string
  email: string
  company: string | null
  phone: string | null
  subject: string | null
  intent: string | null
  projectType: string | null
  budgetRange: string | null
  message: string
  status: 'NEW' | 'READ' | 'REPLIED' | 'ARCHIVED'
  source: string | null
  createdAt: string
  updatedAt: string
}

const dataDir = join(process.cwd(), 'data')
const leadsPath = join(dataDir, 'leads.json')

function normalizeOptionalValue(value?: string) {
  const normalized = value?.trim()
  return normalized ? normalized : null
}

function serializeLead(record: {
  id: string
  name: string
  email: string
  company?: string | null
  phone?: string | null
  subject?: string | null
  intent?: string | null
  projectType?: string | null
  budgetRange?: string | null
  message: string
  status: 'NEW' | 'READ' | 'REPLIED' | 'ARCHIVED'
  source?: string | null
  createdAt: Date | string
  updatedAt: Date | string
}): LeadRecord {
  return {
    id: record.id,
    name: record.name,
    email: record.email,
    company: record.company ?? null,
    phone: record.phone ?? null,
    subject: record.subject ?? null,
    intent: record.intent ?? null,
    projectType: record.projectType ?? null,
    budgetRange: record.budgetRange ?? null,
    message: record.message,
    status: record.status,
    source: record.source ?? null,
    createdAt: typeof record.createdAt === 'string' ? record.createdAt : record.createdAt.toISOString(),
    updatedAt: typeof record.updatedAt === 'string' ? record.updatedAt : record.updatedAt.toISOString(),
  }
}

async function readFileLeads(): Promise<LeadRecord[]> {
  try {
    const content = await readFile(leadsPath, 'utf8')
    const parsed = JSON.parse(content) as LeadRecord[]
    return parsed.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  } catch {
    return []
  }
}

async function writeFileLeads(leads: LeadRecord[]) {
  await mkdir(dataDir, { recursive: true })
  await writeFile(leadsPath, JSON.stringify(leads, null, 2), 'utf8')
}

export async function listLeads(): Promise<LeadRecord[]> {
  if (prisma) {
    const leads = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return leads.map((lead) => serializeLead(lead))
  }

  return readFileLeads()
}

export async function createLead(payload: LeadPayload): Promise<LeadRecord> {
  const normalized = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    company: normalizeOptionalValue(payload.company),
    phone: normalizeOptionalValue(payload.phone),
    subject: normalizeOptionalValue(payload.subject),
    intent: normalizeOptionalValue(payload.intent),
    projectType: normalizeOptionalValue(payload.projectType),
    budgetRange: normalizeOptionalValue(payload.budgetRange),
    message: payload.message.trim(),
    source: payload.source.trim(),
  }

  if (prisma) {
    const lead = await prisma.contact.create({
      data: normalized,
    })

    return serializeLead(lead)
  }

  const now = new Date().toISOString()
  const lead = serializeLead({
    id: randomUUID(),
    ...normalized,
    status: 'NEW',
    createdAt: now,
    updatedAt: now,
  })

  const leads = await readFileLeads()
  await writeFileLeads([lead, ...leads])

  return lead
}
