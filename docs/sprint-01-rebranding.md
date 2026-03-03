# Sprint 1 - Fundacao de Marca e Rebranding

Data: 2 de marco de 2026

## Objetivo da sprint

Remover identidade RAIZ e implantar base visual/textual ARCANINE, mantendo navegacao e estrutura tecnica do projeto.

## Escopo executado

### 1. Rebranding global (nome, metadados, contatos e links)

- Metadados globais centralizados em [`src/lib/site-config.ts`](../src/lib/site-config.ts).
- `title`, `description`, OG/Twitter e autores atualizados no [`src/app/layout.tsx`](../src/app/layout.tsx).
- E-mails, WhatsApp, cidade e redes sociais padronizados via `siteConfig` e aplicados em:
  - [`src/components/layout/footer.tsx`](../src/components/layout/footer.tsx)
  - [`src/components/ui/conversion-ctas.tsx`](../src/components/ui/conversion-ctas.tsx)
  - [`src/components/ui/floating-chat.tsx`](../src/components/ui/floating-chat.tsx)
  - [`src/app/(site)/contact/page.tsx`](../src/app/(site)/contact/page.tsx)
- `auth` admin alinhado para `admin@arcanine.tech` em [`src/lib/auth.ts`](../src/lib/auth.ts).
- Perfil Instagram default do Apify ajustado para `arcanine.tecnologia` em [`src/lib/apify.ts`](../src/lib/apify.ts) e `.env.example`.

### 2. Header/Footer e navegacao B2B tech

- Header com navegacao institucional atualizada e rota de blog:
  - Inicio, Servicos, Cases, Sobre, Blog, Contato.
  - Arquivo: [`src/components/layout/header.tsx`](../src/components/layout/header.tsx)
- Footer atualizado com:
  - Copy B2B tech
  - Navegacao com Blog
  - Links legais: Privacy, Terms, Cookies
  - Arquivo: [`src/components/layout/footer.tsx`](../src/components/layout/footer.tsx)

### 3. Tom de voz tecnico/acessivel/direto em blocos globais

- Ajustes de copy e consistencia institucional em:
  - [`src/components/sections/services-preview.tsx`](../src/components/sections/services-preview.tsx)
  - [`src/components/sections/home-gallery.tsx`](../src/components/sections/home-gallery.tsx)
  - [`src/components/sections/instagram-feed.tsx`](../src/components/sections/instagram-feed.tsx)
  - [`src/app/(site)/page.tsx`](../src/app/(site)/page.tsx)

### 4. CTAs padronizados e reutilizaveis

- Centralizacao da configuracao e rotas de conversao em [`src/lib/site-config.ts`](../src/lib/site-config.ts).
- CTAs globais padronizados:
  - Solicitar Orcamento
  - Agendar Reuniao Tecnica
  - Falar no WhatsApp
- Aplicados em Header, Footer, Hero e componentes reutilizaveis.

### 5. Rotas publicas do mapeamento estrutural

Rotas mantidas e adaptadas para contexto ARCANINE:

- `/` (home)
- `/about`
- `/services`
- `/services/[slug]`
- `/projects`
- `/projects/[slug]`
- `/contact`

Novas rotas criadas:

- `/blog`
- `/blog/[slug]`
- `/privacy`
- `/terms`
- `/cookies`

Arquivos de conteudo estruturados:

- [`src/lib/site-content/services.ts`](../src/lib/site-content/services.ts)
- [`src/lib/site-content/projects.ts`](../src/lib/site-content/projects.ts)
- [`src/lib/site-content/blog.ts`](../src/lib/site-content/blog.ts)

### 6. Admin mantido e ampliado

- Branding ARCANINE no sidebar: [`src/components/admin/sidebar.tsx`](../src/components/admin/sidebar.tsx)
- `pageId` ampliado no editor para:
  - `blog`, `terms`, `cookies`, `ctas`
  - arquivo: [`src/lib/admin-page-configs.ts`](../src/lib/admin-page-configs.ts)
- Novos editores admin:
  - [`src/app/admin/pages/blog/page.tsx`](../src/app/admin/pages/blog/page.tsx)
  - [`src/app/admin/pages/terms/page.tsx`](../src/app/admin/pages/terms/page.tsx)
  - [`src/app/admin/pages/cookies/page.tsx`](../src/app/admin/pages/cookies/page.tsx)
  - [`src/app/admin/pages/ctas/page.tsx`](../src/app/admin/pages/ctas/page.tsx)
- Lista de paginas admin atualizada em [`src/app/admin/pages/page.tsx`](../src/app/admin/pages/page.tsx).

## Resultado da Sprint 1

- Identidade RAIZ removida dos textos e referencias institucionais no frontend publico.
- Base ARCANINE consolidada para marca, tom e conversao.
- Navegacao publica preservada e expandida com blog + paginas legais.
- Admin preparado para evolucao de blog, legais e configuracoes de CTA.

## Validacao tecnica

Tentativas de validacao local:

- `pnpm lint` e `pnpm typecheck`: indisponivel (pnpm nao instalado no ambiente).
- `npm install`: bloqueado por versao de Node atual `22.11.0`.
- Prisma 7 exige Node `22.12+` (ou `20.19+` / `24+`).

Sem upgrade de Node no ambiente, nao foi possivel concluir lint/typecheck nesta sprint.