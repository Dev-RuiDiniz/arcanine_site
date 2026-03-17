'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Eye, FileText } from 'lucide-react'
import { cases } from '@/lib/site-content/projects'
import { cn } from '@/lib/utils'

const statusLabels: Record<(typeof cases)[number]['stage'], string> = {
  PUBLISHED: 'Publicado',
  WORK_IN_PROGRESS: 'Em implantação',
  COMING_SOON: 'Em breve',
}

const statusStyles: Record<(typeof cases)[number]['stage'], string> = {
  PUBLISHED: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  WORK_IN_PROGRESS: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  COMING_SOON: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
}

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="font-cormorant text-2xl lg:text-3xl font-light text-white">
            Cases
          </h1>
          <p className="mt-1 max-w-2xl font-inter text-sm text-slate-400">
            Base editorial dos cases exibidos no site. Use esta visão para revisar narrativa, status e ordem de prioridade comercial.
          </p>
        </div>

        <Link
          href="/admin/pages/projects"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-cyan px-4 py-2.5 font-inter text-xs tracking-wide text-slate-950 transition-colors hover:bg-brand-cyan-strong hover:text-white"
        >
          <FileText size={16} />
          Abrir editor da página
        </Link>
      </div>

      <div className="grid gap-4">
        {cases.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.05 }}
            className="rounded-xl border border-white/10 bg-slate-900 p-5"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-inter text-base font-medium text-white">{project.title}</h2>
                  <span className={cn('px-2.5 py-1 rounded-full font-inter text-xs', statusStyles[project.stage])}>
                    {statusLabels[project.stage]}
                  </span>
                </div>
                <p className="font-inter text-sm text-slate-400">{project.segment}</p>
                <p className="font-inter text-sm text-slate-300 leading-relaxed max-w-3xl">
                  {project.challenge}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-brand-cyan/12 px-2.5 py-1 font-inter text-xs text-brand-cyan"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="text-right">
                  <p className="font-inter text-xs text-slate-500">Duração</p>
                  <p className="font-inter text-sm text-slate-200">{project.duration}</p>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  target="_blank"
                  className="p-2 text-slate-500 transition-colors hover:text-brand-cyan"
                  title="Ver case público"
                >
                  <Eye size={16} />
                </Link>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
              <p className="font-inter text-xs text-slate-500">
                Resultado principal: {project.outcomes[0]}
              </p>
              <Link
                href={`/projects/${project.slug}`}
                target="_blank"
                className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.16em] uppercase text-slate-400 transition-colors hover:text-brand-cyan"
              >
                Ver case
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
