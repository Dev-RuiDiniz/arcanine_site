/*
Arquivo: src/components/sections/about-preview.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const principles = [
  {
    title: 'Diagnóstico antes de stack',
    description: 'Começamos entendendo processo, criticidade, risco e contexto financeiro do negócio.',
  },
  {
    title: 'Produto com visão operacional',
    description: 'A interface e a arquitetura são desenhadas para sustentar uso real e evolução contínua.',
  },
  {
    title: 'Entrega com critério executivo',
    description: 'Priorizamos marcos, dependências e ganho concreto em vez de volume artificial de features.',
  },
]

export function AboutPreview() {
  return (
    <section className="section-shell relative overflow-hidden py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-kicker">Como pensamos</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] leading-[1.02] text-slate-950 lg:text-[3.05rem]">
              Não entregamos apenas software. Entregamos estrutura para decidir, operar e escalar melhor.
            </h2>
            <p className="mt-5 max-w-xl font-inter text-sm leading-relaxed text-slate-700 lg:text-base">
              A ARCANINE combina disciplina de engenharia com leitura real de operação. Isso muda a qualidade do que
              é construído e também a qualidade das decisões que o negócio consegue tomar depois.
            </p>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 font-inter text-[11px] uppercase tracking-[0.18em] text-slate-600 transition-colors hover:text-brand-cyan-strong"
            >
              Entender a filosofia de trabalho
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid gap-4">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="panel-shell rounded-[1.75rem] p-6 lg:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan-strong">
                      Princípio 0{index + 1}
                    </p>
                    <h3 className="mt-3 font-cormorant text-[1.9rem] leading-tight text-slate-950">
                      {principle.title}
                    </h3>
                  </div>
                  <div className="rounded-full border border-brand-cyan/18 bg-brand-cyan-soft px-3 py-1 font-inter text-[10px] uppercase tracking-[0.16em] text-brand-cyan-strong">
                    Authorial build
                  </div>
                </div>
                <p className="mt-4 max-w-2xl font-inter text-sm leading-relaxed text-slate-700">
                  {principle.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
