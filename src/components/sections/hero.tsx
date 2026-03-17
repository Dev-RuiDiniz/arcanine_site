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
import type { ConversionCtaConfig } from '@/lib/cta-config'

interface HeroProps {
  ctas: ConversionCtaConfig
  title?: string
  subtitle?: string
  videoUrl?: string
  slideshow?: boolean
}

export function Hero({
  ctas,
  title = 'Software sob medida para negócios que precisam operar com mais clareza e menos atrito.',
  subtitle = 'Projetamos plataformas, automações e integrações para empresas que precisam reduzir improviso técnico e ganhar base real de execução.',
  videoUrl,
  slideshow,
}: HeroProps) {
  void videoUrl
  void slideshow

  return (
    <section className="section-shell-dark premium-grid relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=2200&q=80&auto=format&fit=crop"
          alt="Equipe acompanhando dashboards e sistemas em ambiente corporativo"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.55)_0%,rgba(2,6,23,0.66)_42%,rgba(2,6,23,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,227,247,0.18),transparent_26%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(86,200,248,0.1),transparent_18%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(103,227,247,0.5),transparent)]" />

      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6 pb-14 pt-32 lg:px-12 lg:pb-16 lg:pt-[8.5rem]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="section-kicker">Engenharia para operação crítica</span>

          <h1 className="mt-6 font-cormorant text-[2.85rem] leading-[0.97] text-white sm:text-[3.4rem] lg:text-[5.2rem]">
            {title}
          </h1>

          <p className="mt-6 max-w-xl font-inter text-sm leading-relaxed text-slate-200 lg:text-base">
            {subtitle}
          </p>

          <div className="mt-9">
            <ConversionCTAs
              ctas={ctas}
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
      </div>
    </section>
  )
}
