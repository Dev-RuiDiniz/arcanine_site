'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, FolderKanban, Layers, MessageSquareMore } from 'lucide-react'
import { services } from '@/lib/site-content/services'
import { cases } from '@/lib/site-content/projects'
import { adminPageEditorConfigs } from '@/lib/admin-page-configs'

const publishedCases = cases.filter((item) => item.stage === 'PUBLISHED').length
const editablePages = Object.keys(adminPageEditorConfigs).length

const stats = [
  {
    title: 'Serviços ativos',
    value: String(services.length),
    detail: 'Ofertas comerciais estruturadas',
    icon: Layers,
  },
  {
    title: 'Cases publicados',
    value: String(publishedCases),
    detail: 'Prova de autoridade no site público',
    icon: FolderKanban,
  },
  {
    title: 'Páginas editáveis',
    value: String(editablePages),
    detail: 'Conteúdo institucional com editor',
    icon: FileText,
  },
  {
    title: 'Canais de lead',
    value: '3',
    detail: 'Contato, orçamento e reunião técnica',
    icon: MessageSquareMore,
  },
]

const quickActions = [
  {
    title: 'Atualizar home',
    description: 'Revise headline, proposta de valor e CTAs principais.',
    href: '/admin/pages/home',
  },
  {
    title: 'Revisar serviços',
    description: 'Confira se a oferta comercial continua alinhada ao posicionamento.',
    href: '/admin/services',
  },
  {
    title: 'Organizar cases',
    description: 'Valide sequência, status e mensagem dos cases públicos.',
    href: '/admin/projects',
  },
  {
    title: 'Acompanhar leads',
    description: 'Monitore contatos recebidos e próximos passos comerciais.',
    href: '/admin/contacts',
  },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="font-cormorant text-2xl lg:text-3xl font-light text-stone-900 dark:text-white">
            Visão geral
          </h1>
          <p className="font-inter text-sm text-stone-500 dark:text-stone-400 mt-1 max-w-2xl">
            Painel consolidado para conteúdo, serviços, cases e operação comercial do site da ARCANINE.
          </p>
        </div>

        <Link
          href="/admin/pages"
          className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.18em] uppercase text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white transition-colors"
        >
          Abrir páginas
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.article
            key={stat.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
            className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5"
          >
            <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
              <stat.icon size={20} className="text-stone-700 dark:text-stone-300" />
            </div>
            <p className="mt-4 font-inter text-2xl font-semibold text-stone-900 dark:text-white">{stat.value}</p>
            <p className="mt-1 font-inter text-sm text-stone-700 dark:text-stone-300">{stat.title}</p>
            <p className="mt-2 font-inter text-xs text-stone-500 dark:text-stone-400">{stat.detail}</p>
          </motion.article>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-inter text-sm font-medium text-stone-900 dark:text-white">Próximas ações</h2>
              <p className="font-inter text-xs text-stone-500 dark:text-stone-400 mt-1">
                Atalhos para manter site, posicionamento e captação em ordem.
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={action.href}
                  className="flex items-start justify-between gap-3 rounded-xl border border-stone-200 dark:border-stone-800 px-4 py-4 hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
                >
                  <div>
                    <p className="font-inter text-sm font-medium text-stone-900 dark:text-white">{action.title}</p>
                    <p className="font-inter text-xs text-stone-500 dark:text-stone-400 mt-1">{action.description}</p>
                  </div>
                  <ArrowRight size={16} className="text-stone-400 shrink-0 mt-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
          <h2 className="font-inter text-sm font-medium text-stone-900 dark:text-white">Cobertura do admin MVP</h2>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Editor de páginas institucionais e legais',
              'Gestão editorial dos serviços do site',
              'Visão consolidada dos cases públicos',
              'Operação comercial centrada em leads',
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800 px-4 py-4"
              >
                <p className="font-inter text-sm text-stone-700 dark:text-stone-300">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/10 dark:border-amber-900 px-4 py-4">
            <p className="font-inter text-sm text-amber-800 dark:text-amber-300">
              O painel foi enxugado para o escopo operacional do site de tecnologia. Módulos genéricos do template anterior foram removidos.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
