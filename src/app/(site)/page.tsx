/*
Arquivo: src/app/(site)/page.tsx
Objetivo: Arquivo de codigo da aplicacao.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import { Hero } from '@/components/sections/hero'
import { IntroSection } from '@/components/sections/intro'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { ServicesPreview } from '@/components/sections/services-preview'
import { AboutPreview } from '@/components/sections/about-preview'

const featuredProjects = [
  {
    id: '1',
    slug: 'erp-operacional-industria',
    title: 'ERP Operacional para Indústria',
    location: 'Automação e Controle de Produção',
    coverImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1400&q=80&auto=format&fit=crop',
    status: 'PUBLISHED' as const,
  },
  {
    id: '2',
    slug: 'crm-comercial-inteligente',
    title: 'CRM Comercial Inteligente',
    location: 'Qualificação de Leads com IA',
    coverImage: 'https://images.unsplash.com/photo-1551281044-8b1d45c5be0c?w=1400&q=80&auto=format&fit=crop',
    status: 'PUBLISHED' as const,
  },
  {
    id: '3',
    slug: 'integracao-hardware-software',
    title: 'Integração Hardware + Software',
    location: 'Sensores e Telemetria em Tempo Real',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80&auto=format&fit=crop',
    status: 'WORK_IN_PROGRESS' as const,
  },
  {
    id: '4',
    slug: 'portal-gestao-projetos',
    title: 'Portal de Gestão de Projetos',
    location: 'Governança e Indicadores Executivos',
    coverImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=80&auto=format&fit=crop',
    status: 'PUBLISHED' as const,
  },
]

export default function Home() {
  return (
    <div className="bg-[#F1E7DE]">
      <Hero />
      <IntroSection />
      <FeaturedProjects projects={featuredProjects} />
      <ServicesPreview />
      <AboutPreview />
    </div>
  )
}
