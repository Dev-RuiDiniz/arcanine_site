# Plano de Sprints - Migracao para ARCANINE Tecnologia

## Objetivo
Migrar o site atual (base RAIZ Interiors) para a marca **ARCANINE Tecnologia**, reaproveitando a estrutura tecnica existente (Next.js + App Router + painel admin + Prisma), sem reescrever o projeto do zero.

## Premissas
- Duracao sugerida: **6 sprints de 1 semana** (ou 6 sprints de 2 semanas, se time reduzido).
- Base atual sera mantida: rotas, layout global, componentes UI e painel admin.
- Conteudo e direcao comercial seguem o PDF `ARCANINE Tecnologia.pdf`.
- Foco em conversao: `Solicitar Orçamento`, `Agendar Reunião Técnica`, `Falar no WhatsApp`.

## Mapeamento Estrutural (Atual -> Alvo)
- `/` (Home): manter rota e reconstruir secoes com copy institucional ARCANINE.
- `/about`: manter rota e converter para `Sobre` com historia, missao, visao, valores.
- `/services` e `/services/[slug]`: manter e adaptar para servicos de tecnologia.
- `/projects` e `/projects/[slug]`: manter e converter para `Portfolio/Cases`.
- `/contact`: manter e adaptar formulario para qualificar lead tecnico/comercial.
- Novas rotas: `blog`, `blog/[slug]`, `privacy`, `terms`, `cookies`.
- Admin: manter estrutura e ampliar para blog, paginas legais e configuracoes de CTA.

## Sprint 1 - Fundacao de Marca e Rebranding
**Meta:** remover identidade RAIZ e implantar base visual/textual ARCANINE sem quebrar navegacao.

**Entregas:**
- Atualizacao global de nome, logo, metadados, emails e links institucionais.
- Novo header/footer com navegacao do contexto B2B tech.
- Padrao de tom de voz (tecnico, acessivel, direto) aplicado nos blocos globais.
- CTAs padrao em componentes reutilizaveis (orcamento/reuniao/WhatsApp).
- Revisao de assets (imagens, icones, favicon, OG image).

**Criterios de aceite:**
- Nenhuma mencao a RAIZ no frontend publico.
- Navegacao funcional desktop/mobile.
- Layout base sem regressao visual relevante.

## Sprint 2 - Home + Sobre (Conteudo Institucional)
**Meta:** publicar narrativa institucional e proposta de valor da ARCANINE.

**Entregas:**
- Home com estrutura do PDF: hero, o que fazemos, diferenciais, cases em destaque, processo, CTA final.
- Pagina Sobre com historia, missao, visao e valores.
- Ajuste do painel para editar blocos institucionais de Home/Sobre.
- Revisao de SEO on-page basico (titles, descriptions, headings).

**Criterios de aceite:**
- Conteudo alinhado ao PDF e orientado a conversao.
- Blocos principais editaveis no admin.
- Lighthouse mobile/desktop sem queda relevante em performance.

## Sprint 3 - Servicos e Detalhes Tecnicos
**Meta:** transformar a secao de servicos em oferta comercial clara e escalavel.

**Entregas:**
- Pagina `/services` com cards dos servicos do PDF:
  - Sistemas Web Personalizados
  - Sistemas Exclusivos
  - Sites Premium
  - E-commerce
  - Automacao + Integracoes com Hardware
  - IA e Automacoes Comerciais
- Paginas de detalhe por slug com aplicacoes, beneficios e CTA tecnico.
- Secao de processo de trabalho (7 etapas) com linguagem orientada a resultado.

**Criterios de aceite:**
- Todos os servicos com pagina propria e CTA funcional.
- Conteudo sem linguagem de interiores/design.
- Estrutura preparada para expansao de novos servicos.

## Sprint 4 - Portfolio/Cases e Prova de Autoridade
**Meta:** publicar vitrine de cases com foco em problema, solucao e resultado.

**Entregas:**
- Conversao de `/projects` para `Portfolio/Cases`.
- Filtros por categoria (Sistemas, Automacao, Sites, IA).
- Template de case com: desafio, estrategia, arquitetura, implementacao, resultado.
- Ajustes no modelo de dados para refletir casos de tecnologia (se necessario).
- Fluxo admin para cadastrar/editar/publicar cases.

**Criterios de aceite:**
- Listagem e detalhe de cases funcionando com filtros.
- Estrutura de conteudo orientada a decisor tecnico/comercial.
- Publicacao e edicao via admin sem edicao manual em codigo.

## Sprint 5 - Blog, Contato e Paginas Legais
**Meta:** fechar geracao de demanda organica e conformidade legal.

**Entregas:**
- Blog/Insights (`/blog` e `/blog/[slug]`) com categorias do PDF.
- Contato com campos de qualificacao: nome, empresa, email, WhatsApp, tipo de projeto, desafio.
- Persistencia real de leads no banco (sem simulacao).
- Paginas publicas: Politica de Privacidade, Termos de Uso, Politica de Cookies.
- Revisao de banner LGPD/cookies e consentimento.

**Criterios de aceite:**
- Formulario cria lead persistido e visivel no admin.
- Rotas legais publicas ativas e acessiveis no footer.
- Blog com publicacao real e SEO basico por post.

## Sprint 6 - Admin, Qualidade e Go-live
**Meta:** estabilizar operacao, medir funil e preparar publicacao oficial.

**Entregas:**
- Dashboard admin com dados reais (leads, cases, posts).
- Revisao de seguranca, validacoes e permissao de acesso admin.
- QA completo: responsividade, acessibilidade, performance e smoke tests.
- Checklist de deploy/producao e observabilidade minima (logs/erros).
- Congelamento de escopo e pacote de lancamento.

**Criterios de aceite:**
- Fluxo ponta a ponta validado: visitante -> lead -> acompanhamento no admin.
- Sem erros criticos nas paginas principais.
- Go-live aprovado por checklist tecnico e comercial.

## Backlog Tecnico Transversal
- Refatorar textos hardcoded para configuracao via CMS/admin quando fizer sentido.
- Padronizar componentes de CTA para reuso em todas as paginas.
- Preparar seeds/migracoes para dados iniciais da ARCANINE.
- Garantir nomenclatura consistente no schema (evitar residuos de dominio antigo).

## Riscos e Mitigacao
- **Risco:** residuos de marca antiga em copy e schema.
  - **Mitigacao:** checklist de rebranding por rota e por modelo de dados.
- **Risco:** escopo crescer com novas features no meio da migracao.
  - **Mitigacao:** congelar MVP no Sprint 1 e usar backlog pos-go-live.
- **Risco:** gargalo de conteudo (cases/blog) atrasar entregas.
  - **Mitigacao:** trabalhar com placeholders aprovados e substituir progressivamente.

## Resultado Esperado ao Final
Site ARCANINE no ar, mantendo a base tecnica atual, com posicionamento tecnico/comercial claro, estrutura de conversao ativa, CMS/admin funcional e backlog organizado para evolucao continua.
