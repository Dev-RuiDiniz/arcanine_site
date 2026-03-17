export interface ServiceItem {
  slug: string
  title: string
  category: string
  decisionLabel: string
  excerpt: string
  subtitle: string
  description: string
  idealFor: string[]
  businessProblems: string[]
  proofHighlights: Array<{
    label: string
    value: string
  }>
  applications: string[]
  benefits: string[]
  highlights: string[]
  deliverables: string[]
  kpis: string[]
  engagementNote: string
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
    category: 'Operação & Governança',
    decisionLabel: 'Quando processos críticos já não cabem em plataformas genéricas',
    excerpt: 'Plataformas sob medida para fluxos críticos, integrações complexas e ganho real de produtividade.',
    subtitle: 'Arquitetura orientada à operação, governança e resultado.',
    description:
      'Projetamos e implementamos plataformas web para empresas que não podem mais depender de planilhas, retrabalho e sistemas genéricos. O foco é transformar operação crítica em fluxo previsível, rastreável e escalável.',
    idealFor: [
      'Times operacionais, financeiros, atendimento ou backoffice com alto volume de regras e exceções',
      'Empresas que já tentaram adaptar ERPs, CRMs ou ferramentas prontas e continuam com retrabalho',
      'Operações que precisam integrar dados, aprovações, SLA e visibilidade em uma base única',
    ],
    businessProblems: [
      'Processos espalhados entre planilhas, sistemas desconectados e comunicação manual',
      'Baixa rastreabilidade sobre etapas, responsáveis, gargalos e histórico operacional',
      'Dificuldade de evoluir o fluxo sem quebrar a operação ou criar novas ilhas de informação',
    ],
    proofHighlights: [
      { label: 'Escopo típico', value: 'backoffice, workflow, painéis, aprovações e integrações críticas' },
      { label: 'Entrega central', value: 'base modular preparada para evolução contínua' },
      { label: 'Foco executivo', value: 'controle, rastreabilidade e produtividade' },
    ],
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
    engagementNote:
      'Entramos para desenhar o fluxo-alvo, estruturar a arquitetura e colocar a operação em uma base que possa crescer sem improviso.',
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
    category: 'Produto & IP',
    decisionLabel: 'Quando o software precisa refletir o diferencial do negócio, não o limite de uma ferramenta pronta',
    excerpt: 'Produtos digitais proprietários para empresas que precisam transformar know-how em ativo tecnológico.',
    subtitle: 'Tecnologia proprietária como vantagem competitiva.',
    description:
      'Desenvolvemos sistemas exclusivos com foco em IP, governança e diferenciais de mercado. É a escolha para empresas que precisam transformar processos, metodologia ou inteligência própria em produto digital escalável.',
    idealFor: [
      'Empresas que querem transformar operação, metodologia ou expertise em produto digital próprio',
      'Negócios que precisam de controle sobre roadmap, dados e experiência do usuário',
      'Times que já validaram a necessidade de software autoral e precisam escalar com base correta',
    ],
    businessProblems: [
      'Dependência de ferramentas terceiras que limitam diferenciação e margem',
      'Roadmap travado por restrições de plataforma ou integrações frágeis',
      'Falta de uma arquitetura robusta para suportar escala e novas linhas de produto',
    ],
    proofHighlights: [
      { label: 'Escopo típico', value: 'SaaS, backoffices proprietários e produtos internos estratégicos' },
      { label: 'Entrega central', value: 'arquitetura orientada a domínio e evolução' },
      { label: 'Foco executivo', value: 'propriedade do ativo e capacidade de expansão' },
    ],
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
    engagementNote:
      'A entrega é organizada para proteger o ativo tecnológico desde o início, com domínio claro, backlog priorizado e base preparada para evolução.',
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
    category: 'Posicionamento & Demanda',
    decisionLabel: 'Quando o site precisa sustentar reputação, gerar demanda e traduzir sofisticação real',
    excerpt: 'Sites institucionais de alta performance para posicionamento, autoridade e geração de demanda.',
    subtitle: 'Marca forte com engenharia focada em performance.',
    description:
      'Construímos sites premium para empresas que precisam posicionamento sólido, navegação clara e conversão em canais digitais. A entrega combina branding, UX, performance técnica e estrutura de conteúdo orientada a demanda.',
    idealFor: [
      'Empresas B2B que precisam elevar percepção de marca e filtrar melhor oportunidades',
      'Operações comerciais que dependem de autoridade digital para vender soluções complexas',
      'Negócios que já investem em mídia, outbound ou conteúdo e precisam de uma base melhor de conversão',
    ],
    businessProblems: [
      'Site atual transmite pouca autoridade para o nível real da empresa',
      'Páginas institucionais não ajudam o time comercial a qualificar melhor a demanda',
      'Falta de alinhamento entre posicionamento, UX, performance e arquitetura de conteúdo',
    ],
    proofHighlights: [
      { label: 'Escopo típico', value: 'home, páginas de oferta, cases, trust pages e fluxos de contato' },
      { label: 'Entrega central', value: 'posição premium com base técnica forte' },
      { label: 'Foco executivo', value: 'marca, conversão e sustentação comercial' },
    ],
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
    engagementNote:
      'O trabalho combina direção de arte, arquitetura de conteúdo, motion, frontend e critérios de conversão para sustentar o comercial.',
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
    category: 'Comércio Digital',
    decisionLabel: 'Quando vender online já exige operação integrada, não apenas uma loja no ar',
    excerpt: 'Operações de venda online com stack de comércio preparada para conversão, integração e escala.',
    subtitle: 'Canal digital escalável com operação de ponta a ponta.',
    description:
      'Implementamos e-commerces preparados para vender com previsibilidade, conectando catálogo, pagamento, logística, CRM e atendimento em uma arquitetura única. O foco é sustentar crescimento sem quebrar a operação.',
    idealFor: [
      'Lojas com aumento de volume e gargalos entre venda, pagamento, logística e atendimento',
      'Operações B2B ou B2C que precisam conectar e-commerce a ERP, estoque e CRM',
      'Empresas que querem transformar o canal online em base de crescimento previsível',
    ],
    businessProblems: [
      'Pedidos entram, mas a operação sofre para faturar, separar, integrar e dar visibilidade',
      'Catálogo, preço, estoque e campanhas não conversam de forma confiável',
      'O crescimento aumenta o atrito operacional em vez de melhorar margem e previsibilidade',
    ],
    proofHighlights: [
      { label: 'Escopo típico', value: 'loja, checkout, backoffice, ERP, CRM e logística' },
      { label: 'Entrega central', value: 'operação de comércio com base integrada' },
      { label: 'Foco executivo', value: 'conversão, consistência e sustentação de escala' },
    ],
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
    engagementNote:
      'A entrega parte do desenho operacional do canal para garantir que crescimento de vendas não gere caos em estoque, faturamento e atendimento.',
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
    category: 'Operação Conectada',
    decisionLabel: 'Quando software e ambiente físico precisam conversar sem ruído operacional',
    excerpt: 'Fluxos automatizados conectando software, sensores e equipamentos físicos.',
    subtitle: 'Operação conectada para reduzir fricção e aumentar controle.',
    description:
      'Desenhamos e implementamos automações com integração de hardware para operações que exigem captura de eventos em campo, acionamento remoto e rastreabilidade em tempo real. É onde software precisa conversar com o mundo físico sem ruído.',
    idealFor: [
      'Operações que dependem de sensores, coletores, balanças, etiquetas, equipamentos ou dispositivos em campo',
      'Ambientes com eventos críticos que precisam gerar ação automática e histórico confiável',
      'Empresas que precisam transformar telemetria e eventos físicos em dado operacional útil',
    ],
    businessProblems: [
      'Eventos importantes continuam sendo lançados manualmente ou acompanhados sem rastreabilidade',
      'A integração entre dispositivos e software é frágil, lenta ou pouco auditável',
      'Falta visibilidade operacional para responder rápido a incidentes e desvios no ambiente real',
    ],
    proofHighlights: [
      { label: 'Escopo típico', value: 'telemetria, alertas, dashboards, filas e controle em tempo real' },
      { label: 'Entrega central', value: 'software conectado ao mundo físico com governança' },
      { label: 'Foco executivo', value: 'menos erro manual e mais previsibilidade operacional' },
    ],
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
    engagementNote:
      'O projeto é estruturado para que captura, normalização, orquestração e ação operacional aconteçam de forma confiável e auditável.',
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
    category: 'Receita & Eficiência',
    decisionLabel: 'Quando o funil precisa ganhar velocidade sem perder critério',
    excerpt: 'Playbooks comerciais com IA para acelerar resposta, qualificação e fechamento.',
    subtitle: 'Inteligência aplicada para escalar receita com critério.',
    description:
      'Aplicamos IA em processos comerciais para qualificar leads, priorizar oportunidades, automatizar follow-ups e apoiar o time de vendas com contexto real de negócio. O objetivo é aumentar velocidade com critério, sem automatizar desperdício.',
    idealFor: [
      'Times comerciais com alto volume de leads, follow-up inconsistente ou priorização manual frágil',
      'Operações de venda que já usam CRM, WhatsApp, e-mail ou múltiplos canais e precisam orquestração',
      'Empresas que querem usar IA para aumentar resposta e produtividade sem perder controle do funil',
    ],
    businessProblems: [
      'Leads bons recebem resposta lenta ou contexto insuficiente para avanço comercial',
      'O time gasta energia demais com tarefas repetitivas e pouca energia no que realmente fecha',
      'A empresa não enxerga claramente gargalos de qualificação, follow-up e conversão por etapa',
    ],
    proofHighlights: [
      { label: 'Escopo típico', value: 'qualificação, follow-up, agentes, CRM e dashboards de funil' },
      { label: 'Entrega central', value: 'mais velocidade comercial com critérios explícitos' },
      { label: 'Foco executivo', value: 'produtividade, resposta e previsibilidade de receita' },
    ],
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
    engagementNote:
      'Começamos pela lógica comercial: quais sinais importam, quais regras orientam a priorização e onde a automação realmente gera ganho líquido.',
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
    title: 'Diagnóstico do contexto',
    description: 'Levantamos metas, restrições, criticidade e o estado real da operação antes de propor arquitetura.',
  },
  {
    number: '02',
    title: 'Enquadramento do problema',
    description: 'Traduzimos gargalos, dependências e fluxos críticos em uma leitura objetiva do que precisa ser resolvido.',
  },
  {
    number: '03',
    title: 'Estruturação da solução',
    description: 'Definimos stack, integrações, entregáveis, critérios de segurança e a lógica de evolução da base.',
  },
  {
    number: '04',
    title: 'Plano executivo de entrega',
    description: 'Organizamos o roadmap por impacto, dependência técnica, risco e prioridade de negócio.',
  },
  {
    number: '05',
    title: 'Implementação com validação',
    description: 'Executamos em ciclos com acompanhamento constante, ajustes orientados por contexto e transparência de progresso.',
  },
  {
    number: '06',
    title: 'Go-live e estabilização',
    description: 'Publicamos com monitoramento, plano de contingência, handoff e suporte inicial à operação.',
  },
] as const
