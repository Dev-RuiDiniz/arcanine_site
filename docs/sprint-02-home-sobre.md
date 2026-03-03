# Sprint 2 - Home + Sobre (Conteudo Institucional)

Data: 3 de marco de 2026

## Objetivo da sprint

Publicar narrativa institucional e proposta de valor da ARCANINE com foco em conversao, alinhada ao PDF base da marca.

## Escopo executado

### 1. Home reestruturada conforme o PDF institucional

A pagina inicial foi reorganizada com os blocos:

- Hero
- O que fazemos
- Diferenciais
- Cases em destaque
- Processo de trabalho
- CTA final

Conteudo base alinhado ao documento `ARCANINE Tecnologia.pdf` (secoes de Home e posicionamento).

Arquivo principal:

- [`src/app/(site)/page.tsx`](../src/app/(site)/page.tsx)

### 2. Pagina Sobre com historia, missao, visao e valores

A pagina Sobre foi reestruturada com narrativa institucional:

- Bloco de abertura + "Nossa historia"
- Missao
- Visao
- Posicionamento
- Valores
- CTA final

Arquivo principal:

- [`src/app/(site)/about/page.tsx`](../src/app/(site)/about/page.tsx)

### 3. Blocos principais editaveis no admin (Home/Sobre)

Os campos do painel admin foram ampliados para cobrir os blocos institucionais da sprint:

- Home: hero, o que fazemos, diferenciais, cases, processo, CTA final e SEO
- Sobre: institucional, missao/visao/valores, CTA final e SEO

Arquivo:

- [`src/lib/admin-page-configs.ts`](../src/lib/admin-page-configs.ts)

### 4. Publicacao no site a partir dos blocos publicados

Foi criado helper server-side para ler configuracoes publicadas no admin (`published`) com fallback seguro para defaults.

Arquivo:

- [`src/lib/page-settings.ts`](../src/lib/page-settings.ts)

### 5. SEO on-page basico

Aplicado metadata por pagina em Home e Sobre:

- `title`
- `description`
- Hierarquia de headings (`h1` + secoes com `h2`)

Arquivos:

- [`src/app/(site)/page.tsx`](../src/app/(site)/page.tsx)
- [`src/app/(site)/about/page.tsx`](../src/app/(site)/about/page.tsx)

## Criterios de aceite

### Conteudo alinhado ao PDF e orientado a conversao

Atendido:

- Copy de Home e Sobre baseada no posicionamento, proposta de valor e estrutura de blocos do PDF institucional.
- CTAs de alto-intento em Hero e fechamento das paginas.

### Blocos principais editaveis no admin

Atendido:

- Novos campos em `admin-page-configs` para Home/Sobre.
- Public pages consumindo blocos publicados via helper server-side.

### Lighthouse mobile/desktop sem queda relevante em performance

Atendido com medicao local em ambiente de producao (`next start`):

- Mobile (Home): Performance 73, Accessibility 94, Best Practices 100, SEO 100
- Desktop (Home): Performance 99, Accessibility 94, Best Practices 100, SEO 100

Relatorios gerados:

- `lighthouse-mobile-prod.json`
- `lighthouse-desktop-prod.json`

Observacao: o CLI do Lighthouse finaliza com erro de limpeza de pasta temporaria no Windows (`EBUSY`), mas os relatórios JSON sao gerados com sucesso e foram usados na validacao.

## Validacao tecnica

Comandos executados:

- `pnpm typecheck` -> OK
- `pnpm lint` -> OK (warnings preexistentes, sem erro bloqueante)
- `pnpm build` -> OK

## Resultado da Sprint 2

- Home e Sobre publicadas com narrativa institucional coerente com o material de marca.
- Painel admin preparado para evolucao de conteudo institucional sem alterar codigo.
- SEO on-page basico aplicado nas duas paginas.
- Projeto validado com build e medicao de performance em ambiente local.
