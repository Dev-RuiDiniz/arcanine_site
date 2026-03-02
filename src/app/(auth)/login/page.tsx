/*
Arquivo: src/app/(auth)/login/page.tsx
Objetivo: Pagina de autenticacao.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Eye, EyeOff, Loader2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(1, 'Password is required'),
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
        setError('Invalid email or password')
      } else {
        router.push('/admin')
        router.refresh()
      }
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
          alt="Technology team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Logo Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-cormorant text-5xl font-light tracking-[0.3em]">
              ARCANINE
            </h1>
            <p className="mt-2 font-inter text-xs tracking-[0.4em] uppercase text-white/70">
              Tecnologia
            </p>
            <div className="mt-8 w-16 h-px bg-white/30 mx-auto" />
            <p className="mt-8 font-cormorant text-xl italic text-white/80 max-w-md">
              "Engenharia sólida para crescimento sustentável"
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-stone-950">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-12">
            <h1 className="font-cormorant text-3xl font-light tracking-[0.3em] text-stone-900 dark:text-white">
              ARCANINE
            </h1>
            <p className="mt-1 font-inter text-[10px] tracking-[0.3em] uppercase text-stone-500">
              Tecnologia
            </p>
          </div>

          {/* Header */}
          <div className="mb-10">
            <h2 className="font-cormorant text-3xl font-light text-stone-900 dark:text-white">
              Welcome <span className="italic">back</span>
            </h2>
            <p className="mt-2 font-inter text-sm text-stone-500 dark:text-stone-400">
              Sign in to access your dashboard
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
            >
              <p className="font-inter text-sm text-red-600 dark:text-red-400">{error}</p>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block font-inter text-xs tracking-[0.1em] uppercase text-stone-500 dark:text-stone-400 mb-2">
                Email Address
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="admin@arcanine.tech"
                className="w-full h-14 px-4 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white font-inter text-sm focus:outline-none focus:border-stone-400 dark:focus:border-stone-600 transition-colors"
              />
              {errors.email && (
                <p className="mt-1 font-inter text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block font-inter text-xs tracking-[0.1em] uppercase text-stone-500 dark:text-stone-400 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full h-14 px-4 pr-12 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white font-inter text-sm focus:outline-none focus:border-stone-400 dark:focus:border-stone-600 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 font-inter text-xs text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-stone-300 dark:border-stone-700 rounded text-stone-900 focus:ring-stone-500"
                />
                <span className="font-inter text-sm text-stone-600 dark:text-stone-400">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="font-inter text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-inter text-xs tracking-[0.2em] uppercase hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="font-inter text-sm text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              ← Back to website
            </Link>
          </div>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg">
            <p className="font-inter text-xs text-stone-500 dark:text-stone-400 text-center">
              <strong>Demo:</strong> admin@arcanine.tech / admin123
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
