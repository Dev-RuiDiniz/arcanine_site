/*
Arquivo: src/app/(site)/cookies/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import { mergePublishedPageContent } from '@/lib/page-content'

const cookiesDefaults = {
  cookies_title: 'Política de Cookies',
  cookies_last_update: '17 de março de 2026',
  cookies_body:
    'Utilizamos apenas cookies essenciais para funcionamento do site e armazenamento local de preferências de consentimento. Se ferramentas analíticas ou de marketing forem ativadas no futuro, esta política e o banner serão atualizados para refletir esse uso.',
}

export default async function CookiesPage() {
  const content = await mergePublishedPageContent('cookies', cookiesDefaults)

  return (
    <>
      <section className="section-shell-dark premium-grid pt-28 pb-10 lg:pt-36 lg:pb-12">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <span className="section-kicker text-brand-cyan">Legal</span>
          <h1 className="mt-5 font-cormorant text-[2.6rem] leading-[0.98] text-white lg:text-[4rem]">
            {content.cookies_title}
          </h1>
          <p className="mt-4 font-inter text-sm leading-relaxed text-slate-300">
            Última atualização: {content.cookies_last_update}
          </p>
        </div>
      </section>

      <section className="section-shell min-h-screen py-12 lg:py-16">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <div className="panel-shell rounded-[2rem] space-y-6 p-6 font-inter text-sm leading-relaxed text-slate-700 lg:p-8">
            <p>{content.cookies_body}</p>
            <p>
              Hoje o banner grava apenas a preferência local de consentimento no navegador do visitante para respeitar a
              escolha feita no site.
            </p>
            <p>
              Se ferramentas analíticas ou de marketing forem habilitadas, a política e os controles de consentimento
              serão expandidos antes da ativação em produção.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
