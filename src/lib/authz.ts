import type { Role } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'
import { authOptions } from '@/lib/auth'

export const EDITOR_ROLES: Role[] = ['ADMIN', 'EDITOR']
export const ADMIN_ROLES: Role[] = ['ADMIN']

export function hasRequiredRole(
  role: Role | null | undefined,
  allowedRoles: readonly Role[]
) {
  return !!role && allowedRoles.includes(role)
}

export async function getAuthSession() {
  return getServerSession(authOptions)
}

export async function requireEditorPageAccess() {
  const session = await getAuthSession()

  if (!session?.user) {
    redirect('/login')
  }

  if (!hasRequiredRole(session.user.role, EDITOR_ROLES)) {
    redirect('/login')
  }

  return session
}

export async function requireAdminPageAccess() {
  const session = await requireEditorPageAccess()

  if (!hasRequiredRole(session.user.role, ADMIN_ROLES)) {
    redirect('/admin')
  }

  return session
}

export async function requireApiRole(allowedRoles: readonly Role[]) {
  const session = await getAuthSession()

  if (!session?.user) {
    return {
      error: NextResponse.json(
        { success: false, error: 'Authentication required.' },
        { status: 401 }
      ),
    }
  }

  if (!hasRequiredRole(session.user.role, allowedRoles)) {
    return {
      error: NextResponse.json(
        { success: false, error: 'You do not have permission to perform this action.' },
        { status: 403 }
      ),
    }
  }

  return { session }
}
