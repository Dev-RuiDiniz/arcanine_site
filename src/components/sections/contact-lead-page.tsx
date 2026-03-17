'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CalendarDays, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'

const contactSchema = z.object({
  name: z.string().min(2, 'Informe seu nome completo'),
  company: z.string().min(2, 'Informe a empresa'),
  email: z.string().email('Informe um e-mail válido'),
  phone: z.string().min(8, 'Informe um WhatsApp para retorno'),
  projectType: z.string().min(2, 'Informe o tipo de projeto'),
  budgetRange: z.string().optional(),
  message: z.string().min(10, 'Descreva o desafio com mais detalhes'),
})

type ContactFormData = z.infer<typeof contactSchema>

const contactInfo = [
  {
    icon: Mail,
    label: 'E-mail',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: siteConfig.contact.city,
    href: null,
  },
]

const socialLinks = [{ icon: Linkedin, href: siteConfig.links.linkedin, label: 'LinkedIn' }]

const nextSteps = [
  'Leitura do contexto e da criticidade do projeto',
  'Enquadramento técnico-comercial da demanda',
  'Retorno com próximos passos, agenda ou proposta inicial',
]

type ContactIntent = 'orcamento' | 'reuniao-tecnica'

interface ContactLeadPageProps {
  defaultIntent?: ContactIntent
  objectiveLabel?: string
  heroTitle?: string
  heroDescription?: string
  formTitle?: string
  submitLabel?: string
  successTitle?: string
  successMessage?: string
}

