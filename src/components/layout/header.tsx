/*
Arquivo: src/components/layout/header.tsx
Objetivo: Componente estrutural de layout (ex.: header/footer).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ConversionCTAs } from '@/components/ui/conversion-ctas'

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/services' },
  { label: 'Cases', href: '/projects' },
  { label: 'Sobre', href: '/about' },
  { label: 'Contato', href: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const darkHeroPages = ['/']
  const hasDarkHero = darkHeroPages.includes(pathname) || pathname.startsWith('/projects/')
  const useDarkText = !hasDarkHero || isScrolled || isOpen

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'bg-[#EFE5DE]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24 gap-6">
            <Link href="/" className="relative z-50">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="leading-none"
              >
                <span
                  className={cn(
                    'block font-cormorant text-2xl lg:text-3xl tracking-[0.22em] transition-colors',
                    useDarkText ? 'text-[#2A2421]' : 'text-white'
                  )}
                >
                  ARCANINE
                </span>
                <span
                  className={cn(
                    'block mt-1 font-inter text-[10px] tracking-[0.36em] uppercase transition-colors',
                    useDarkText ? 'text-[#5B5049]' : 'text-white/85'
                  )}
                >
                  Tecnologia
                </span>
              </motion.div>
            </Link>

            <div className="hidden xl:flex items-center gap-10">
              <nav className="flex items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'relative font-inter text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 group',
                        pathname === item.href
                          ? useDarkText
                            ? 'text-[#2A2421]'
                            : 'text-white'
                          : useDarkText
                            ? 'text-stone-600 hover:text-[#2A2421]'
                            : 'text-white/80 hover:text-white'
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          'absolute -bottom-1 left-0 h-px bg-current transition-all duration-300',
                          pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                        )}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <ConversionCTAs compact className="justify-end" />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'xl:hidden relative z-50 p-2 transition-colors duration-300',
                useDarkText ? 'text-[#2A2421]' : 'text-white'
              )}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              className="absolute inset-0 bg-[#F7F0EA]"
            >
              <div className="flex flex-col items-center justify-center h-full px-8">
                <nav className="flex flex-col items-center gap-7 mb-10">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + index * 0.06 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'font-cormorant text-4xl tracking-[0.08em] transition-colors duration-300',
                          pathname === item.href
                            ? 'text-[#2A2421]'
                            : 'text-stone-500 hover:text-[#2A2421]'
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <ConversionCTAs className="w-full max-w-xl" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
