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

interface FeaturedProjectsProps {
  projects: CaseItem[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const selectedProjects = projects.slice(0, 2)

  return (
    <section className="section-shell-dark py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="section-kicker text-brand-cyan">Cases selecionados</span>
            <h2 className="mt-5 font-cormorant text-[2.1rem] leading-[1.02] text-white lg:text-[3rem]">
              Duas entregas para mostrar como pensamos arquitetura na prática.
            </h2>
          </motion.div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 font-inter text-[11px] uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-white"
          >
            Ver todos os cases
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {selectedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: CaseItem }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block min-h-[24rem] overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900/50"
    >
      <div className="absolute inset-0">
        <Image
          src={project.coverImage}
          alt={project.coverAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: project.coverPosition ?? 'center center' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.78)_60%,rgba(2,6,23,0.96)_100%)]" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-5 lg:p-6">
        <h3 className="max-w-xl font-cormorant text-[2rem] leading-tight text-white lg:text-[2.45rem]">
          {project.title}
        </h3>
        <p className="mt-3 max-w-xl font-inter text-sm leading-relaxed text-slate-200/92">
          {project.excerpt}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 font-inter text-[11px] uppercase tracking-[0.18em] text-white/84">
          Explorar case
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
