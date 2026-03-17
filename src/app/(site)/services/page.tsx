/*
Arquivo: src/app/(site)/services/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { serviceProcessSteps, services } from '@/lib/site-content/services'

export default function ServicesPage() {
  return (
    <>
      <section className="relative section-shell-dark pt-32 pb-10 lg:pt-40 lg:pb-14">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="eyebrow font-inter text-[11px]">Serviços</span>
            <h1 className="mt-4 font-cormorant text-3xl lg:text-5xl text-white leading-tight">
              Serviços de tecnologia para destravar operação, receita e escala.
            </h1>
            <p className="mt-5 font-inter text-sm lg:text-base text-slate-300 leading-relaxed max-w-3xl">
              Ofertas estruturadas para empresas que precisam eliminar gargalos, integrar sistemas críticos e crescer
              com previsibilidade técnica e comercial.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-8 lg:py-12">
        <div className="px-2 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block relative aspect-[4/3] overflow-hidden bg-slate-900 border border-slate-900/10"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.82)_100%)] group-hover:bg-[linear-gradient(180deg,rgba(8,145,178,0.16)_0%,rgba(15,23,42,0.88)_100%)] transition-colors" />

                  <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-6">
                    <h2 className="font-cormorant text-2xl lg:text-3xl text-white leading-tight">{service.title}</h2>
                    <p className="mt-2 font-inter text-xs lg:text-sm text-slate-200 leading-relaxed">{service.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.18em] uppercase text-brand-cyan">
                      Ver aplicações e benefícios
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell-alt py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-cormorant text-2xl lg:text-4xl text-slate-950">Processo de trabalho em 7 etapas</h2>
            <p className="mt-3 font-inter text-sm text-slate-600">
              Método claro para reduzir risco técnico, acelerar entrega e capturar resultado de negócio.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
            {serviceProcessSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="panel-shell p-5"
              >
                <span className="font-inter text-[11px] tracking-[0.24em] text-brand-cyan-strong">{step.number}</span>
                <h3 className="mt-2 font-cormorant text-2xl text-slate-950">{step.title}</h3>
                <p className="mt-3 font-inter text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-shell py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-cormorant text-2xl lg:text-4xl text-white italic mb-7">
              Vamos transformar sua necessidade técnica em um plano de execução.
            </p>
            <Link
              href="/solicitar-orcamento"
              className="inline-block px-9 py-3 border border-brand-cyan/55 text-white font-inter text-[11px] tracking-[0.2em] uppercase hover:bg-brand-cyan hover:text-slate-950 transition-all duration-300"
            >
              Solicitar escopo inicial
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
