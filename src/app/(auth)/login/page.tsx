'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, Eye, EyeOff, Loader2 } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().min(1, 'Informe a senha'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    setError('')

    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (result?.error) {
        setError('Credenciais inválidas')
      } else {
        router.push('/admin')
        router.refresh()
      }
    } catch {
      setError('Não foi possível autenticar agora. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
          alt="Equipe de tecnologia em ambiente de operação"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_34%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/78 to-slate-950/86" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-cormorant text-5xl font-light tracking-[0.3em]">Arcane</h1>
            <p className="mt-2 font-inter text-xs tracking-[0.4em] uppercase text-white/70">Tecnologia</p>
            <div className="mt-8 w-16 h-px bg-white/30 mx-auto" />
            <p className="mt-8 font-cormorant text-xl italic text-white/80 max-w-md">
              Engenharia sólida para crescimento sustentável.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-950">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden text-center mb-12">
            <h1 className="font-cormorant text-3xl font-light tracking-[0.3em] text-white">
              Arcane
            </h1>
            <p className="mt-1 font-inter text-[10px] tracking-[0.3em] uppercase text-brand-cyan">Tecnologia</p>
          </div>

          <div className="mb-10">
            <h2 className="font-cormorant text-3xl font-light text-white">
              Acesso ao <span className="italic">painel</span>
            </h2>
            <p className="mt-2 font-inter text-sm text-slate-400">
              Entre para gerenciar conteúdo institucional, cases e operação comercial.
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
            >
              <p className="font-inter text-sm text-red-600 dark:text-red-400">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block font-inter text-xs tracking-[0.1em] uppercase text-slate-400 mb-2">
                E-mail
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="voce@empresa.com"
                className="w-full h-14 px-4 bg-slate-900 border border-white/10 text-white font-inter text-sm focus:outline-none focus:border-brand-cyan transition-colors"
              />
              {errors.email && <p className="mt-1 font-inter text-xs text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block font-inter text-xs tracking-[0.1em] uppercase text-slate-400 mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full h-14 px-4 pr-12 bg-slate-900 border border-white/10 text-white font-inter text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-brand-cyan transition-colors"
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="mt-1 font-inter text-xs text-red-500">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-brand-cyan text-slate-950 font-inter text-xs tracking-[0.2em] uppercase hover:bg-brand-cyan-strong hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Entrando...
                </>
              ) : (
                <>
                  Entrar
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="font-inter text-sm text-slate-400 hover:text-brand-cyan transition-colors"
            >
              ← Voltar para o site
            </Link>
          </div>

          <div className="mt-8 rounded-lg border border-white/10 bg-slate-900 p-4">
            <p className="font-inter text-xs text-slate-400 text-center">
              <strong>Primeiro acesso:</strong> crie o usuário com <code>pnpm create:admin -- --email voce@empresa.com --password &quot;senha-forte&quot;</code>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
