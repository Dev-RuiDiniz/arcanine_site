/*
Arquivo: src/app/(site)/terms/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import { siteConfig } from '@/lib/site-config'

export default function TermsPage() {
  return (
    <section className="section-shell min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <span className="eyebrow font-inter text-[11px]">Legal</span>
        <h1 className="mt-4 font-cormorant text-3xl lg:text-5xl text-slate-950">Termos de Uso</h1>
        <p className="mt-3 font-inter text-sm text-slate-600">Última atualização: 2 de março de 2026</p>

        <div className="mt-8 panel-shell space-y-6 p-6 font-inter text-sm text-slate-700 leading-relaxed">
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
  )
}
