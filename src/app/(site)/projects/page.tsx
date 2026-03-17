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

const leadingCase = cases[0]

export default function ProjectsPage() {
  return (
    <>
      <section className="section-shell-dark premium-grid relative overflow-hidden pt-32 pb-14 lg:pt-40 lg:pb-[4.5rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,227,247,0.18),transparent_24%)]" />
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <span className="section-kicker text-brand-cyan">Portfólio / Cases</span>
              <h1 className="mt-5 font-cormorant text-[2.8rem] leading-[0.98] text-white lg:text-[4.9rem]">
                Provas publicadas de como arquitetura, operação e resultado se encontram em entregas reais.
              </h1>
              <p className="mt-5 max-w-3xl font-inter text-sm leading-relaxed text-slate-300 lg:text-base">
                Publicamos os cases em formato editorial para preservar confidencialidade comercial sem perder o que
                realmente importa: tensão do projeto, solução desenhada, decisões técnicas e impacto operacional.
              </p>
            </motion.div>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="panel-shell-dark overflow-hidden rounded-[2rem] p-4"
            >
              <div className="relative min-h-[22rem] overflow-hidden rounded-[1.55rem] border border-white/10">
                <Image
                  src={leadingCase.coverImage}
                  alt={leadingCase.coverAlt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: leadingCase.coverPosition ?? 'center center' }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.14)_0%,rgba(7,17,31,0.84)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">
                    {leadingCase.category}
                  </p>
                  <h2 className="mt-2 font-cormorant text-[2rem] leading-tight text-white">
                    {leadingCase.title}
                  </h2>
                  <p className="mt-3 font-inter text-sm leading-relaxed text-slate-200">
                    {leadingCase.excerpt}
                  </p>
                </div>
              </div>
            </motion.article>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {groupedCases.map((group) => (
              <div key={group.category} className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur-md">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">
                  {group.category}
                </p>
                <p className="mt-3 font-cormorant text-[2.4rem] text-white">{group.items.length}</p>
                <p className="mt-2 font-inter text-sm leading-relaxed text-slate-300">{group.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-12 lg:py-16">
        <div className="container mx-auto space-y-14 px-6 lg:px-12">
          {groupedCases.map((group, groupIndex) => (
            <motion.section
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: groupIndex * 0.05 }}
              className="space-y-6"
            >
              <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div className="max-w-3xl">
                  <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan-strong">{group.category}</p>
                  <h2 className="mt-2 font-cormorant text-[2.2rem] text-slate-950 lg:text-[3rem]">{group.category}</h2>
                  <p className="mt-3 font-inter text-sm leading-relaxed text-slate-700">{group.description}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/55 bg-white/64 px-5 py-4 backdrop-blur-md">
                  <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    O que observar nesta frente
                  </p>
                  <p className="mt-2 font-inter text-sm leading-relaxed text-slate-700">
                    Contexto de negócio, decisão arquitetural, restrições reais e como a solução foi organizada para
                    gerar impacto sem simplificar demais o problema.
                  </p>
                </div>
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
      className="group grid overflow-hidden rounded-[2rem] border border-white/65 bg-white/70 shadow-[0_28px_80px_-54px_rgba(15,23,42,0.24)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 lg:grid-cols-[1.15fr_0.85fr]"
    >
      <div className="relative min-h-[19rem] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.coverAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: project.coverPosition ?? 'center center' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.12)_0%,rgba(15,23,42,0.56)_100%)]" />
        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-slate-950/55 px-3 py-1 font-inter text-[10px] uppercase tracking-[0.16em] text-cyan-100 backdrop-blur-md">
          {project.category}
        </div>
      </div>

      <div className="flex flex-col justify-between p-6 lg:p-7">
        <div>
          <p className="font-inter text-[10px] uppercase tracking-[0.16em] text-slate-500">{project.segment}</p>
          <h3 className="mt-3 font-cormorant text-[2rem] leading-tight text-slate-950">{project.title}</h3>
          <p className="mt-3 font-inter text-sm leading-relaxed text-slate-700">{project.excerpt}</p>
        </div>

        <div className="mt-6 grid gap-3">
          {project.challengePoints.slice(0, 2).map((point) => (
            <p key={point} className="font-inter text-[12px] leading-relaxed text-slate-600">
              {point}
            </p>
          ))}
        </div>

        <span className="mt-6 inline-flex items-center gap-2 font-inter text-[11px] uppercase tracking-[0.18em] text-brand-cyan-strong transition-colors group-hover:text-brand-cyan-strong">
          Ver estudo de caso
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
