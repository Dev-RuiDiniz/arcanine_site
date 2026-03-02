/*
Arquivo: src/app/(site)/projects/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// Projetos na ordem exata definida pela cliente - Imagens 2026
const allProjects = [
  {
    id: '1',
    slug: 'summer-house-comporta',
    title: 'SUMMER HOUSE',
    subtitle: 'in Comporta',
    location: 'COMPORTA RETREAT',
    category: 'RESIDENTIAL',
    status: 'PUBLISHED',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/SUMMER HOUSE in COMPORTA.jpg',
  },
  {
    id: '2',
    slug: 'contemporary-city-house',
    title: 'CONTEMPORARY CITY HOUSE',
    subtitle: '',
    location: 'ALMADA',
    category: 'RESIDENTIAL',
    status: 'PUBLISHED',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/CONTEMPORARY CITY HOUSE.jpg',
  },
  {
    id: '3',
    slug: 'elegant-timeless-duplex',
    title: 'ELEGANT & TIMELESS DUPLEX',
    subtitle: '',
    location: 'BRAGA',
    category: 'RESIDENTIAL',
    status: 'PUBLISHED',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/ELEGANT and TMELESS DUPLEX.jpg',
  },
  {
    id: '4',
    slug: 'beach-house-troia',
    title: 'BEACH HOUSE',
    subtitle: 'in Troia',
    location: 'PESTANA TROIA ECO RESORT',
    category: 'RESIDENTIAL',
    status: 'WORK_IN_PROGRESS',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/BEACH HOUSE in TROIA.jpg',
  },
  {
    id: '5',
    slug: 'pombaline-restoration-principe-real',
    title: 'POMBALINE RESTORATION',
    subtitle: 'in Príncipe Real',
    location: 'LISBOA',
    category: 'RESIDENTIAL',
    status: 'WORK_IN_PROGRESS',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/PRÍNCIPE REAL POMBALINE RESTORATION.jpg',
  },
  {
    id: '6',
    slug: 'rural-retreat',
    title: 'RURAL RETREAT',
    subtitle: '',
    location: 'SERRA DA LOUSÃ',
    category: 'HOSPITALITY',
    status: 'WORK_IN_PROGRESS',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/RURAL RETREAT.jpeg',
  },
  {
    id: '7',
    slug: 'store-restauration-atelier',
    title: 'CURATED OBJECTS & RESTAURATION ATELIER',
    subtitle: '',
    location: 'ALMADA',
    category: 'COMMERCIAL',
    status: 'PUBLISHED',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/STORE & RESTAURATION ATELIER.jpg',
  },
  {
    id: '8',
    slug: 'beach-house-troia-ii',
    title: 'BEACH HOUSE',
    subtitle: 'in Troia II',
    location: 'PESTANA TROIA ECO RESORT',
    category: 'RESIDENTIAL',
    status: 'COMING_SOON',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/BEACH HOUSE TROIA II.jpg',
  },
  {
    id: '9',
    slug: 'weekend-family-house',
    title: 'WEEKEND FAMILY HOUSE',
    subtitle: '',
    location: 'AROEIRA',
    category: 'RESIDENTIAL',
    status: 'COMING_SOON',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/AROEIRA WEEKEND HOUSE.jpg',
  },
  {
    id: '10',
    slug: 'young-soul-city-apartment',
    title: 'YOUNG SOUL CITY APARTMENT',
    subtitle: '',
    location: 'MIREAR TERRACES',
    category: 'RESIDENTIAL',
    status: 'COMING_SOON',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/YOUNG SOUL CITY APATMENT.jpeg',
  },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section - Frase minimalista */}
      <section className="relative pt-32 pb-8 lg:pt-40 lg:pb-12 bg-[#E3DFDD]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-cormorant text-base sm:text-lg lg:text-xl font-light text-stone-600 leading-relaxed">
              A <span className="uppercase">curated</span> selection of our work, each project reflecting our commitment to create{' '}
              <span className="uppercase">meaningful</span> spaces that tell unique{' '}
              <span className="uppercase">stories</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - 3 colunas, menos espaçamento, até limites do ecrã */}
      <section className="py-8 lg:py-12 bg-[#E3DFDD]">
        <div className="px-2 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

interface ProjectCardProps {
  project: typeof allProjects[0]
}

function ProjectCard({ project }: ProjectCardProps) {
  const isComingSoon = project.status === 'COMING_SOON'
  const isWorkInProgress = project.status === 'WORK_IN_PROGRESS'

  const statusLabel = isComingSoon 
    ? 'Coming soon' 
    : isWorkInProgress 
      ? 'work in progress' 
      : null

  return (
    <Link
      href={isComingSoon ? '#' : `/projects/${project.slug}`}
      className={cn(
        'group block relative overflow-hidden bg-stone-300 aspect-[4/3]',
        isComingSoon && 'cursor-default'
      )}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className={cn(
            'object-cover transition-transform duration-700',
            !isComingSoon && 'group-hover:scale-105'
          )}
        />
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            isComingSoon
              ? 'bg-stone-900/50'
              : 'bg-stone-900/20 group-hover:bg-stone-900/30'
          )}
        />
      </div>

      {/* Content - Centrado, títulos menores */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
        <h3 className="font-cormorant text-sm sm:text-base lg:text-lg font-light text-white leading-tight tracking-wide">
          {project.title} {project.subtitle && <span className="italic">{project.subtitle}</span>}
        </h3>
        <p className="font-inter text-[8px] sm:text-[9px] tracking-[0.12em] uppercase text-white/70 mt-1.5">
          {project.location}
        </p>
        
        {/* Status Badge */}
        {statusLabel && (
          <span className="mt-1 font-inter text-[7px] sm:text-[8px] tracking-[0.1em] lowercase text-white/60 italic">
            {statusLabel}
          </span>
        )}
      </div>
    </Link>
  )
}

