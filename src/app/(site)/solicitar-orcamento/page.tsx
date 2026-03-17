import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ContactLeadPage } from '@/components/sections/contact-lead-page'

export const metadata: Metadata = {
  title: 'Solicitar Orçamento | ARCANINE Tecnologia',
  description:
    'Solicite um orçamento técnico para sistemas sob medida, automações e integrações com foco em resultado.',
}

export default function RequestQuotePage() {
  return (
    <Suspense fallback={null}>
      <ContactLeadPage
        objectiveLabel="Solicitar orcamento"
        defaultIntent="orcamento"
        heroTitle="Solicite seu orçamento técnico"
        heroDescription="Compartilhe o contexto do seu projeto para receber uma proposta alinhada a escopo, prazo e impacto esperado."
        formTitle="Formulário de orçamento"
        submitLabel="Solicitar orçamento"
        successTitle="Orçamento solicitado"
        successMessage="Recebemos seu briefing. Em breve enviaremos os próximos passos para estruturar sua proposta."
      />
    </Suspense>
  )
}
