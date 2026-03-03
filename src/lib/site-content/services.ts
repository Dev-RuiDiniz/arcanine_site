export interface ServiceItem {
  slug: string
  title: string
  excerpt: string
  subtitle: string
  description: string
  highlights: string[]
  deliverables: string[]
  kpis: string[]
  image: string
}

export const services: ServiceItem[] = [
  {
    slug: 'sistemas-web-personalizados',
    title: 'Sistemas Web Personalizados',
    excerpt: 'Plataformas sob medida para processos criticos do negocio.',
    subtitle: 'Arquitetura orientada a operacao e resultado.',
    description:
      'Projetamos e implementamos plataformas web customizadas para empresas que precisam controle de processo, rastreabilidade e ganho de produtividade sem depender de ferramentas genericas.',
    highlights: ['Arquitetura modular', 'UX orientada ao fluxo operacional', 'Governanca de dados e acessos'],
    deliverables: [
      'Mapeamento de processos e requisitos',
      'Arquitetura tecnica e backlog priorizado',
      'Implementacao fullstack com testes',
      'Observabilidade, monitoramento e suporte evolutivo',
    ],
    kpis: ['Reducao de retrabalho', 'Tempo medio de execucao por etapa', 'Confiabilidade dos dados'],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80&auto=format&fit=crop',
  },
  {
    slug: 'automacao-e-integracao',
    title: 'Automacao e Integracao',
    excerpt: 'Conectamos sistemas, planilhas e ferramentas em uma operacao unica.',
    subtitle: 'Menos tarefas manuais, mais previsibilidade operacional.',
    description:
      'Desenvolvemos fluxos de automacao e integracao para eliminar gargalos entre equipes, sistemas legados e novas plataformas. O foco e reduzir atrito, tempo de resposta e erros humanos.',
    highlights: ['Integracao via API e webhooks', 'Orquestracao de fluxos', 'Padrao de dados entre sistemas'],
    deliverables: [
      'Diagnostico de gargalos e etapas repetitivas',
      'Implementacao de integracoes com ERP, CRM e tools internas',
      'Automacoes de rotinas comerciais e operacionais',
      'Alertas, logs e trilha de auditoria',
    ],
    kpis: ['SLA operacional', 'Taxa de erro manual', 'Tempo de ciclo ponta a ponta'],
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80&auto=format&fit=crop',
  },
  {
    slug: 'ia-e-automacoes-comerciais',
    title: 'IA e Automacoes Comerciais',
    excerpt: 'Pipeline comercial com qualificacao inteligente e resposta rapida.',
    subtitle: 'IA aplicada para vender com criterio e escala.',
    description:
      'Aplicamos IA de forma pratica na operacao comercial: qualificacao de leads, roteamento inteligente, follow-up automatizado e assistentes internos conectados aos dados do negocio.',
    highlights: ['Qualificacao automatica de leads', 'Playbooks comerciais assistidos por IA', 'Assistentes internos com contexto real'],
    deliverables: [
      'Definicao de jornada comercial orientada a dados',
      'Automacoes de resposta e nutricao',
      'Assistentes para SDR e executivo comercial',
      'Painel de performance com funil e previsibilidade',
    ],
    kpis: ['Conversao por etapa', 'Tempo de resposta ao lead', 'CAC por canal'],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80&auto=format&fit=crop',
  },
  {
    slug: 'dados-e-bi',
    title: 'Dados e BI Operacional',
    excerpt: 'Dashboards executivos conectados ao que acontece na operacao.',
    subtitle: 'Decisao rapida com dado confiavel e visivel.',
    description:
      'Estruturamos camadas de dados, indicadores e paines de acompanhamento para liderancas que precisam enxergar risco, performance e oportunidades sem depender de consolidacao manual.',
    highlights: ['Modelagem de metricas e KPIs', 'Paineis por area e diretoria', 'Qualidade e consistencia de dados'],
    deliverables: [
      'Mapeamento de indicadores criticos por area',
      'Pipeline de dados e padronizacao de fontes',
      'Dashboards em tempo real para operacao e diretoria',
      'Governanca de acesso e dicionario de dados',
    ],
    kpis: ['Tempo de fechamento gerencial', 'Confiabilidade dos indicadores', 'Tempo de tomada de decisao'],
    image:
      'https://images.unsplash.com/photo-1551281044-8b1d45c5be0c?w=1400&q=80&auto=format&fit=crop',
  },
  {
    slug: 'squads-e-evolucao-continua',
    title: 'Squads e Evolucao Continua',
    excerpt: 'Time tecnico dedicado para manter e evoluir sistemas criticos.',
    subtitle: 'Entrega continua com governanca de produto e engenharia.',
    description:
      'Operamos squads sob demanda para empresas que precisam acelerar roadmap, estabilizar sistemas e manter cadencia de melhoria com padrao tecnico claro e comunicacao executiva.',
    highlights: ['Ritual de produto e engenharia', 'Roadmap priorizado por impacto', 'Sustentacao com SLO e observabilidade'],
    deliverables: [
      'Alocacao de squad multidisciplinar',
      'Planejamento quinzenal com metas objetivas',
      'Melhorias incrementais com metricas',
      'Relatorios executivos de progresso e risco',
    ],
    kpis: ['Lead time de entrega', 'Disponibilidade dos sistemas', 'Velocidade de resolucao de incidentes'],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80&auto=format&fit=crop',
  },
  {
    slug: 'sites-premium-e-ecommerce',
    title: 'Sites Premium e E-commerce',
    excerpt: 'Experiencias digitais de alta performance para marketing e vendas.',
    subtitle: 'Marca forte com conversao e integracao comercial.',
    description:
      'Criamos sites institucionais, landing pages e operacoes de e-commerce com foco em performance, SEO tecnico e integracao com CRM, pagamento e operacao comercial.',
    highlights: ['Performance e SEO tecnico', 'Fluxos de conversao orientados a dados', 'Integracao com stack comercial'],
    deliverables: [
      'Arquitetura de conteudo e UX de conversao',
      'Implementacao frontend e backend',
      'Integracoes com CRM, analytics e pagamento',
      'Monitoramento de conversao e plano de otimizacao',
    ],
    kpis: ['Taxa de conversao', 'Custo por lead', 'Tempo de carregamento e Core Web Vitals'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80&auto=format&fit=crop',
  },
]

export const servicesBySlug: Record<string, ServiceItem> = Object.fromEntries(
  services.map((service) => [service.slug, service])
)
