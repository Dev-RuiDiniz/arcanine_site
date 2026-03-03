import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ContactLeadPage } from '@/components/sections/contact-lead-page'

export const metadata: Metadata = {
  title: 'Agendar Reuniao Tecnica | ARCANINE Tecnologia',
  description:
    'Agende uma reuniao tecnica para diagnosticar seu desafio, alinhar escopo e definir os proximos passos com a ARCANINE.',
}

export default function ScheduleMeetingPage() {
  return (
    <Suspense fallback={null}>
      <ContactLeadPage
        objectiveLabel="Reuniao tecnica"
        defaultIntent="reuniao-tecnica"
        heroTitle="Agende sua reuniao tecnica"
        heroDescription="Marque uma conversa com nosso time para analisar seu contexto atual e desenhar o melhor caminho de implementacao."
        formTitle="Solicitar reuniao tecnica"
        submitLabel="Agendar reuniao"
        successTitle="Reuniao solicitada"
        successMessage="Pedido de reuniao recebido. Entraremos em contato para confirmar agenda e pauta."
      />
    </Suspense>
  )
}
