export interface ServiceItem {
  slug: string
  title: string
  excerpt: string
  subtitle: string
  description: string
  applications: string[]
  benefits: string[]
  highlights: string[]
  deliverables: string[]
  kpis: string[]
  cta: {
    title: string
    description: string
    primaryLabel: string
    primaryHref: string
    secondaryLabel: string
    secondaryHref: string
  }
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
    applications: [
      'Portais internos para equipes operacionais e administrativas',
      'Gestao de pedidos, contratos, atendimento e SLA em um unico fluxo',
      'Painel de controle para diretoria com dados em tempo real',
    ],
    benefits: [
      'Padronizacao de processo com menos retrabalho',
      'Visibilidade ponta a ponta da operacao',
      'Base tecnica preparada para evolucao continua',
    ],
    highlights: ['Arquitetura modular', 'UX orientada ao fluxo operacional', 'Governanca de dados e acessos'],
    deliverables: [
      'Mapeamento de processos e requisitos',
      'Arquitetura tecnica e backlog priorizado',
      'Implementacao fullstack com testes',
      'Observabilidade, monitoramento e suporte evolutivo',
    ],
    kpis: ['Reducao de retrabalho', 'Tempo medio de execucao por etapa', 'Confiabilidade dos dados'],
    cta: {
      title: 'Planejar arquitetura e escopo tecnico',
      description: 'Sessao tecnica para mapear requisitos, riscos e roadmap de implementacao.',
      primaryLabel: 'Agendar reuniao tecnica',
      primaryHref: '/agendar-reuniao',
      secondaryLabel: 'Solicitar orcamento',
      secondaryHref: '/solicitar-orcamento',
    },
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80&auto=format&fit=crop',
  },
  {
    slug: 'sistemas-exclusivos',
    title: 'Sistemas Exclusivos',
    excerpt: 'Produtos digitais proprietarios para operacoes com regra de negocio complexa.',
    subtitle: 'Tecnologia proprietaria como vantagem competitiva.',
    description:
      'Desenvolvemos sistemas exclusivos com foco em IP, governanca e diferenciais de mercado. Ideal para empresas que precisam transformar conhecimento interno em produto digital escalavel.',
    applications: [
      'Plataformas SaaS internas para parceiros e clientes',
      'Backoffice proprietario para regras avancadas de operacao',
      'MVPs tecnicos com arquitetura pronta para escala',
    ],
    benefits: [
      'Controle total sobre roadmap, dados e experiencia',
      'Dependencia reduzida de ferramentas prontas limitantes',
      'Ativo tecnologico alinhado ao modelo de negocio',
    ],
    highlights: ['Arquitetura orientada a dominio', 'Regras de negocio customizadas', 'Escalabilidade e seguranca'],
    deliverables: [
      'Descoberta de produto e definicao de dominio',
      'Arquitetura de software com padroes de evolucao',
      'Implementacao fullstack com testes e observabilidade',
      'Transicao para operacao assistida e evolucao do roadmap',
    ],
    kpis: ['Time-to-market', 'Aderencia a processos criticos', 'Custo operacional por transacao'],
    cta: {
      title: 'Validar escopo de sistema exclusivo',
      description: 'Workshop tecnico para definir arquitetura, milestones e investimento.',
      primaryLabel: 'Agendar reuniao tecnica',
      primaryHref: '/agendar-reuniao',
      secondaryLabel: 'Solicitar orcamento',
      secondaryHref: '/solicitar-orcamento',
    },
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1400&q=80&auto=format&fit=crop',
  },
  {
    slug: 'sites-premium',
    title: 'Sites Premium',
    excerpt: 'Sites institucionais de alta performance com foco em autoridade e conversao.',
    subtitle: 'Marca forte com engenharia focada em performance.',
    description:
      'Construimos sites premium para empresas que precisam posicionamento solido, navegacao clara e alta conversao em canais digitais. Tudo com base tecnica robusta para SEO e escalabilidade.',
    applications: [
      'Sites institucionais para captacao de leads qualificados',
      'Landing pages para campanhas de produto e vendas',
      'Paginas de autoridade para ofertas B2B e B2C',
    ],
    benefits: [
      'Melhora de percepcao de marca e confianca comercial',
      'Conversao orientada por funil e dados de comportamento',
      'Performance tecnica para campanhas e SEO',
    ],
    highlights: ['Core Web Vitals', 'Arquitetura de conteudo orientada a conversao', 'SEO tecnico'],
    deliverables: [
      'Diagnostico de posicionamento e jornada de conversao',
      'UX/UI de paginas principais e funis estrategicos',
      'Implementacao tecnica com CMS e analytics',
      'Plano de evolucao continua de conversao',
    ],
    kpis: ['Taxa de conversao', 'Tempo de carregamento', 'Custo por lead'],
    cta: {
      title: 'Estruturar seu site premium para conversao',
      description: 'Analise tecnica de funil, performance e prioridades de entrega.',
      primaryLabel: 'Agendar reuniao tecnica',
      primaryHref: '/agendar-reuniao',
      secondaryLabel: 'Solicitar orcamento',
      secondaryHref: '/solicitar-orcamento',
    },
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80&auto=format&fit=crop',
  },
  {
    slug: 'e-commerce',
    title: 'E-commerce',
    excerpt: 'Operacoes de venda online com integracao comercial e operacional.',
    subtitle: 'Canal digital escalavel com processo de ponta a ponta.',
    description:
      'Implementamos e-commerces preparados para vender com previsibilidade, conectando catalogo, pagamento, logistica, CRM e atendimento em uma arquitetura unica.',
    applications: [
      'Lojas online B2C com alto volume de pedidos',
      'Operacoes B2B com pedido recorrente e condicoes comerciais',
      'Catalogos digitais integrados a ERP e estoque',
    ],
    benefits: [
      'Reduz erro operacional entre venda e entrega',
      'Aumenta taxa de conversao e ticket medio',
      'Cria base escalavel para novos canais de venda',
    ],
    highlights: ['Jornada de compra otimizada', 'Integracoes com ERP/CRM/pagamento', 'Operacao omnichannel'],
    deliverables: [
      'Arquitetura de e-commerce e desenho da operacao',
      'Implementacao de loja e backoffice de gestao',
      'Integracoes com pagamento, frete e sistemas internos',
      'Monitoramento de funil e plano de otimizacao',
    ],
    kpis: ['Taxa de conversao', 'Abandono de carrinho', 'Tempo medio de processamento de pedido'],
    cta: {
      title: 'Planejar e-commerce com arquitetura escalavel',
      description: 'Avaliamos stack, integracoes e metas comerciais para a sua operacao.',
      primaryLabel: 'Agendar reuniao tecnica',
      primaryHref: '/agendar-reuniao',
      secondaryLabel: 'Solicitar orcamento',
      secondaryHref: '/solicitar-orcamento',
    },
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1400&q=80&auto=format&fit=crop',
  },
  {
    slug: 'automacao-integracoes-hardware',
    title: 'Automacao + Integracoes com Hardware',
    excerpt: 'Fluxos automatizados conectando software, sensores e equipamentos fisicos.',
    subtitle: 'Operacao conectada para reduzir friccao e aumentar controle.',
    description:
      'Desenhamos e implementamos automacoes com integracao de hardware para operacoes que exigem captura de eventos em campo, acionamento remoto e rastreabilidade em tempo real.',
    applications: [
      'Integracao de coletores, sensores e balancas com sistema web',
      'Monitoramento de eventos fisicos com alertas automaticos',
      'Controle de estoque, producao ou manutencao com dados em tempo real',
    ],
    benefits: [
      'Menos lancamento manual e menos falhas operacionais',
      'Rastreabilidade de eventos criticos da operacao',
      'Tomada de decisao com dados confiaveis de campo',
    ],
    highlights: ['Integracao via APIs e protocolos industriais', 'Eventos em tempo real', 'Auditoria e resiliencia operacional'],
    deliverables: [
      'Diagnostico de fluxo fisico + digital',
      'Projeto tecnico de integracao com hardware e software',
      'Implementacao de automacoes, filas e monitoramento',
      'Documentacao operacional e handoff para times internos',
    ],
    kpis: ['Reducao de erro manual', 'Tempo de resposta a eventos', 'Disponibilidade da integracao'],
    cta: {
      title: 'Conectar hardware e software da sua operacao',
      description: 'Desenho tecnico para reduzir gargalos e melhorar previsibilidade operacional.',
      primaryLabel: 'Agendar reuniao tecnica',
      primaryHref: '/agendar-reuniao',
      secondaryLabel: 'Solicitar orcamento',
      secondaryHref: '/solicitar-orcamento',
    },
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1400&q=80&auto=format&fit=crop',
  },
  {
    slug: 'ia-automacoes-comerciais',
    title: 'IA e Automacoes Comerciais',
    excerpt: 'Playbooks comerciais com IA para acelerar resposta, qualificacao e fechamento.',
    subtitle: 'Inteligencia aplicada para escalar receita com criterio.',
    description:
      'Aplicamos IA em processos comerciais para qualificar leads, priorizar oportunidades, automatizar follow-ups e apoiar o time de vendas com contexto real de negocio.',
    applications: [
      'Qualificacao automatica de leads por perfil e intencao',
      'Automacao de follow-up multicanal com regras de negocio',
      'Assistentes para SDR e closer com base em dados internos',
    ],
    benefits: [
      'Aumento de produtividade do time comercial',
      'Menor tempo de resposta ao lead qualificado',
      'Previsibilidade de funil com menos desperdicio de esforco',
    ],
    highlights: ['Classificacao inteligente de oportunidades', 'Playbooks automatizados', 'Integracao com CRM e canais'],
    deliverables: [
      'Mapeamento de jornada comercial e pontos de atrito',
      'Implementacao de automacoes e agentes de IA',
      'Integracao com CRM, WhatsApp, email e atendimento',
      'Dashboard de funil, conversao e produtividade',
    ],
    kpis: ['Conversao por etapa', 'Tempo de resposta', 'Custo de aquisicao por canal'],
    cta: {
      title: 'Aplicar IA no funil comercial da sua empresa',
      description: 'Diagnostico de maturidade e plano tecnico para automacoes com retorno claro.',
      primaryLabel: 'Agendar reuniao tecnica',
      primaryHref: '/agendar-reuniao',
      secondaryLabel: 'Solicitar orcamento',
      secondaryHref: '/solicitar-orcamento',
    },
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80&auto=format&fit=crop',
  },
]

