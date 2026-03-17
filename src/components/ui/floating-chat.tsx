/*
Arquivo: src/components/ui/floating-chat.tsx
Objetivo: Componente de UI reutilizavel.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppUrl, siteConfig } from '@/lib/site-config'

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)

  const defaultMessage = 'Olá! Quero conversar sobre um projeto com a ARCANINE Tecnologia.'

  const handleWhatsAppClick = () => {
    window.open(buildWhatsAppUrl(defaultMessage), '_blank')
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-brand-cyan shadow-lg shadow-slate-950/35 transition-all hover:scale-105 hover:bg-slate-900 hover:shadow-xl"
        aria-label="Abrir conversa"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaWhatsapp size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl"
          >
            <div className="bg-[linear-gradient(135deg,#0f172a_0%,#162338_55%,#0b85a2_140%)] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FaWhatsapp size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-inter text-sm font-medium text-white">
                    {siteConfig.brand.name}
                  </h3>
                  <p className="font-inter text-xs text-white/80">
                    Resposta média em até 1 hora útil
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="bg-slate-900 p-5">
              <div className="relative rounded-lg border border-white/10 bg-slate-800 p-4 shadow-sm">
                <div className="absolute -left-2 top-3 h-0 w-0 border-b-8 border-b-transparent border-r-8 border-r-slate-800 border-t-8 border-t-transparent" />
                <p className="font-inter text-sm leading-relaxed text-slate-200">
                  Olá.
                  <br />
                  <br />
                  Conte rapidamente o desafio técnico do seu negócio e nosso time retorna com os próximos passos.
                </p>
                <span className="mt-2 block text-right font-inter text-[10px] text-slate-500">
                  agora
                </span>
              </div>
            </div>

            <div className="border-t border-white/10 bg-slate-950 p-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-cyan px-4 py-3 font-inter text-sm text-slate-950 transition-colors hover:bg-brand-cyan-strong hover:text-white"
              >
                <FaWhatsapp size={18} />
                Iniciar conversa
              </button>
              <p className="mt-3 text-center font-inter text-[10px] text-slate-500">
                Abre o WhatsApp em uma nova aba
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
