/*
Arquivo: src/components/sections/services-preview.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/site-content/services'

const spotlightServices = [
  {
    slug: 'sistemas-web-personalizados',
    signal: 'Operação e governança',
  },
  {
    slug: 'ia-automacoes-comerciais',
    signal: 'Receita e produtividade',
  },
  {
    slug: 'automacao-integracoes-hardware',
    signal: 'Integração com o mundo físico',
  },
  {
    slug: 'sites-premium',
    signal: 'Posicionamento e demanda',
  },
].map(({ slug, signal }) => ({
  ...services.find((service) => service.slug === slug)!,
  signal,
}))

export function ServicesPreview() {
  return (
    <section className="section-shell-alt py-24 lg:py-[7.5rem]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <span className="section-kicker">Capacidades principais</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] leading-[1.02] text-slate-950 lg:text-[3.1rem]">
              Escolha o eixo onde sua operação mais precisa ganhar consistência.
            </h2>
            <p className="mt-5 font-inter text-sm leading-relaxed text-slate-700 lg:text-base">
              Nossas ofertas são organizadas para responder a problemas diferentes: estrutura operacional, aceleração
              comercial, integração com hardware e posicionamento digital premium.
            </p>

            <div className="mt-8 space-y-4">
              <div className="panel-shell rounded-[1.5rem] p-5">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan-strong">
                  Como atuamos
                </p>
                <p className="mt-3 font-inter text-sm leading-relaxed text-slate-700">
                  Entramos com descoberta técnica, desenho da solução, implementação estruturada e evolução orientada a
                  resultado, sem separar produto, engenharia e operação.
                </p>
              </div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 font-inter text-[11px] uppercase tracking-[0.18em] text-slate-600 transition-colors hover:text-brand-cyan-strong"
              >
                Explorar todas as ofertas
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {spotlightServices.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group panel-shell relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-[1.8rem] p-4 transition-all hover:-translate-y-1 hover:border-brand-cyan/35 hover:shadow-[0_34px_80px_-44px_rgba(7,17,31,0.24)]"
                >
                  <div className="relative overflow-hidden rounded-[1.35rem] border border-white/50 bg-slate-950/5">
                    <div className="absolute left-4 top-4 z-10 rounded-full border border-white/65 bg-white/82 px-3 py-1 font-inter text-[10px] uppercase tracking-[0.18em] text-slate-600 backdrop-blur-md">
                      {service.signal}
                    </div>
                    <div className="relative h-48">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.08)_0%,rgba(7,17,31,0.44)_100%)]" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between px-2 pb-2 pt-5">
                    <div>
                      <h3 className="font-cormorant text-[2rem] leading-tight text-slate-950">
                        {service.title}
                      </h3>
                      <p className="mt-3 font-inter text-sm leading-relaxed text-slate-700">
                        {service.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-3">
                      <p className="max-w-[16rem] font-inter text-[11px] uppercase tracking-[0.14em] text-slate-500">
                        {service.subtitle}
                      </p>
                      <span className="inline-flex items-center gap-2 font-inter text-[11px] uppercase tracking-[0.18em] text-brand-cyan-strong">
                        Ver detalhes
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
