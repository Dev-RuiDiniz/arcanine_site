# Operação do Admin e Leads

## Editor de páginas

As páginas editáveis usam o endpoint `GET/PUT/POST /api/admin/page-settings`.

Persistência:

- com `DATABASE_URL`: modelo Prisma `PageContent`
- sem `DATABASE_URL` em desenvolvimento local: fallback em `data/admin-page-settings.json`

Comportamento:

- `PUT` salva rascunho
- `POST` com `action=publish` promove o rascunho para publicação
- o site público consome sempre o estado `published`, com fallback para defaults em código quando não houver conteúdo publicado

Rotas principais do editor:

- `/admin/pages/home`
- `/admin/pages/services`
- `/admin/pages/projects`
- `/admin/pages/about`
- `/admin/pages/privacy`
- `/admin/pages/terms`
- `/admin/pages/cookies`
- `/admin/pages/ctas`

Permissões:

- `ADMIN`
  - acesso total
- `EDITOR`
  - acesso ao editor de páginas e uploads

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
2. arquivo local `data/leads.json`, apenas em desenvolvimento local sem banco configurado

Isso permite desenvolvimento local e verificação sem depender de banco ativo.

## Leitura no painel

`/admin/contacts` consome `GET /api/leads` e mostra:

- total de leads
- novos leads
- pedidos de orçamento
- pedidos de reunião técnica
- detalhes completos por lead
- atualização operacional de status via `PATCH /api/leads/:id`

Proteção:

- `POST /api/leads`
  - público
- `GET /api/leads`
  - restrito a `ADMIN`
- `PATCH /api/leads/:id`
  - restrito a `ADMIN`

## Autenticação admin

O login admin usa usuários persistidos no banco via Prisma e senha com hash `bcrypt`.

Bootstrap do primeiro usuário:

```bash
pnpm create:admin -- --email admin@empresa.com --password "senha-forte" --name "Admin"
```

## Observações operacionais

- Em produção, aplique migration compatível com os novos campos de `Contact`.
- Em produção, aplique migration compatível com o modelo `PageContent`.
- Em desenvolvimento sem banco, o conteúdo de `data/leads.json` e `data/admin-page-settings.json` pode ser removido manualmente quando necessário.
- O painel de leads agora suporta mudança de status, mas a operação continua centrada em captura, leitura e resposta manual.
