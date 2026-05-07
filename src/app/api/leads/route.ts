import { NextResponse } from 'next/server'
import { ZodError } from 'zod'
import { requireApiRole, ADMIN_ROLES } from '@/lib/authz'
import { createLead, leadPayloadSchema, listLeads } from '@/lib/leads'
import { checkRateLimit, getClientIp } from '@/lib/rate-limit'

export const runtime = 'nodejs'

const LEAD_RATE_LIMIT = {
  limit: 5,
  windowMs: 10 * 60 * 1000,
}

export async function GET() {
  const auth = await requireApiRole(ADMIN_ROLES)
  if ('error' in auth) {
    return auth.error
  }

  try {
    const leads = await listLeads()
    return NextResponse.json({ success: true, data: leads })
  } catch (error) {
    console.error('Failed to list leads:', error)
    return NextResponse.json({ success: false, error: 'Não foi possível carregar os leads.' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const clientIp = getClientIp(request)
  const rateLimit = checkRateLimit({
    key: `leads:${clientIp}`,
    limit: LEAD_RATE_LIMIT.limit,
    windowMs: LEAD_RATE_LIMIT.windowMs,
  })

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { success: false, error: 'Muitas tentativas. Tente novamente em alguns minutos.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(rateLimit.retryAfterSeconds),
          'X-RateLimit-Limit': String(LEAD_RATE_LIMIT.limit),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': String(Math.ceil(rateLimit.resetAt / 1000)),
        },
      }
    )
  }

  try {
    const body = await request.json()
    const payload = leadPayloadSchema.parse(body)
    const lead = await createLead(payload)

    return NextResponse.json(
      { success: true, data: lead },
      {
        status: 201,
        headers: {
          'X-RateLimit-Limit': String(LEAD_RATE_LIMIT.limit),
          'X-RateLimit-Remaining': String(rateLimit.remaining),
          'X-RateLimit-Reset': String(Math.ceil(rateLimit.resetAt / 1000)),
        },
      }
    )
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, error: error.issues[0]?.message || 'Dados inválidos.' },
        { status: 400 }
      )
    }

    console.error('Failed to create lead:', error)
    return NextResponse.json({ success: false, error: 'Não foi possível registrar o lead.' }, { status: 500 })
  }
}
