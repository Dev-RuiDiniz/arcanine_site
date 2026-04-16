/*
Arquivo: src/components/sections/intro.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const capabilities = [
  'Desenho operacional antes de código',
  'Arquitetura sob medida para escala e governança',
  'Execução com contexto de negócio',
]

interface IntroSectionProps {
  title?: string
  description?: string
}

export function IntroSection({
  title = 'Tecnologia para organizar operação, ganhar previsibilidade e sustentar crescimento.',
  description = 'Entramos quando o negócio precisa de uma base técnica mais sólida para operar melhor e evoluir com menos ruído.',
}: IntroSectionProps) {
  return (
    <section className="section-shell relative overflow-hidden py-18 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-kicker justify-center">O que entregamos</span>
            <h2 className="mt-5 font-cormorant text-[2.1rem] leading-[1.02] text-slate-950 lg:text-[3rem]">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-inter text-sm leading-relaxed text-slate-700 lg:text-base">
              {description}
            </p>
          </motion.div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="panel-shell rounded-[1.45rem] p-5"
              >
                <p className="font-inter text-sm leading-relaxed text-slate-700">{capability}</p>
              </motion.div>
            ))}
          </div>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-3 font-inter text-[11px] uppercase tracking-[0.18em] text-slate-600 transition-colors hover:text-brand-cyan-strong"
          >
            Conhecer a Arcane
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
