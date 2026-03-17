# Operação do Admin e Leads

## Editor de páginas

As páginas editáveis usam o endpoint `GET/PUT/POST /api/admin/page-settings`.

Persistência:

- arquivo local: `data/admin-page-settings.json`

Comportamento:

- `PUT` salva rascunho
- `POST` com `action=publish` promove o rascunho para publicação

Rotas principais do editor:

- `/admin/pages/home`
- `/admin/pages/services`
- `/admin/pages/projects`
- `/admin/pages/about`
- `/admin/pages/privacy`
- `/admin/pages/terms`
- `/admin/pages/cookies`
- `/admin/pages/ctas`

## Leads

Os formulários públicos usam `POST /api/leads`.

Origens atuais:

- `contact`
- `solicitar-orcamento`
- `agendar-reuniao`

Campos adicionais por contexto:

- contato geral:
  - `subject`
- orçamento:
  - `company`
  - `projectType`
  - `budgetRange`
  - `intent=orcamento`
- reunião técnica:
  - `company`
  - `projectType`
  - `intent=reuniao-tecnica`

## Persistência dos leads

Prioridade de armazenamento:

1. Prisma `Contact`, quando `DATABASE_URL` estiver configurada
2. arquivo local `data/leads.json`, quando não houver banco configurado

Isso permite desenvolvimento local e verificação sem depender de banco ativo.

## Leitura no painel

`/admin/contacts` consome `GET /api/leads` e mostra:

- total de leads
- novos leads
- pedidos de orçamento
- pedidos de reunião técnica
- detalhes completos por lead

## Observações operacionais

- Em produção, aplique migration compatível com os novos campos de `Contact`.
- Em desenvolvimento sem banco, o conteúdo de `data/leads.json` pode ser removido manualmente quando necessário.
- O painel não atualiza status dos leads automaticamente; o foco atual é captura e consulta.
