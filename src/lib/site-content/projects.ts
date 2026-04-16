export const caseCategories = [
  'Fintech & Web3',
  'IA & Automação SaaS',
  'IoT & Sistemas de Gestão',
] as const

export type CaseCategory = (typeof caseCategories)[number]
export type CaseStage = 'PUBLISHED' | 'WORK_IN_PROGRESS' | 'COMING_SOON'

export interface CaseItem {
  id: string
  slug: string
  title: string
  category: CaseCategory
  segment: string
  stage: CaseStage
  excerpt: string
  challengePoints: string[]
  context: string
  solution: string
  architecture: string
  outcomes: string[]
  stack: string[]
  coverImage: string
  coverAlt: string
  coverPosition?: string
  featured: boolean
  confidentialityNote?: string
}

export const categoryDescriptions: Record<CaseCategory, string> = {
  'Fintech & Web3':
    'Arquiteturas financeiras, engines transacionais e operações digitais com requisitos elevados de consistência, rastreabilidade e resiliência.',
  'IA & Automação SaaS':
    'Produtos com IA aplicada e automações operacionais desenhadas para acelerar triagem, decisão, produtividade e qualidade de execução.',
  'IoT & Sistemas de Gestão':
    'Plataformas conectadas à operação real, integrando dispositivos, workflows internos, governança de dados e software orientado a controle.',
}

