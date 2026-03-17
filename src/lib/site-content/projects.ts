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
    title: 'ERP Operacional para Indústria',
    segment: 'Indústria de manufatura',
    stage: 'PUBLISHED',
    challenge:
      'A operação dependia de planilhas e sistemas desconectados, o que atrasava apontamentos de produção, comprometia a acurácia do estoque e dificultava decisões diárias da liderança.',
    solution:
      'A ARCANINE implementou um ERP web modular com planejamento de produção, apontamento em tempo real, trilha de auditoria e dashboards operacionais para chão de fábrica e diretoria.',
    outcomes: ['-28% no tempo de fechamento diário', '+42% de acurácia de estoque', '-35% em retrabalho de apontamento'],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Fila de eventos', 'Dashboards BI'],
    duration: '4 meses',
    coverImage:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: '2',
    slug: 'crm-comercial-inteligente',
    title: 'CRM Comercial Inteligente',
    segment: 'Serviços B2B',
    stage: 'PUBLISHED',
    challenge:
      'Leads sem qualificação, follow-up inconsistente e baixa previsibilidade do funil comercial comprometiam velocidade de resposta e taxa de avanço entre etapas.',
    solution:
      'Construímos um CRM com scoring automático, roteamento de oportunidades, cadências multicanal e contexto consolidado para SDRs e closers.',
    outcomes: ['+37% na taxa de conversão MQL -> SQL', '-52% no tempo de resposta', '+25% em receita recorrente trimestral'],
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'OpenAI API', 'WhatsApp API'],
    duration: '3 meses',
    coverImage:
      'https://images.unsplash.com/photo-1551281044-8b1d45c5be0c?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: '3',
    slug: 'integracao-hardware-software',
    title: 'Integração Hardware + Software',
    segment: 'Logística e IoT',
    stage: 'WORK_IN_PROGRESS',
    challenge:
      'Equipamentos em campo geravam dados sem padronização, o que prejudicava o monitoramento da operação e a manutenção preventiva.',
    solution:
      'Criamos uma camada de ingestão com normalização de telemetria, alertas por evento crítico e dashboard de operação em tempo real para equipes de campo e coordenação.',
    outcomes: ['Projeto em execução com piloto validado em duas unidades'],
    stack: ['Node.js', 'MQTT', 'PostgreSQL', 'Timeseries', 'Grafana'],
    duration: '6 meses',
    coverImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: '4',
    slug: 'portal-gestao-projetos',
    title: 'Portal de Gestão de Projetos',
    segment: 'Engenharia e serviços técnicos',
    stage: 'PUBLISHED',
    challenge:
      'A diretoria não tinha visibilidade consolidada de prazo, custo e risco entre projetos em andamento.',
    solution:
      'Implantamos um portal único com governança de portfólio, marcos, alertas de risco e visão executiva por unidade de negócio.',
    outcomes: ['-40% no tempo de consolidação mensal', '+31% de previsibilidade de entrega'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Metabase'],
    duration: '2,5 meses',
    coverImage:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: '5',
    slug: 'app-forca-de-campo',
    title: 'App para Força de Campo',
    segment: 'Distribuição e serviços externos',
    stage: 'COMING_SOON',
    challenge:
      'A equipe externa operava sem padrão de coleta de informação e com baixa rastreabilidade de atendimento em campo.',
    solution:
      'Aplicativo mobile com checklists operacionais, geolocalização, evidências de execução e sincronização offline-first.',
    outcomes: ['Case em fase final de implantação'],
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Cloud Storage'],
    duration: '3 meses',
    coverImage:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: '6',
    slug: 'data-platform-logistica',
    title: 'Data Platform para Logística',
    segment: 'Operação logística',
    stage: 'COMING_SOON',
    challenge:
      'Dados fragmentados por filial impediam planejamento de rota, leitura de margem por operação e controle de custo por entrega.',
    solution:
      'Plataforma unificada para consolidação, limpeza e análise de dados operacionais com painéis táticos e executivos.',
    outcomes: ['Case em onboarding'],
    stack: ['ELT', 'PostgreSQL', 'BI', 'Automações'],
    duration: '4 meses',
    coverImage:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80&auto=format&fit=crop',
  },
]

export const casesBySlug: Record<string, CaseItem> = Object.fromEntries(
  cases.map((item) => [item.slug, item])
)
