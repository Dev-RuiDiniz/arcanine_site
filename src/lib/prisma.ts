/*
Arquivo: src/lib/prisma.ts
Objetivo: Funcoes utilitarias e integracoes compartilhadas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const buildAdapterConfig = (connectionString: string) => {
  let normalizedConnectionString = connectionString

  try {
    const databaseUrl = new URL(connectionString)
    const isSupabaseHost =
      databaseUrl.hostname.endsWith('.supabase.co') ||
      databaseUrl.hostname.endsWith('.supabase.com')

    if (
      isSupabaseHost &&
      databaseUrl.searchParams.get('sslmode') !== 'no-verify'
    ) {
      // Supabase Postgres can fail TLS verification in local Node environments on Windows.
      databaseUrl.searchParams.set('sslmode', 'no-verify')
      normalizedConnectionString = databaseUrl.toString()
    }
  } catch {
    // Keep the default connection config when DATABASE_URL cannot be parsed.
  }

  return { connectionString: normalizedConnectionString }
}

// Só cria o client se DATABASE_URL estiver configurada
const createPrismaClient = () => {
  if (!process.env.DATABASE_URL) {
    console.warn('DATABASE_URL not configured - Prisma client not initialized')
    return null
  }

  return new PrismaClient({
    adapter: new PrismaPg(buildAdapterConfig(process.env.DATABASE_URL)),
  })
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production' && prisma) {
  globalForPrisma.prisma = prisma
}

export default prisma

