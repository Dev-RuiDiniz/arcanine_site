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
        'fixed top-0 right-0 z-30 h-16 bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 transition-all duration-300',
        isSidebarCollapsed ? 'left-20' : 'left-[280px]'
      )}
    >
      <div className="h-full px-4 lg:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-lg transition-colors"
            aria-label="Abrir menu"
          >
            <Menu size={20} className="text-stone-600 dark:text-stone-400" />
          </button>

          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
              Administração
            </p>
            <p className="font-inter text-sm text-stone-900 dark:text-white">
              Operação e conteúdo ARCANINE
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
            <span className="font-inter text-xs">Ver site</span>
          </Link>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-lg transition-colors"
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-stone-400" />
            ) : (
              <Moon size={18} className="text-stone-600" />
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setShowProfile((current) => !current)}
              className="flex items-center gap-2 px-2 py-1.5 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-stone-200 dark:bg-stone-800 rounded-full flex items-center justify-center">
                <User size={16} className="text-stone-600 dark:text-stone-400" />
              </div>
              <div className="hidden sm:block text-left">
                <p className="font-inter text-sm text-stone-900 dark:text-white">
                  {session?.user?.name || 'Admin'}
                </p>
              </div>
              <ChevronDown size={14} className="text-stone-400" />
            </button>

            <AnimatePresence>
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-stone-900 rounded-lg shadow-xl border border-stone-200 dark:border-stone-800 py-2 z-50"
                >
                  <div className="px-4 py-3 border-b border-stone-200 dark:border-stone-800">
                    <p className="font-inter text-sm font-medium text-stone-900 dark:text-white">
                      {session?.user?.name || 'Admin'}
                    </p>
                    <p className="font-inter text-xs text-stone-500 dark:text-stone-400">
                      {session?.user?.email}
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
