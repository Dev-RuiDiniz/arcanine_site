'use client'

import Link from 'next/link'
import { MessageCircle, CalendarDays, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buildWhatsAppUrl, conversionCtas } from '@/lib/site-config'

const WHATSAPP_MESSAGE = 'Ola! Quero falar com a ARCANINE Tecnologia sobre uma solucao para minha empresa.'

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
          'inline-flex items-center justify-center gap-2 border transition-colors',
          compact
            ? 'h-9 px-3 text-[10px] tracking-[0.14em]'
            : 'h-11 px-5 text-[11px] tracking-[0.16em]',
          'border-[#C96D3C] bg-[#C96D3C] text-white hover:bg-[#B95F2F] hover:border-[#B95F2F] font-inter uppercase'
        )}
      >
        <FileText size={compact ? 13 : 14} />
        {conversionCtas.budget.label}
      </Link>

      <Link
        href={conversionCtas.meeting.href}
        className={cn(
          'inline-flex items-center justify-center gap-2 border transition-colors',
          compact
            ? 'h-9 px-3 text-[10px] tracking-[0.14em]'
            : 'h-11 px-5 text-[11px] tracking-[0.16em]',
          'border-stone-700 text-stone-700 hover:bg-stone-100 font-inter uppercase'
        )}
      >
        <CalendarDays size={compact ? 13 : 14} />
        {conversionCtas.meeting.label}
      </Link>

      <a
        href={buildWhatsAppUrl(WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center justify-center gap-2 border transition-colors',
          compact
            ? 'h-9 px-3 text-[10px] tracking-[0.14em]'
            : 'h-11 px-5 text-[11px] tracking-[0.16em]',
          'border-[#25D366] text-[#128C4A] hover:bg-[#EAFBF1] font-inter uppercase'
        )}
      >
        <MessageCircle size={compact ? 13 : 14} />
        {conversionCtas.whatsapp.label}
      </a>
    </div>
  )
}
