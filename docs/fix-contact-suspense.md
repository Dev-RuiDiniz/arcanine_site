# Correcao de Build - Rota /contact (useSearchParams + Suspense)

Data: 3 de marco de 2026

## Problema

O `pnpm build` falhava na rota `/contact` com o erro:

- `useSearchParams() should be wrapped in a suspense boundary`

Contexto: no App Router do Next.js 16, o uso de `useSearchParams` em componente client precisa estar dentro de boundary de `Suspense` para evitar bailout de renderizacao durante prerender.

## Correcao aplicada

Arquivo alterado:

- [`src/app/(site)/contact/page.tsx`](../src/app/(site)/contact/page.tsx)

Mudancas:

1. O componente da pagina foi dividido em:
   - `ContactPageContent` (contendo `useSearchParams`)
   - `ContactPage` (export default)
2. `ContactPage` agora renderiza `ContactPageContent` dentro de:
   - `<Suspense fallback={null}>`

## Validacao

Comando executado:

- `pnpm build`

Resultado:

- Build concluido com sucesso para a rota `/contact`.
