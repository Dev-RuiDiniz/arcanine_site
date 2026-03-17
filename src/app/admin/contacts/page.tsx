import { ContactsPage } from '@/components/admin/contacts-page'
import { requireAdminPageAccess } from '@/lib/authz'

export default async function AdminContactsPage() {
  await requireAdminPageAccess()

  return <ContactsPage />
}
