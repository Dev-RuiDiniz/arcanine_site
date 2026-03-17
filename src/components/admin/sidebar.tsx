/*
Arquivo: src/components/admin/sidebar.tsx
Objetivo: Componente de interface do painel administrativo.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  FolderKanban,
  Layers,
  Mail,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  FileText,
  Megaphone,
} from 'lucide-react'
import { signOut } from 'next-auth/react'
import { cn } from '@/lib/utils'

const menuItems = [
  {
    title: 'Visão geral',
    icon: LayoutDashboard,
    href: '/admin',
  },
  {
    title: 'Cases',
    icon: FolderKanban,
    href: '/admin/projects',
  },
  {
    title: 'Serviços',
    icon: Layers,
    href: '/admin/services',
  },
  {
    title: 'Leads',
    icon: Mail,
    href: '/admin/contacts',
  },
  {
    title: 'Páginas',
    icon: FileText,
    href: '/admin/pages',
  },
  {
    title: 'CTAs globais',
    icon: Megaphone,
    href: '/admin/pages/ctas',
  },
  {
    title: 'Configurações',
    icon: Settings,
    href: '/admin/settings',
  },
]

interface SidebarProps {
  isCollapsed: boolean
  setIsCollapsed: (value: boolean) => void
}

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname()

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed left-0 top-0 z-40 h-screen bg-slate-950 border-r border-white/10 flex flex-col"
    >
      <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/admin" className="flex items-center gap-2">
                <span className="font-cormorant text-xl font-light tracking-[0.2em] text-white">
                  ARCANINE
                </span>
                <span className="font-inter text-[8px] tracking-[0.2em] uppercase text-brand-cyan">
                  Painel
                </span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/8 transition-colors text-slate-400"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 py-4 px-3 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/admin' && pathname.startsWith(item.href))
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200',
                    isActive
                      ? 'bg-brand-cyan text-slate-950 shadow-[0_18px_44px_-30px_rgba(34,211,238,0.9)]'
                      : 'text-slate-400 hover:bg-white/8 hover:text-white'
                  )}
                >
                  <item.icon size={20} className="shrink-0" />
                  <AnimatePresence mode="wait">
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="font-inter text-sm whitespace-nowrap overflow-hidden"
                      >
                        {item.title}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-3 border-t border-white/10">
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-rose-300 hover:bg-rose-500/10 transition-colors"
        >
          <LogOut size={20} className="shrink-0" />
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-inter text-sm"
              >
                Sair
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.aside>
  )
}
