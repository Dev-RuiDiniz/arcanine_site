/*
Arquivo: src/app/(site)/terms/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import { siteConfig } from '@/lib/site-config'

export default function TermsPage() {
  return (
    <>
      <section className="section-shell-dark premium-grid pt-28 pb-10 lg:pt-36 lg:pb-12">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <span className="section-kicker text-brand-cyan">Legal</span>
          <h1 className="mt-5 font-cormorant text-[2.6rem] leading-[0.98] text-white lg:text-[4rem]">
            Termos de Uso
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
              O uso deste site implica concordância com estes termos. O conteúdo publicado é informativo e pode ser atualizado sem aviso prévio.
            </p>
            <p>
              Propostas comerciais e serviços da {siteConfig.brand.name} são formalizados somente por contrato específico entre as partes.
            </p>
            <p>
              É proibido reproduzir conteúdo integral deste site para fins comerciais sem autorização expressa.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
