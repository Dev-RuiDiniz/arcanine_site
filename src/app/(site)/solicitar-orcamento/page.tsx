import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ContactLeadPage } from '@/components/sections/contact-lead-page'

export const metadata: Metadata = {
  title: 'Solicitar Orcamento | ARCANINE Tecnologia',
  description:
    'Solicite um orcamento tecnico para sistemas sob medida, automacoes e integracoes com foco em resultado.',
}

export default function RequestQuotePage() {
  return (
    <Suspense fallback={null}>
      <ContactLeadPage
        objectiveLabel="Solicitar orcamento"
        defaultIntent="orcamento"
        heroTitle="Solicite seu orcamento tecnico"
        heroDescription="Compartilhe o contexto do seu projeto para receber uma proposta alinhada a escopo, prazo e impacto esperado."
        formTitle="Formulário de orçamento"
        submitLabel="Solicitar orcamento"
        successTitle="Orcamento solicitado"
        successMessage="Recebemos seu briefing. Em breve enviaremos os proximos passos para estruturar sua proposta."
      />
    </Suspense>
  )
}
