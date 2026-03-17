'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Globe, MessageSquareMore, Shield, Wrench } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const blocks = [
  {
    title: 'Marca e posicionamento',
    icon: Globe,
    items: [
      ['Nome público', siteConfig.brand.name],
      ['Tagline', siteConfig.brand.tagline],
      ['SEO principal', siteConfig.seo.title],
    ],
  },
  {
    title: 'Contato comercial',
    icon: MessageSquareMore,
    items: [
      ['E-mail geral', siteConfig.contact.email],
      ['E-mail comercial', siteConfig.contact.salesEmail],
      ['WhatsApp', siteConfig.contact.phoneDisplay],
    ],
  },
  {
    title: 'Operação do painel',
    icon: Wrench,
    items: [
      ['Editor de páginas', 'Ativo'],
      ['Upload de imagens', 'Disponível para o editor'],
      ['Leads', 'Centralizados na área de contatos'],
    ],
  },
  {
    title: 'Acesso e segurança',
    icon: Shield,
    items: [
      ['Login admin', 'Protegido por NextAuth'],
      ['Sessão', 'Persistência por JWT'],
      ['Produção', 'Exige NEXTAUTH_SECRET configurado'],
    ],
  },
]

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-cormorant text-2xl lg:text-3xl font-light text-stone-900 dark:text-white">
          Configurações
        </h1>
        <p className="font-inter text-sm text-stone-500 dark:text-stone-400 mt-1 max-w-2xl">
          Visão consolidada das informações operacionais e institucionais que sustentam o site e o painel administrativo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {blocks.map((block, index) => (
          <motion.section
            key={block.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.05 }}
            className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                <block.icon size={18} className="text-stone-700 dark:text-stone-300" />
              </div>
              <h2 className="font-inter text-sm font-medium text-stone-900 dark:text-white">{block.title}</h2>
            </div>

            <div className="mt-5 space-y-3">
              {block.items.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-start justify-between gap-4 rounded-lg bg-stone-50 dark:bg-stone-800/60 px-4 py-3"
                >
                  <span className="font-inter text-xs uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400">
                    {label}
                  </span>
                  <span className="font-inter text-sm text-stone-800 dark:text-stone-200 text-right">{value}</span>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-inter text-sm font-medium text-stone-900 dark:text-white">Ajustes frequentes</h2>
            <p className="font-inter text-sm text-stone-500 dark:text-stone-400 mt-1">
              O conteúdo institucional do site é gerenciado nas páginas editáveis e os CTAs globais ficam centralizados em uma rota específica do painel.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/admin/pages/ctas"
              className="inline-flex items-center gap-2 px-3 py-2 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-lg hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors font-inter text-xs tracking-wide"
            >
              CTAs globais
            </Link>
            <Link
              href="/admin/pages/home"
              className="inline-flex items-center gap-2 px-3 py-2 border border-stone-200 dark:border-stone-700 rounded-lg hover:border-stone-300 dark:hover:border-stone-600 transition-colors font-inter text-xs tracking-wide text-stone-700 dark:text-stone-300"
            >
              Editar home
            </Link>
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-2 px-3 py-2 border border-stone-200 dark:border-stone-700 rounded-lg hover:border-stone-300 dark:hover:border-stone-600 transition-colors font-inter text-xs tracking-wide text-stone-700 dark:text-stone-300"
            >
              Ver site
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
