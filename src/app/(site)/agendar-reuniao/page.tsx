import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ContactLeadPage } from '@/components/sections/contact-lead-page'

export const metadata: Metadata = {
  title: 'Agendar Reunião Técnica | ARCANINE Tecnologia',
  description:
    'Agende uma reunião técnica para diagnosticar seu desafio, alinhar escopo e definir os próximos passos com a ARCANINE.',
}

export default function ScheduleMeetingPage() {
  return (
    <Suspense fallback={null}>
      <ContactLeadPage
        objectiveLabel="Reuniao tecnica"
        defaultIntent="reuniao-tecnica"
        heroTitle="Agende sua reunião técnica"
        heroDescription="Marque uma conversa com nosso time para analisar seu contexto atual e desenhar o melhor caminho de implementação."
        formTitle="Solicitar reunião técnica"
        submitLabel="Agendar reunião"
        successTitle="Reunião solicitada"
        successMessage="Pedido de reunião recebido. Entraremos em contato para confirmar agenda e pauta."
      />
    </Suspense>
  )
}
