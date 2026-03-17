/*
Arquivo: src/app/(site)/projects/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cases } from '@/lib/site-content/projects'

export default function ProjectsPage() {
  return (
    <>
      <section className="relative section-shell-dark pt-32 pb-10 lg:pt-40 lg:pb-14">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="eyebrow font-inter text-[11px]">Portfólio / Cases</span>
            <h1 className="mt-4 font-cormorant text-3xl lg:text-5xl text-white leading-tight">
              Casos reais de transformação digital orientada a resultado.
            </h1>
            <p className="mt-5 font-inter text-sm lg:text-base text-slate-300 leading-relaxed max-w-3xl">
              Cada case apresenta desafio, estratégia técnica e impacto de negócio. Sem narrativa inflada: apenas o que
              foi construído, medido e entregue.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-8 lg:py-12">
        <div className="px-2 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
            {cases.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

interface ProjectCardProps {
  project: (typeof cases)[0]
}

function ProjectCard({ project }: ProjectCardProps) {
  const isComingSoon = project.stage === 'COMING_SOON'
  const isWorkInProgress = project.stage === 'WORK_IN_PROGRESS'

  const statusLabel = isComingSoon ? 'em breve' : isWorkInProgress ? 'em implantação' : null

  return (
    <Link
      href={isComingSoon ? '#' : `/projects/${project.slug}`}
      className={cn('group block relative overflow-hidden bg-slate-900 aspect-[4/3] border border-slate-900/10', isComingSoon && 'cursor-default')}
    >
      <div className="absolute inset-0">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className={cn('object-cover transition-transform duration-700', !isComingSoon && 'group-hover:scale-105')}
        />
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            isComingSoon
              ? 'bg-slate-950/68'
              : 'bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.8)_100%)] group-hover:bg-[linear-gradient(180deg,rgba(8,145,178,0.16)_0%,rgba(15,23,42,0.88)_100%)]'
          )}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
        <h2 className="font-cormorant text-xl lg:text-2xl text-white leading-tight">{project.title}</h2>
        <p className="mt-2 font-inter text-[10px] tracking-[0.14em] uppercase text-white/75">{project.segment}</p>

        {statusLabel && (
          <span className="mt-2 font-inter text-[10px] tracking-[0.12em] lowercase text-brand-cyan/80 italic">{statusLabel}</span>
        )}
      </div>
    </Link>
  )
}
