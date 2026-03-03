import { Briefcase, FileText, Globe, Home, Lock, Megaphone, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type EditorFieldType = 'text' | 'textarea' | 'url' | 'image' | 'color'

export interface EditorField {
  id: string
  label: string
  type: EditorFieldType
  placeholder?: string
  defaultValue?: string
}

export interface EditorSection {
  id: string
  title: string
  helperText: string
  fields: EditorField[]
}

export interface AdminPageEditorConfig {
  pageId:
    | 'home'
    | 'projects'
    | 'services'
    | 'about'
    | 'privacy'
    | 'terms'
    | 'cookies'
    | 'blog'
    | 'ctas'
  title: string
  publicPath: string
  description: string
  icon: LucideIcon
  sections: EditorSection[]
}

export const adminPageEditorConfigs: Record<AdminPageEditorConfig['pageId'], AdminPageEditorConfig> = {
  home: {
    pageId: 'home',
    title: 'Home',
    publicPath: '/',
    description: 'Edite hero, proposta de valor e chamadas da pagina inicial.',
    icon: Home,
    sections: [
      {
        id: 'hero',
        title: 'Hero',
        helperText: 'Mensagem principal da homepage.',
        fields: [
          {
            id: 'hero_heading',
            label: 'Titulo principal',
            type: 'text',
            defaultValue: 'Tecnologia que organiza, automatiza e escala o seu negocio.',
          },
          {
            id: 'hero_subheading',
            label: 'Subtitulo',
            type: 'textarea',
            defaultValue:
              'Desenvolvemos sistemas exclusivos, automacoes inteligentes e solucoes digitais personalizadas para empresas que querem crescer com estrutura e controle.',
          },
          { id: 'hero_cta_primary_label', label: 'Texto CTA primario', type: 'text', defaultValue: 'Solicitar Orcamento' },
          { id: 'hero_cta_primary_url', label: 'URL CTA primario', type: 'url', defaultValue: '/contact?intent=orcamento' },
          { id: 'hero_cta_secondary_label', label: 'Texto CTA secundario', type: 'text', defaultValue: 'Agendar Reuniao Tecnica' },
          { id: 'hero_cta_secondary_url', label: 'URL CTA secundario', type: 'url', defaultValue: '/contact?intent=reuniao-tecnica' },
        ],
      },
      {
        id: 'what_we_do',
        title: 'O que fazemos',
        helperText: 'Cards de servicos principais da home.',
        fields: [
          { id: 'what_we_do_title', label: 'Titulo da secao', type: 'text', defaultValue: 'O que fazemos' },
          { id: 'what_we_do_intro', label: 'Texto de apoio', type: 'textarea', defaultValue: 'Combinamos estrategia, engenharia e visao comercial para transformar desafios operacionais em vantagem competitiva.' },
          { id: 'what_we_do_card_1', label: 'Card 1', type: 'text', defaultValue: 'Sistemas Web Personalizados' },
          { id: 'what_we_do_card_2', label: 'Card 2', type: 'text', defaultValue: 'Desenvolvimento de Sistemas Exclusivos' },
          { id: 'what_we_do_card_3', label: 'Card 3', type: 'text', defaultValue: 'Sites Premium (Vendas e Institucionais)' },
          { id: 'what_we_do_card_4', label: 'Card 4', type: 'text', defaultValue: 'Lojas Online (E-commerce)' },
          { id: 'what_we_do_card_5', label: 'Card 5', type: 'text', defaultValue: 'Automacao de Sistemas e Integracoes com Hardware' },
          { id: 'what_we_do_card_6', label: 'Card 6', type: 'text', defaultValue: 'IA e Automacoes Comerciais' },
        ],
      },
      {
        id: 'differentials',
        title: 'Diferenciais',
        helperText: 'Argumentos principais de autoridade tecnica.',
        fields: [
          { id: 'differentials_title', label: 'Titulo', type: 'text', defaultValue: 'Por que escolher a ARCANINE?' },
          { id: 'differentials_item_1', label: 'Diferencial 1', type: 'text', defaultValue: 'Arquitetura pensada para escalabilidade' },
          { id: 'differentials_item_2', label: 'Diferencial 2', type: 'text', defaultValue: 'Desenvolvimento estruturado e sustentavel' },
          { id: 'differentials_item_3', label: 'Diferencial 3', type: 'text', defaultValue: 'Integracao entre software e operacao real' },
          { id: 'differentials_item_4', label: 'Diferencial 4', type: 'text', defaultValue: 'Foco em resultado comercial' },
          { id: 'differentials_item_5', label: 'Diferencial 5', type: 'text', defaultValue: 'Seguranca e controle de dados' },
          { id: 'differentials_item_6', label: 'Diferencial 6', type: 'text', defaultValue: 'Visao tecnica aliada a estrategia empresarial' },
        ],
      },
      {
        id: 'featured_cases',
        title: 'Cases em destaque',
        helperText: 'Introducao e CTA da secao de cases.',
        fields: [
          { id: 'cases_title', label: 'Titulo', type: 'text', defaultValue: 'Cases em destaque' },
          { id: 'cases_intro', label: 'Texto de apoio', type: 'textarea', defaultValue: 'Projetos com problema real, arquitetura estruturada e resultado mensuravel.' },
          { id: 'cases_cta_label', label: 'Texto do botao', type: 'text', defaultValue: 'Ver todos os projetos' },
          { id: 'cases_cta_url', label: 'URL do botao', type: 'url', defaultValue: '/projects' },
        ],
      },
      {
        id: 'process',
        title: 'Processo de trabalho',
        helperText: 'Etapas do metodo ARCANINE.',
        fields: [
          { id: 'process_title', label: 'Titulo', type: 'text', defaultValue: 'Processo de trabalho' },
          { id: 'process_step_1', label: 'Etapa 1', type: 'text', defaultValue: 'Diagnostico estrategico' },
          { id: 'process_step_2', label: 'Etapa 2', type: 'text', defaultValue: 'Mapeamento tecnico de processos' },
          { id: 'process_step_3', label: 'Etapa 3', type: 'text', defaultValue: 'Arquitetura da solucao' },
          { id: 'process_step_4', label: 'Etapa 4', type: 'text', defaultValue: 'Desenvolvimento estruturado' },
          { id: 'process_step_5', label: 'Etapa 5', type: 'text', defaultValue: 'Testes e validacao' },
          { id: 'process_step_6', label: 'Etapa 6', type: 'text', defaultValue: 'Implantacao' },
          { id: 'process_step_7', label: 'Etapa 7', type: 'text', defaultValue: 'Evolucao continua' },
        ],
      },
      {
        id: 'home_cta',
        title: 'CTA final',
        helperText: 'Chamada final de conversao da home.',
        fields: [
          { id: 'home_cta_title', label: 'Titulo', type: 'text', defaultValue: 'Sua empresa esta pronta para evoluir tecnologicamente?' },
          {
            id: 'home_cta_subtitle',
            label: 'Subtitulo',
            type: 'text',
            defaultValue: 'Escolha o proximo passo para transformar sua operacao com estrutura e previsibilidade.',
          },
          { id: 'home_cta_primary_label', label: 'Botao primario', type: 'text', defaultValue: 'Solicitar proposta' },
          { id: 'home_cta_primary_url', label: 'URL botao primario', type: 'url', defaultValue: '/contact?intent=orcamento' },
          { id: 'home_cta_secondary_label', label: 'Botao secundario', type: 'text', defaultValue: 'Agendar reuniao estrategica' },
          { id: 'home_cta_secondary_url', label: 'URL botao secundario', type: 'url', defaultValue: '/contact?intent=reuniao-tecnica' },
        ],
      },
      {
        id: 'seo_home',
        title: 'SEO Home',
        helperText: 'Title e description da pagina inicial.',
        fields: [
          { id: 'seo_home_title', label: 'SEO Title', type: 'text', defaultValue: 'ARCANINE Tecnologia | Solucoes Digitais Sob Medida' },
          {
            id: 'seo_home_description',
            label: 'SEO Description',
            type: 'textarea',
            defaultValue:
              'Tecnologia que organiza, automatiza e escala o seu negocio. Sistemas exclusivos, automacoes inteligentes e integracao com operacao real.',
          },
        ],
      },
    ],
  },
  projects: {
    pageId: 'projects',
    title: 'Projects',
    publicPath: '/projects',
    description: 'Gerencie copy de portfolio e cases.',
    icon: Briefcase,
    sections: [
      {
        id: 'projects_hero',
        title: 'Cabecalho',
        helperText: 'Introducao da pagina de portfolio.',
        fields: [
          { id: 'projects_heading', label: 'Titulo', type: 'text', defaultValue: 'Portfolio / Cases' },
          {
            id: 'projects_description',
            label: 'Descricao',
            type: 'textarea',
            defaultValue:
              'Casos reais de transformacao digital orientada a resultado, com contexto tecnico e impacto de negocio.',
          },
        ],
      },
      {
        id: 'projects_cta',
        title: 'CTA final',
        helperText: 'Chamada de conversao no rodape da pagina.',
        fields: [
          { id: 'projects_cta_title', label: 'Titulo CTA', type: 'text', defaultValue: 'Quer um case como este no seu negocio?' },
          { id: 'projects_cta_button', label: 'Texto botao', type: 'text', defaultValue: 'Agendar reuniao tecnica' },
          { id: 'projects_cta_url', label: 'URL botao', type: 'url', defaultValue: '/contact?intent=reuniao-tecnica' },
        ],
      },
    ],
  },
  services: {
    pageId: 'services',
    title: 'Services',
    publicPath: '/services',
    description: 'Edite argumentos de servicos, processo e CTA comercial.',
    icon: Globe,
    sections: [
      {
        id: 'services_intro',
        title: 'Introducao',
        helperText: 'Mensagem principal da pagina de servicos.',
        fields: [
          { id: 'services_heading', label: 'Titulo', type: 'text', defaultValue: 'Solucoes de tecnologia para operacoes criticas.' },
          {
            id: 'services_description',
            label: 'Descricao',
            type: 'textarea',
            defaultValue:
              'Da estrategia a sustentacao continua, estruturamos sistemas e automacoes com foco em performance, controle e previsibilidade.',
          },
        ],
      },
      {
        id: 'services_process',
        title: 'Processo',
        helperText: 'Modelo de execucao ARCANINE.',
        fields: [
          { id: 'process_step_1', label: 'Etapa 1', type: 'text', defaultValue: 'Diagnostico Tecnico' },
          { id: 'process_step_2', label: 'Etapa 2', type: 'text', defaultValue: 'Blueprint e Roadmap' },
          { id: 'process_step_3', label: 'Etapa 3', type: 'text', defaultValue: 'Entrega Iterativa' },
          { id: 'process_step_4', label: 'Etapa 4', type: 'text', defaultValue: 'Escala e Sustentacao' },
        ],
      },
    ],
  },
  about: {
    pageId: 'about',
    title: 'About',
    publicPath: '/about',
    description: 'Atualize historia, posicionamento e narrativa institucional.',
    icon: Users,
    sections: [
      {
        id: 'about_intro',
        title: 'Institucional',
        helperText: 'Bloco de abertura da pagina Sobre.',
        fields: [
          { id: 'about_heading', label: 'Titulo', type: 'text', defaultValue: 'Sobre a ARCANINE' },
          {
            id: 'about_manifesto',
            label: 'Texto institucional',
            type: 'textarea',
            defaultValue:
              'A ARCANINE Tecnologia nasceu com o proposito de entregar solucoes tecnologicas inteligentes, seguras e preparadas para crescimento real.',
          },
          {
            id: 'about_intro_paragraph_2',
            label: 'Paragrafo complementar',
            type: 'textarea',
            defaultValue:
              'Atuamos com engenharia de software moderna, automacao de processos, integracao de sistemas e desenvolvimento de solucoes exclusivas para empresas que precisam de estrutura tecnologica solida.',
          },
        ],
      },
      {
        id: 'about_mvv',
        title: 'Missao, visao e valores',
        helperText: 'Base institucional da pagina Sobre.',
        fields: [
          {
            id: 'about_mission',
            label: 'Missao',
            type: 'textarea',
            defaultValue:
              'Desenvolver solucoes tecnologicas robustas que gerem eficiencia operacional, organizacao estrategica e crescimento sustentavel.',
          },
          {
            id: 'about_vision',
            label: 'Visao',
            type: 'textarea',
            defaultValue:
              'Ser referencia em desenvolvimento de sistemas personalizados e solucoes tecnologicas escalaveis para empresas que exigem performance e controle.',
          },
          {
            id: 'about_positioning',
            label: 'Posicionamento',
            type: 'text',
            defaultValue: 'Engenharia solida + estrategia comercial + integracao com operacao real.',
          },
          {
            id: 'about_values',
            label: 'Valores (1 por linha)',
            type: 'textarea',
            defaultValue:
              'Transparencia\nExcelencia tecnica\nCompromisso com resultado\nEvolucao constante\nInovacao com responsabilidade',
          },
        ],
      },
      {
        id: 'seo_about',
        title: 'SEO Sobre',
        helperText: 'Title e description da pagina Sobre.',
        fields: [
          { id: 'seo_about_title', label: 'SEO Title', type: 'text', defaultValue: 'Sobre | ARCANINE Tecnologia' },
          {
            id: 'seo_about_description',
            label: 'SEO Description',
            type: 'textarea',
            defaultValue:
              'Conheca a historia, missao, visao e valores da ARCANINE Tecnologia e nosso metodo para entregar crescimento com base tecnica.',
          },
        ],
      },
      {
        id: 'about_cta',
        title: 'CTA final',
        helperText: 'Chamada de conversao da pagina Sobre.',
        fields: [
          { id: 'about_cta_title', label: 'Titulo CTA', type: 'text', defaultValue: 'Sua empresa esta pronta para evoluir tecnologicamente?' },
          { id: 'about_cta_button', label: 'Texto do botao', type: 'text', defaultValue: 'Agendar reuniao tecnica' },
          { id: 'about_cta_url', label: 'URL do botao', type: 'url', defaultValue: '/contact?intent=reuniao-tecnica' },
        ],
      },
    ],
  },
  privacy: {
    pageId: 'privacy',
    title: 'Privacy Policy',
    publicPath: '/privacy',
    description: 'Edite o texto legal da politica de privacidade.',
    icon: Lock,
    sections: [
      {
        id: 'privacy_header',
        title: 'Cabecalho legal',
        helperText: 'Titulo e data da pagina.',
        fields: [
          { id: 'privacy_title', label: 'Titulo', type: 'text', defaultValue: 'Politica de Privacidade' },
          { id: 'privacy_last_update', label: 'Ultima atualizacao', type: 'text', defaultValue: '2 de marco de 2026' },
        ],
      },
      {
        id: 'privacy_contact',
        title: 'Canal de contato',
        helperText: 'E-mail do responsavel por privacidade.',
        fields: [
          { id: 'privacy_email', label: 'E-mail', type: 'text', defaultValue: 'privacy@arcanine.tech' },
          { id: 'privacy_response_sla', label: 'SLA de resposta', type: 'text', defaultValue: 'Ate 15 dias uteis' },
        ],
      },
    ],
  },
  terms: {
    pageId: 'terms',
    title: 'Terms of Use',
    publicPath: '/terms',
    description: 'Gerencie o texto da pagina de termos de uso.',
    icon: Lock,
    sections: [
      {
        id: 'terms_header',
        title: 'Cabecalho',
        helperText: 'Titulo e data de referencia.',
        fields: [
          { id: 'terms_title', label: 'Titulo', type: 'text', defaultValue: 'Termos de Uso' },
          { id: 'terms_last_update', label: 'Ultima atualizacao', type: 'text', defaultValue: '2 de marco de 2026' },
        ],
      },
      {
        id: 'terms_content',
        title: 'Conteudo',
        helperText: 'Texto principal do documento.',
        fields: [
          {
            id: 'terms_body',
            label: 'Texto',
            type: 'textarea',
            defaultValue:
              'Defina as condicoes de uso do site, responsabilidade sobre conteudo e regras para uso de materiais da marca.',
          },
        ],
      },
    ],
  },
  cookies: {
    pageId: 'cookies',
    title: 'Cookies Policy',
    publicPath: '/cookies',
    description: 'Gerencie a politica de cookies do site.',
    icon: Lock,
    sections: [
      {
        id: 'cookies_header',
        title: 'Cabecalho',
        helperText: 'Titulo e data da pagina.',
        fields: [
          { id: 'cookies_title', label: 'Titulo', type: 'text', defaultValue: 'Politica de Cookies' },
          { id: 'cookies_last_update', label: 'Ultima atualizacao', type: 'text', defaultValue: '2 de marco de 2026' },
        ],
      },
      {
        id: 'cookies_content',
        title: 'Conteudo',
        helperText: 'Descricao dos tipos de cookies e finalidade.',
        fields: [
          {
            id: 'cookies_body',
            label: 'Texto',
            type: 'textarea',
            defaultValue:
              'Descreva cookies essenciais, analiticos e de marketing, incluindo como o usuario pode revisar consentimento.',
          },
        ],
      },
    ],
  },
  blog: {
    pageId: 'blog',
    title: 'Blog',
    publicPath: '/blog',
    description: 'Edite apresentacao e chamadas do blog institucional.',
    icon: FileText,
    sections: [
      {
        id: 'blog_header',
        title: 'Cabecalho',
        helperText: 'Texto principal da pagina de blog.',
        fields: [
          { id: 'blog_title', label: 'Titulo', type: 'text', defaultValue: 'Conteudo tecnico para decisao de negocio.' },
          {
            id: 'blog_description',
            label: 'Descricao',
            type: 'textarea',
            defaultValue:
              'Publicacoes objetivas sobre engenharia, automacao e IA aplicada em operacoes reais.',
          },
        ],
      },
    ],
  },
  ctas: {
    pageId: 'ctas',
    title: 'Global CTAs',
    publicPath: '/contact',
    description: 'Centralize textos e destinos de conversao globais.',
    icon: Megaphone,
    sections: [
      {
        id: 'cta_budget',
        title: 'CTA Orcamento',
        helperText: 'Botao para abertura de escopo comercial.',
        fields: [
          { id: 'cta_budget_label', label: 'Texto', type: 'text', defaultValue: 'Solicitar Orcamento' },
          { id: 'cta_budget_url', label: 'URL', type: 'url', defaultValue: '/contact?intent=orcamento' },
        ],
      },
      {
        id: 'cta_meeting',
        title: 'CTA Reuniao Tecnica',
        helperText: 'Botao para reunioes de diagnostico.',
        fields: [
          { id: 'cta_meeting_label', label: 'Texto', type: 'text', defaultValue: 'Agendar Reuniao Tecnica' },
          { id: 'cta_meeting_url', label: 'URL', type: 'url', defaultValue: '/contact?intent=reuniao-tecnica' },
        ],
      },
      {
        id: 'cta_whatsapp',
        title: 'CTA WhatsApp',
        helperText: 'Mensagem e link do canal rapido.',
        fields: [
          { id: 'cta_whatsapp_label', label: 'Texto', type: 'text', defaultValue: 'Falar no WhatsApp' },
          { id: 'cta_whatsapp_url', label: 'URL', type: 'url', defaultValue: 'https://wa.me/5511999999999' },
        ],
      },
    ],
  },
}
