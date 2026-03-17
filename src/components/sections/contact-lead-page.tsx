'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, MapPin, Send, Linkedin } from 'lucide-react'
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
      <section className="relative pt-28 pb-8 lg:pt-36 lg:pb-12 bg-[#E3DFDD]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center px-3 py-1 bg-stone-200/80 text-stone-700 font-inter text-[10px] tracking-[0.18em] uppercase">
              {objectiveLabel}
            </span>
            <h1 className="mt-4 font-cormorant text-3xl lg:text-4xl font-light text-stone-800 leading-tight">
              {heroTitle}
            </h1>
            <p className="mt-4 font-inter text-sm text-stone-600 leading-relaxed max-w-lg">{heroDescription}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#E3DFDD]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-cormorant text-xl lg:text-2xl font-light text-stone-800 mb-6">
                Canal de <span className="italic">contato</span>
              </h2>

              <div className="space-y-8 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-stone-100 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-stone-600" />
                    </div>
                    <div>
                      <span className="block font-inter text-xs tracking-[0.15em] uppercase text-stone-400 mb-1">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a href={item.href} className="font-inter text-base text-stone-800 hover:text-stone-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-inter text-base text-stone-800">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="font-inter text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Rede</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:border-stone-900 transition-all"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-cormorant text-xl lg:text-2xl font-light text-stone-800 mb-6">{formTitle}</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-green-50 border border-green-200 text-center"
                >
                  <h3 className="font-cormorant text-2xl text-green-800 mb-2">{successTitle}</h3>
                  <p className="font-inter text-sm text-green-700">{successMessage}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {isFrontendOnly && (
                    <div className="p-4 bg-blue-50 border border-blue-200">
                      <p className="font-inter text-sm text-blue-700">
                        Versão de verificação: os formulários públicos ficam desativados quando o deploy está em modo frontend-only.
                      </p>
                    </div>
                  )}

                  {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200">
                      <p className="font-inter text-sm text-red-600">{submitError}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block font-inter text-xs tracking-[0.15em] uppercase text-stone-500 mb-2">
                        Nome *
                      </label>
                      <Input
                        {...register('name')}
                        placeholder="Seu nome"
                        className={cn(
                          'h-12 bg-stone-50 border-stone-200 focus:border-stone-400 rounded-none font-inter text-sm',
                          errors.name && 'border-red-400'
                        )}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block font-inter text-xs tracking-[0.15em] uppercase text-stone-500 mb-2">
                        Empresa *
                      </label>
                      <Input
                        {...register('company')}
                        placeholder="Nome da empresa"
                        className={cn(
                          'h-12 bg-stone-50 border-stone-200 focus:border-stone-400 rounded-none font-inter text-sm',
                          errors.company && 'border-red-400'
                        )}
                      />
                      {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter text-xs tracking-[0.15em] uppercase text-stone-500 mb-2">
                        E-mail corporativo *
                      </label>
                      <Input
                        {...register('email')}
                        type="email"
                        placeholder="voce@empresa.com"
                        className={cn(
                          'h-12 bg-stone-50 border-stone-200 focus:border-stone-400 rounded-none font-inter text-sm',
                          errors.email && 'border-red-400'
                        )}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block font-inter text-xs tracking-[0.15em] uppercase text-stone-500 mb-2">
                        WhatsApp *
                      </label>
                      <Input
                        {...register('phone')}
                        placeholder="+55 (11) 99999-9999"
                        className={cn(
                          'h-12 bg-stone-50 border-stone-200 focus:border-stone-400 rounded-none font-inter text-sm',
                          errors.phone && 'border-red-400'
                        )}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter text-xs tracking-[0.15em] uppercase text-stone-500 mb-2">
                        Tipo de projeto *
                      </label>
                      <Input
                        {...register('projectType')}
                        placeholder="Ex.: sistema web, IA, integração"
                        className={cn(
                          'h-12 bg-stone-50 border-stone-200 focus:border-stone-400 rounded-none font-inter text-sm',
                          errors.projectType && 'border-red-400'
                        )}
                      />
                      {errors.projectType && <p className="mt-1 text-xs text-red-500">{errors.projectType.message}</p>}
                    </div>

                    {requiresBudget && (
                      <div>
                        <label className="block font-inter text-xs tracking-[0.15em] uppercase text-stone-500 mb-2">
                          Faixa de investimento *
                        </label>
                        <Input
                          {...register('budgetRange')}
                          placeholder="Ex.: 20k-60k, 60k-120k, acima de 120k"
                          className={cn(
                            'h-12 bg-stone-50 border-stone-200 focus:border-stone-400 rounded-none font-inter text-sm',
                            errors.budgetRange && 'border-red-400'
                          )}
                        />
                        {errors.budgetRange && <p className="mt-1 text-xs text-red-500">{errors.budgetRange.message}</p>}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block font-inter text-xs tracking-[0.15em] uppercase text-stone-500 mb-2">
                      Descrição do desafio *
                    </label>
                    <Textarea
                      {...register('message')}
                      placeholder="Explique o contexto atual, o problema, o objetivo e o prazo desejado."
                      rows={6}
                      className={cn(
                        'bg-stone-50 border-stone-200 focus:border-stone-400 rounded-none font-inter text-sm resize-none',
                        errors.message && 'border-red-400'
                      )}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || isFrontendOnly}
                    className="w-full sm:w-auto h-14 px-10 bg-stone-900 text-white font-inter text-xs tracking-[0.2em] uppercase hover:bg-stone-800 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
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
