import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ContactSupportPage } from '@/components/sections/contact-support-page'

export const metadata: Metadata = {
  title: 'Contato | ARCANINE Tecnologia',
  description:
    'Entre em contato com a ARCANINE para tirar dúvidas, solicitar informações ou iniciar uma conversa sobre o seu desafio.',
}

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactSupportPage />
    </Suspense>
  )
}
