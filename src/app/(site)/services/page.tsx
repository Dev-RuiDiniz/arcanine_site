/*
Arquivo: src/app/(site)/services/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    slug: 'architecture',
    title: 'Architecture',
    excerpt: 'Architectural solutions that create experiences.',
    image: '/2026/SERVICES/Architeture.JPG',
  },
  {
    slug: 'interior-design',
    title: 'Interior Design',
    excerpt: 'Interior environments that reflect your lifestyle and soul.',
    image: '/2026/SERVICES/Interior Design.jpg',
  },
  {
    slug: 'decoration',
    title: 'Decoration',
    excerpt: 'Curating furniture, art and accessories to bring personality to the space.',
    image: '/2026/SERVICES/Decoration.jpg',
  },
  {
    slug: 'bespoke-furniture',
    title: 'Bespoke Furniture',
    excerpt: 'Custom furniture designed to fit your unique space and style.',
    image: '/2026/SERVICES/Bespoke Furniture.jpg',
  },
  {
    slug: 'consultancy',
    title: 'Consultancy',
    excerpt: 'Personalized expert guidance on Design solutions.',
    image: '/2026/SERVICES/Consultancy.jpg',
  },
  {
    slug: 'styling-staging',
    title: 'Styling & Staging',
    excerpt: 'Transforming spaces strategically to maximize appeal.',
    image: '/2026/SERVICES/Styling & Staging.png',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin with an in-depth consultation to understand your vision, lifestyle, and requirements.',
  },
  {
    number: '02',
    title: 'Concept',
    description: 'Our team develops initial concepts, mood boards, and spatial layouts for your approval.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Detailed designs, material selections, and technical drawings bring the vision to life.',
  },
  {
    number: '04',
    title: 'Execution',
    description: 'We oversee every aspect of implementation, ensuring quality and attention to detail.',
  },
  {
    number: '05',
    title: 'Delivery',
    description: 'Final styling and handover of your transformed space, ready to be lived in and loved.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section - Frase minimalista */}
      <section className="relative pt-32 pb-8 lg:pt-40 lg:pb-12 bg-[#e3dfdc]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-cormorant text-base sm:text-lg lg:text-xl font-light text-stone-600 leading-relaxed">
              We are a <span className="uppercase">design studio</span> dedicated to delivering a{' '}
              <span className="uppercase">bespoke</span> start-to-finish design service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - 3 colunas, títulos centrados */}
      <section className="py-8 lg:py-12 bg-[#e3dfdc]">
        <div className="px-2 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
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
                  <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/30 transition-opacity duration-500" />
                  
                  {/* Content - Centrado */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <h3 className="font-cormorant text-sm sm:text-base lg:text-lg font-light text-white leading-tight tracking-wide uppercase">
                      {service.title}
                    </h3>
                    <p className="font-inter text-[8px] sm:text-[9px] tracking-[0.12em] uppercase text-white/70 mt-1.5">
                      {service.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Com numeração e linhas conectoras */}
      <section className="py-16 lg:py-24 bg-[#e3dfdc]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="font-cormorant text-2xl lg:text-3xl font-light text-stone-800">
              Our <span className="italic">Process</span>
            </h2>
          </motion.div>

          {/* Process Steps com linhas conectoras */}
          <div className="relative">
            {/* Linha conectora horizontal (desktop) */}
            <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-stone-500/30" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  {/* Número */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#f4efec] border border-stone-500/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-cormorant text-lg text-stone-600">{step.number}</span>
                  </div>
                  <h4 className="font-cormorant text-base lg:text-lg text-stone-900">
                    {step.title}
                  </h4>
                  <p className="mt-2 font-inter text-[10px] lg:text-xs text-stone-600 leading-relaxed max-w-[180px] mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Menos agressivo */}
      <section className="py-20 lg:py-28 bg-[#d1c9c7]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-cormorant text-2xl lg:text-4xl font-light text-white italic mb-8">
              Let us be part of your story...
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-white/50 text-white font-inter text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-stone-800 transition-all duration-300"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

