# Deploy Frontend-Only na Vercel

## Objetivo

Publicar uma versão de verificação visual do site público sem expor:

- admin
- login
- APIs

## Configuração

Na Vercel, use:

- Build Command: `pnpm build:frontend-only`
- Environment Variable: `FRONTEND_ONLY=true`

Não é necessário definir `NEXT_PUBLIC_FRONTEND_ONLY` manualmente. O valor é derivado do `next.config.ts`.

## O que acontece nesse modo

- `src/proxy.ts` bloqueia:
  - `/admin`
  - `/login`
  - `/api/*`
- o site público continua acessível
- formulários públicos ficam desativados e exibem mensagem de verificação

## Quando usar

Use `frontend-only` quando o objetivo for:

- revisar layout e conteúdo com cliente ou time interno
- validar navegação pública
- testar deploy sem depender de banco, auth ou APIs

## Quando não usar

Não use `frontend-only` quando precisar validar:

- login admin
- captura real de leads
- upload do editor
- qualquer rota em `/api`

## Checklist rápido

- `FRONTEND_ONLY=true`
- build command apontando para `pnpm build:frontend-only`
- rotas públicas carregando normalmente
- `/admin`, `/login` e `/api/*` retornando indisponível
