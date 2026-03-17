/*
Arquivo: src/components/sections/hero.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ConversionCTAs } from '@/components/ui/conversion-ctas'

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

          <div className="panel-shell-dark rounded-[2rem] p-8 lg:p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="max-w-xl"
            >
              <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">
                Chamada principal
              </p>
              <h2 className="mt-4 font-cormorant text-[2.1rem] leading-tight text-white lg:text-[3rem]">
                Menos ruído operacional. Mais clareza para executar e evoluir.
              </h2>
              <p className="mt-4 font-inter text-sm leading-relaxed text-slate-300 lg:text-base">
                Construímos a base técnica para que a operação funcione melhor hoje e continue saudável conforme o negócio cresce.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
