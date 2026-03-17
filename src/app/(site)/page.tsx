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
import { getGlobalConversionCtas, mergePublishedPageContent } from '@/lib/page-content'
import { cases } from '@/lib/site-content/projects'

const featuredProjects = cases.filter((item) => item.featured).slice(0, 4)

const homeDefaults = {
  hero_heading: 'Software sob medida para negócios que precisam operar com mais clareza e menos atrito.',
  hero_subheading:
    'Projetamos plataformas, automações e integrações para empresas que precisam reduzir improviso técnico e ganhar base real de execução.',
  hero_cta_label: 'Solicitar orçamento',
  hero_cta_url: '/solicitar-orcamento',
  intro_title: 'Tecnologia para organizar operação, ganhar previsibilidade e sustentar crescimento.',
  intro_text:
    'Entramos quando o negócio precisa de uma base técnica mais sólida para operar melhor e evoluir com menos ruído.',
}

export default async function Home() {
  const [homeContent, globalCtas] = await Promise.all([
    mergePublishedPageContent('home', homeDefaults),
    getGlobalConversionCtas(),
  ])

  const heroCtas = {
    ...globalCtas,
    budget: {
      label: homeContent.hero_cta_label,
      href: homeContent.hero_cta_url,
    },
  }

  return (
    <div className="bg-background">
      <Hero
        ctas={heroCtas}
        title={homeContent.hero_heading}
        subtitle={homeContent.hero_subheading}
      />
      <IntroSection
        title={homeContent.intro_title}
        description={homeContent.intro_text}
      />
      <ServicesPreview />
      <FeaturedProjects projects={featuredProjects} />
      <AboutPreview />
    </div>
  )
}
