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

const heroSignals = [
  'Sistemas sob medida para processos críticos',
  'Automações e integrações com impacto operacional',
  'Arquitetura orientada a previsibilidade, escala e controle',
]

const heroShowcase = [
  {
    image: '/projects/fintech-ledger.jpg',
    label: 'Fintech & Web3',
    title: 'Core financeiro com rastreabilidade ponta a ponta',
  },
  {
    image: '/projects/ia-entrevistas.jpg',
    label: 'IA aplicada',
    title: 'Fluxos conversacionais e decisão assistida por LLM',
  },
  {
    image: '/projects/gasnow.jpg',
    label: 'IoT & Operação',
    title: 'Telemetria, hardware e software conectados à operação',
  },
]

const heroStats = [
  { value: '9', label: 'cases publicados' },
  { value: '6', label: 'ofertas estruturadas' },
  { value: '3', label: 'frentes principais de entrega' },
]

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(86,200,248,0.12),transparent_18%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(103,227,247,0.5),transparent)]" />

      <div className="container relative z-10 mx-auto grid min-h-screen items-center gap-12 px-6 pb-14 pt-32 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:pb-16 lg:pt-[8.5rem]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="section-kicker">Engenharia para operação crítica</span>

          <h1 className="mt-6 font-cormorant text-[2.85rem] leading-[0.97] text-white sm:text-[3.4rem] lg:text-[5.5rem]">
            Arquitetura, automação e software sob medida para negócios que não podem operar no improviso.
          </h1>

          <p className="mt-6 max-w-2xl font-inter text-sm leading-relaxed text-slate-200 lg:text-base">
            A ARCANINE projeta plataformas, integrações e fluxos inteligentes para empresas que precisam reduzir
            atrito operacional, ganhar previsibilidade técnica e crescer com uma base autoral de engenharia.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 + index * 0.08 }}
                className="rounded-[1.45rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md"
              >
                <p className="font-cormorant text-3xl text-white lg:text-[2.3rem]">{stat.value}</p>
                <p className="mt-1 font-inter text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-9">
            <ConversionCTAs
              primaryAction="meeting"
              secondaryAction="budget"
              surface="dark"
            />
          </div>

          <div className="mt-10 grid gap-3">
            {heroSignals.map((signal, index) => (
              <motion.div
                key={signal}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.22 + index * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-cyan shadow-[0_0_24px_rgba(103,227,247,0.6)]" />
                <p className="font-inter text-sm leading-relaxed text-slate-300">{signal}</p>
              </motion.div>
            ))}
          </div>

          <Link
            href="/projects"
            className="group mt-10 inline-flex items-center gap-3 font-inter text-[11px] uppercase tracking-[0.18em] text-white/76 transition-colors hover:text-white"
          >
            Ver cases e aplicações reais
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
          <div className="absolute -right-8 bottom-10 hidden h-36 w-36 rounded-full bg-sky-400/12 blur-3xl lg:block" />

          <div className="panel-shell-dark relative overflow-hidden rounded-[2rem] p-4 lg:p-5">
            <div className="mb-4 flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3">
              <div>
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">
                  Portfólio vivo
                </p>
                <p className="mt-1 font-cormorant text-2xl text-white">Arquitetura aplicada ao mundo real</p>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 font-inter text-[10px] uppercase tracking-[0.16em] text-slate-300">
                B2B / Operação
              </span>
            </div>

            <div className="grid gap-3">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="group relative min-h-[20rem] overflow-hidden rounded-[1.6rem] border border-white/10"
              >
                <Image
                  src={heroShowcase[0].image}
                  alt={heroShowcase[0].title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.1)_0%,rgba(7,17,31,0.78)_58%,rgba(7,17,31,0.96)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                  <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">
                    {heroShowcase[0].label}
                  </p>
                  <h2 className="mt-2 max-w-md font-cormorant text-[2rem] leading-tight text-white">
                    {heroShowcase[0].title}
                  </h2>
                </div>
              </motion.article>

              <div className="grid gap-3 sm:grid-cols-2">
                {heroShowcase.slice(1).map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.24 + index * 0.08 }}
                    className="group relative min-h-[13rem] overflow-hidden rounded-[1.45rem] border border-white/10"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.14)_0%,rgba(7,17,31,0.84)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">
                        {item.label}
                      </p>
                      <h3 className="mt-2 font-cormorant text-[1.45rem] leading-tight text-white">
                        {item.title}
                      </h3>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
