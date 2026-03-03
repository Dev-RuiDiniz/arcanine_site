/*
Arquivo: src/app/(site)/about/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const values = [
  {
    title: 'Transparência',
    description: 'Decisões técnicas e comerciais claras, com critérios objetivos e previsibilidade de entrega.',
  },
  {
    title: 'Excelência Técnica',
    description: 'Arquiteturas sólidas, código sustentável e foco em qualidade operacional no longo prazo.',
  },
  {
    title: 'Compromisso com Resultado',
    description: 'Cada entrega precisa gerar impacto real em produtividade, controle e crescimento.',
  },
  {
    title: 'Inovação com Responsabilidade',
    description: 'Evolução contínua sem promessas irreais, sempre alinhada ao contexto do negócio.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 bg-[#F1E7DE]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
            >
              <h1 className="font-cormorant text-3xl lg:text-4xl font-light text-stone-800 leading-tight">
                Sobre a <span className="italic">ARCANINE</span>
              </h1>
              <p className="mt-4 font-inter text-sm text-stone-600 leading-relaxed">
                A ARCANINE Tecnologia nasceu para resolver problemas reais com engenharia de software moderna,
                arquitetura estratégica e visão comercial. Atuamos no desenvolvimento de sistemas personalizados,
                automação de processos, integração com hardware e aplicação prática de IA.
              </p>
              <p className="mt-3 font-inter text-sm text-stone-600 leading-relaxed">
                Nossa proposta é transformar complexidade em estrutura: mais controle da operação, decisões orientadas
                por dados e crescimento sustentável.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop"
                alt="Equipe técnica em planejamento de soluções digitais"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#F1E7DE]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-cormorant text-xl lg:text-2xl font-light text-stone-800">
              Missão, visão e valores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="p-6 border border-stone-400/25 bg-white/45">
              <h3 className="font-cormorant text-xl text-stone-900">Missão</h3>
              <p className="mt-3 font-inter text-sm text-stone-600 leading-relaxed">
                Desenvolver soluções robustas que gerem eficiência operacional, organização estratégica e crescimento sustentável.
              </p>
            </div>
            <div className="p-6 border border-stone-400/25 bg-white/45">
              <h3 className="font-cormorant text-xl text-stone-900">Visão</h3>
              <p className="mt-3 font-inter text-sm text-stone-600 leading-relaxed">
                Ser referência em sistemas personalizados e soluções tecnológicas escaláveis para empresas que exigem performance e controle.
              </p>
            </div>
            <div className="p-6 border border-stone-400/25 bg-white/45">
              <h3 className="font-cormorant text-xl text-stone-900">Posicionamento</h3>
              <p className="mt-3 font-inter text-sm text-stone-600 leading-relaxed">
                Engenharia sólida + estratégia comercial + integração com operação real.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="text-center"
              >
                <h3 className="font-cormorant text-base lg:text-lg text-stone-800 mb-2">
                  {value.title}
                </h3>
                <p className="font-inter text-xs text-stone-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-[#C7B6AA]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <p className="font-cormorant text-xl lg:text-2xl font-light text-white italic mb-6">
              Sua empresa está pronta para evoluir tecnologicamente?
            </p>
            <Link
              href="/solicitar-orcamento"
              className="inline-block px-8 py-3 border border-white/50 text-white font-inter text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-stone-800 transition-all duration-300"
            >
              Solicitar orçamento
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

