import bcrypt from 'bcryptjs'
import type { Role } from '@prisma/client'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/lib/prisma'

const isProduction = process.env.NODE_ENV === 'production'
const nextAuthSecret = process.env.NEXTAUTH_SECRET || 'local-dev-auth-secret'

function getAuthEnvironmentError() {
  if (!process.env.NEXTAUTH_SECRET && isProduction) {
    return 'NEXTAUTH_SECRET is required to enable admin authentication in production.'
  }

  return null
}

type SessionUserWithMeta = {
  id?: string
  role?: Role
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required')
        }

        const authEnvironmentError = getAuthEnvironmentError()
        if (authEnvironmentError) {
          throw new Error(authEnvironmentError)
        }

        if (!prisma) {
          throw new Error('Admin authentication requires DATABASE_URL configured.')
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email.trim().toLowerCase() },
        })

        if (!user?.password) {
          throw new Error('Invalid credentials')
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password)
        if (!isPasswordValid) {
          throw new Error('Invalid credentials')
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = (user as SessionUserWithMeta).role
      }

      return token
    },
    async session({ session, token }) {
      if (session.user) {
        ;(session.user as SessionUserWithMeta).id =
          (token.id as string | undefined) || token.sub || undefined
        ;(session.user as SessionUserWithMeta).role = token.role as Role | undefined
      }

      return session
    },
  },
  secret: nextAuthSecret,
}
