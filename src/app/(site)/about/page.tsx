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
    description: 'Decisões técnicas e comerciais claras, com critérios objetivos, riscos visíveis e previsibilidade de entrega.',
  },
  {
    title: 'Excelência Técnica',
    description: 'Arquiteturas sólidas, código sustentável e disciplina de engenharia para suportar crescimento contínuo.',
  },
  {
    title: 'Compromisso com Resultado',
    description: 'Cada entrega precisa gerar impacto mensurável em produtividade, controle e crescimento.',
  },
  {
    title: 'Inovação com Responsabilidade',
    description: 'Evolução contínua sem promessas irreais, sempre alinhada ao contexto operacional e financeiro do negócio.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative section-shell pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
            >
              <span className="eyebrow font-inter text-[11px]">Quem somos</span>
              <h1 className="mt-4 font-cormorant text-3xl lg:text-4xl font-light text-slate-950 leading-tight">
                Sobre a <span className="italic">ARCANINE</span>
              </h1>
              <p className="mt-4 font-inter text-sm text-slate-600 leading-relaxed">
                A ARCANINE Tecnologia nasceu para resolver problemas reais com engenharia de software moderna,
                arquitetura de produto e visão operacional. Atuamos na criação de sistemas sob medida, automação de
                processos, integração entre software e hardware e aplicação prática de IA em fluxos comerciais e operacionais.
              </p>
              <p className="mt-3 font-inter text-sm text-slate-600 leading-relaxed">
                Nossa proposta é transformar complexidade em estrutura: mais controle da operação, decisões orientadas
                por dados confiáveis e crescimento sustentável sem improviso técnico.
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

      <section className="section-shell-alt py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-cormorant text-xl lg:text-2xl font-light text-slate-950">
              Missão, visão e valores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="panel-shell p-6">
              <h3 className="font-cormorant text-xl text-slate-950">Missão</h3>
              <p className="mt-3 font-inter text-sm text-slate-600 leading-relaxed">
                Desenvolver soluções robustas que gerem eficiência operacional, organização estratégica e crescimento sustentável.
              </p>
            </div>
            <div className="panel-shell p-6">
              <h3 className="font-cormorant text-xl text-slate-950">Visão</h3>
              <p className="mt-3 font-inter text-sm text-slate-600 leading-relaxed">
                Ser referência em sistemas personalizados e soluções tecnológicas escaláveis para empresas que exigem desempenho, previsibilidade e controle.
              </p>
            </div>
            <div className="panel-shell p-6">
              <h3 className="font-cormorant text-xl text-slate-950">Posicionamento</h3>
              <p className="mt-3 font-inter text-sm text-slate-600 leading-relaxed">
                Engenharia sólida + estratégia de negócio + integração com a operação real.
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
                <h3 className="font-cormorant text-base lg:text-lg text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="font-inter text-xs text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-shell py-10 lg:py-12">
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
              className="inline-block px-8 py-3 border border-brand-cyan/55 text-white font-inter text-[10px] tracking-[0.2em] uppercase hover:bg-brand-cyan hover:text-slate-950 transition-all duration-300"
            >
              Solicitar orçamento
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

