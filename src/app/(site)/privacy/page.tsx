/*
Arquivo: src/app/(site)/privacy/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import { siteConfig } from '@/lib/site-config'

export default function PrivacyPage() {
  return (
    <>
      <section className="section-shell-dark premium-grid pt-28 pb-10 lg:pt-36 lg:pb-12">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <span className="section-kicker text-brand-cyan">Legal</span>
          <h1 className="mt-5 font-cormorant text-[2.6rem] leading-[0.98] text-white lg:text-[4rem]">
            Política de Privacidade
          </h1>
          <p className="mt-4 font-inter text-sm leading-relaxed text-slate-300">
            Última atualização: 2 de março de 2026
          </p>
        </div>
      </section>

      <section className="section-shell min-h-screen py-12 lg:py-16">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <div className="panel-shell rounded-[2rem] space-y-6 p-6 font-inter text-sm leading-relaxed text-slate-700 lg:p-8">
            <p>
              A {siteConfig.brand.name} coleta apenas dados necessários para contato comercial, qualificação de projetos
              e operação do site. O tratamento é realizado com base legal adequada e controles de segurança proporcionais ao risco.
            </p>
            <p>
              Dados enviados pelo formulário podem incluir nome, empresa, e-mail, WhatsApp, tipo de projeto e descrição do
              desafio. Essas informações são usadas para retorno técnico-comercial e não são vendidas para terceiros.
            </p>
            <p>
              Solicitações de acesso, correção ou exclusão de dados devem ser enviadas para {siteConfig.contact.privacyEmail}.
              Nosso prazo padrão de resposta é de até 15 dias úteis.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
