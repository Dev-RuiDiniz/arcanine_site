/*
Arquivo: src/components/sections/services-preview.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ArtisticText } from '@/components/ui/artistic-text'
import { services } from '@/lib/site-content/services'

export function ServicesPreview() {
  return (
    <section className="section-shell-alt py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <span className="font-inter text-xs tracking-[0.3em] uppercase text-brand-cyan-strong">
              O que fazemos
            </span>

            <div className="mt-6">
              <ArtisticText
                as="h2"
                highlightWords={['ARQUITETURA', 'SOFTWARE', 'AUTOMAÇÃO', 'INTEGRAÇÃO', 'IA', 'RECEITA']}
                className="font-inter text-xl sm:text-2xl lg:text-3xl font-light text-slate-900 leading-relaxed"
                highlightClassName="text-brand-cyan-strong"
              >
                Combinamos ARQUITETURA de SOFTWARE, AUTOMAÇÃO de processos, INTEGRAÇÃO com a operação real e IA aplicada
                para acelerar RECEITA, eficiência e governança.
              </ArtisticText>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-10"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-3 font-inter text-xs tracking-[0.2em] uppercase text-slate-500 hover:text-brand-cyan-strong transition-colors group"
              >
                <span>Explorar serviços</span>
                <ArrowRight
                  size={16}
                  className="text-slate-500 group-hover:text-brand-cyan-strong transform group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="space-y-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group panel-shell flex items-center justify-between gap-5 px-5 py-6 transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40"
                >
                  <div>
                    <span className="font-cormorant text-xl lg:text-2xl text-slate-950 group-hover:text-slate-950 transition-colors">
                      {service.title}
                    </span>
                    <p className="mt-2 max-w-xl font-inter text-sm text-slate-600">{service.excerpt}</p>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-slate-500 group-hover:text-brand-cyan-strong transform group-hover:translate-x-2 transition-all"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
