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
import { cn } from '@/lib/utils'

interface FeaturedProjectsProps {
  projects: CaseItem[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="section-shell-dark py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-brand-cyan">
              Cases em destaque
            </span>
            <h2 className="mt-3 font-cormorant text-3xl text-white sm:text-4xl lg:text-[2.75rem] leading-tight">
              Projetos reais em fintech, IA aplicada e operação conectada.
            </h2>
            <p className="mt-3 max-w-2xl font-inter text-sm leading-relaxed text-slate-300">
              Selecionamos quatro entregas que mostram a amplitude da ARCANINE entre arquitetura crítica,
              automação inteligente e software orientado à operação real.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 self-start font-inter text-[10px] tracking-[0.15em] uppercase text-slate-300 transition-colors hover:text-white group"
          >
            <span>Ver todos os cases</span>
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={cn(index === 0 && 'lg:row-span-2', index === 3 && 'lg:col-span-2')}
            >
              <ProjectCard project={project} featured={index === 0} />
            </motion.div>
          ))}
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
        'group relative block overflow-hidden border border-white/10 bg-slate-900/50',
        featured ? 'min-h-[420px] lg:h-full' : 'min-h-[260px]'
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.14)_0%,rgba(2,6,23,0.82)_55%,rgba(2,6,23,0.97)_100%)] transition-opacity duration-500 group-hover:opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.24),transparent_30%)] opacity-90" />
      </div>

      <div className={cn('relative z-10 flex h-full flex-col justify-end p-5 lg:p-6', featured && 'lg:p-8')}>
        <span className="inline-flex w-fit items-center rounded-full border border-white/12 bg-black/20 px-3 py-1 font-inter text-[10px] tracking-[0.16em] uppercase text-brand-cyan backdrop-blur-sm">
          {project.category}
        </span>

        <div className="mt-4 max-w-2xl">
          <h3 className={cn('font-cormorant font-light text-white leading-tight', featured ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl')}>
            {project.title}
          </h3>
          <p className="mt-2 font-inter text-[11px] tracking-[0.16em] uppercase text-white/70">
            {project.segment}
          </p>
          <p className={cn('mt-3 font-inter text-sm leading-relaxed text-slate-200/90', featured ? 'max-w-xl' : 'max-w-lg')}>
            {project.excerpt}
          </p>
        </div>

        <div className="mt-5 inline-flex items-center gap-2 font-inter text-[11px] tracking-[0.18em] uppercase text-white/85">
          Explorar case
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
