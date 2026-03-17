import { NextResponse } from 'next/server'
import { ZodError, z } from 'zod'
import { ADMIN_ROLES, requireApiRole } from '@/lib/authz'
import { leadStatusSchema, updateLeadStatus } from '@/lib/leads'

const updateLeadSchema = z.object({
  status: leadStatusSchema,
})

interface RouteContext {
  params: Promise<{ id: string }>
}

export const runtime = 'nodejs'

export async function PATCH(request: Request, context: RouteContext) {
  const auth = await requireApiRole(ADMIN_ROLES)
  if ('error' in auth) {
    return auth.error
  }

  try {
    const { id } = await context.params
    const body = await request.json()
    const payload = updateLeadSchema.parse(body)
    const lead = await updateLeadStatus(id, payload.status)

    return NextResponse.json({ success: true, data: lead })
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, error: error.issues[0]?.message || 'Dados inválidos.' },
        { status: 400 }
      )
    }

    if (error instanceof Error && error.message === 'Lead not found.') {
      return NextResponse.json({ success: false, error: error.message }, { status: 404 })
    }

    console.error('Failed to update lead status:', error)
    return NextResponse.json(
      { success: false, error: 'Não foi possível atualizar o lead.' },
      { status: 500 }
    )
  }
}
