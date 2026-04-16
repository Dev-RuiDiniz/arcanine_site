/*
Arquivo: src/components/ui/gdpr-banner.tsx
Objetivo: Componente de UI reutilizavel.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, Cookie } from 'lucide-react'

const COOKIE_CONSENT_KEY = 'arcane-cookie-consent'

type ConsentType = 'all' | 'essential' | null

export function GDPRBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleConsent = (type: ConsentType) => {
    if (type) {
      localStorage.setItem(COOKIE_CONSENT_KEY, type)
      setShowBanner(false)
      setShowSettings(false)
    }
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 lg:p-6"
        >
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden">
            {!showSettings ? (
              // Main Banner
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icon & Text */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                      <Cookie size={24} className="text-stone-600" />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-xl text-stone-900 mb-2">
                        Privacidade e Cookies
                      </h3>
                      <p className="font-inter text-sm text-stone-600 leading-relaxed">
                        Utilizamos armazenamento local para registrar sua preferência de consentimento e manter o funcionamento essencial do site.
                        Se novas categorias de cookies forem ativadas, esta política será atualizada antes da publicação.{' '}
                        <Link
                          href="/cookies"
                          className="text-stone-900 underline underline-offset-2 hover:text-stone-600"
                        >
                          Saiba mais
                        </Link>
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-6 py-3 border border-stone-300 text-stone-700 font-inter text-xs tracking-[0.1em] uppercase hover:border-stone-900 hover:text-stone-900 transition-colors"
                    >
                      Gerenciar Cookies
                    </button>
                    <button
                      onClick={() => handleConsent('essential')}
                      className="px-6 py-3 border border-stone-300 text-stone-700 font-inter text-xs tracking-[0.1em] uppercase hover:border-stone-900 hover:text-stone-900 transition-colors"
                    >
                      Apenas Essenciais
                    </button>
                    <button
                      onClick={() => handleConsent('all')}
                      className="px-6 py-3 bg-stone-900 text-white font-inter text-xs tracking-[0.1em] uppercase hover:bg-stone-800 transition-colors"
                    >
                      Aceitar Todos
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Settings Panel
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-cormorant text-xl text-stone-900">
                    Configurações de Cookies
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 text-stone-500 hover:text-stone-900 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Essential Cookies */}
                  <div className="flex items-start justify-between gap-4 p-4 bg-stone-50 rounded-lg">
                    <div>
                      <h4 className="font-inter text-sm font-medium text-stone-900 mb-1">
                        Cookies Essenciais
                      </h4>
                      <p className="font-inter text-xs text-stone-500">
                        Necessários para o funcionamento do site. Não podem ser desativados.
                      </p>
                    </div>
                    <div className="w-10 h-6 bg-stone-900 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between gap-4 p-4 bg-stone-50 rounded-lg">
                    <div>
                      <h4 className="font-inter text-sm font-medium text-stone-900 mb-1">
                        Cookies Analíticos
                      </h4>
                      <p className="font-inter text-xs text-stone-500">
                        Atualmente não estão ativos em produção.
                      </p>
                    </div>
                    <div className="w-10 h-6 bg-stone-300 rounded-full flex items-center px-1">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between gap-4 p-4 bg-stone-50 rounded-lg">
                    <div>
                      <h4 className="font-inter text-sm font-medium text-stone-900 mb-1">
                        Cookies de Marketing
                      </h4>
                      <p className="font-inter text-xs text-stone-500">
                        Atualmente não estão ativos em produção.
                      </p>
                    </div>
                    <div className="w-10 h-6 bg-stone-300 rounded-full flex items-center px-1">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleConsent('essential')}
                    className="flex-1 px-6 py-3 border border-stone-300 text-stone-700 font-inter text-xs tracking-[0.1em] uppercase hover:border-stone-900 hover:text-stone-900 transition-colors"
                  >
                    Salvar Preferências
                  </button>
                  <button
                    onClick={() => handleConsent('all')}
                    className="flex-1 px-6 py-3 bg-stone-900 text-white font-inter text-xs tracking-[0.1em] uppercase hover:bg-stone-800 transition-colors"
                  >
                    Aceitar Todos
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
