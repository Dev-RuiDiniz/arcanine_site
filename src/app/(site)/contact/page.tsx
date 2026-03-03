import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ContactLeadPage } from '@/components/sections/contact-lead-page'

export const metadata: Metadata = {
  title: 'Contato | ARCANINE Tecnologia',
  description:
    'Entre em contato com a ARCANINE para tirar duvidas, solicitar informacoes ou iniciar uma conversa sobre seu desafio.',
}

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactLeadPage
        objectiveLabel="Contato geral"
        heroTitle="Fale com a ARCANINE"
        heroDescription="Use este canal para duvidas gerais, informacoes institucionais e primeiro contato com nosso time."
        formTitle="Enviar mensagem de contato"
        submitLabel="Enviar contato"
        successTitle="Contato recebido"
        successMessage="Obrigado pelo contato. Nossa equipe respondera em breve."
      />
    </Suspense>
  )
}
