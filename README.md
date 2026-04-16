# Arcane Tecnologia

Site institucional e painel administrativo da Arcane Tecnologia, construídos com Next.js App Router, Prisma e NextAuth.

O projeto foi consolidado para o domínio de tecnologia B2B. O escopo atual cobre:

- site público institucional
- catálogo de serviços
- cases
- editor de páginas do admin
- captura e acompanhamento de leads
- modo `frontend-only` para verificação visual na Vercel

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Prisma
- NextAuth
- Framer Motion

## Estrutura funcional

- Site público:
  - `/`
  - `/about`
  - `/services`
  - `/services/[slug]`
  - `/projects`
  - `/projects/[slug]`
  - `/contact`
  - `/solicitar-orcamento`
  - `/agendar-reuniao`
  - `/privacy`
  - `/terms`
  - `/cookies`
- Admin:
  - `/login`
  - `/admin`
  - `/admin/pages`
  - `/admin/services`
  - `/admin/projects`
  - `/admin/contacts`
  - `/admin/settings`

## Setup local

Pré-requisitos:

- Node.js `22.12+`
- pnpm `10+`

Instalação:

```bash
pnpm install
```

Desenvolvimento:

```bash
pnpm dev
```

Checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Banco / Supabase:

```bash
pnpm prisma:migrate:deploy
pnpm prisma:migrate:status
```

## Variáveis de ambiente

Use `.env.example` como base.

Campos relevantes:

- `DATABASE_URL`
  - obrigatório em staging/produção
  - opcional em desenvolvimento local
  - quando ausente em desenvolvimento, leads e conteúdo editável usam fallback local em `data/*.json`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
  - obrigatório em produção para autenticação admin
- `FRONTEND_ONLY`
  - opcional
  - quando `true`, o proxy bloqueia `/admin`, `/login` e `/api/*`

## Scripts

- `pnpm dev`
- `pnpm build`
- `pnpm build:frontend-only`
- `pnpm start`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm prisma:generate`
- `pnpm prisma:migrate:deploy`
- `pnpm prisma:migrate:status`
- `pnpm create:admin -- --email admin@arcane.tech --password "senha-forte" --name "Admin"`

## Leads

Os formulários públicos enviam dados para `POST /api/leads`.

Payload aceito:

- obrigatórios:
  - `name`
  - `email`
  - `message`
  - `source`
- opcionais:
  - `phone`
  - `company`
  - `subject`
  - `intent`
  - `projectType`
  - `budgetRange`

Persistência:

- com `DATABASE_URL`: grava em `Contact` via Prisma
- sem `DATABASE_URL` em desenvolvimento: grava em `data/leads.json`

Leads ficam visíveis em `/admin/contacts`.

## Admin e conteúdo

O painel foi enxugado para o escopo operacional do site.

O que permanece:

- editor de páginas institucionais e legais
- visão editorial de serviços
- visão editorial de cases
- central de leads
- resumo operacional e configurações

Permissões atuais:

- `ADMIN`
  - acesso total ao painel, leads e configurações
- `EDITOR`
  - acesso ao editor de páginas, serviços, cases e uploads
  - sem acesso à central de leads e configurações

O que foi removido do template antigo:

- newsletter
- biblioteca de mídia genérica
- notificações mockadas
- integrações de Instagram/Apify
- conteúdo e categorias herdadas de outro domínio

## Deploy Vercel

Deploy padrão:

- Build command: `pnpm build`

Deploy de verificação visual, sem admin e sem APIs:

- Build command: `pnpm build:frontend-only`
- Environment Variable: `FRONTEND_ONLY=true`

Nesse modo:

- `/admin` retorna indisponível
- `/login` retorna indisponível
- `/api/*` retorna `404`
- formulários públicos exibem aviso e ficam desativados

Documentação complementar:

- [Operação do admin e leads](docs/operacao-admin-e-leads.md)
- [Deploy frontend-only na Vercel](docs/deploy-vercel-frontend-only.md)

## Supabase / Banco

Migration inicial criada em:

- `prisma/migrations/20260317170000_init_supabase/migration.sql`

Fluxo recomendado para o Supabase:

1. configure `DATABASE_URL` com a connection string Postgres do projeto Supabase
2. rode `pnpm prisma:migrate:deploy`
3. confirme com `pnpm prisma:migrate:status`
4. crie o primeiro usuário admin com `pnpm create:admin -- --email admin@arcane.tech --password "senha-forte"`

Se preferir aplicar manualmente no SQL Editor do Supabase, use o conteúdo de `migration.sql`.

## Autenticação admin

O login admin agora usa usuários persistidos no banco via Prisma.

Fluxo recomendado:

1. configure `DATABASE_URL`
2. gere o client com `pnpm prisma:generate`
3. crie o primeiro usuário com:

```bash
pnpm create:admin -- --email admin@arcane.tech --password "senha-forte" --name "Admin"
```

Sem `DATABASE_URL`, a autenticação admin não fica disponível. Em produção, `NEXTAUTH_SECRET` é obrigatório.

## Checklist de validação

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
- `pnpm build:frontend-only`
- validar rotas públicas principais
- validar envio de contato, orçamento e reunião técnica
- validar leitura e atualização de status dos leads em `/admin/contacts`
- validar proteção de `/admin`, `/api/admin/*`, `GET /api/leads` e `PATCH /api/leads/:id`
- validar publicação do editor refletindo no site público
- confirmar ausência total de `/blog` e `/admin/pages/blog`

## Atualização de ferramentas no Windows

Em PowerShell aberto como Administrador:

```powershell
.\scripts\update-dev-tools.ps1
.\scripts\update-dev-tools.ps1 -IncludeAll
```
