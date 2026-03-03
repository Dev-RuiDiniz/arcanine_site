/*
Arquivo: src/app/(site)/cookies/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

export default function CookiesPage() {
  return (
    <section className="bg-[#F7F2ED] min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h1 className="font-cormorant text-3xl lg:text-5xl text-stone-900">Politica de Cookies</h1>
        <p className="mt-3 font-inter text-sm text-stone-600">Ultima atualizacao: 2 de marco de 2026</p>

        <div className="mt-8 space-y-6 font-inter text-sm text-stone-700 leading-relaxed">
          <p>
            Utilizamos cookies essenciais para funcionamento do site e cookies analiticos para medir performance e melhorar experiencia.
          </p>
          <p>
            Voce pode aceitar todos os cookies, manter apenas essenciais ou revisar preferencias no banner de consentimento.
          </p>
          <p>
            Nenhum cookie e usado para venda de dados pessoais. A configuracao pode ser revisada a qualquer momento no navegador.
          </p>
        </div>
      </div>
    </section>
  )
}