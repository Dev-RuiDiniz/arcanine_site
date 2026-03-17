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
    excerpt: 'Plataformas sob medida para processos críticos, integrações complexas e ganho real de produtividade.',
    subtitle: 'Arquitetura orientada à operação, governança e resultado.',
    description:
      'Projetamos e implementamos plataformas web para empresas que não podem mais depender de planilhas, retrabalho e sistemas genéricos. O foco é transformar operação crítica em fluxo previsível, rastreável e escalável.',
    applications: [
      'Portais internos para times operacionais, atendimento, financeiro e backoffice',
      'Gestão de pedidos, contratos, atendimento, SLA e aprovações em um único fluxo',
      'Painéis executivos com indicadores operacionais e financeiros em tempo real',
    ],
    benefits: [
      'Padronização de processo com menos retrabalho e menos erro manual',
      'Visibilidade ponta a ponta da operação e dos gargalos do fluxo',
      'Base técnica preparada para evolução contínua e novas integrações',
    ],
    highlights: ['Arquitetura modular', 'UX orientada ao fluxo operacional', 'Governança de dados e acessos'],
    deliverables: [
      'Mapeamento de processos, regras de negócio e requisitos críticos',
      'Arquitetura técnica, fluxo de dados e backlog priorizado',
      'Implementação fullstack com testes',
      'Observabilidade, monitoramento e plano de evolução',
    ],
    kpis: ['Redução de retrabalho', 'Tempo médio de execução por etapa', 'Confiabilidade dos dados'],
    cta: {
      title: 'Planejar arquitetura e escopo técnico',
      description: 'Sessão técnica para mapear requisitos, riscos, integrações e o roadmap de entrega.',
      primaryLabel: 'Agendar reunião técnica',
      primaryHref: '/agendar-reuniao',
      secondaryLabel: 'Solicitar orçamento',
      secondaryHref: '/solicitar-orcamento',
    },
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80&auto=format&fit=crop',
  },
  {
    slug: 'sistemas-exclusivos',
    title: 'Sistemas Exclusivos',
    excerpt: 'Produtos digitais proprietários para empresas que precisam transformar know-how em ativo tecnológico.',
    subtitle: 'Tecnologia proprietária como vantagem competitiva.',
    description:
      'Desenvolvemos sistemas exclusivos com foco em IP, governança e diferenciais de mercado. É a escolha para empresas que precisam transformar processos, metodologia ou inteligência própria em produto digital escalável.',
    applications: [
      'Plataformas SaaS para parceiros, clientes ou times internos',
      'Backoffice proprietário para regras avançadas de operação e compliance',
      'MVPs técnicos com arquitetura pronta para escalar sem refazer a base',
    ],
    benefits: [
      'Controle total sobre roadmap, dados e experiência do usuário',
      'Menor dependência de plataformas prontas que limitam evolução',
      'Ativo tecnológico alinhado ao modelo de negócio e à margem da operação',
    ],
    highlights: ['Arquitetura orientada a domínio', 'Regras de negócio customizadas', 'Escalabilidade e segurança'],
    deliverables: [
      'Descoberta de produto, domínio e diferenciais competitivos',
      'Arquitetura de software com padrões de evolução e segurança',
      'Implementação fullstack com testes, observabilidade e documentação',
      'Transição para operação assistida e evolução do roadmap',
    ],
    kpis: ['Time-to-market', 'Aderência a processos críticos', 'Custo operacional por transação'],
    cta: {
      title: 'Validar o escopo do seu sistema exclusivo',
      description: 'Workshop técnico para definir arquitetura, marcos, investimento e critério de escala.',
      primaryLabel: 'Agendar reunião técnica',
      primaryHref: '/agendar-reuniao',
      secondaryLabel: 'Solicitar orçamento',
      secondaryHref: '/solicitar-orcamento',
    },
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80&auto=format&fit=crop',
  },
  {
    slug: 'sites-premium',
    title: 'Sites Premium',
    excerpt: 'Sites institucionais de alta performance para posicionamento, autoridade e geração de demanda.',
    subtitle: 'Marca forte com engenharia focada em performance.',
    description:
      'Construímos sites premium para empresas que precisam posicionamento sólido, navegação clara e conversão em canais digitais. A entrega combina branding, UX, performance técnica e estrutura de conteúdo orientada a demanda.',
    applications: [
      'Sites institucionais para captação de leads qualificados',
      'Landing pages para campanhas de produto, vendas e lançamento',
      'Páginas de autoridade para ofertas B2B, consultorias e operações comerciais',
    ],
    benefits: [
      'Melhora da percepção de marca e da confiança comercial',
      'Conversão orientada por funil, intenção e comportamento de navegação',
      'Performance técnica para SEO, mídia paga e campanhas de aquisição',
    ],
    highlights: ['Core Web Vitals', 'Arquitetura de conteúdo orientada à conversão', 'SEO técnico'],
    deliverables: [
      'Diagnóstico de posicionamento, mensagem e jornada de conversão',
      'UX/UI de páginas principais e funis estratégicos',
      'Implementação técnica com CMS, analytics e rastreamento',
      'Plano de evolução contínua de conversão e conteúdo',
    ],
    kpis: ['Taxa de conversão', 'Tempo de carregamento', 'Custo por lead'],
    cta: {
      title: 'Estruturar seu site premium para conversão',
      description: 'Análise técnica de funil, performance e prioridades de entrega para acelerar geração de demanda.',
      primaryLabel: 'Agendar reunião técnica',
      primaryHref: '/agendar-reuniao',
      secondaryLabel: 'Solicitar orçamento',
      secondaryHref: '/solicitar-orcamento',
    },
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80&auto=format&fit=crop',
  },
  {
    slug: 'e-commerce',
    title: 'E-commerce',
    excerpt: 'Operações de venda online com stack de comércio preparada para conversão, integração e escala.',
    subtitle: 'Canal digital escalável com operação de ponta a ponta.',
    description:
      'Implementamos e-commerces preparados para vender com previsibilidade, conectando catálogo, pagamento, logística, CRM e atendimento em uma arquitetura única. O foco é sustentar crescimento sem quebrar a operação.',
    applications: [
      'Lojas online B2C com alto volume de pedidos e campanhas frequentes',
      'Operações B2B com pedido recorrente e condições comerciais específicas',
      'Catálogos digitais integrados a ERP, estoque, CRM e atendimento',
    ],
    benefits: [
      'Reduz erro operacional entre venda, faturamento e entrega',
      'Aumenta taxa de conversão, ticket médio e capacidade de retenção',
      'Cria base escalável para novos canais, catálogos e campanhas',
    ],
    highlights: ['Jornada de compra otimizada', 'Integrações com ERP, CRM e pagamentos', 'Operação omnichannel'],
    deliverables: [
      'Arquitetura de e-commerce e desenho da operação comercial',
      'Implementação de loja, checkout e backoffice de gestão',
      'Integrações com pagamento, frete, ERP e sistemas internos',
      'Monitoramento de funil e plano contínuo de otimização',
    ],
    kpis: ['Taxa de conversão', 'Abandono de carrinho', 'Tempo médio de processamento de pedido'],
    cta: {
      title: 'Planejar seu e-commerce com arquitetura escalável',
      description: 'Avaliamos stack, integrações e metas comerciais para sustentar crescimento com consistência.',
      primaryLabel: 'Agendar reunião técnica',
      primaryHref: '/agendar-reuniao',
      secondaryLabel: 'Solicitar orçamento',
      secondaryHref: '/solicitar-orcamento',
    },
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1400&q=80&auto=format&fit=crop',
  },
  {
    slug: 'automacao-integracoes-hardware',
    title: 'Automação + Integrações com Hardware',
    excerpt: 'Fluxos automatizados conectando software, sensores e equipamentos físicos.',
    subtitle: 'Operação conectada para reduzir fricção e aumentar controle.',
    description:
      'Desenhamos e implementamos automações com integração de hardware para operações que exigem captura de eventos em campo, acionamento remoto e rastreabilidade em tempo real. É onde software precisa conversar com o mundo físico sem ruído.',
    applications: [
      'Integração de coletores, sensores, balanças e dispositivos com sistema web',
      'Monitoramento de eventos físicos com alertas automáticos e auditoria',
      'Controle de estoque, produção ou manutenção com dados em tempo real',
    ],
    benefits: [
      'Menos lançamento manual e menos falhas operacionais',
      'Rastreabilidade de eventos críticos da operação em ambiente real',
      'Tomada de decisão com dados confiáveis capturados em campo',
    ],
    highlights: ['Integração via APIs e protocolos industriais', 'Eventos em tempo real', 'Auditoria e resiliência operacional'],
    deliverables: [
      'Diagnóstico do fluxo físico e digital da operação',
      'Projeto técnico de integração entre hardware, software e dados',
      'Implementação de automações, filas, alertas e monitoramento',
      'Documentação operacional e handoff para times internos',
    ],
    kpis: ['Redução de erro manual', 'Tempo de resposta a eventos', 'Disponibilidade da integração'],
    cta: {
      title: 'Conectar hardware e software da sua operação',
      description: 'Desenho técnico para reduzir gargalos, padronizar eventos e melhorar previsibilidade operacional.',
      primaryLabel: 'Agendar reunião técnica',
      primaryHref: '/agendar-reuniao',
      secondaryLabel: 'Solicitar orçamento',
      secondaryHref: '/solicitar-orcamento',
    },
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1400&q=80&auto=format&fit=crop',
  },
  {
    slug: 'ia-automacoes-comerciais',
    title: 'IA e Automações Comerciais',
    excerpt: 'Playbooks comerciais com IA para acelerar resposta, qualificação e fechamento.',
    subtitle: 'Inteligência aplicada para escalar receita com critério.',
    description:
      'Aplicamos IA em processos comerciais para qualificar leads, priorizar oportunidades, automatizar follow-ups e apoiar o time de vendas com contexto real de negócio. O objetivo é aumentar velocidade com critério, sem automatizar desperdício.',
    applications: [
      'Qualificação automática de leads por perfil, intenção e histórico',
      'Automação de follow-up multicanal com regras de negócio e gatilhos',
      'Assistentes para SDRs e closers baseados em dados internos e CRM',
    ],
    benefits: [
      'Aumento de produtividade do time comercial sem perder contexto',
      'Menor tempo de resposta ao lead qualificado',
      'Mais previsibilidade de funil com menos desperdício de esforço',
    ],
    highlights: ['Classificação inteligente de oportunidades', 'Playbooks automatizados', 'Integração com CRM e canais'],
    deliverables: [
      'Mapeamento da jornada comercial e dos pontos de atrito',
      'Implementação de automações, agentes de IA e regras de priorização',
      'Integração com CRM, WhatsApp, e-mail e canais de atendimento',
      'Dashboard de funil, conversão e produtividade',
    ],
    kpis: ['Conversão por etapa', 'Tempo de resposta', 'Custo de aquisição por canal'],
    cta: {
      title: 'Aplicar IA no funil comercial da sua empresa',
      description: 'Diagnóstico de maturidade e plano técnico para automações com retorno claro e mensurável.',
      primaryLabel: 'Agendar reunião técnica',
      primaryHref: '/agendar-reuniao',
      secondaryLabel: 'Solicitar orçamento',
      secondaryHref: '/solicitar-orcamento',
    },
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&auto=format&fit=crop',
  },
]

