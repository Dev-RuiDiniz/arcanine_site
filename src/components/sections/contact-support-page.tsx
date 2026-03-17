'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, MapPin, Send, Linkedin } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'

const supportSchema = z.object({
  name: z.string().min(2, 'Informe seu nome completo'),
  email: z.string().email('Informe um e-mail válido'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Informe o assunto'),
  message: z.string().min(10, 'Descreva sua dúvida com mais detalhes'),
})

type SupportFormData = z.infer<typeof supportSchema>

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

export function ContactSupportPage() {
  const isFrontendOnly = process.env.NEXT_PUBLIC_FRONTEND_ONLY === 'true'
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SupportFormData>({
    resolver: zodResolver(supportSchema),
  })

  const onSubmit = async (data: SupportFormData) => {
    if (isFrontendOnly) {
      setSubmitError('Os formulários ficam indisponíveis na versão de verificação publicada em frontend-only.')
      return
    }

    setSubmitError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          source: 'contact',
          intent: 'contato-geral',
        }),
      })

      const result = (await response.json()) as { success: boolean; error?: string }
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Não foi possível enviar sua mensagem.')
      }

      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Não foi possível enviar sua mensagem.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="relative section-shell-dark pt-28 pb-8 lg:pt-36 lg:pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center px-3 py-1 border border-brand-cyan/25 bg-white/6 text-brand-cyan font-inter text-[10px] tracking-[0.18em] uppercase backdrop-blur-md">
              Contato geral
            </span>
            <h1 className="mt-4 font-cormorant text-3xl lg:text-4xl font-light text-white leading-tight">
              Fale com a ARCANINE
            </h1>
            <p className="mt-4 font-inter text-sm text-slate-300 leading-relaxed max-w-2xl">
              Este canal é para dúvidas, informações institucionais e atendimento geral. Para valores e proposta comercial, use a página de solicitar orçamento.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-cormorant text-xl lg:text-2xl font-light text-slate-950 mb-6">
                Canais de <span className="italic">contato</span>
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
                    <div className="w-12 h-12 bg-brand-cyan-soft flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-brand-cyan-strong" />
                    </div>
                    <div>
                      <span className="block font-inter text-xs tracking-[0.15em] uppercase text-slate-500 mb-1">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a href={item.href} className="font-inter text-base text-slate-900 hover:text-brand-cyan-strong transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-inter text-base text-slate-900">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <h3 className="font-inter text-xs tracking-[0.2em] uppercase text-slate-500 mb-4">Rede</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-line-subtle flex items-center justify-center text-slate-500 hover:text-brand-cyan-strong hover:border-brand-cyan transition-all"
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
              <h2 className="font-cormorant text-xl lg:text-2xl font-light text-slate-950 mb-6">Enviar mensagem</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-green-50 border border-green-200 text-center"
                >
                  <h3 className="font-cormorant text-2xl text-green-800 mb-2">Mensagem recebida</h3>
                  <p className="font-inter text-sm text-green-700">
                    Obrigado. Retornaremos em breve pelo canal informado.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {isFrontendOnly && (
                    <div className="p-4 border border-brand-cyan/20 bg-brand-cyan-soft/60">
                      <p className="font-inter text-sm text-cyan-900">
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
                      <label className="block font-inter text-xs tracking-[0.15em] uppercase text-slate-600 mb-2">
                        Nome *
                      </label>
                      <Input
                        {...register('name')}
                        placeholder="Seu nome"
                        className={cn('h-12 field-shell focus:border-brand-cyan rounded-none font-inter text-sm', errors.name && 'border-red-400')}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block font-inter text-xs tracking-[0.15em] uppercase text-slate-600 mb-2">
                        E-mail *
                      </label>
                      <Input
                        {...register('email')}
                        type="email"
                        placeholder="voce@empresa.com"
                        className={cn('h-12 field-shell focus:border-brand-cyan rounded-none font-inter text-sm', errors.email && 'border-red-400')}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter text-xs tracking-[0.15em] uppercase text-slate-600 mb-2">
                        WhatsApp
                      </label>
                      <Input
                        {...register('phone')}
                        placeholder="+55 (11) 99999-9999"
                        className="h-12 field-shell focus:border-brand-cyan rounded-none font-inter text-sm"
                      />
                    </div>

                    <div>
                      <label className="block font-inter text-xs tracking-[0.15em] uppercase text-slate-600 mb-2">
                        Assunto *
                      </label>
                      <Input
                        {...register('subject')}
                        placeholder="Ex.: suporte, parceria, dúvida"
                        className={cn('h-12 field-shell focus:border-brand-cyan rounded-none font-inter text-sm', errors.subject && 'border-red-400')}
                      />
                      {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-inter text-xs tracking-[0.15em] uppercase text-slate-600 mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      {...register('message')}
                      placeholder="Descreva sua dúvida ou solicitação."
                      rows={6}
                      className={cn('field-shell focus:border-brand-cyan rounded-none font-inter text-sm resize-none', errors.message && 'border-red-400')}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || isFrontendOnly}
                    className="w-full sm:w-auto h-14 px-10 bg-brand-cyan text-slate-950 font-inter text-xs tracking-[0.2em] uppercase hover:bg-brand-cyan-strong hover:text-white rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
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
                        Enviar mensagem
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
