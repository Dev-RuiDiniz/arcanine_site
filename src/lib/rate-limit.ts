type RateLimitBucket = {
  count: number
  resetAt: number
}

type RateLimitResult = {
  allowed: boolean
  remaining: number
  resetAt: number
  retryAfterSeconds: number
}

type RateLimitOptions = {
  key: string
  limit: number
  windowMs: number
}

const globalForRateLimit = globalThis as typeof globalThis & {
  __arcaneRateLimitBuckets?: Map<string, RateLimitBucket>
}

const buckets = globalForRateLimit.__arcaneRateLimitBuckets ?? new Map<string, RateLimitBucket>()
globalForRateLimit.__arcaneRateLimitBuckets = buckets

function getRetryAfterSeconds(resetAt: number, now: number) {
  return Math.max(1, Math.ceil((resetAt - now) / 1000))
}

export function checkRateLimit({ key, limit, windowMs }: RateLimitOptions): RateLimitResult {
  const now = Date.now()
  const current = buckets.get(key)

  if (!current || current.resetAt <= now) {
    const resetAt = now + windowMs
    buckets.set(key, { count: 1, resetAt })

    return {
      allowed: true,
      remaining: Math.max(0, limit - 1),
      resetAt,
      retryAfterSeconds: getRetryAfterSeconds(resetAt, now),
    }
  }

  if (current.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: current.resetAt,
      retryAfterSeconds: getRetryAfterSeconds(current.resetAt, now),
    }
  }

  current.count += 1
  buckets.set(key, current)

  return {
    allowed: true,
    remaining: Math.max(0, limit - current.count),
    resetAt: current.resetAt,
    retryAfterSeconds: getRetryAfterSeconds(current.resetAt, now),
  }
}

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  if (forwardedFor) {
    return forwardedFor
  }

  const realIp = request.headers.get('x-real-ip')?.trim()
  if (realIp) {
    return realIp
  }

  return 'unknown'
}
