/*
Arquivo: src/app/(site)/terms/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import { siteConfig } from '@/lib/site-config'

export default function TermsPage() {
  return (
    <section className="bg-[#F7F2ED] min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h1 className="font-cormorant text-3xl lg:text-5xl text-stone-900">Termos de Uso</h1>
        <p className="mt-3 font-inter text-sm text-stone-600">Ultima atualizacao: 2 de marco de 2026</p>

        <div className="mt-8 space-y-6 font-inter text-sm text-stone-700 leading-relaxed">
          <p>
            O uso deste site implica concordancia com estes termos. O conteudo publicado e informativo e pode ser atualizado sem aviso previo.
          </p>
          <p>
            Propostas comerciais e servicos da {siteConfig.brand.name} sao formalizados somente por contrato especifico entre as partes.
          </p>
          <p>
            E proibido reproduzir conteudo integral deste site para fins comerciais sem autorizacao expressa.
          </p>
        </div>
      </div>
    </section>
  )
}