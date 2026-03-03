/*
Arquivo: src/app/(site)/privacy/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import { siteConfig } from '@/lib/site-config'

export default function PrivacyPage() {
  return (
    <section className="bg-[#F7F2ED] min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h1 className="font-cormorant text-3xl lg:text-5xl text-stone-900">Politica de Privacidade</h1>
        <p className="mt-3 font-inter text-sm text-stone-600">Ultima atualizacao: 2 de marco de 2026</p>

        <div className="mt-8 space-y-6 font-inter text-sm text-stone-700 leading-relaxed">
          <p>
            A {siteConfig.brand.name} coleta apenas dados necessarios para contato comercial, qualificacao de projetos e operacao do site.
            O tratamento e realizado com base legal adequada e controles de seguranca proporcionais ao risco.
          </p>
          <p>
            Dados enviados pelo formulario podem incluir nome, empresa, e-mail, WhatsApp, tipo de projeto e descricao do desafio.
            Essas informacoes sao usadas para retorno tecnico-comercial e nao sao vendidas para terceiros.
          </p>
          <p>
            Solicitacoes de acesso, correcao ou exclusao de dados devem ser enviadas para {siteConfig.contact.privacyEmail}.
            Nosso prazo padrao de resposta e de ate 15 dias uteis.
          </p>
        </div>
      </div>
    </section>
  )
}