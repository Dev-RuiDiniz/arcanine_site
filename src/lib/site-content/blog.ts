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
    title: 'Arquitetura de sistemas para escalar operações sem perder controle',
    excerpt:
      'Como estruturar camadas, processos e governança para crescer sem transformar tecnologia em gargalo.',
    publishedAt: '2026-03-02',
    readingTime: '6 min',
    category: 'Engenharia de Software',
    content: [
      'Escalar sem arquitetura é um atalho para aumentar custo operacional e risco técnico. A base precisa sustentar novas demandas sem quebrar o que já funciona.',
      'O primeiro passo é mapear o fluxo crítico do negócio e separar componentes por responsabilidade. Isso reduz dependência entre módulos e acelera a evolução do produto.',
      'Com observabilidade desde o início, o time identifica gargalos antes de virarem incidente. Em paralelo, um backlog priorizado por impacto de negócio evita dispersão técnica.',
    ],
  },
  {
    slug: 'automacao-comercial-com-ia-na-pratica',
    title: 'Automação comercial com IA na prática',
    excerpt:
      'Onde IA realmente gera retorno em vendas B2B e como evitar implementações sem resultado concreto.',
    publishedAt: '2026-02-25',
    readingTime: '5 min',
    category: 'IA Aplicada',
    content: [
      'IA em vendas não substitui processo comercial. Ela potencializa times que já possuem critérios de qualificação, cadência e metas claras por etapa do funil.',
      'Os ganhos mais rápidos aparecem em tarefas repetitivas: scoring de lead, resumo de contexto e recomendação de próximas ações para SDRs e executivos.',
      'Sem métricas de base, não há como provar impacto. O mínimo é acompanhar tempo de resposta, conversão por etapa e taxa de no-show após a automação.',
    ],
  },
  {
    slug: 'integracao-entre-sistemas-legados-e-novas-plataformas',
    title: 'Integração entre sistemas legados e novas plataformas',
    excerpt:
      'Estratégia para evoluir o stack sem paralisar a operação ou acumular dívida técnica inviável.',
    publishedAt: '2026-02-18',
    readingTime: '7 min',
    category: 'Integração',
    content: [
      'Migração total raramente é o melhor caminho inicial. Em muitos cenários, a estratégia incremental por domínios traz menos risco e mais previsibilidade.',
      'Uma camada de integração com contratos bem definidos evita que sistemas antigos ditem a velocidade de todo o negócio. Essa camada também protege evoluções futuras.',
      'Governança técnica é tão importante quanto código: versionamento de APIs, monitoramento de falhas e plano de contingência são obrigatórios em operações críticas.',
    ],
  },
]

export const blogPostsBySlug: Record<string, BlogPost> = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post])
)
