import { NextRequest, NextResponse } from 'next/server'
import { EDITOR_ROLES, requireApiRole } from '@/lib/authz'
import { getPageContent, publishPageDraft, savePageDraft } from '@/lib/page-content'

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  const auth = await requireApiRole(EDITOR_ROLES)
  if ('error' in auth) {
    return auth.error
  }

  const pageId = request.nextUrl.searchParams.get('pageId')
  if (!pageId) {
    return NextResponse.json({ error: 'pageId is required.' }, { status: 400 })
  }

  const entry = await getPageContent(pageId)

  return NextResponse.json({
    pageId,
    values: entry.draft,
    draft: entry.draft,
    published: entry.published,
    updatedAt: entry.updatedAt,
    publishedAt: entry.publishedAt,
  })
}

export async function PUT(request: NextRequest) {
  const auth = await requireApiRole(EDITOR_ROLES)
  if ('error' in auth) {
    return auth.error
  }

  try {
    const body = await request.json()
    const pageId = body?.pageId
    const values = body?.values

    if (!pageId || typeof pageId !== 'string') {
      return NextResponse.json({ error: 'pageId is required.' }, { status: 400 })
    }

    if (!values || typeof values !== 'object') {
      return NextResponse.json({ error: 'values object is required.' }, { status: 400 })
    }

    await savePageDraft(pageId, values as Record<string, string>, auth.session.user.id)

    return NextResponse.json({ success: true, pageId })
  } catch (error) {
    console.error('Failed to update page settings:', error)
    return NextResponse.json({ error: 'Failed to save page settings.' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const auth = await requireApiRole(EDITOR_ROLES)
  if ('error' in auth) {
    return auth.error
  }

  try {
    const body = await request.json()
    const pageId = body?.pageId
    const action = body?.action

    if (!pageId || typeof pageId !== 'string') {
      return NextResponse.json({ error: 'pageId is required.' }, { status: 400 })
    }

    if (action !== 'publish') {
      return NextResponse.json({ error: 'Unsupported action.' }, { status: 400 })
    }

    const entry = await publishPageDraft(pageId, auth.session.user.id)

    return NextResponse.json({
      success: true,
      pageId,
      publishedAt: entry.publishedAt,
    })
  } catch (error) {
    console.error('Failed to publish page settings:', error)
    return NextResponse.json({ error: 'Failed to publish page settings.' }, { status: 500 })
  }
}
