import { NextResponse } from 'next/server'
import { ZodError } from 'zod'
import { createLead, leadPayloadSchema, listLeads } from '@/lib/leads'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const leads = await listLeads()
    return NextResponse.json({ success: true, data: leads })
  } catch (error) {
    console.error('Failed to list leads:', error)
    return NextResponse.json({ success: false, error: 'Não foi possível carregar os leads.' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const payload = leadPayloadSchema.parse(body)
    const lead = await createLead(payload)

    return NextResponse.json({ success: true, data: lead }, { status: 201 })
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
