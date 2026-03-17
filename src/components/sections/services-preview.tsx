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
  'sistemas-web-personalizados',
  'ia-automacoes-comerciais',
  'sites-premium',
].map((slug) => services.find((service) => service.slug === slug)!)

export function ServicesPreview() {
  return (
    <section className="section-shell-alt py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="section-kicker">Capacidades principais</span>
            <h2 className="mt-5 font-cormorant text-[2.1rem] leading-[1.02] text-slate-950 lg:text-[3rem]">
              Três linhas para resolver o que mais costuma travar crescimento.
            </h2>
          </motion.div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-3 font-inter text-[11px] uppercase tracking-[0.18em] text-slate-600 transition-colors hover:text-brand-cyan-strong"
          >
            Ver todos os serviços
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
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
                className="group panel-shell relative flex h-full flex-col overflow-hidden rounded-[1.7rem] p-4 transition-all hover:-translate-y-1 hover:border-brand-cyan/35"
              >
                <div className="relative overflow-hidden rounded-[1.25rem] border border-white/50 bg-slate-950/5">
                  <div className="relative h-44">
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
                    <h3 className="font-cormorant text-[1.9rem] leading-tight text-slate-950">
                      {service.title}
                    </h3>
                    <p className="mt-3 font-inter text-sm leading-relaxed text-slate-700">
                      {service.excerpt}
                    </p>
                  </div>

                  <span className="mt-6 inline-flex items-center gap-2 font-inter text-[11px] uppercase tracking-[0.18em] text-brand-cyan-strong">
                    Ver detalhes
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
