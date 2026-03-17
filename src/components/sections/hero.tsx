/*
Arquivo: src/components/sections/hero.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ConversionCTAs } from '@/components/ui/conversion-ctas'

const featuredCase = {
  image: '/projects/fintech-ledger.jpg',
  label: 'Case em destaque',
  title: 'Core financeiro com rastreabilidade ponta a ponta',
}

interface HeroProps {
  videoUrl?: string
  slideshow?: boolean
}

export function Hero({ videoUrl, slideshow }: HeroProps) {
  void videoUrl
  void slideshow

  return (
    <section className="section-shell-dark premium-grid relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,227,247,0.18),transparent_26%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(86,200,248,0.1),transparent_18%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(103,227,247,0.5),transparent)]" />

      <div className="container relative z-10 mx-auto grid min-h-screen items-center gap-10 px-6 pb-14 pt-32 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:pb-16 lg:pt-[8.5rem]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="section-kicker">Engenharia para operação crítica</span>

          <h1 className="mt-6 font-cormorant text-[2.85rem] leading-[0.97] text-white sm:text-[3.4rem] lg:text-[5.2rem]">
            Software sob medida para negócios que precisam operar com mais clareza e menos atrito.
          </h1>

          <p className="mt-6 max-w-xl font-inter text-sm leading-relaxed text-slate-200 lg:text-base">
            Projetamos plataformas, automações e integrações para empresas que precisam reduzir improviso técnico e
            ganhar base real de execução.
          </p>

          <div className="mt-9">
            <ConversionCTAs
              primaryAction="meeting"
              secondaryAction="budget"
              surface="dark"
            />
          </div>

          <Link
            href="/projects"
            className="group mt-8 inline-flex items-center gap-3 font-inter text-[11px] uppercase tracking-[0.18em] text-white/76 transition-colors hover:text-white"
          >
            Ver cases selecionados
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="relative"
        >
          <div className="absolute -left-8 top-12 hidden h-28 w-28 rounded-full bg-brand-cyan/18 blur-3xl lg:block" />

          <div className="panel-shell-dark relative overflow-hidden rounded-[2rem] p-4 lg:p-5">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="group relative min-h-[24rem] overflow-hidden rounded-[1.6rem] border border-white/10"
            >
              <Image
                src={featuredCase.image}
                alt={featuredCase.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.1)_0%,rgba(7,17,31,0.78)_58%,rgba(7,17,31,0.96)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">
                  {featuredCase.label}
                </p>
                <h2 className="mt-2 max-w-md font-cormorant text-[2rem] leading-tight text-white">
                  {featuredCase.title}
                </h2>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
