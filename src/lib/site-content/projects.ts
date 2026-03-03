export interface CaseItem {
  id: string
  slug: string
  title: string
  segment: string
  stage: 'PUBLISHED' | 'WORK_IN_PROGRESS' | 'COMING_SOON'
  challenge: string
  solution: string
  outcomes: string[]
  stack: string[]
  duration: string
  coverImage: string
}

export const cases: CaseItem[] = [
  {
    id: '1',
    slug: 'erp-operacional-industria',
    title: 'ERP Operacional para Industria',
    segment: 'Industria de manufatura',
    stage: 'PUBLISHED',
    challenge:
      'A operacao dependia de planilhas e sistemas desconectados, causando atraso na producao e baixa confiabilidade de estoque.',
    solution:
      'A ARCANINE implementou um ERP web modular com planejamento de producao, apontamento em tempo real e trilha de auditoria para qualidade.',
    outcomes: ['-28% no tempo de fechamento diario', '+42% de acuracia de estoque', '-35% em retrabalho de apontamento'],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Fila de eventos', 'Dashboards BI'],
    duration: '4 meses',
    coverImage:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: '2',
    slug: 'crm-comercial-inteligente',
    title: 'CRM Comercial Inteligente',
    segment: 'Servicos B2B',
    stage: 'PUBLISHED',
    challenge:
      'Leads sem qualificacao, follow-up inconsistente e baixa previsibilidade do funil comercial.',
    solution:
      'Construimos um CRM com scoring automatico, roteamento de oportunidades e automacoes de cadencia por perfil de lead.',
    outcomes: ['+37% na taxa de conversao MQL -> SQL', '-52% no tempo de resposta', '+25% em receita recorrente trimestral'],
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'OpenAI API', 'WhatsApp API'],
    duration: '3 meses',
    coverImage:
      'https://images.unsplash.com/photo-1551281044-8b1d45c5be0c?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: '3',
    slug: 'integracao-hardware-software',
    title: 'Integracao Hardware + Software',
    segment: 'Logistica e IoT',
    stage: 'WORK_IN_PROGRESS',
    challenge:
      'Equipamentos em campo geravam dados sem padrao, dificultando monitoramento de operacao e manutencao preventiva.',
    solution:
      'Criamos uma camada de ingestao com normalizacao de telemetria, alertas por evento critico e dashboard de operacao em tempo real.',
    outcomes: ['Projeto em execucao com piloto validado em duas unidades'],
    stack: ['Node.js', 'MQTT', 'PostgreSQL', 'Timeseries', 'Grafana'],
    duration: '6 meses',
    coverImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: '4',
    slug: 'portal-gestao-projetos',
    title: 'Portal de Gestao de Projetos',
    segment: 'Engenharia e servicos tecnicos',
    stage: 'PUBLISHED',
    challenge:
      'Diretoria sem visibilidade consolidada de prazo, custo e risco entre projetos em andamento.',
    solution:
      'Implantamos um portal unico com governanca de portfolio, marcos, alertas de risco e visao executiva por unidade de negocio.',
    outcomes: ['-40% no tempo de consolidacao mensal', '+31% de previsibilidade de entrega'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Metabase'],
    duration: '2.5 meses',
    coverImage:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: '5',
    slug: 'app-forca-de-campo',
    title: 'App para Forca de Campo',
    segment: 'Distribuicao e servicos externos',
    stage: 'COMING_SOON',
    challenge:
      'Equipe externa sem padrao de coleta de informacao e baixa rastreabilidade de atendimento.',
    solution:
      'Aplicativo mobile com checklists operacionais, geolocalizacao e sincronizacao offline-first.',
    outcomes: ['Case em fase final de implantacao'],
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Cloud Storage'],
    duration: '3 meses',
    coverImage:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: '6',
    slug: 'data-platform-logistica',
    title: 'Data Platform para Logistica',
    segment: 'Operacao logistica',
    stage: 'COMING_SOON',
    challenge:
      'Dados fragmentados por filial impediam planejamento de rota e controle de custo por entrega.',
    solution:
      'Plataforma unificada para consolidacao, limpeza e analise de dados operacionais com paines taticos e executivos.',
    outcomes: ['Case em onboarding'],
    stack: ['ELT', 'PostgreSQL', 'BI', 'Automacoes'],
    duration: '4 meses',
    coverImage:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80&auto=format&fit=crop',
  },
]

export const casesBySlug: Record<string, CaseItem> = Object.fromEntries(
  cases.map((item) => [item.slug, item])
)
