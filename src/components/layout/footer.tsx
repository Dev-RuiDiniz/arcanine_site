/*
Arquivo: src/components/layout/footer.tsx
Objetivo: Componente estrutural de layout (ex.: header/footer).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react'
import { ConversionCTAs } from '@/components/ui/conversion-ctas'

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/arcanine.tecnologia', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/arcanine-tecnologia', label: 'LinkedIn' },
]

const navLinks = [
  { label: 'Serviços', href: '/services' },
  { label: 'Cases', href: '/projects' },
  { label: 'Sobre', href: '/about' },
  { label: 'Contato', href: '/contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#C7B6AA] text-stone-900">
      <div className="container mx-auto px-6 lg:px-12 py-14 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="p-6 lg:p-8 border border-stone-900/15 bg-[#EDE2DA]"
        >
          <h2 className="font-cormorant text-2xl lg:text-3xl tracking-[0.04em] text-stone-900">
            Sua operação precisa de estrutura para escalar com segurança.
          </h2>
          <p className="mt-3 font-inter text-sm text-stone-700 max-w-3xl">
            Converse com a ARCANINE para desenhar uma arquitetura tecnológica alinhada ao resultado do seu negócio.
          </p>
          <ConversionCTAs className="mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-4">
              <span className="font-cormorant text-2xl tracking-[0.2em] text-stone-900">ARCANINE</span>
              <span className="block font-inter text-[10px] tracking-[0.28em] text-stone-700 mt-1 uppercase">
                Tecnologia
              </span>
            </Link>
            <p className="font-inter text-sm text-stone-700 leading-relaxed">
              Engenharia de software, automação e integração para empresas que exigem performance e controle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h4 className="font-inter text-xs tracking-[0.18em] uppercase mb-4 text-stone-800">
              Navegação
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-inter text-sm text-stone-700 hover:text-stone-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <h4 className="font-inter text-xs tracking-[0.18em] uppercase mb-4 text-stone-800">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contato@arcanine.tech"
                className="flex items-center gap-3 font-inter text-sm text-stone-700 hover:text-stone-900 transition-colors"
              >
                <Mail size={16} />
                contato@arcanine.tech
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-3 font-inter text-sm text-stone-700 hover:text-stone-900 transition-colors"
              >
                <span className="w-4 h-4 inline-flex items-center justify-center text-[11px]">+</span>
                +55 11 99999-9999
              </a>
              <div className="flex items-start gap-3 font-inter text-sm text-stone-700">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            <h4 className="font-inter text-xs tracking-[0.18em] uppercase mb-4 text-stone-800">
              Redes
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-stone-700/35 flex items-center justify-center text-stone-700 hover:text-stone-900 hover:border-stone-900/55 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-stone-700/20">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-xs text-stone-700">
              © {currentYear} ARCANINE Tecnologia. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="font-inter text-xs text-stone-700 hover:text-stone-900 transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/terms"
                className="font-inter text-xs text-stone-700 hover:text-stone-900 transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
