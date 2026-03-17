/*
Arquivo: src/app/(site)/projects/[slug]/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cases, casesBySlug } from '@/lib/site-content/projects'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = use(params)
  const project = casesBySlug[slug] ?? cases[0]
  const index = cases.findIndex((item) => item.slug === project.slug)
  const prevProject = index > 0 ? cases[index - 1] : null
  const nextProject = index < cases.length - 1 ? cases[index + 1] : null

  return (
    <>
      <section className="relative overflow-hidden pt-28 lg:pt-32">
        <div className="absolute inset-0">
          <Image
            src={project.coverImage}
            alt={project.coverAlt}
            fill
            priority
            className="object-cover"
            style={{ objectPosition: project.coverPosition ?? 'center center' }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.3)_0%,rgba(2,6,23,0.72)_46%,rgba(2,6,23,0.96)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_25%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pb-14 lg:px-12 lg:pb-18">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full border border-white/12 bg-black/20 px-3 py-1 font-inter text-[10px] tracking-[0.18em] uppercase text-brand-cyan backdrop-blur-sm">
              {project.category}
            </span>
            <p className="mt-5 font-inter text-[11px] tracking-[0.18em] uppercase text-white/70">Case ARCANINE / {project.segment}</p>
            <h1 className="mt-3 font-cormorant text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl font-inter text-sm leading-relaxed text-slate-200 lg:text-base">{project.excerpt}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-14 lg:py-18">
        <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[1.6fr_0.9fr] lg:px-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <div className="panel-shell rounded-[28px] p-6 lg:p-8">
              <p className="font-inter text-[11px] tracking-[0.18em] uppercase text-brand-cyan-strong">Contexto</p>
              <h2 className="mt-3 font-cormorant text-3xl text-slate-950">O cenário que pedia intervenção técnica.</h2>
              <p className="mt-4 font-inter text-sm leading-relaxed text-slate-700 lg:text-[15px]">{project.context}</p>
            </div>

            <div className="panel-shell rounded-[28px] p-6 lg:p-8">
              <p className="font-inter text-[11px] tracking-[0.18em] uppercase text-brand-cyan-strong">Solução implementada</p>
              <h2 className="mt-3 font-cormorant text-3xl text-slate-950">Produto e fluxo desenhados para operação real.</h2>
              <p className="mt-4 font-inter text-sm leading-relaxed text-slate-700 lg:text-[15px]">{project.solution}</p>
            </div>

            <div className="panel-shell rounded-[28px] p-6 lg:p-8">
              <p className="font-inter text-[11px] tracking-[0.18em] uppercase text-brand-cyan-strong">Arquitetura</p>
              <h2 className="mt-3 font-cormorant text-3xl text-slate-950">Camadas, integrações e decisões técnicas.</h2>
              <p className="mt-4 font-inter text-sm leading-relaxed text-slate-700 lg:text-[15px]">{project.architecture}</p>
            </div>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="space-y-6"
          >
            <div className="panel-shell rounded-[28px] p-6">
              <h3 className="font-inter text-[11px] tracking-[0.2em] uppercase text-brand-cyan-strong">Stack e capacidades</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-950 px-3 py-1.5 font-inter text-[11px] tracking-[0.08em] uppercase text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="panel-shell rounded-[28px] p-6">
              <h3 className="font-inter text-[11px] tracking-[0.2em] uppercase text-brand-cyan-strong">Impacto</h3>
              <ul className="mt-5 space-y-3">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="font-inter text-sm leading-relaxed text-slate-700">
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {project.confidentialityNote ? (
              <div className="rounded-[28px] border border-brand-cyan/20 bg-brand-cyan/8 p-6">
                <p className="font-inter text-[10px] tracking-[0.18em] uppercase text-brand-cyan-strong">Nota editorial</p>
                <p className="mt-3 font-inter text-sm leading-relaxed text-slate-700">{project.confidentialityNote}</p>
              </div>
            ) : null}
          </motion.aside>
        </div>
      </section>

      <section className="cta-shell border-t border-brand-cyan/10 py-10 lg:py-14">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 font-inter text-xs tracking-[0.2em] uppercase text-slate-300 transition-colors hover:text-brand-cyan group"
            >
              <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
              Voltar para cases
            </Link>

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
              {prevProject ? (
                <Link href={`/projects/${prevProject.slug}`} className="group text-right">
                  <span className="block font-inter text-[10px] tracking-[0.18em] uppercase text-slate-500">Anterior</span>
                  <span className="font-cormorant text-lg text-slate-200 transition-colors group-hover:text-brand-cyan">
                    {prevProject.title}
                  </span>
                </Link>
              ) : null}
              {nextProject ? (
                <Link href={`/projects/${nextProject.slug}`} className="group inline-flex items-center gap-2 text-left">
                  <div>
                    <span className="block font-inter text-[10px] tracking-[0.18em] uppercase text-slate-500">Próximo</span>
                    <span className="font-cormorant text-lg text-slate-200 transition-colors group-hover:text-brand-cyan">
                      {nextProject.title}
                    </span>
                  </div>
                  <ArrowRight size={15} className="text-slate-300 transition-colors group-hover:text-brand-cyan" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
