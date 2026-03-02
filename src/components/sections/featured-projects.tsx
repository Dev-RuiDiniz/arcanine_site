/*
Arquivo: src/components/sections/featured-projects.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Project {
  id: string
  slug: string
  title: string
  location: string
  coverImage: string
  status: 'PUBLISHED' | 'COMING_SOON' | 'WORK_IN_PROGRESS'
}

interface FeaturedProjectsProps {
  projects: Project[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="bg-[#e3dfdc] py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header - Minimalista, sem h1 grande */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-stone-500">
            Cases em Destaque
          </span>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.15em] uppercase text-stone-500 hover:text-stone-700 transition-colors group"
          >
            <span>Ver Todos os Cases</span>
            <ArrowRight
              size={12}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Projects Grid - Grafismo igual ao menu de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
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
        {/* Overlay - sem preto puro */}
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            isComingSoon
              ? 'bg-stone-900/50'
              : 'bg-stone-900/20 group-hover:bg-stone-900/30'
          )}
        />
      </div>

      {/* Content - Centrado, grafismo igual ao menu projetos */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
        <h3 className="font-cormorant text-sm sm:text-base lg:text-lg font-light text-white leading-tight tracking-wide">
          {project.title}
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
