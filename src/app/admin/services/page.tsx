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
          <h1 className="font-cormorant text-2xl lg:text-3xl font-light text-white">
            Serviços
          </h1>
          <p className="mt-1 max-w-2xl font-inter text-sm text-slate-400">
            Catálogo comercial ativo do site. A edição estrutural da página fica centralizada no editor de páginas.
          </p>
        </div>

        <Link
          href="/admin/pages/services"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-cyan px-4 py-2.5 font-inter text-xs tracking-wide text-slate-950 transition-colors hover:bg-brand-cyan-strong hover:text-white"
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
            className="rounded-xl border border-white/10 bg-slate-900 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-inter text-base font-medium text-white">{service.title}</h2>
                <p className="mt-2 font-inter text-sm leading-relaxed text-slate-400">
                  {service.excerpt}
                </p>
              </div>
              <Link
                href={`/services/${service.slug}`}
                target="_blank"
                className="p-2 text-slate-500 transition-colors hover:text-brand-cyan"
                title="Ver página pública"
              >
                <Eye size={16} />
              </Link>
            </div>

            <div className="mt-5">
              <p className="font-inter text-[11px] uppercase tracking-[0.16em] text-brand-cyan">
                Pilares da oferta
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-brand-cyan/12 px-2.5 py-1 font-inter text-xs text-brand-cyan"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
              <div>
                <p className="font-inter text-xs text-slate-500">CTA principal</p>
                <p className="font-inter text-sm text-slate-200">{service.cta.primaryLabel}</p>
              </div>
              <Link
                href={`/services/${service.slug}`}
                target="_blank"
                className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.16em] uppercase text-slate-400 transition-colors hover:text-brand-cyan"
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
