/*
Arquivo: src/app/(site)/services/[slug]/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'

const servicesData: Record<string, ServiceDetail> = {
  'architecture': {
    slug: 'architecture',
    title: 'Architecture',
    subtitle: 'Shaping Spaces, Defining Experiences',
    description: `From concept to completion, we design architectural solutions that balance form and function. Our architectural services encompass the complete journey from initial concept to final construction.

Every project begins with listening – to your aspirations, your lifestyle, and your vision for the space. From there, we develop solutions that are both functionally excellent and aesthetically inspiring.`,
    features: [
      'New construction design',
      'Renovations and extensions',
      'Spatial planning and optimization',
      'Building permit documentation',
      'Construction supervision',
      'Sustainable design solutions',
    ],
    images: [
      '/2026/SERVICES/Architeture.JPG',
      '/2026/SERVICES/architecture-and-interior-design-projects-workspace-by-RAIZ .jpg',
    ],
  },
  'interior-design': {
    slug: 'interior-design',
    title: 'Interior Design',
    subtitle: 'Creating Environments That Inspire',
    description: `Creating cohesive interior environments that reflect your lifestyle and aspirations. Interior design is where vision meets reality.

Our approach combines careful space planning with a keen eye for materials, colors, and textures. The result is spaces that feel both curated and lived-in, sophisticated yet welcoming.`,
    features: [
      'Space planning and layout design',
      'Material and finish selection',
      'Custom furniture design',
      'Lighting design',
      'Color consultation',
      'Art and accessory curation',
    ],
    images: [
      '/2026/SERVICES/Interior Design.jpg',
      '/2026/SERVICES/Decoration.jpg',
    ],
  },
  'decoration': {
    slug: 'decoration',
    title: 'Decoration',
    subtitle: 'The Art of Personal Expression',
    description: `Curating furniture, art, and accessories to bring your space to life with personality. Decoration is the layer that brings warmth and uniqueness to any space.

Whether refreshing a single room or styling an entire home, we bring an expert eye and access to exclusive sources to elevate your interiors.`,
    features: [
      'Furniture selection and sourcing',
      'Art advisory and acquisition',
      'Textile and soft furnishing selection',
      'Decorative object curation',
      'Antique and vintage sourcing',
      'Final styling and installation',
    ],
    images: [
      '/2026/SERVICES/Decoration.jpg',
      '/2026/SERVICES/Bespoke Furniture.jpg',
    ],
  },
  'bespoke-furniture': {
    slug: 'bespoke-furniture',
    title: 'Bespoke Furniture',
    subtitle: 'Crafted for Your Space, Made to Last',
    description: `Custom furniture designed and crafted to perfectly fit your unique space and personal style. Each piece is conceived with purpose, balancing aesthetics and function.

From concept to production, we oversee every detail to ensure the result is a truly one-of-a-kind piece that elevates your interior.`,
    features: [
      'Custom furniture design',
      'Material and finish selection',
      'Production management',
      'Built-in solutions',
      'Upholstery and textile selection',
      'Installation and styling',
    ],
    images: [
      '/2026/SERVICES/Bespoke Furniture.jpg',
      '/2026/SERVICES/Interior Design.jpg',
    ],
  },
  'consultancy': {
    slug: 'consultancy',
    title: 'Consultancy',
    subtitle: 'Expert Guidance, Tailored Solutions',
    description: `Expert guidance on design decisions, materials, and spatial planning for your project. Not every project requires full-service design.

Whether you need help with a challenging layout, material decisions, or a second opinion on your design direction, we're here to guide you with clarity and expertise.`,
    features: [
      'Design direction and concept development',
      'Material and color consultation',
      'Spatial problem-solving',
      'Vendor and contractor recommendations',
      'Budget planning and optimization',
      'Project timeline guidance',
    ],
    images: [
      '/2026/SERVICES/Consultancy.jpg',
      '/2026/SERVICES/architecture-and-interior-design-projects-workspace-by-RAIZ .jpg',
    ],
  },
  'styling-staging': {
    slug: 'styling-staging',
    title: 'Styling & Staging',
    subtitle: 'Maximizing Property Potential',
    description: `Transforming properties for sale or rent with strategic styling that maximizes appeal. First impressions matter.

We understand what buyers are looking for and create environments that allow them to envision themselves in the space. Strategic styling that makes all the difference.`,
    features: [
      'Property assessment and strategy',
      'Furniture rental and placement',
      'Accessory styling',
      'Photography preparation',
      'Open house styling',
      'Vacant and occupied staging',
    ],
    images: [
      '/2026/SERVICES/Styling & Staging.png',
      '/2026/SERVICES/Decoration.jpg',
    ],
  },
  'staging': {
    slug: 'staging',
    title: 'Styling & Staging',
    subtitle: 'Maximizing Property Potential',
    description: `Transforming properties for sale or rent with strategic styling that maximizes appeal. First impressions matter.

We understand what buyers are looking for and create environments that allow them to envision themselves in the space. Strategic styling that makes all the difference.`,
    features: [
      'Property assessment and strategy',
      'Furniture rental and placement',
      'Accessory styling',
      'Photography preparation',
      'Open house styling',
      'Vacant and occupied staging',
    ],
    images: [
      '/2026/SERVICES/Styling & Staging.png',
      '/2026/SERVICES/Decoration.jpg',
    ],
  },
}

interface ServiceDetail {
  slug: string
  title: string
  subtitle: string
  description: string
  features: string[]
  images: string[]
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = use(params)
  const service = servicesData[slug] || servicesData['interior-design']

  return (
    <>
      {/* Hero Section - Menor */}
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 bg-[#E3DFDD]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.15em] uppercase text-stone-500 hover:text-stone-700 transition-colors mb-6"
            >
              <ArrowLeft size={12} />
              All Services
            </Link>

            <h1 className="font-cormorant text-3xl lg:text-4xl font-light text-stone-800 leading-tight">
              {service.title}
            </h1>
            <p className="mt-2 font-cormorant text-base lg:text-lg text-stone-600 italic">
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content: layout em L — texto em cima, imagens esq + bullets dir em baixo */}
      <section className="py-16 lg:py-24 bg-[#E3DFDD]">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Topo: What We Offer + descrição (full width, alinhado esquerda) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mb-12"
          >
            <h2 className="font-cormorant text-xl lg:text-2xl font-light text-stone-800 mb-6">
              What We <span className="italic">Offer</span>
            </h2>
            <div className="font-inter text-sm text-stone-600 leading-relaxed whitespace-pre-line">
              {service.description}
            </div>
          </motion.div>

          {/* Baixo: 2 imagens verticais (esq) + bullets (dir) */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Esquerda: 2 imagens verticais lado a lado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {service.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[3/4] overflow-hidden bg-stone-300"
                >
                  <Image
                    src={image}
                    alt={`${service.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>

            {/* Direita: Services Include + bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-inter text-[10px] tracking-[0.2em] uppercase text-stone-500 mb-6">
                Services Include
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="font-inter text-xs text-stone-400 shrink-0">—</span>
                    <span className="font-inter text-xs text-stone-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA - Menos agressivo */}
      <section className="py-16 lg:py-24 bg-[#d1c9c7]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-cormorant text-xl lg:text-3xl font-light text-white italic mb-6">
              Let's create something beautiful together...
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-white/50 text-white font-inter text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-stone-800 transition-all duration-300"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

