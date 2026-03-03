export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  readingTime: string
  category: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'arquitetura-de-sistemas-para-escalar-operacoes',
    title: 'Arquitetura de sistemas para escalar operacoes sem perder controle',
    excerpt:
      'Como estruturar camadas, processos e governanca para crescer sem transformar tecnologia em gargalo.',
    publishedAt: '2026-03-02',
    readingTime: '6 min',
    category: 'Engenharia de Software',
    content: [
      'Escalar sem arquitetura e um atalho para aumentar custo operacional e risco tecnico. A base precisa sustentar novas demandas sem quebrar o que ja funciona.',
      'O primeiro passo e mapear o fluxo critico do negocio e separar componentes por responsabilidade. Isso reduz dependencia entre modulos e acelera evolucao do produto.',
      'Com observabilidade desde o inicio, o time identifica gargalos antes de virarem incidente. Em paralelo, um backlog priorizado por impacto de negocio evita dispersao tecnica.',
    ],
  },
  {
    slug: 'automacao-comercial-com-ia-na-pratica',
    title: 'Automacao comercial com IA na pratica',
    excerpt:
      'Onde IA realmente gera retorno em vendas B2B e como evitar implementacoes sem resultado concreto.',
    publishedAt: '2026-02-25',
    readingTime: '5 min',
    category: 'IA Aplicada',
    content: [
      'IA em vendas nao substitui processo comercial. Ela potencializa times que ja possuem criterios de qualificacao, cadencia e metas claras por etapa do funil.',
      'Os ganhos mais rapidos aparecem em tarefas repetitivas: scoring de lead, resumo de contexto e recomendacao de proximas acoes para SDR e executivos.',
      'Sem metricas de base, nao ha como provar impacto. O minimo e acompanhar tempo de resposta, conversao por etapa e taxa de no-show apos automacao.',
    ],
  },
  {
    slug: 'integracao-entre-sistemas-legados-e-novas-plataformas',
    title: 'Integracao entre sistemas legados e novas plataformas',
    excerpt:
      'Estrategia para evoluir o stack sem paralisar operacao ou acumular divida tecnica inviavel.',
    publishedAt: '2026-02-18',
    readingTime: '7 min',
    category: 'Integracao',
    content: [
      'Migracao total raramente e o melhor caminho inicial. Em muitos cenarios, a estrategia incremental por dominios traz menos risco e mais previsibilidade.',
      'Uma camada de integracao com contratos bem definidos evita que sistemas antigos ditem a velocidade de todo o negocio. Essa camada tambem protege futuras evolucoes.',
      'Governanca tecnica e tao importante quanto codigo: versionamento de APIs, monitoramento de falhas e plano de contingencia sao obrigatorios em operacoes criticas.',
    ],
  },
]

export const blogPostsBySlug: Record<string, BlogPost> = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post])
)
