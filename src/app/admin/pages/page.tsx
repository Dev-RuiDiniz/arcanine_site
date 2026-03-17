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
        <h1 className="font-cormorant text-2xl lg:text-3xl font-light text-stone-900 dark:text-white">
          Páginas
        </h1>
        <p className="font-inter text-sm text-stone-500 dark:text-stone-400 mt-1 max-w-2xl">
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
            className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden"
          >
            <div className="p-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-100 dark:bg-stone-800 rounded-lg flex items-center justify-center shrink-0">
                  <page.icon size={22} className="text-stone-700 dark:text-stone-300" />
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="font-inter text-base font-medium text-stone-900 dark:text-white">{page.title}</h2>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-inter text-[10px] uppercase tracking-wide">
                      Editável
                    </span>
                  </div>
                  <p className="font-inter text-sm text-stone-500 dark:text-stone-400 mt-1">{page.publicPath}</p>
                  <p className="font-inter text-sm text-stone-700 dark:text-stone-300 mt-3 max-w-2xl">{page.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {page.sections.map((section) => (
                      <span
                        key={section.id}
                        className="px-2 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-inter text-[11px]"
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
                  className="p-2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
                  title="Ver página pública"
                >
                  <Eye size={18} />
                </Link>
                <Link
                  href={`/admin/pages/${page.pageId}`}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-lg hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors font-inter text-xs tracking-wide"
                >
                  <Edit size={14} />
                  Editar
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center shrink-0">
            <FileText size={20} className="text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-inter text-sm font-medium text-blue-900 dark:text-blue-100">Como usar o editor</h3>
            <p className="font-inter text-sm text-blue-700 dark:text-blue-300 mt-1">
              Cada página mantém um rascunho e uma publicação. O objetivo é centralizar copy, CTAs e blocos institucionais sem depender de edição manual em código para ajustes de rotina.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
