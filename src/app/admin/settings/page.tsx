import { SettingsPage } from '@/components/admin/settings-page'
import { requireAdminPageAccess } from '@/lib/authz'

export default async function AdminSettingsPage() {
  await requireAdminPageAccess()

  return <SettingsPage />
}
