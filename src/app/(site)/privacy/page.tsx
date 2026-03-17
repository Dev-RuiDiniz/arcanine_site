/*
Arquivo: src/app/(site)/privacy/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import { siteConfig } from '@/lib/site-config'

export default function PrivacyPage() {
  return (
    <section className="section-shell min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <span className="eyebrow font-inter text-[11px]">Legal</span>
        <h1 className="mt-4 font-cormorant text-3xl lg:text-5xl text-slate-950">Política de Privacidade</h1>
        <p className="mt-3 font-inter text-sm text-slate-600">Última atualização: 2 de março de 2026</p>

        <div className="mt-8 panel-shell space-y-6 p-6 font-inter text-sm text-slate-700 leading-relaxed">
          <p>
            A {siteConfig.brand.name} coleta apenas dados necessários para contato comercial, qualificação de projetos e operação do site.
            O tratamento é realizado com base legal adequada e controles de segurança proporcionais ao risco.
          </p>
          <p>
            Dados enviados pelo formulário podem incluir nome, empresa, e-mail, WhatsApp, tipo de projeto e descrição do desafio.
            Essas informações são usadas para retorno técnico-comercial e não são vendidas para terceiros.
          </p>
          <p>
            Solicitações de acesso, correção ou exclusão de dados devem ser enviadas para {siteConfig.contact.privacyEmail}.
            Nosso prazo padrão de resposta é de até 15 dias úteis.
          </p>
        </div>
      </div>
    </section>
  )
}
