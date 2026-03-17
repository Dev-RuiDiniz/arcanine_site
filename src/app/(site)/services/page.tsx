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
      <section className="relative pt-32 pb-10 lg:pt-40 lg:pb-14 bg-[#E3DFDD]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="font-inter text-[11px] tracking-[0.22em] uppercase text-stone-500">Serviços</span>
            <h1 className="mt-4 font-cormorant text-3xl lg:text-5xl text-stone-900 leading-tight">
              Serviços de tecnologia para destravar operação, receita e escala.
            </h1>
            <p className="mt-5 font-inter text-sm lg:text-base text-stone-600 leading-relaxed max-w-3xl">
              Ofertas estruturadas para empresas que precisam eliminar gargalos, integrar sistemas críticos e crescer
              com previsibilidade técnica e comercial.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 lg:py-12 bg-[#E3DFDD]">
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
                  className="group block relative aspect-[4/3] overflow-hidden bg-stone-300"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/55 transition-colors" />

                  <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-6">
                    <h2 className="font-cormorant text-2xl lg:text-3xl text-white leading-tight">{service.title}</h2>
                    <p className="mt-2 font-inter text-xs lg:text-sm text-white/80 leading-relaxed">{service.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.18em] uppercase text-white/90">
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

      <section className="py-16 lg:py-24 bg-[#F1E7DE]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-cormorant text-2xl lg:text-4xl text-stone-900">Processo de trabalho em 7 etapas</h2>
            <p className="mt-3 font-inter text-sm text-stone-600">
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
                className="border border-stone-300/45 bg-white/70 p-5"
              >
                <span className="font-inter text-[11px] tracking-[0.24em] text-stone-500">{step.number}</span>
                <h3 className="mt-2 font-cormorant text-2xl text-stone-900">{step.title}</h3>
                <p className="mt-3 font-inter text-sm text-stone-600 leading-relaxed">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#C7B6AA]">
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
              className="inline-block px-9 py-3 border border-white/60 text-white font-inter text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-stone-800 transition-all duration-300"
            >
              Solicitar escopo inicial
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
