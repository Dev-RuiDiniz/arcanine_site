/*
Arquivo: src/components/sections/about-preview.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function AboutPreview() {
  return (
    <section className="section-shell py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="panel-shell-muted mx-auto max-w-4xl rounded-[2rem] p-8 text-center lg:p-10"
        >
          <span className="section-kicker justify-center">Sobre a Arcane</span>
          <h2 className="mt-5 font-cormorant text-[2.1rem] leading-[1.02] text-slate-950 lg:text-[3rem]">
            Engenharia com leitura real de operação.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-inter text-sm leading-relaxed text-slate-700 lg:text-base">
            Construímos soluções para empresas que precisam tomar decisões melhores, operar com mais clareza e evoluir com uma base técnica mais sólida.
          </p>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-3 font-inter text-[11px] uppercase tracking-[0.18em] text-slate-600 transition-colors hover:text-brand-cyan-strong"
          >
            Conhecer a Arcane
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
