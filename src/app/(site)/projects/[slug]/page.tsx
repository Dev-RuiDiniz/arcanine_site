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
      <section className="relative h-[52vh] lg:h-[62vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image src={project.coverImage} alt={project.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex flex-col justify-end pb-12 lg:pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="font-inter text-[11px] tracking-[0.2em] uppercase text-white/75">Case ARCANINE</span>
            <h1 className="mt-3 font-cormorant text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">{project.title}</h1>
            <p className="mt-2 font-inter text-sm text-white/85">{project.segment}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-[#E3DFDD]">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-8 lg:gap-10">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 border border-stone-300/45 bg-white/70 p-6 lg:p-7"
          >
            <h2 className="font-cormorant text-3xl text-stone-900">Desafio</h2>
            <p className="mt-3 font-inter text-sm text-stone-700 leading-relaxed">{project.challenge}</p>

            <h2 className="mt-8 font-cormorant text-3xl text-stone-900">Solucao implementada</h2>
            <p className="mt-3 font-inter text-sm text-stone-700 leading-relaxed">{project.solution}</p>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="border border-stone-300/45 bg-white/70 p-6"
          >
            <h3 className="font-inter text-[11px] tracking-[0.2em] uppercase text-stone-500">Dados do case</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <span className="block font-inter text-[10px] tracking-[0.16em] uppercase text-stone-500">Duracao</span>
                <span className="font-inter text-sm text-stone-800">{project.duration}</span>
              </li>
              <li>
                <span className="block font-inter text-[10px] tracking-[0.16em] uppercase text-stone-500">Status</span>
                <span className="font-inter text-sm text-stone-800">{project.stage}</span>
              </li>
              <li>
                <span className="block font-inter text-[10px] tracking-[0.16em] uppercase text-stone-500">Stack</span>
                <span className="font-inter text-sm text-stone-800">{project.stack.join(' | ')}</span>
              </li>
            </ul>
          </motion.aside>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#F1E7DE]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <h2 className="font-cormorant text-3xl text-stone-900">Impacto mensuravel</h2>
            <ul className="mt-4 space-y-3">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="font-inter text-sm text-stone-700 leading-relaxed">
                  {outcome}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-[#B4ADA8] border-t border-stone-500/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 font-inter text-xs tracking-[0.2em] uppercase text-stone-700 hover:text-stone-900 transition-colors group"
            >
              <ArrowLeft size={15} className="transform group-hover:-translate-x-1 transition-transform" />
              Voltar para cases
            </Link>

            <div className="flex items-center gap-8">
              {prevProject && (
                <Link href={`/projects/${prevProject.slug}`} className="group text-right">
                  <span className="block font-inter text-[10px] tracking-[0.18em] uppercase text-stone-500">Anterior</span>
                  <span className="font-cormorant text-lg text-stone-700 group-hover:text-stone-900 transition-colors">
                    {prevProject.title}
                  </span>
                </Link>
              )}
              {nextProject && (
                <Link href={`/projects/${nextProject.slug}`} className="group text-left inline-flex items-center gap-2">
                  <div>
                    <span className="block font-inter text-[10px] tracking-[0.18em] uppercase text-stone-500">Proximo</span>
                    <span className="font-cormorant text-lg text-stone-700 group-hover:text-stone-900 transition-colors">
                      {nextProject.title}
                    </span>
                  </div>
                  <ArrowRight size={15} className="text-stone-600 group-hover:text-stone-900 transition-colors" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}