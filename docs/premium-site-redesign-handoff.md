# Premium Site Redesign Handoff

## Objetivo da revisão

Elevar a área pública do site da Arcane para um patamar mais premium, autoral e orientado a conversão, preservando o núcleo da marca atual e fortalecendo a percepção de autoridade técnica.

## Tese visual

- Direção principal: autoridade técnica com acabamento premium
- Base cromática: grafite profundo + ciano como acento de foco e sinalização
- Superfícies: camadas translúcidas, painéis com profundidade e contraste controlado
- Tipografia: Cormorant como voz editorial e Inter como voz operacional
- Motion: transições contidas, profundidade sutil e foco em hierarquia

## Mudanças estruturais

### Fundação visual

- `src/app/globals.css`
  - novo sistema de tokens para superfícies, linhas, glow e profundidade
  - shells visuais mais ricos para seções claras, alternadas e escuras
  - painéis premium com blur, bordas suaves e grid overlays

- `src/components/ui/button.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/textarea.tsx`
  - primitives ajustados para linguagem mais premium e consistente

- `src/components/ui/conversion-ctas.tsx`
  - CTA system flexível com hierarquia por intenção
  - combinações suportadas: orçamento, reunião técnica e WhatsApp

### Chrome compartilhado

- `src/components/layout/header.tsx`
  - navegação mais refinada, estado scrolled mais premium e menu mobile com mais presença

- `src/components/layout/footer.tsx`
  - footer reestruturado como bloco de posicionamento + conversão

- `src/components/ui/floating-chat.tsx`
  - contato flutuante redesenhado com enquadramento mais consultivo

## Home

- `src/components/sections/hero.tsx`
  - hero sem slideshow, com direção de arte mais autoral e prova visual baseada em cases reais

- `src/components/sections/intro.tsx`
  - prova inicial e framing de valor mais concretos

- `src/components/sections/services-preview.tsx`
  - capacidades reordenadas por problema de negócio

- `src/components/sections/featured-projects.tsx`
  - cases em destaque mais editoriais

- `src/components/sections/about-preview.tsx`
  - confiança e filosofia de trabalho mais fortes

## Serviços

- `src/lib/site-content/services.ts`
  - modelo enriquecido com `category`, `decisionLabel`, `idealFor`, `businessProblems`, `proofHighlights` e `engagementNote`

- `src/app/(site)/services/page.tsx`
  - index redesenhado para posicionar ofertas, não apenas listá-las

- `src/app/(site)/services/[slug]/page.tsx`
  - detalhes estruturados por fit, dor, escopo, foco técnico e CTA consultivo

## Cases

- `src/lib/site-content/projects.ts`
  - modelo enriquecido com `challengePoints`

- `src/app/(site)/projects/page.tsx`
  - portfólio reescrito como coleção de estudos de caso

- `src/app/(site)/projects/[slug]/page.tsx`
  - páginas de case estruturadas por tensão, solução, arquitetura e impacto

## Confiança e conversão

- `src/app/(site)/about/page.tsx`
  - posicionamento institucional mais maduro e menos genérico

- `src/components/sections/contact-lead-page.tsx`
- `src/components/sections/contact-support-page.tsx`
  - formulários redesenhados com melhor enquadramento, confiança e expectativas de retorno

- `src/app/(site)/privacy/page.tsx`
- `src/app/(site)/terms/page.tsx`
- `src/app/(site)/cookies/page.tsx`
  - páginas legais alinhadas à nova linguagem visual

## Regras de manutenção

- Preserve a lógica de “menos efeitos, mais intenção”
- Reuse `section-shell`, `section-shell-alt`, `section-shell-dark`, `panel-shell`, `panel-shell-muted` e `panel-shell-dark`
- Não reintroduza slideshow genérico na home
- Antes de criar nova página pública, defina:
  - promessa principal
  - prova principal
  - CTA principal
  - papel da página no funil
- Use o ciano como acento de decisão, não como cor dominante de tudo
- Em motion, prefira entrada por hierarquia e profundidade suave; evite animação redundante em todos os elementos

## Checklist para extensões futuras

- A primeira dobra comunica oferta, prova e próximo passo?
- Há contraste suficiente entre blocos editoriais, técnicos e comerciais?
- O CTA da página está adequado à intenção do usuário naquela etapa?
- A interface continua premium com motion reduzido?
- A alteração pública não vazou para admin/backoffice?

## Validação executada nesta entrega

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build:frontend-only`

As validações foram executadas ao final de cada grande etapa e novamente no fechamento.
