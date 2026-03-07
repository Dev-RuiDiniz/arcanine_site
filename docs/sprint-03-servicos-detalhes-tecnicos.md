# Sprint 3 - Servicos e Detalhes Tecnicos

Data: 7 de marco de 2026

## Objetivo da sprint

Transformar a secao de servicos em uma oferta comercial clara, tecnica e escalavel, com detalhamento por servico e foco em conversao.

## Escopo executado

### 1. Catalogo de servicos alinhado ao PDF

A estrutura de conteudo foi atualizada em [`src/lib/site-content/services.ts`](../src/lib/site-content/services.ts) com os 6 servicos definidos:

- Sistemas Web Personalizados
- Sistemas Exclusivos
- Sites Premium
- E-commerce
- Automacao + Integracoes com Hardware
- IA e Automacoes Comerciais

Cada servico agora possui campos preparados para expansao:

- `applications`
- `benefits`
- `highlights`
- `deliverables`
- `kpis`
- `cta` (titulo, descricao e dois caminhos de conversao)

### 2. Pagina `/services` com cards comerciais e processo em 7 etapas

Na pagina [`src/app/(site)/services/page.tsx`](../src/app/(site)/services/page.tsx):

- Cards atualizados para os 6 servicos com link para detalhe por slug.
- Copy orientada a contexto tecnico/comercial.
- Secao "Processo de trabalho em 7 etapas" implementada via `serviceProcessSteps` (conteudo centralizado em `services.ts`).

### 3. Paginas de detalhe por slug com aplicacoes, beneficios e CTA tecnico

A rota dinamica [`src/app/(site)/services/[slug]/page.tsx`](../src/app/(site)/services/[slug]/page.tsx) foi reestruturada para:

- Renderizacao por slug com `generateStaticParams`.
- SEO por servico com `generateMetadata`.
- Tratamento de slug invalido com `notFound()`.
- Secoes de:
  - Aplicacoes
  - Beneficios
  - Escopo de entrega
  - Foco tecnico e KPIs
- CTA tecnico funcional com duas opcoes:
  - `Agendar reuniao tecnica`
  - `Solicitar orcamento`

### 4. Consistencia da Home

A secao de preview de servicos na home foi alinhada para listar todos os servicos em:

- [`src/components/sections/services-preview.tsx`](../src/components/sections/services-preview.tsx)

## Criterios de aceite x validacao

- Todos os servicos com pagina propria e CTA funcional: atendido.
- Conteudo sem linguagem de interiores/design: atendido.
- Estrutura preparada para expansao de novos servicos: atendido (modelo unificado em `services.ts`).

## Validacao tecnica local

Comandos executados:

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run dev` (subida local para verificacao de inicializacao)
