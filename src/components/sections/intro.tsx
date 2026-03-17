/*
Arquivo: src/components/sections/intro.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ArtisticText } from '@/components/ui/artistic-text'

export function IntroSection() {
  return (
    <section className="bg-[#F1E7DE] py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <ArtisticText
              as="p"
              highlightWords={['GARGALOS', 'PLATAFORMAS', 'RESULTADO', 'ESCALA', 'SEGURANÇA', 'CONTROLE']}
              className="font-cormorant text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-stone-800 leading-relaxed"
              highlightClassName="uppercase text-[#7A4A2F]"
            >
              Transformamos GARGALOS operacionais em PLATAFORMAS orientadas a RESULTADO, com base técnica para ESCALA,
              SEGURANÇA e CONTROLE executivo.
            </ArtisticText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-3 font-inter text-[11px] tracking-[0.2em] uppercase text-stone-600 hover:text-stone-800 transition-colors group"
            >
              <span>Conheça a ARCANINE</span>
              <ArrowRight
                size={14}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
