/*
Arquivo: src/app/(site)/about/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const principles = [
  {
    title: 'Clareza antes de execução',
    description: 'Mapeamos a tensão real do negócio antes de abrir backlog, para que a entrega nasça aderente ao contexto e não a suposições.',
  },
  {
    title: 'Arquitetura com intenção',
    description: 'Cada decisão de stack, integração e experiência precisa suportar governança, evolução e uso real no dia a dia da operação.',
  },
  {
    title: 'Resultado sem teatralidade',
    description: 'Preferimos ganho concreto, rastreabilidade e execução consistente em vez de promessas genéricas de transformação.',
  },
]

const workingModel = [
  {
    step: '01',
    title: 'Leitura do negócio',
    description: 'Entendemos fluxo, criticidade, dependências, restrições e o que realmente está travando crescimento ou controle.',
  },
  {
    step: '02',
    title: 'Enquadramento técnico',
    description: 'Traduzimos o problema em arquitetura, prioridades, entregáveis e critérios de risco claros.',
  },
  {
    step: '03',
    title: 'Execução com contexto',
    description: 'Desenvolvemos mantendo proximidade com operação, decisão e impacto, não apenas com escopo.',
  },
  {
    step: '04',
    title: 'Evolução assistida',
    description: 'Estruturamos handoff, monitoramento e próximos ciclos para que a base continue saudável depois do go-live.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="section-shell-dark premium-grid relative overflow-hidden pt-32 pb-14 lg:pt-40 lg:pb-[4.5rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,227,247,0.18),transparent_24%)]" />
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <span className="section-kicker text-brand-cyan">Quem somos</span>
              <h1 className="mt-5 font-cormorant text-[2.8rem] leading-[0.98] text-white lg:text-[4.9rem]">
                A ARCANINE existe para transformar complexidade operacional em estrutura tecnológica utilizável.
              </h1>
              <p className="mt-5 max-w-3xl font-inter text-sm leading-relaxed text-slate-300 lg:text-base">
                Somos uma empresa de engenharia e produto focada em sistemas sob medida, automações, integrações e
                experiências digitais premium. Entramos quando o negócio já percebeu que improviso técnico custa caro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="grid gap-3 sm:grid-cols-3"
            >
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">Foco</p>
                <p className="mt-2 font-cormorant text-2xl text-white">Operação crítica</p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">Entrega</p>
                <p className="mt-2 font-cormorant text-2xl text-white">Arquitetura autoral</p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">Ritmo</p>
                <p className="mt-2 font-cormorant text-2xl text-white">Execução com critério</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell py-14 lg:py-[4.5rem]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-4 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="panel-shell rounded-[1.8rem] p-6"
              >
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan-strong">
                  Princípio 0{index + 1}
                </p>
                <h2 className="mt-3 font-cormorant text-[2rem] leading-tight text-slate-950">
                  {principle.title}
                </h2>
                <p className="mt-4 font-inter text-sm leading-relaxed text-slate-700">
                  {principle.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell-alt py-16 lg:py-[5rem]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="section-kicker justify-center">Como operamos</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] text-slate-950 lg:text-[3rem]">
              Um modelo de trabalho para reduzir risco e acelerar decisão com base sólida.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workingModel.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="panel-shell rounded-[1.7rem] p-5"
              >
                <p className="font-inter text-[11px] uppercase tracking-[0.22em] text-brand-cyan-strong">
                  {item.step}
                </p>
                <h3 className="mt-3 font-cormorant text-[1.8rem] leading-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 font-inter text-sm leading-relaxed text-slate-700">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-shell py-14 lg:py-[4.5rem]">
        <div className="container mx-auto px-6 text-center lg:px-12">
          <p className="font-cormorant text-[2.15rem] leading-tight text-white lg:text-[3.2rem]">
            Se a sua operação exige mais controle, clareza e base técnica, essa conversa já faz sentido.
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-inter text-sm leading-relaxed text-white/90">
            A reunião inicial é usada para entender contexto, criticidade, restrições e o melhor formato de execução.
          </p>
          <Link
            href="/agendar-reuniao"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-brand-cyan bg-brand-cyan px-8 py-3 font-inter text-[11px] uppercase tracking-[0.18em] text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-brand-cyan-strong hover:text-white"
          >
            Agendar reunião técnica
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
