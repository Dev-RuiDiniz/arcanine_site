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
            defaultValue: 'Tecnologia que organiza, automatiza e escala.',
          },
          {
            id: 'hero_subheading',
            label: 'Subtitulo',
            type: 'text',
            defaultValue: 'Estrategia, engenharia e resultado no mesmo projeto.',
          },
          { id: 'hero_cta_label', label: 'Texto CTA', type: 'text', defaultValue: 'Solicitar Orcamento' },
          { id: 'hero_cta_url', label: 'URL CTA', type: 'url', defaultValue: '/solicitar-orcamento' },
        ],
      },
      {
        id: 'intro',
        title: 'Proposta de valor',
        helperText: 'Bloco institucional logo abaixo do hero.',
        fields: [
          { id: 'intro_title', label: 'Titulo', type: 'text', defaultValue: 'Engenharia de software com foco no negocio.' },
          {
            id: 'intro_text',
            label: 'Texto',
            type: 'textarea',
            defaultValue:
              'Transformamos desafios operacionais em plataformas, automacoes e dados confiaveis para liderancas que precisam decidir com velocidade.',
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
          { id: 'projects_cta_url', label: 'URL botao', type: 'url', defaultValue: '/agendar-reuniao' },
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
              'A ARCANINE nasceu para resolver desafios reais de operacao com engenharia de software, automacao e integracao aplicada ao negocio.',
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
          { id: 'about_cta_url', label: 'URL do botao', type: 'url', defaultValue: '/agendar-reuniao' },
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
          { id: 'cta_budget_url', label: 'URL', type: 'url', defaultValue: '/solicitar-orcamento' },
        ],
      },
      {
        id: 'cta_meeting',
        title: 'CTA Reuniao Tecnica',
        helperText: 'Botao para reunioes de diagnostico.',
        fields: [
          { id: 'cta_meeting_label', label: 'Texto', type: 'text', defaultValue: 'Agendar Reuniao Tecnica' },
          { id: 'cta_meeting_url', label: 'URL', type: 'url', defaultValue: '/agendar-reuniao' },
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
