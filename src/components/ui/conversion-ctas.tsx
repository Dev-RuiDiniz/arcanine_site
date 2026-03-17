'use client'

import Link from 'next/link'
import { MessageCircle, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buildWhatsAppUrl, conversionCtas } from '@/lib/site-config'

const WHATSAPP_MESSAGE = 'Olá! Quero falar com a ARCANINE Tecnologia sobre uma solução para a minha empresa.'

interface ConversionCTAsProps {
  className?: string
  compact?: boolean
}

export function ConversionCTAs({ className, compact = false }: ConversionCTAsProps) {
  const wrapperClasses = compact
    ? 'flex flex-wrap items-center gap-2'
    : 'flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3'

  return (
    <div className={cn(wrapperClasses, className)}>
      <Link
        href={conversionCtas.budget.href}
        className={cn(
          'inline-flex items-center justify-center gap-2 border transition-colors font-inter font-semibold uppercase rounded-none',
          compact
            ? 'h-10 px-4 text-[11px] tracking-[0.08em]'
            : 'h-12 px-6 text-xs tracking-[0.1em]',
          'border-brand-cyan bg-brand-cyan text-slate-950 hover:bg-brand-cyan-strong hover:border-brand-cyan-strong hover:text-white shadow-[0_18px_40px_-24px_rgba(6,182,212,0.65)]'
        )}
      >
        <FileText size={compact ? 13 : 14} />
        {conversionCtas.budget.label}
      </Link>

      <a
        href={buildWhatsAppUrl(WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center justify-center gap-2 border transition-colors font-inter font-semibold uppercase rounded-none',
          compact
            ? 'h-10 px-4 text-[11px] tracking-[0.08em]'
            : 'h-12 px-6 text-xs tracking-[0.1em]',
          'border-slate-700/70 bg-slate-950/85 text-slate-50 hover:border-brand-cyan hover:text-brand-cyan hover:bg-slate-950 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.7)]'
        )}
      >
        <MessageCircle size={compact ? 13 : 14} />
        {conversionCtas.whatsapp.label}
      </a>
    </div>
  )
}