export const servicesBySlug: Record<string, ServiceItem> = Object.fromEntries(
  services.map((service) => [service.slug, service])
)

export const serviceProcessSteps = [
  {
    number: '01',
    title: 'Imersão no Negócio',
    description: 'Levantamos contexto, metas, restrições e criticidade operacional para alinhar tecnologia com resultado esperado.',
  },
  {
    number: '02',
    title: 'Diagnóstico de Gargalos',
    description: 'Mapeamos processos atuais, pontos de fricção e riscos técnicos da operação.',
  },
  {
    number: '03',
    title: 'Arquitetura da Solução',
    description: 'Definimos stack, integrações, segurança e modelo de dados com visão de escala.',
  },
  {
    number: '04',
    title: 'Roadmap Executivo',
    description: 'Organizamos entregas por prioridade de impacto, prazo e dependência técnica.',
  },
  {
    number: '05',
    title: 'Implementação Iterativa',
    description: 'Executamos em sprints curtas com validação contínua e transparência de progresso.',
  },
  {
    number: '06',
    title: 'Go-live Assistido',
    description: 'Publicamos com monitoramento ativo, plano de contingência e suporte operacional.',
  },
  {
    number: '07',
    title: 'Evolução Contínua',
    description: 'Acompanhamos KPIs e evoluímos a solução com foco em performance, estabilidade e crescimento.',
  },
] as const