export const cases: CaseItem[] = [
  {
    id: '1',
    slug: 'plataforma-fintech-ledger-imutavel',
    title: 'Plataforma Fintech Cloud-Native com Ledger Imutável',
    category: 'Fintech & Web3',
    segment: 'Operação financeira digital',
    stage: 'PUBLISHED',
    excerpt:
      'Core financeiro em AWS com ledger double-entry, microsserviços e integração EVM para produtos que exigem consistência contábil e trilha confiável de eventos.',
    challengePoints: [
      'Consolidar eventos financeiros críticos em uma base única e auditável',
      'Separar regras de negócio transacionais da evolução de novos produtos',
      'Manter rastreabilidade entre lançamentos internos, saldos e eventos on-chain',
    ],
    context:
      'A operação precisava consolidar eventos financeiros críticos em uma base única, auditável e preparada para evoluir produtos digitais sem depender de controles paralelos ou reconciliações manuais frágeis.',
    solution:
      'A Arcane estruturou uma plataforma financeira cloud-native com domínio contábil orientado a ledger imutável, serviços desacoplados por contexto de negócio e integrações blockchain para ativos e liquidações em redes EVM.',
    architecture:
      'Arquitetura em AWS com microsserviços, event-driven workflows, ledger double-entry, APIs transacionais, observabilidade operacional e camada de integração on-chain para leitura e escrita de eventos em redes compatíveis com EVM.',
    outcomes: [
      'Rastreabilidade ponta a ponta entre lançamentos internos, saldos e eventos de integração.',
      'Base técnica preparada para reconciliação financeira com separação clara entre domínio contábil e produtos de borda.',
      'Governança de evolução com menor acoplamento entre serviços transacionais, integrações e regras de negócio.',
    ],
    stack: ['AWS', 'Microsserviços', 'Ledger double-entry', 'EVM', 'Mensageria', 'Observabilidade'],
    coverImage: '/projects/fintech-ledger.jpg',
    coverAlt: 'Moedas digitais sobre gráfico financeiro representando operação fintech com componente web3.',
    coverPosition: 'center center',
    featured: true,
    confidentialityNote:
      'Algumas denominações internas e referências ao contexto do cliente foram abstraídas para preservar confidencialidade comercial.',
  },
  {
    id: '2',
    slug: 'bot-trading-spot-gestao-risco',
    title: 'Bot de Trading Spot com Gestão de Risco',
    category: 'Fintech & Web3',
    segment: 'Trading algorítmico',
    stage: 'PUBLISHED',
    excerpt:
      'Engine profissional para execução spot com ordens idempotentes, regras de risco parametrizadas e dashboard operacional para acompanhamento em tempo real.',
    challengePoints: [
      'Evitar duplicidade operacional no fluxo de ordens',
      'Aplicar regras de risco antes de cada execução sem aumentar ruído',
      'Dar visibilidade contínua para posições, incidentes e comportamento da estratégia',
    ],
    context:
      'A estratégia dependia de uma camada de execução mais previsível, com tratamento consistente de eventos, proteção contra duplicidade de ordens e visibilidade operacional para revisão de posições e comportamento da engine.',
    solution:
      'Foi construída uma engine de trading com pipelines de execução determinísticos, gerenciamento de risco por estratégia, trilha de eventos para ordens e interface operacional para acompanhamento de sinais, posições e incidentes.',
    architecture:
      'Serviços de execução e monitoramento separados por responsabilidade, filas para processamento idempotente, camada de risco antes do envio de ordens e dashboard em FastAPI para leitura de estado, alertas e auditoria operacional.',
    outcomes: [
      'Execução padronizada com regras explícitas de risco e validação antes de cada operação.',
      'Menor exposição a duplicidade operacional por desenho idempotente no fluxo de ordens.',
      'Visibilidade centralizada para latência, estado de posições, falhas e eventos relevantes da estratégia.',
    ],
    stack: ['Python', 'FastAPI', 'Engine de execução', 'Risk management', 'Filas', 'Dashboards operacionais'],
    coverImage: '/projects/trading-bot.jpg',
    coverAlt: 'Operador acompanhando múltiplos monitores com gráficos de mercado e performance.',
    coverPosition: '38% center',
    featured: false,
    confidentialityNote:
      'A nomenclatura pública do case foi mantida em formato descritivo para evitar exposição de produto e estratégia proprietária.',
  },
  {
    id: '3',
    slug: 'entrevistas-ia-whatsapp',
    title: 'Plataforma de Entrevistas via IA no WhatsApp',
    category: 'IA & Automação SaaS',
    segment: 'RH conversacional e triagem',
    stage: 'PUBLISHED',
    excerpt:
      'Orquestração de entrevistas via WhatsApp com sessões guiadas por IA, leitura de sentimento e ranking automático para acelerar triagem em escala.',
    challengePoints: [
      'Escalar triagem sem perder consistência entre candidatos e vagas',
      'Consolidar sinais qualitativos sem aumentar o trabalho manual do recrutador',
      'Manter revisão humana com melhor contexto para priorização',
    ],
    context:
      'O processo de triagem exigia alto esforço manual para conduzir entrevistas iniciais, consolidar impressões qualitativas e manter padrão de avaliação entre candidatos em diferentes vagas e volumes de demanda.',
    solution:
      'A Arcane desenvolveu um orquestrador de sessões conversacionais via WhatsApp, com prompts por etapa, análise automática de respostas, leitura de sentimento e ranqueamento assistido por LLM para apoiar recrutadores.',
    architecture:
      'Fluxo conversacional integrado ao WhatsApp, orquestração de sessões com controle de estado, pipelines de processamento textual, LLM para análise e ranking, além de painel para revisão humana e priorização de candidatos.',
    outcomes: [
      'Triagem inicial em escala com maior consistência entre entrevistas e critérios aplicados.',
      'Consolidação automática de sinais qualitativos para apoiar decisões sem perder rastreabilidade.',
      'Redução do trabalho manual de leitura, classificação e organização de respostas em fases iniciais.',
    ],
    stack: ['WhatsApp API', 'LLM', 'Orquestração de sessões', 'Análise de sentimento', 'Ranking automático'],
    coverImage: '/projects/ia-entrevistas.jpg',
    coverAlt: 'Mão segurando smartphone com tela do WhatsApp aberta para interação conversacional.',
    coverPosition: 'center 26%',
    featured: true,
  },
  {
    id: '4',
    slug: 'otimizacao-anuncios-marketplace',
    title: 'SaaS de Otimização de Anúncios para Marketplace',
    category: 'IA & Automação SaaS',
    segment: 'Marketplace e growth commerce',
    stage: 'PUBLISHED',
    excerpt:
      'Plataforma de análise competitiva para Mercado Livre com sugestões orientadas por IA para títulos, preços e posicionamento comercial.',
    challengePoints: [
      'Ler o cenário competitivo com velocidade suficiente para agir por SKU',
      'Padronizar otimizações sem depender de revisão manual anúncio por anúncio',
      'Dar suporte editorial e analítico para decisões de pricing e posicionamento',
    ],
    context:
      'A operação precisava reagir com mais velocidade à dinâmica competitiva do marketplace, identificando oportunidades de otimização sem depender de revisão manual extensa de anúncio por anúncio.',
    solution:
      'Foi criado um SaaS que consolida dados competitivos, compara posicionamento entre ofertas e sugere ajustes de título, preço e argumentação comercial com apoio de IA para ciclos mais rápidos de otimização.',
    architecture:
      'Pipelines de coleta e enriquecimento de dados de anúncios, regras comparativas por categoria, geração assistida por IA para copy comercial e painel de revisão para tomada de decisão antes da publicação.',
    outcomes: [
      'Leitura mais rápida do cenário competitivo por SKU, categoria e faixa de preço.',
      'Padronização do processo de melhoria de títulos e ofertas com apoio analítico e editorial.',
      'Base de trabalho mais ágil para times que operam marketplace com alto volume de anúncios.',
    ],
    stack: ['SaaS analytics', 'IA aplicada', 'Comparativos competitivos', 'Catálogo', 'Pricing intelligence'],
    coverImage: '/projects/marketplace-ml.jpg',
    coverAlt: 'Notebook com interface de loja online e smartphone ao lado em contexto de marketplace.',
    coverPosition: '58% center',
    featured: false,
    confidentialityNote:
      'Referências operacionais foram descritas por função e contexto, sem expor conta, seller ou estrutura comercial do cliente.',
  },
  {
    id: '5',
    slug: 'cadencia-emails-auditoria',
    title: 'Automação de Cadência de E-mails com Auditoria',
    category: 'IA & Automação SaaS',
    segment: 'Automação comercial B2B',
    stage: 'PUBLISHED',
    excerpt:
      'Cadência profissional via Power Automate com controle de estado, governança de disparos e histórico auditável para processos comerciais recorrentes.',
    challengePoints: [
      'Evitar reprocessamento indevido e ambiguidades de estado por contato',
      'Auditar com clareza cada etapa da jornada comercial automatizada',
      'Criar governança operacional sem travar a rotina do time',
    ],
    context:
      'A equipe precisava organizar cadências recorrentes sem perder rastreabilidade sobre quem entrou em cada fluxo, em qual etapa se encontrava e quais eventos já haviam sido processados ou bloqueados.',
    solution:
      'A Arcane modelou uma automação com estados explícitos de jornada, gatilhos condicionais, auditoria de execuções e proteção contra reprocessamentos indevidos, usando Power Automate como motor operacional.',
    architecture:
      'Fluxos acionados por eventos e regras de negócio, armazenamento de estado por contato ou processo, checkpoints para auditoria e conectores com serviços de e-mail e bases de suporte ao acompanhamento operacional.',
    outcomes: [
      'Execução mais previsível de cadências com histórico claro por etapa e por contato.',
      'Redução de ambiguidades sobre reenvio, pausa, retomada e exceções operacionais.',
      'Governança melhor para times que precisam auditar jornadas e manter padrão de execução.',
    ],
    stack: ['Power Automate', 'State management', 'Auditoria', 'Integrações de e-mail', 'Workflows'],
    coverImage: '/projects/cadencia-emails.jpg',
    coverAlt: 'Smartphone exibindo atalho de e-mail em contexto de comunicação e cadência digital.',
    coverPosition: 'center 22%',
    featured: false,
  },
  {
    id: '6',
    slug: 'gasnow-monitoramento-gas',
    title: 'GasNow: Monitoramento Inteligente de Gás',
    category: 'IoT & Sistemas de Gestão',
    segment: 'IoT para utilidades e distribuição',
    stage: 'PUBLISHED',
    excerpt:
      'Solução conectada com ESP32 e LoRa para monitoramento remoto de gás, consolidação de telemetria e predição de consumo.',
    challengePoints: [
      'Transformar leituras físicas e reativas em telemetria confiável',
      'Consolidar dados de ativos distribuídos em uma base operacional útil',
      'Criar uma camada de predição e alerta sem perder simplicidade de operação',
    ],
    context:
      'A operação precisava transformar leituras físicas e rotinas reativas em acompanhamento contínuo, com dados confiáveis para planejar reposição, identificar variações e antecipar comportamento de consumo.',
    solution:
      'A Arcane integrou dispositivos embarcados, comunicação LoRa e backend analítico para captar medições, acompanhar nível e comportamento de uso, além de projetar consumo com base em histórico operacional.',
    architecture:
      'Dispositivos ESP32 em campo, comunicação LoRa para transmissão de telemetria, backend para ingestão e normalização de dados, dashboards operacionais e modelos de previsão para apoiar planejamento e alertas.',
    outcomes: [
      'Leitura remota mais frequente e organizada para acompanhamento de ativos distribuídos.',
      'Visibilidade histórica para entender padrões de consumo e orientar reposição.',
      'Base técnica para alertas operacionais e evolução de previsões conforme a operação amadurece.',
    ],
    stack: ['ESP32', 'LoRa', 'IoT backend', 'Predição de consumo', 'Dashboards'],
    coverImage: '/projects/gasnow.jpg',
    coverAlt: 'Placa eletrônica e componentes de hardware representando telemetria e IoT.',
    coverPosition: 'center center',
    featured: true,
  },
  {
    id: '7',
    slug: 'etiquetas-eletronicas-atualizacao-massiva',
    title: 'Plataforma de Etiquetas Eletrônicas com Atualização Massiva',
    category: 'IoT & Sistemas de Gestão',
    segment: 'Varejo conectado e pricing',
    stage: 'PUBLISHED',
    excerpt:
      'Camada operacional para atualização massiva de preços em ESL, com distribuição via MQTT e HTTPS para ambientes que exigem sincronismo e escala.',
    challengePoints: [
      'Reduzir latência e inconsistência entre decisão comercial e ponto de venda',
      'Distribuir updates em massa com confirmação e capacidade de reenvio',
      'Manter rastreabilidade operacional em uma rotina de pricing sensível',
    ],
    context:
      'A atualização de preços em loja exigia um fluxo mais confiável entre decisão comercial e ponta física, reduzindo latência, inconsistências e dependência de processos manuais para publicação em massa.',
    solution:
      'Foi implementada uma plataforma de orquestração de updates para etiquetas eletrônicas, com distribuição em lote, confirmação de processamento e integração com canais de comunicação adequados ao parque instalado.',
    architecture:
      'Serviços de preparação e despacho de payloads, distribuição híbrida por MQTT e HTTPS, controles de reenvio e monitoramento de entrega para operações de atualização massiva com rastreabilidade operacional.',
    outcomes: [
      'Publicação de preços em escala com processo centralizado e mais controlado.',
      'Melhor alinhamento entre decisão comercial e atualização visível no ponto de venda.',
      'Menor fricção operacional para campanhas, ajustes recorrentes e rotinas de pricing.',
    ],
    stack: ['MQTT', 'HTTPS', 'ESL', 'Mensageria', 'Operação de pricing'],
    coverImage: '/projects/esl-pricing.jpg',
    coverAlt: 'Setor de supermercado com placas e etiquetas de preço visíveis em ambiente de varejo.',
    coverPosition: 'center center',
    featured: false,
  },
  {
    id: '8',
    slug: 'gestao-acao-social-lgpd',
    title: 'Sistema de Gestão de Ação Social com Rastreabilidade LGPD',
    category: 'IoT & Sistemas de Gestão',
    segment: 'Gestão social e compliance',
    stage: 'PUBLISHED',
    excerpt:
      'Plataforma React + FastAPI para organizar atendimentos, fluxos sociais e trilhas de dados sensíveis com governança aderente à LGPD.',
    challengePoints: [
      'Organizar fluxos sociais com histórico confiável de atendimento',
      'Tratar dados sensíveis com melhor controle de acesso e rastreabilidade',
      'Dar previsibilidade operacional sem degradar a experiência das equipes',
    ],
    context:
      'O processo social exigia maior controle sobre cadastro, histórico de atendimento, fluxos internos e tratamento de dados pessoais, com necessidade de rastreabilidade sem comprometer a experiência operacional das equipes.',
    solution:
      'A Arcane entregou um sistema completo para gestão de ações sociais, com controle de perfis, histórico por atendimento, organização de fluxos e mecanismos de governança voltados à proteção e uso adequado dos dados.',
    architecture:
      'Frontend em React, APIs em FastAPI, camada de autenticação e autorização, trilhas de auditoria e modelagem orientada a consentimento, acesso contextual e governança sobre dados sensíveis.',
    outcomes: [
      'Rastreabilidade mais clara sobre atendimentos, movimentações e histórico operacional.',
      'Estrutura técnica melhor alinhada a controle de acesso e tratamento responsável de dados pessoais.',
      'Base unificada para equipes sociais operarem com mais previsibilidade e menor dispersão de informação.',
    ],
    stack: ['React', 'FastAPI', 'LGPD', 'RBAC', 'Auditoria', 'Workflows operacionais'],
    coverImage: '/projects/acao-social.jpg',
    coverAlt: 'Equipe reunida ao redor de mesa com notebooks e tablets em contexto de gestão colaborativa.',
    coverPosition: 'center center',
    featured: true,
    confidentialityNote:
      'O nome do case foi mantido em formato descritivo para preservar instituições, territórios e dados operacionais sensíveis do contexto real.',
  },
  {
    id: '9',
    slug: 'saas-gestao-personal-trainers',
    title: 'SaaS de Gestão para Personal Trainers',
    category: 'IoT & Sistemas de Gestão',
    segment: 'Fitness e gestão recorrente',
    stage: 'PUBLISHED',
    excerpt:
      'SaaS para gestão financeira e de alunos com isolamento de dados por usuário, voltado a profissionais que precisam operar rotina e recorrência em uma base própria.',
    challengePoints: [
      'Garantir isolamento lógico de dados em uma base multitenant',
      'Unificar rotina financeira e operação diária em uma única experiência',
      'Preparar o produto para expansão funcional sem comprometer simplicidade',
    ],
    context:
      'O produto precisava combinar simplicidade de uso com separação segura entre contas, oferecendo ao profissional visão integrada de alunos, cobranças e rotina operacional sem misturar dados entre usuários.',
    solution:
      'A Arcane estruturou uma plataforma SaaS com tenancy por usuário, organização de alunos e finanças, além de fluxos desenhados para operação diária de profissionais autônomos e negócios de treinamento.',
    architecture:
      'Aplicação web com isolamento lógico de dados por conta, módulos de gestão financeira e operacional, autenticação, políticas de acesso e estrutura preparada para expansão funcional do produto.',
    outcomes: [
      'Visão mais organizada da operação financeira e da carteira de alunos por usuário.',
      'Base multitenant preparada para escalar sem comprometer separação de dados entre contas.',
      'Experiência mais consistente para rotina de atendimento, cobrança e acompanhamento operacional.',
    ],
    stack: ['SaaS', 'Multitenancy', 'Gestão financeira', 'Gestão de alunos', 'Aplicação web'],
    coverImage: '/projects/personal-trainers.jpg',
    coverAlt: 'Pessoa em academia consultando tablet durante rotina de treino e acompanhamento físico.',
    coverPosition: 'center 32%',
    featured: false,
  },
]

export const casesBySlug: Record<string, CaseItem> = Object.fromEntries(
  cases.map((item) => [item.slug, item])
)
