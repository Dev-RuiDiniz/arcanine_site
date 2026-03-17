/*
Arquivo: src/components/sections/featured-projects.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { CaseItem } from '@/lib/site-content/projects'
import { caseCategories } from '@/lib/site-content/projects'
import { cn } from '@/lib/utils'

interface FeaturedProjectsProps {
  projects: CaseItem[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="section-shell-dark py-[4.5rem] lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div className="max-w-3xl">
            <span className="section-kicker text-brand-cyan">Prova em produção</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] leading-[1.02] text-white lg:text-[3.1rem]">
              Cases que mostram a amplitude técnica da ARCANINE sem perder contexto de negócio.
            </h2>
            <p className="mt-5 max-w-2xl font-inter text-sm leading-relaxed text-slate-300 lg:text-base">
              Selecionamos frentes publicadas em fintech, IA aplicada e operação conectada para demonstrar como
              arquitetura, integração e resultado se encontram em entregas reais.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {caseCategories.map((category) => (
              <div key={category} className="rounded-[1.3rem] border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-md">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">Frente</p>
                <p className="mt-2 font-cormorant text-2xl text-white">{category}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={cn(
                index === 0 ? 'lg:col-span-7 lg:row-span-2' : '',
                index === 1 ? 'lg:col-span-5' : '',
                index === 2 ? 'lg:col-span-5' : '',
                index === 3 ? 'lg:col-span-7' : ''
              )}
            >
              <ProjectCard project={project} featured={index === 0 || index === 3} />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 font-inter text-[11px] uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-white"
          >
            Ver todos os cases publicados
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured }: { project: CaseItem; featured: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        'group relative block h-full min-h-[22rem] overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900/50',
        featured ? 'lg:min-h-[25rem]' : ''
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={project.coverImage}
          alt={project.coverAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: project.coverPosition ?? 'center center' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.74)_56%,rgba(2,6,23,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,227,247,0.22),transparent_28%)]" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between p-5 lg:p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex w-fit items-center rounded-full border border-white/12 bg-black/24 px-3 py-1 font-inter text-[10px] uppercase tracking-[0.16em] text-brand-cyan backdrop-blur-sm">
            {project.category}
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1 font-inter text-[10px] uppercase tracking-[0.16em] text-white/70">
            {project.segment}
          </span>
        </div>

        <div className="max-w-2xl">
          <h3 className={cn('font-cormorant leading-tight text-white', featured ? 'text-[2.2rem] lg:text-[2.65rem]' : 'text-[1.75rem]')}>
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl font-inter text-sm leading-relaxed text-slate-200/92">
            {project.excerpt}
          </p>

          <div className="mt-5 grid gap-2">
            {project.outcomes.slice(0, 2).map((outcome) => (
              <p key={outcome} className="font-inter text-[12px] leading-relaxed text-slate-200/78">
                {outcome}
              </p>
            ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-2 font-inter text-[11px] uppercase tracking-[0.18em] text-white/84">
            Explorar case
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}
