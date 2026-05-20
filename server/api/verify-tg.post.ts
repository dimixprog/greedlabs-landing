// Verifies a Telegram username against the whitelist of official GREED Labs
// biz-dev accounts. The list lives in runtimeConfig (server-only, NEVER in
// runtimeConfig.public) and is populated from NUXT_TG_VERIFIED env var.

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 20
const hits = new Map<string, { count: number; resetAt: number }>()

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT_MAX) return false
  entry.count++
  return true
}

function normalize(raw: unknown): string {
  if (typeof raw !== 'string') return ''
  return raw.trim().replace(/^@/, '').toLowerCase()
}

export default defineEventHandler(async (event) => {
  const ip = getRequestIP(event, { xForwardedFor: true }) ?? 'unknown'
  if (!rateLimit(ip)) {
    throw createError({ statusCode: 429, statusMessage: 'Too many requests' })
  }

  const body = await readBody<{ username?: string }>(event)
  const username = normalize(body?.username)

  if (!username || !/^[a-z0-9_]{5,32}$/.test(username)) {
    return { verified: false, reason: 'invalid_format' as const }
  }

  const list = (useRuntimeConfig().tgVerified ?? '')
    .toString()
    .toLowerCase()
    .split(',')
    .map((s: string) => s.trim().replace(/^@/, ''))
    .filter(Boolean)

  return { verified: list.includes(username) }
})
