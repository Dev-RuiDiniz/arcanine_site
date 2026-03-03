# Fluxos de Conversao - Contato, Solicitacao de Orcamento e Agendamento de Reuniao

Data: 3 de marco de 2026

## Objetivo

Separar os fluxos de captacao para que cada pagina tenha proposta, copy e destino claros:

- Contato geral: canal institucional e duvidas gerais
- Solicitar orcamento: abertura comercial com foco em escopo/proposta
- Agendar reuniao: diagnostico tecnico e alinhamento de proximo passo

## Implementacao

### 1. Componente base compartilhado

Foi criado um template unificado para os tres fluxos:

- [`src/components/sections/contact-lead-page.tsx`](../src/components/sections/contact-lead-page.tsx)

Esse componente permite personalizar:

- selo de objetivo
- titulo e descricao do hero
- titulo do formulario
- texto do botao de envio
- mensagem de sucesso
- intent padrao (`orcamento` ou `reuniao-tecnica`)

### 2. Rotas publicas

- [`/contact`](../src/app/(site)/contact/page.tsx)
  - objetivo: contato geral
  - copy institucional de primeiro contato

- [`/solicitar-orcamento`](../src/app/(site)/solicitar-orcamento/page.tsx)
  - objetivo: pedido de proposta
  - intent padrao: `orcamento`

- [`/agendar-reuniao`](../src/app/(site)/agendar-reuniao/page.tsx)
  - objetivo: reuniao tecnica
  - intent padrao: `reuniao-tecnica`

### 3. Atualizacao de CTAs e links

Os pontos de conversao foram atualizados para rotas dedicadas:

- Orcamento -> `/solicitar-orcamento`
- Reuniao tecnica -> `/agendar-reuniao`

Arquivos atualizados:

- [`src/lib/site-config.ts`](../src/lib/site-config.ts)
- [`src/lib/admin-page-configs.ts`](../src/lib/admin-page-configs.ts)
- [`src/app/(site)/services/page.tsx`](../src/app/(site)/services/page.tsx)
- [`src/app/(site)/services/[slug]/page.tsx`](../src/app/(site)/services/[slug]/page.tsx)
- [`src/app/(site)/about/page.tsx`](../src/app/(site)/about/page.tsx)

## Validacao

Comandos executados:

- `pnpm typecheck` -> OK
- `pnpm build` -> OK

Rotas verificadas com resposta `200` em ambiente local:

- `/contact`
- `/solicitar-orcamento`
- `/agendar-reuniao`

## Resultado

Fluxos de conversao agora estao separados por objetivo de negocio, com copy e intencao coerentes em cada pagina, mantendo consistencia visual e reaproveitamento de base tecnica.
