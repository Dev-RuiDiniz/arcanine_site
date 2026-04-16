'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useSession, signOut } from 'next-auth/react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Menu, Moon, Sun, ChevronDown, User, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TopbarProps {
  onMenuClick: () => void
  isSidebarCollapsed: boolean
}

export function Topbar({ onMenuClick, isSidebarCollapsed }: TopbarProps) {
  const { theme, setTheme } = useTheme()
  const { data: session } = useSession()
  const [showProfile, setShowProfile] = useState(false)

  return (
    <header
      className={cn(
        'fixed top-0 right-0 z-30 h-16 bg-slate-950/92 backdrop-blur-xl border-b border-white/10 transition-all duration-300',
        isSidebarCollapsed ? 'left-20' : 'left-[280px]'
      )}
    >
      <div className="h-full px-4 lg:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-white/8 rounded-lg transition-colors"
            aria-label="Abrir menu"
          >
            <Menu size={20} className="text-slate-300" />
          </button>

          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-brand-cyan">
              Administração
            </p>
            <p className="font-inter text-sm text-white">
              Operação e conteúdo Arcane
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-brand-cyan transition-colors"
          >
            <ExternalLink size={16} />
            <span className="font-inter text-xs">Ver site</span>
          </Link>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 hover:bg-white/8 rounded-lg transition-colors"
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-brand-cyan" />
            ) : (
              <Moon size={18} className="text-slate-300" />
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setShowProfile((current) => !current)}
              className="flex items-center gap-2 px-2 py-1.5 hover:bg-white/8 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-brand-cyan/12 rounded-full flex items-center justify-center">
                <User size={16} className="text-brand-cyan" />
              </div>
              <div className="hidden sm:block text-left">
                <p className="font-inter text-sm text-white">
                  {session?.user?.name || 'Admin'}
                </p>
                <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-slate-500">
                  {session?.user?.role || 'Sessão'}
                </p>
              </div>
              <ChevronDown size={14} className="text-slate-500" />
            </button>

            <AnimatePresence>
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full mt-2 w-56 bg-slate-900 rounded-lg shadow-xl border border-white/10 py-2 z-50"
                >
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="font-inter text-sm font-medium text-white">
                      {session?.user?.name || 'Admin'}
                    </p>
                    <p className="font-inter text-xs text-slate-400">
                      {session?.user?.email}
                    </p>
                    <p className="mt-2 font-inter text-[11px] uppercase tracking-[0.14em] text-slate-500">
                      {session?.user?.role || 'Sessão'}
                    </p>
                  </div>
                  <div className="py-2">
                    <button
                      onClick={() => signOut({ callbackUrl: '/login' })}
                      className="w-full flex items-center gap-3 px-4 py-2 font-inter text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      <LogOut size={16} />
                      Sair
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
}