export function ContactLeadPage({
  defaultIntent,
  objectiveLabel = 'Contato comercial',
  heroTitle = 'Vamos estruturar sua próxima solução',
  heroDescription = 'Fale com nosso time técnico-comercial para mapear seu desafio e definir o melhor caminho de implementação.',
  formTitle = 'Enviar briefing',
  submitLabel = 'Enviar briefing',
  successTitle = 'Solicitação recebida',
  successMessage = 'Recebemos seu briefing. Nosso time vai analisar o contexto e retornar com os próximos passos.',
}: ContactLeadPageProps) {
  const isFrontendOnly = process.env.NEXT_PUBLIC_FRONTEND_ONLY === 'true'
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const intent = (searchParams.get('intent') as ContactIntent | null) || defaultIntent || null
  const requiresBudget = intent === 'orcamento'

  useEffect(() => {
    if (intent === 'orcamento') {
      setValue('projectType', 'Solicitação de orçamento técnico')
    }
    if (intent === 'reuniao-tecnica') {
      setValue('projectType', 'Agendamento de reunião técnica')
    }
  }, [intent, setValue])

  const onSubmit = async (data: ContactFormData) => {
    if (isFrontendOnly) {
      setSubmitError('Os formulários ficam indisponíveis na versão de verificação publicada em frontend-only.')
      return
    }

    if (requiresBudget && (!data.budgetRange || data.budgetRange.trim().length < 2)) {
      setError('budgetRange', {
        type: 'manual',
        message: 'Informe uma faixa de investimento',
      })
      return
    }

    clearErrors('budgetRange')
    setSubmitError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          projectType: data.projectType,
          budgetRange: data.budgetRange,
          message: data.message,
          subject: objectiveLabel,
          intent: intent || defaultIntent || 'contato-comercial',
          source: intent === 'orcamento' ? 'solicitar-orcamento' : 'agendar-reuniao',
        }),
      })

      const result = (await response.json()) as { success: boolean; error?: string }
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Não foi possível enviar sua solicitação.')
      }

      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Não foi possível enviar sua solicitação.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="section-shell-dark premium-grid relative overflow-hidden pt-28 pb-10 lg:pt-36 lg:pb-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,227,247,0.18),transparent_24%)]" />
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center rounded-full border border-brand-cyan/25 bg-white/6 px-3 py-1 font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan backdrop-blur-md">
                {objectiveLabel}
              </span>
              <h1 className="mt-5 font-cormorant text-[2.6rem] leading-[0.98] text-white lg:text-[4.2rem]">
                {heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl font-inter text-sm leading-relaxed text-slate-300 lg:text-base">
                {heroDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="grid gap-3 sm:grid-cols-2"
            >
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">Resposta</p>
                <p className="mt-2 font-inter text-sm leading-relaxed text-slate-200">Retorno inicial em até 1 hora útil</p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">Formato</p>
                <p className="mt-2 font-inter text-sm leading-relaxed text-slate-200">Leitura técnica, comercial e operacional da demanda</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="panel-shell rounded-[1.9rem] p-6">
                <h2 className="font-cormorant text-[2rem] text-slate-950">O que acontece depois do envio</h2>
                <div className="mt-5 space-y-4">
                  {nextSteps.map((step, index) => (
                    <div key={step} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cyan-soft">
                        <span className="font-inter text-[11px] uppercase tracking-[0.16em] text-brand-cyan-strong">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="font-inter text-sm leading-relaxed text-slate-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel-shell rounded-[1.9rem] p-6">
                <h3 className="font-cormorant text-[1.8rem] text-slate-950">Contato direto</h3>
                <div className="mt-5 space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-cyan-soft">
                        <item.icon size={20} className="text-brand-cyan-strong" />
                      </div>
                      <div>
                        <span className="block font-inter text-xs uppercase tracking-[0.15em] text-slate-500">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a href={item.href} className="mt-1 inline-block font-inter text-base text-slate-900 transition-colors hover:text-brand-cyan-strong">
                            {item.value}
                          </a>
                        ) : (
                          <span className="mt-1 inline-block font-inter text-base text-slate-900">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="font-inter text-xs uppercase tracking-[0.2em] text-slate-500">Rede</h4>
                  <div className="mt-4 flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line-subtle text-slate-500 transition-all hover:-translate-y-0.5 hover:border-brand-cyan hover:text-brand-cyan-strong"
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="panel-shell rounded-[2rem] p-6 lg:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-cormorant text-[2rem] text-slate-950">{formTitle}</h2>
                  <p className="mt-2 font-inter text-sm leading-relaxed text-slate-600">
                    Quanto melhor o contexto enviado, mais preciso será o enquadramento inicial da demanda.
                  </p>
                </div>
                <div className="hidden rounded-full border border-brand-cyan/20 bg-brand-cyan-soft p-3 text-brand-cyan-strong lg:flex">
                  <CalendarDays size={18} />
                </div>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 rounded-[1.7rem] border border-green-200 bg-green-50 p-8 text-center"
                >
                  <h3 className="font-cormorant text-[2rem] text-green-800">{successTitle}</h3>
                  <p className="mt-3 font-inter text-sm leading-relaxed text-green-700">{successMessage}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
                  {isFrontendOnly && (
                    <div className="rounded-[1.35rem] border border-brand-cyan/20 bg-brand-cyan-soft/60 p-4">
                      <p className="font-inter text-sm text-cyan-900">
                        Versão de verificação: os formulários públicos ficam desativados quando o deploy está em modo frontend-only.
                      </p>
                    </div>
                  )}

                  {submitError && (
                    <div className="rounded-[1.35rem] border border-red-200 bg-red-50 p-4">
                      <p className="font-inter text-sm text-red-600">{submitError}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Field label="Nome *" error={errors.name?.message}>
                      <Input
                        {...register('name')}
                        placeholder="Seu nome"
                        className={cn('field-shell font-inter text-sm', errors.name && 'border-red-400')}
                      />
                    </Field>
                    <Field label="Empresa *" error={errors.company?.message}>
                      <Input
                        {...register('company')}
                        placeholder="Nome da empresa"
                        className={cn('field-shell font-inter text-sm', errors.company && 'border-red-400')}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Field label="E-mail corporativo *" error={errors.email?.message}>
                      <Input
                        {...register('email')}
                        type="email"
                        placeholder="voce@empresa.com"
                        className={cn('field-shell font-inter text-sm', errors.email && 'border-red-400')}
                      />
                    </Field>
                    <Field label="WhatsApp *" error={errors.phone?.message}>
                      <Input
                        {...register('phone')}
                        placeholder="+55 (11) 99999-9999"
                        className={cn('field-shell font-inter text-sm', errors.phone && 'border-red-400')}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Field label="Tipo de projeto *" error={errors.projectType?.message}>
                      <Input
                        {...register('projectType')}
                        placeholder="Ex.: sistema web, IA, integração"
                        className={cn('field-shell font-inter text-sm', errors.projectType && 'border-red-400')}
                      />
                    </Field>

                    {requiresBudget ? (
                      <Field label="Faixa de investimento *" error={errors.budgetRange?.message}>
                        <Input
                          {...register('budgetRange')}
                          placeholder="Ex.: 20k-60k, 60k-120k"
                          className={cn('field-shell font-inter text-sm', errors.budgetRange && 'border-red-400')}
                        />
                      </Field>
                    ) : (
                      <div className="rounded-[1.45rem] border border-white/55 bg-white/58 p-4 backdrop-blur-md">
                        <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-slate-500">Observação</p>
                        <p className="mt-2 font-inter text-sm leading-relaxed text-slate-700">
                          Se você ainda não tem escopo fechado, envie mesmo assim. O enquadramento inicial serve para ajudar nessa definição.
                        </p>
                      </div>
                    )}
                  </div>

                  <Field label="Descrição do desafio *" error={errors.message?.message}>
                    <Textarea
                      {...register('message')}
                      placeholder="Explique o contexto atual, o problema, o objetivo e o prazo desejado."
                      rows={6}
                      className={cn('field-shell resize-none font-inter text-sm', errors.message && 'border-red-400')}
                    />
                  </Field>

                  <Button
                    type="submit"
                    disabled={isSubmitting || isFrontendOnly}
                    className="h-12 px-7 font-inter text-[11px] uppercase tracking-[0.18em]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                        />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        {submitLabel}
                        <Send size={14} />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="mb-2 block font-inter text-xs uppercase tracking-[0.15em] text-slate-600">
        {label}
      </label>
      {children}
      {error ? <p className="mt-1 text-xs text-red-500">{error}</p> : null}
    </div>
  )
}
