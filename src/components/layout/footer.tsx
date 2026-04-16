/*
Arquivo: src/components/layout/footer.tsx
Objetivo: Componente estrutural de layout (ex.: header/footer).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, Linkedin, Mail, MapPin } from 'lucide-react'
import { ConversionCTAs } from '@/components/ui/conversion-ctas'
import type { ConversionCtaConfig } from '@/lib/cta-config'
import { siteConfig } from '@/lib/site-config'

const socialLinks = [
  { icon: Linkedin, href: siteConfig.links.linkedin, label: 'LinkedIn' },
]

const navLinks = [
  { label: 'Serviços', href: '/services' },
  { label: 'Cases', href: '/projects' },
  { label: 'Sobre', href: '/about' },
  { label: 'Contato', href: '/contact' },
]

export function Footer({ ctas }: { ctas: ConversionCtaConfig }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="section-shell-dark premium-grid text-slate-100">
      <div className="container mx-auto px-6 pb-10 pt-16 lg:px-12 lg:pb-12 lg:pt-[4.5rem]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="panel-shell-dark halo-cyan overflow-hidden rounded-[2rem] p-7 lg:p-9"
        >
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
            <div>
              <span className="section-kicker">Pronto para a próxima camada</span>
              <h2 className="mt-5 max-w-3xl font-cormorant text-[2rem] leading-[1.02] text-white lg:text-[3.35rem]">
                Estruture tecnologia com rigor executivo, sem abrir mão de velocidade.
              </h2>
              <p className="mt-4 max-w-2xl font-inter text-sm leading-relaxed text-slate-300 lg:text-base">
                A Arcane desenha sistemas, automações e integrações para empresas que precisam reduzir fricção
                operacional e ganhar capacidade real de escala.
              </p>
            </div>

            <div className="space-y-4 lg:pl-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[1.35rem] border border-white/10 bg-white/6 p-4 backdrop-blur-md">
                  <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">Foco</p>
                  <p className="mt-2 font-cormorant text-2xl text-white">Operação crítica</p>
                </div>
                <div className="rounded-[1.35rem] border border-white/10 bg-white/6 p-4 backdrop-blur-md">
                  <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">Entrega</p>
                  <p className="mt-2 font-cormorant text-2xl text-white">Arquitetura autoral</p>
                </div>
              </div>

              <ConversionCTAs
                ctas={ctas}
                primaryAction="meeting"
                secondaryAction="budget"
                surface="dark"
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.7fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Link href="/" className="inline-flex items-center gap-5">
              <div className="relative h-11 w-11 lg:h-12 lg:w-12 shrink-0">
                <Image
                  src="/arcane-logo-icon.png"
                  alt="Arcane Valknut Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="leading-none">
                <span className="block font-cormorant text-2xl tracking-[0.24em] text-brand-outlined lg:text-3xl">
                  {siteConfig.brand.shortName}
                </span>
                <span className="mt-1 block font-inter text-[10px] uppercase tracking-[0.3em] text-brand-outlined">
                  {siteConfig.brand.subLabel}
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-md font-inter text-sm leading-relaxed text-slate-300">
              Engenharia de software, automação e integração para negócios que precisam transformar complexidade em
              vantagem operacional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
          >
            <h4 className="font-inter text-[11px] uppercase tracking-[0.2em] text-slate-200">
              Navegação
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-2 font-inter text-sm text-slate-400 transition-colors hover:text-brand-cyan"
                >
                  {link.label}
                  <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <h4 className="font-inter text-[11px] uppercase tracking-[0.2em] text-slate-200">
              Contato
            </h4>
            <div className="mt-4 flex flex-col gap-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-3 font-inter text-sm text-slate-300 transition-colors hover:text-brand-cyan"
              >
                <Mail size={16} className="mt-0.5 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
              {siteConfig.contact.phoneDisplay && siteConfig.contact.phoneE164 ? (
                <a
                  href={`tel:+${siteConfig.contact.phoneE164}`}
                  className="flex items-start gap-3 font-inter text-sm text-slate-300 transition-colors hover:text-brand-cyan"
                >
                  <span className="inline-flex h-4 w-4 items-center justify-center text-[11px]">+</span>
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              ) : null}
              <div className="flex items-start gap-3 font-inter text-sm text-slate-300">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>{siteConfig.contact.city}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            <h4 className="font-inter text-[11px] uppercase tracking-[0.2em] text-slate-200">
              Rede
            </h4>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-cyan/55 hover:text-brand-cyan"
                  aria-label={social.label}
                >
                  <social.icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col gap-4 px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <p className="font-inter text-xs text-slate-500">
            © {currentYear} {siteConfig.brand.name}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="font-inter text-xs text-slate-500 transition-colors hover:text-brand-cyan">
              Política de Privacidade
            </Link>
            <Link href="/terms" className="font-inter text-xs text-slate-500 transition-colors hover:text-brand-cyan">
              Termos de Uso
            </Link>
            <Link href="/cookies" className="font-inter text-xs text-slate-500 transition-colors hover:text-brand-cyan">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
