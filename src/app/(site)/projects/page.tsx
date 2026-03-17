/*
Arquivo: src/app/(site)/projects/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import {
  cases,
  caseCategories,
  categoryDescriptions,
  type CaseItem,
} from '@/lib/site-content/projects'

const groupedCases = caseCategories.map((category) => ({
  category,
  description: categoryDescriptions[category],
  items: cases.filter((item) => item.category === category),
}))

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden section-shell-dark pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%)]" />
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <span className="eyebrow font-inter text-[11px]">Portfólio / Cases</span>
            <h1 className="mt-4 font-cormorant text-3xl leading-tight text-white lg:text-6xl">
              Cases reais que conectam arquitetura, operação e resultado.
            </h1>
            <p className="mt-5 max-w-3xl font-inter text-sm leading-relaxed text-slate-300 lg:text-base">
              Publicamos os cases em formato descritivo para preservar confidencialidade comercial, sem perder o que
              importa: contexto real, solução implementada, arquitetura aplicada e impacto operacional percebido.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {groupedCases.map((group) => (
              <div key={group.category} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm">
                <p className="font-inter text-[10px] tracking-[0.18em] uppercase text-brand-cyan">{group.category}</p>
                <p className="mt-3 font-cormorant text-3xl text-white">{group.items.length}</p>
                <p className="mt-2 font-inter text-sm leading-relaxed text-slate-300">{group.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-10 lg:py-14">
        <div className="container mx-auto space-y-12 px-6 lg:px-12">
          {groupedCases.map((group, groupIndex) => (
            <motion.section
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: groupIndex * 0.05 }}
              className="space-y-5"
            >
              <div className="max-w-3xl">
                <p className="font-inter text-[10px] tracking-[0.18em] uppercase text-brand-cyan-strong">{group.category}</p>
                <h2 className="mt-2 font-cormorant text-3xl text-slate-950 lg:text-4xl">{group.category}</h2>
                <p className="mt-2 font-inter text-sm leading-relaxed text-slate-600">{group.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                {group.items.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </section>
    </>
  )
}

function ProjectCard({ project }: { project: CaseItem }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_28px_80px_-54px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1 lg:grid-cols-[1.2fr_1fr]"
    >
      <div className="relative min-h-[280px] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.coverAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: project.coverPosition ?? 'center center' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.12)_0%,rgba(15,23,42,0.62)_100%)]" />
        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-slate-950/55 px-3 py-1 font-inter text-[10px] tracking-[0.16em] uppercase text-cyan-100 backdrop-blur-md">
          {project.category}
        </div>
      </div>

      <div className="flex flex-col justify-between p-6 lg:p-7">
        <div>
          <p className="font-inter text-[10px] tracking-[0.16em] uppercase text-slate-500">{project.segment}</p>
          <h3 className="mt-3 font-cormorant text-3xl leading-tight text-slate-950">{project.title}</h3>
          <p className="mt-3 font-inter text-sm leading-relaxed text-slate-600">{project.excerpt}</p>
        </div>

        <div className="mt-6 flex items-end justify-between gap-4">
          <ul className="space-y-2">
            {project.outcomes.slice(0, 2).map((outcome) => (
              <li key={outcome} className="font-inter text-sm leading-relaxed text-slate-700">
                {outcome}
              </li>
            ))}
          </ul>
          <span className="inline-flex shrink-0 items-center gap-2 font-inter text-[11px] tracking-[0.18em] uppercase text-slate-700 transition-colors group-hover:text-brand-cyan-strong">
            Ver detalhes
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}
