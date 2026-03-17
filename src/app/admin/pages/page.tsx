'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Edit, Eye, FileText } from 'lucide-react'
import { adminPageEditorConfigs } from '@/lib/admin-page-configs'

const pages = Object.values(adminPageEditorConfigs)

export default function PagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-cormorant text-2xl lg:text-3xl font-light text-white">
          Páginas
        </h1>
        <p className="mt-1 max-w-2xl font-inter text-sm text-slate-400">
          Editor central do conteúdo institucional, legal e das chamadas globais do site.
        </p>
      </div>

      <div className="grid gap-4">
        {pages.map((page, index) => (
          <motion.article
            key={page.pageId}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.05 }}
            className="overflow-hidden rounded-xl border border-white/10 bg-slate-900"
          >
            <div className="p-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-cyan/12">
                  <page.icon size={22} className="text-brand-cyan" />
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="font-inter text-base font-medium text-white">{page.title}</h2>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-inter text-[10px] uppercase tracking-wide">
                      Editável
                    </span>
                  </div>
                  <p className="mt-1 font-inter text-sm text-slate-500">{page.publicPath}</p>
                  <p className="mt-3 max-w-2xl font-inter text-sm text-slate-300">{page.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {page.sections.map((section) => (
                      <span
                        key={section.id}
                        className="rounded-full bg-brand-cyan/12 px-2 py-1 font-inter text-[11px] text-brand-cyan"
                      >
                        {section.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href={page.publicPath}
                  target="_blank"
                  className="p-2 text-slate-500 transition-colors hover:text-brand-cyan"
                  title="Ver página pública"
                >
                  <Eye size={18} />
                </Link>
                <Link
                  href={`/admin/pages/${page.pageId}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-cyan px-3 py-2 font-inter text-xs tracking-wide text-slate-950 transition-colors hover:bg-brand-cyan-strong hover:text-white"
                >
                  <Edit size={14} />
                  Editar
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="rounded-xl border border-brand-cyan/18 bg-brand-cyan/8 p-5">
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-cyan/12">
            <FileText size={20} className="text-brand-cyan" />
          </div>
          <div>
            <h3 className="font-inter text-sm font-medium text-cyan-100">Como usar o editor</h3>
            <p className="mt-1 font-inter text-sm text-cyan-50/80">
              Cada página mantém um rascunho e uma publicação. O objetivo é centralizar copy, CTAs e blocos institucionais sem depender de edição manual em código para ajustes de rotina.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
