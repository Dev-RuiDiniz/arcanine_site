/*
Arquivo: src/app/(site)/cookies/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

export default function CookiesPage() {
  return (
    <section className="section-shell min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <span className="eyebrow font-inter text-[11px]">Legal</span>
        <h1 className="mt-4 font-cormorant text-3xl lg:text-5xl text-slate-950">Política de Cookies</h1>
        <p className="mt-3 font-inter text-sm text-slate-600">Última atualização: 2 de março de 2026</p>

        <div className="mt-8 panel-shell space-y-6 p-6 font-inter text-sm text-slate-700 leading-relaxed">
          <p>
            Utilizamos cookies essenciais para funcionamento do site e cookies analíticos para medir performance e melhorar experiência.
          </p>
          <p>
            Você pode aceitar todos os cookies, manter apenas os essenciais ou revisar preferências no banner de consentimento.
          </p>
          <p>
            Nenhum cookie é usado para venda de dados pessoais. A configuração pode ser revisada a qualquer momento no navegador.
          </p>
        </div>
      </div>
    </section>
  )
}
