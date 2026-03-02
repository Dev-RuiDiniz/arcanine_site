/*
Arquivo: src/components/sections/about-preview.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function AboutPreview() {
  return (
    <section className="bg-[#F1E7DE] py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format&fit=crop"
              alt="Equipe técnica da ARCANINE em ambiente de engenharia"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/35 flex items-end justify-center pb-8">
              <span className="font-cormorant text-xl lg:text-2xl text-white tracking-wide">
                Engenharia com visão estratégica
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="text-center lg:text-left"
          >
            <p className="font-cormorant text-lg sm:text-xl lg:text-2xl font-light text-stone-800 leading-relaxed">
              Não entregamos apenas software. Entregamos <span className="uppercase">estrutura</span>,{' '}
              <span className="uppercase">controle</span> e <span className="uppercase">crescimento</span> para empresas
              que precisam transformar operação em vantagem competitiva.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.2em] uppercase text-stone-600 hover:text-stone-800 transition-colors group"
              >
                <span>Sobre a ARCANINE</span>
                <ArrowRight
                  size={12}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
