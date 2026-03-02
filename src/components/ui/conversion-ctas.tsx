'use client'

import Link from 'next/link'
import { MessageCircle, CalendarDays, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

const WHATSAPP_NUMBER = '5511999999999'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Quero falar com a ARCANINE Tecnologia sobre uma solução para minha empresa.'
)

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
        href="/contact?intent=orcamento"
        className={cn(
          'inline-flex items-center justify-center gap-2 border transition-colors',
          compact
            ? 'h-9 px-3 text-[10px] tracking-[0.14em]'
            : 'h-11 px-5 text-[11px] tracking-[0.16em]',
          'border-[#C96D3C] bg-[#C96D3C] text-white hover:bg-[#B95F2F] hover:border-[#B95F2F] font-inter uppercase'
        )}
      >
        <FileText size={compact ? 13 : 14} />
        Solicitar Orçamento
      </Link>

      <Link
        href="/contact?intent=reuniao-tecnica"
        className={cn(
          'inline-flex items-center justify-center gap-2 border transition-colors',
          compact
            ? 'h-9 px-3 text-[10px] tracking-[0.14em]'
            : 'h-11 px-5 text-[11px] tracking-[0.16em]',
          'border-stone-700 text-stone-700 hover:bg-stone-100 font-inter uppercase'
        )}
      >
        <CalendarDays size={compact ? 13 : 14} />
        Agendar Reunião Técnica
      </Link>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
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
        Falar no WhatsApp
      </a>
    </div>
  )
}
