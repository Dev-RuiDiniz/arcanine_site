'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Eye, FileText } from 'lucide-react'
import { services } from '@/lib/site-content/services'

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="font-cormorant text-2xl lg:text-3xl font-light text-stone-900 dark:text-white">
            Serviços
          </h1>
          <p className="font-inter text-sm text-stone-500 dark:text-stone-400 mt-1 max-w-2xl">
            Catálogo comercial ativo do site. A edição estrutural da página fica centralizada no editor de páginas.
          </p>
        </div>

        <Link
          href="/admin/pages/services"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-inter text-xs tracking-wide hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors rounded-lg"
        >
          <FileText size={16} />
          Abrir editor da página
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service, index) => (
          <motion.article
            key={service.slug}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.05 }}
            className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-inter text-base font-medium text-stone-900 dark:text-white">{service.title}</h2>
                <p className="mt-2 font-inter text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                  {service.excerpt}
                </p>
              </div>
              <Link
                href={`/services/${service.slug}`}
                target="_blank"
                className="p-2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
                title="Ver página pública"
              >
                <Eye size={16} />
              </Link>
            </div>

            <div className="mt-5">
              <p className="font-inter text-[11px] uppercase tracking-[0.16em] text-stone-500 dark:text-stone-400">
                Pilares da oferta
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-inter text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-stone-200 dark:border-stone-800 pt-4">
              <div>
                <p className="font-inter text-xs text-stone-500 dark:text-stone-400">CTA principal</p>
                <p className="font-inter text-sm text-stone-800 dark:text-stone-200">{service.cta.primaryLabel}</p>
              </div>
              <Link
                href={`/services/${service.slug}`}
                target="_blank"
                className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.16em] uppercase text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white transition-colors"
              >
                Ver serviço
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
