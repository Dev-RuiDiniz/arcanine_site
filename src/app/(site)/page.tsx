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
import { cases } from '@/lib/site-content/projects'

const featuredProjects = cases.slice(0, 4).map((item) => ({
  id: item.id,
  slug: item.slug,
  title: item.title,
  location: item.segment,
  coverImage: item.coverImage,
  status: item.stage,
}))

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
