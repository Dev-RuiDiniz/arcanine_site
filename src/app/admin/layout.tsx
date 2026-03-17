import { AdminShell } from '@/components/admin/admin-shell'
import { requireEditorPageAccess } from '@/lib/authz'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  await requireEditorPageAccess()

  return <AdminShell>{children}</AdminShell>
}
