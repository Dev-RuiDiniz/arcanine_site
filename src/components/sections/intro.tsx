/*
Arquivo: src/components/sections/intro.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { caseCategories, cases } from '@/lib/site-content/projects'
import { services } from '@/lib/site-content/services'

const capabilityPillars = [
  {
    title: 'Desenho operacional',
    description: 'Mapeamos o fluxo real do negócio antes de escrever software, para que a solução nasça aderente à operação.',
  },
  {
    title: 'Arquitetura sob medida',
    description: 'Escolhemos stack, integrações e modelo de entrega de acordo com risco, escala e necessidade de governança.',
  },
  {
    title: 'Execução com contexto',
    description: 'Cada entrega conecta tecnologia, processo e critério de negócio, sem empilhar funcionalidades desconexas.',
  },
]

const outcomeSignals = [
  'menos retrabalho e menos dependência de planilhas',
  'mais rastreabilidade em processos, dados e integrações',
  'mais clareza executiva para decidir onde acelerar',
]

export function IntroSection() {
  return (
    <section className="section-shell relative overflow-hidden py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="max-w-xl"
          >
            <span className="section-kicker">O que muda quando a base é certa</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] leading-[1.02] text-slate-950 lg:text-[3.2rem]">
              A tecnologia deixa de ser remendo e passa a operar como alavanca real de crescimento.
            </h2>
            <p className="mt-5 font-inter text-sm leading-relaxed text-slate-700 lg:text-base">
              A ARCANINE entra quando o negócio já entendeu que crescer com consistência exige mais do que ferramentas
              soltas. Exige arquitetura, clareza operacional e execução com rigor.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="panel-shell rounded-[1.4rem] p-4">
                <p className="font-cormorant text-[2rem] text-slate-950">{cases.length}</p>
                <p className="mt-1 font-inter text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  cases reais
                </p>
              </div>
              <div className="panel-shell rounded-[1.4rem] p-4">
                <p className="font-cormorant text-[2rem] text-slate-950">{services.length}</p>
                <p className="mt-1 font-inter text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  ofertas ativas
                </p>
              </div>
              <div className="panel-shell rounded-[1.4rem] p-4">
                <p className="font-cormorant text-[2rem] text-slate-950">{caseCategories.length}</p>
                <p className="mt-1 font-inter text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  frentes de prova
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            <div className="grid gap-4 lg:grid-cols-3">
              {capabilityPillars.map((pillar, index) => (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="panel-shell rounded-[1.65rem] p-5"
                >
                  <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan-strong">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-cormorant text-[1.7rem] leading-tight text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 font-inter text-sm leading-relaxed text-slate-700">
                    {pillar.description}
                  </p>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="panel-shell-muted rounded-[1.85rem] p-6 lg:p-7"
            >
              <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                <div>
                  <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan-strong">
                    Resultado perceptível
                  </p>
                  <p className="mt-3 font-cormorant text-[2rem] leading-tight text-slate-950 lg:text-[2.5rem]">
                    O ganho aparece em fluxo, confiabilidade e capacidade de execução.
                  </p>
                </div>
                <div className="space-y-3">
                  {outcomeSignals.map((signal) => (
                    <div key={signal} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-cyan-strong" />
                      <p className="font-inter text-sm leading-relaxed text-slate-700">{signal}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                className="group mt-6 inline-flex items-center gap-3 font-inter text-[11px] uppercase tracking-[0.18em] text-slate-600 transition-colors hover:text-brand-cyan-strong"
              >
                Conheça a lógica de trabalho da ARCANINE
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
