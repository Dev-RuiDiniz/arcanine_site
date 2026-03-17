import { Briefcase, Globe, Home, Lock, Megaphone, Users } from 'lucide-react'
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
    description: 'Edite hero, proposta de valor e chamadas da página inicial.',
    icon: Home,
    sections: [
      {
        id: 'hero',
        title: 'Hero',
        helperText: 'Mensagem principal da home.',
        fields: [
          {
            id: 'hero_heading',
            label: 'Título principal',
            type: 'text',
            defaultValue: 'Tecnologia que organiza, automatiza e escala.',
          },
          {
            id: 'hero_subheading',
            label: 'Subtítulo',
            type: 'text',
            defaultValue: 'Estratégia, engenharia e resultado no mesmo projeto.',
          },
          { id: 'hero_cta_label', label: 'Texto do CTA', type: 'text', defaultValue: 'Solicitar orçamento' },
          { id: 'hero_cta_url', label: 'URL do CTA', type: 'url', defaultValue: '/solicitar-orcamento' },
        ],
      },
      {
        id: 'intro',
        title: 'Proposta de valor',
        helperText: 'Bloco institucional logo abaixo do hero.',
        fields: [
          { id: 'intro_title', label: 'Título', type: 'text', defaultValue: 'Engenharia de software com foco no negócio.' },
          {
            id: 'intro_text',
            label: 'Texto',
            type: 'textarea',
            defaultValue:
              'Transformamos gargalos operacionais em plataformas, automações e dados confiáveis para lideranças que precisam decidir com velocidade.',
          },
        ],
      },
    ],
  },
  projects: {
    pageId: 'projects',
    title: 'Cases',
    publicPath: '/projects',
    description: 'Gerencie a narrativa do portfólio e a prova de autoridade comercial.',
    icon: Briefcase,
    sections: [
      {
        id: 'projects_hero',
        title: 'Cabeçalho',
        helperText: 'Introdução da página de cases.',
        fields: [
          { id: 'projects_heading', label: 'Título', type: 'text', defaultValue: 'Portfólio / Cases' },
          {
            id: 'projects_description',
            label: 'Descrição',
            type: 'textarea',
            defaultValue:
              'Casos reais de transformação digital orientada a resultado, com contexto técnico e impacto de negócio.',
          },
        ],
      },
      {
        id: 'projects_cta',
        title: 'CTA final',
        helperText: 'Chamada de conversão no rodapé da página.',
        fields: [
          { id: 'projects_cta_title', label: 'Título do CTA', type: 'text', defaultValue: 'Quer um case como este no seu negócio?' },
          { id: 'projects_cta_button', label: 'Texto do botão', type: 'text', defaultValue: 'Agendar reunião técnica' },
          { id: 'projects_cta_url', label: 'URL do botão', type: 'url', defaultValue: '/agendar-reuniao' },
        ],
      },
    ],
  },
  services: {
    pageId: 'services',
    title: 'Serviços',
    publicPath: '/services',
    description: 'Edite argumentos comerciais, processo e CTA da página de serviços.',
    icon: Globe,
    sections: [
      {
        id: 'services_intro',
        title: 'Introdução',
        helperText: 'Mensagem principal da página de serviços.',
        fields: [
          { id: 'services_heading', label: 'Título', type: 'text', defaultValue: 'Serviços de tecnologia para destravar operação, receita e escala.' },
          {
            id: 'services_description',
            label: 'Descrição',
            type: 'textarea',
            defaultValue:
              'Da estratégia à sustentação contínua, estruturamos sistemas e automações com foco em performance, controle e previsibilidade.',
          },
        ],
      },
      {
        id: 'services_process',
        title: 'Processo',
        helperText: 'Modelo de execução da ARCANINE.',
        fields: [
          { id: 'process_step_1', label: 'Etapa 1', type: 'text', defaultValue: 'Imersão no negócio' },
          { id: 'process_step_2', label: 'Etapa 2', type: 'text', defaultValue: 'Diagnóstico de gargalos' },
          { id: 'process_step_3', label: 'Etapa 3', type: 'text', defaultValue: 'Arquitetura e roadmap' },
          { id: 'process_step_4', label: 'Etapa 4', type: 'text', defaultValue: 'Entrega e evolução contínua' },
        ],
      },
    ],
  },
  about: {
    pageId: 'about',
    title: 'Sobre',
    publicPath: '/about',
    description: 'Atualize história, posicionamento e narrativa institucional.',
    icon: Users,
    sections: [
      {
        id: 'about_intro',
        title: 'Institucional',
        helperText: 'Bloco de abertura da página Sobre.',
        fields: [
          { id: 'about_heading', label: 'Título', type: 'text', defaultValue: 'Sobre a ARCANINE' },
          {
            id: 'about_manifesto',
            label: 'Texto institucional',
            type: 'textarea',
            defaultValue:
              'A ARCANINE nasceu para resolver desafios reais de operação com engenharia de software, automação e integração aplicada ao negócio.',
          },
        ],
      },
      {
        id: 'about_cta',
        title: 'CTA final',
        helperText: 'Chamada de conversão da página Sobre.',
        fields: [
          { id: 'about_cta_title', label: 'Título do CTA', type: 'text', defaultValue: 'Sua empresa está pronta para evoluir tecnologicamente?' },
          { id: 'about_cta_button', label: 'Texto do botão', type: 'text', defaultValue: 'Agendar reunião técnica' },
          { id: 'about_cta_url', label: 'URL do botão', type: 'url', defaultValue: '/agendar-reuniao' },
        ],
      },
    ],
  },
  privacy: {
    pageId: 'privacy',
    title: 'Privacidade',
    publicPath: '/privacy',
    description: 'Edite o texto legal da política de privacidade.',
    icon: Lock,
    sections: [
      {
        id: 'privacy_header',
        title: 'Cabeçalho legal',
        helperText: 'Título e data da página.',
        fields: [
          { id: 'privacy_title', label: 'Título', type: 'text', defaultValue: 'Política de Privacidade' },
          { id: 'privacy_last_update', label: 'Última atualização', type: 'text', defaultValue: '2 de março de 2026' },
        ],
      },
      {
        id: 'privacy_contact',
        title: 'Canal de contato',
        helperText: 'E-mail do responsável por privacidade.',
        fields: [
          { id: 'privacy_email', label: 'E-mail', type: 'text', defaultValue: 'privacy@arcanine.tech' },
          { id: 'privacy_response_sla', label: 'SLA de resposta', type: 'text', defaultValue: 'Até 15 dias úteis' },
        ],
      },
    ],
  },
  terms: {
    pageId: 'terms',
    title: 'Termos de Uso',
    publicPath: '/terms',
    description: 'Gerencie o texto da página de termos de uso.',
    icon: Lock,
    sections: [
      {
        id: 'terms_header',
        title: 'Cabeçalho',
        helperText: 'Título e data de referência.',
        fields: [
          { id: 'terms_title', label: 'Título', type: 'text', defaultValue: 'Termos de Uso' },
          { id: 'terms_last_update', label: 'Última atualização', type: 'text', defaultValue: '2 de março de 2026' },
        ],
      },
      {
        id: 'terms_content',
        title: 'Conteúdo',
        helperText: 'Texto principal do documento.',
        fields: [
          {
            id: 'terms_body',
            label: 'Texto',
            type: 'textarea',
            defaultValue:
              'Defina as condições de uso do site, a responsabilidade sobre o conteúdo e as regras para uso dos materiais da marca.',
          },
        ],
      },
    ],
  },
  cookies: {
    pageId: 'cookies',
    title: 'Cookies',
    publicPath: '/cookies',
    description: 'Gerencie a política de cookies do site.',
    icon: Lock,
    sections: [
      {
        id: 'cookies_header',
        title: 'Cabeçalho',
        helperText: 'Título e data da página.',
        fields: [
          { id: 'cookies_title', label: 'Título', type: 'text', defaultValue: 'Política de Cookies' },
          { id: 'cookies_last_update', label: 'Última atualização', type: 'text', defaultValue: '2 de março de 2026' },
        ],
      },
      {
        id: 'cookies_content',
        title: 'Conteúdo',
        helperText: 'Descrição dos tipos de cookies e finalidade.',
        fields: [
          {
            id: 'cookies_body',
            label: 'Texto',
            type: 'textarea',
            defaultValue:
              'Descreva cookies essenciais, analíticos e de marketing, incluindo como o usuário pode revisar o consentimento.',
          },
        ],
      },
    ],
  },
  ctas: {
    pageId: 'ctas',
    title: 'CTAs Globais',
    publicPath: '/contact',
    description: 'Centralize textos e destinos de conversão globais.',
    icon: Megaphone,
    sections: [
      {
        id: 'cta_budget',
        title: 'CTA orçamento',
        helperText: 'Botão para abertura de escopo comercial.',
        fields: [
          { id: 'cta_budget_label', label: 'Texto', type: 'text', defaultValue: 'Solicitar orçamento' },
          { id: 'cta_budget_url', label: 'URL', type: 'url', defaultValue: '/solicitar-orcamento' },
        ],
      },
      {
        id: 'cta_meeting',
        title: 'CTA reunião técnica',
        helperText: 'Botão para reuniões de diagnóstico.',
        fields: [
          { id: 'cta_meeting_label', label: 'Texto', type: 'text', defaultValue: 'Agendar reunião técnica' },
          { id: 'cta_meeting_url', label: 'URL', type: 'url', defaultValue: '/agendar-reuniao' },
        ],
      },
      {
        id: 'cta_whatsapp',
        title: 'CTA WhatsApp',
        helperText: 'Mensagem e link do canal rápido.',
        fields: [
          { id: 'cta_whatsapp_label', label: 'Texto', type: 'text', defaultValue: 'Falar no WhatsApp' },
          { id: 'cta_whatsapp_url', label: 'URL', type: 'url', defaultValue: 'https://wa.me/5511999999999' },
        ],
      },
    ],
  },
}
