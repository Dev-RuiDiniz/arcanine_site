import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

dotenv.config({ path: '.env.local', quiet: true })
dotenv.config({ quiet: true })

function buildAdapterConfig(connectionString) {
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
      databaseUrl.searchParams.set('sslmode', 'no-verify')
      normalizedConnectionString = databaseUrl.toString()
    }
  } catch {
    // Keep the default connection config when DATABASE_URL cannot be parsed.
  }

  return { connectionString: normalizedConnectionString }
}

function readArg(flag) {
  const directMatch = process.argv.find((entry) => entry.startsWith(`${flag}=`))
  if (directMatch) {
    return directMatch.slice(flag.length + 1)
  }

  const index = process.argv.indexOf(flag)
  if (index >= 0) {
    return process.argv[index + 1]
  }

  return undefined
}

const email = readArg('--email')
const password = readArg('--password')
const name = readArg('--name') || 'Admin'
const role = readArg('--role') || 'ADMIN'

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is required to create an admin user.')
  process.exit(1)
}

if (!email || !password) {
  console.error(
    'Usage: pnpm create:admin -- --email admin@example.com --password "strong-password" [--name "Admin"] [--role ADMIN|EDITOR]'
  )
  process.exit(1)
}

if (!['ADMIN', 'EDITOR'].includes(role)) {
  console.error('Invalid role. Use ADMIN or EDITOR.')
  process.exit(1)
}

const prisma = new PrismaClient({
  adapter: new PrismaPg(buildAdapterConfig(process.env.DATABASE_URL)),
})

try {
  const passwordHash = await bcrypt.hash(password, 10)

  const user = await prisma.user.upsert({
    where: { email: email.trim().toLowerCase() },
    update: {
      name,
      role,
      password: passwordHash,
    },
    create: {
      name,
      email: email.trim().toLowerCase(),
      role,
      password: passwordHash,
    },
  })

  console.log(`User ready: ${user.email} (${user.role})`)
} catch (error) {
  console.error('Failed to create admin user.')
  console.error(error)
  process.exit(1)
} finally {
  await prisma.$disconnect()
}
