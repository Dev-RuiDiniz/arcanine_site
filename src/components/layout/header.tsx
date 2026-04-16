/*
Arquivo: src/components/layout/header.tsx
Objetivo: Componente estrutural de layout (ex.: header/footer).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ConversionCTAs } from '@/components/ui/conversion-ctas'
import type { ConversionCtaConfig } from '@/lib/cta-config'
import { siteConfig } from '@/lib/site-config'

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/services' },
  { label: 'Cases', href: '/projects' },
  { label: 'Sobre', href: '/about' },
  { label: 'Contato', href: '/contact' },
]

export function Header({ ctas }: { ctas: ConversionCtaConfig }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const darkHeroPages = ['/']
  const hasDarkHero = darkHeroPages.includes(pathname) || pathname.startsWith('/projects/')
  const useDarkText = !hasDarkHero || isScrolled || isOpen

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isItemActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }

    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-500',
          isScrolled
            ? 'border-b border-white/10 bg-slate-950/72 shadow-[0_22px_80px_-44px_rgba(2,6,23,0.82)] backdrop-blur-2xl'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex h-[5.25rem] items-center justify-between gap-6 lg:h-24">
            <Link href="/" className="relative z-50 flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
                className="flex items-center gap-4"
              >
                <div className="relative h-11 w-11 lg:h-14 lg:w-14 shrink-0">
                  <Image
                    src="/arcane-logo-icon.png"
                    alt="Arcane Valknut Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="leading-none">
                  <span
                    className={cn(
                      'block font-cormorant text-[1.7rem] tracking-[0.24em] transition-colors lg:text-[2rem]',
                      'text-brand-outlined'
                    )}
                  >
                    {siteConfig.brand.shortName}
                  </span>
                  <span
                    className={cn(
                      'mt-1 block font-inter text-[10px] uppercase tracking-[0.34em] transition-colors',
                      'text-brand-outlined'
                    )}
                  >
                    {siteConfig.brand.subLabel}
                  </span>
                </div>
              </motion.div>
            </Link>

            <div className="hidden xl:flex items-center gap-8">
              <div
                className={cn(
                  'flex items-center gap-1 rounded-full border px-2 py-1 backdrop-blur-md transition-all duration-300',
                  useDarkText
                    ? 'border-slate-300/80 bg-white/72'
                    : 'border-white/12 bg-white/6'
                )}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'relative inline-flex items-center rounded-full px-4 py-2 font-inter text-[11px] uppercase tracking-[0.14em] transition-all duration-300',
                        isItemActive(item.href)
                          ? useDarkText
                            ? 'bg-slate-950 text-white shadow-[0_14px_30px_-20px_rgba(7,17,31,0.54)]'
                            : 'bg-white/10 text-white'
                          : useDarkText
                            ? 'text-slate-600 hover:bg-white hover:text-slate-950'
                            : 'text-white/74 hover:bg-white/6 hover:text-white'
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="hidden 2xl:flex items-center gap-3">
                <a
                  href={`mailto:${siteConfig.contact.salesEmail}`}
                  className={cn(
                    'inline-flex items-center gap-2 font-inter text-[10px] uppercase tracking-[0.18em] transition-colors',
                    useDarkText ? 'text-slate-600 hover:text-brand-cyan-strong' : 'text-white/72 hover:text-white'
                  )}
                >
                  {siteConfig.contact.salesEmail}
                  <ArrowUpRight size={12} />
                </a>
              </div>

              <ConversionCTAs
                ctas={ctas}
                compact
                primaryAction="meeting"
                secondaryAction="budget"
                surface={useDarkText ? 'light' : 'dark'}
                className="justify-end"
              />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'xl:hidden relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300',
                useDarkText
                  ? 'border-slate-300/80 bg-white/72 text-slate-950'
                  : 'border-white/12 bg-white/6 text-white'
              )}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
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
              className="absolute inset-0 premium-grid section-shell-dark"
            >
              <div className="flex h-full flex-col justify-between px-8 pb-10 pt-28">
                <div>
                  <span className="section-kicker">Mapa do site</span>
                  <nav className="mt-8 flex flex-col gap-4">
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
                            'group flex items-center justify-between border-b border-white/8 py-4 font-cormorant text-[2rem] tracking-[0.08em] transition-colors duration-300',
                            isItemActive(item.href)
                              ? 'text-brand-cyan'
                              : 'text-slate-300 hover:text-white'
                          )}
                        >
                          {item.label}
                          <ArrowUpRight
                            size={18}
                            className="opacity-70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                <div className="space-y-5">
                  <p className="max-w-md font-inter text-sm leading-relaxed text-slate-300">
                    Arquitetura técnica, automação e software sob medida para operações que exigem controle real.
                  </p>
                  <ConversionCTAs
                    ctas={ctas}
                    primaryAction="meeting"
                    secondaryAction="whatsapp"
                    surface="dark"
                    className="w-full max-w-xl"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