export const servicesBySlug: Record<string, ServiceItem> = Object.fromEntries(
  services.map((service) => [service.slug, service])
)

export const serviceProcessSteps = [
  {
    number: '01',
    title: 'Imersao no Negocio',
    description: 'Levantamos contexto, metas e restricoes para alinhar tecnologia com resultado esperado.',
  },
  {
    number: '02',
    title: 'Diagnostico de Gargalos',
    description: 'Mapeamos processos atuais, pontos de friccao e riscos tecnicos da operacao.',
  },
  {
    number: '03',
    title: 'Arquitetura da Solucao',
    description: 'Definimos stack, integracoes, seguranca e modelo de dados com visao de escala.',
  },
  {
    number: '04',
    title: 'Roadmap Executivo',
    description: 'Organizamos entregas por prioridade de impacto, prazo e dependencia tecnica.',
  },
  {
    number: '05',
    title: 'Implementacao Iterativa',
    description: 'Executamos em sprints curtas com validacao continua e transparencia de progresso.',
  },
  {
    number: '06',
    title: 'Go-live Assistido',
    description: 'Publicamos com monitoramento ativo, plano de contingencia e suporte operacional.',
  },
  {
    number: '07',
    title: 'Evolucao Continua',
    description: 'Acompanhamos KPIs e evoluimos a solucao com foco em performance e crescimento.',
  },
] as const
