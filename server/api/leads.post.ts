import { getHeader } from 'h3'
import { useDb } from '../utils/db'

const RATE_WINDOW_MS = 60 * 60 * 1000
const RATE_MAX = 30
const rateMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
	const now = Date.now()
	let row = rateMap.get(ip)
	if (!row || row.resetAt < now) {
		row = { count: 0, resetAt: now + RATE_WINDOW_MS }
		rateMap.set(ip, row)
	}
	row.count++
	return row.count <= RATE_MAX
}

export default defineEventHandler(async event => {
	const ip =
		getHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim() ||
		event.node.req.socket?.remoteAddress ||
		'unknown'
	if (!checkRateLimit(ip)) {
		throw createError({
			statusCode: 429,
			statusMessage: 'Слишком много заявок',
		})
	}

	const body = await readBody<{
		source?: string
		name?: string
		phone?: string
		email?: string
		message?: string
		metadata?: unknown
	}>(event).catch(() => ({}))

	const source = body.source === 'calculator' ? 'calculator' : 'contact'
	const phone = String(body.phone ?? '')
		.trim()
		.slice(0, 40)
	const name = body.name ? String(body.name).trim().slice(0, 200) : null
	const email = body.email ? String(body.email).trim().slice(0, 120) : null
	const message = body.message
		? String(body.message).trim().slice(0, 5000)
		: null

	if (phone.length < 5) {
		throw createError({ statusCode: 400, statusMessage: 'Укажите телефон' })
	}

	let metadata: string | null = null
	if (body.metadata !== undefined && body.metadata !== null) {
		try {
			metadata = JSON.stringify(body.metadata).slice(0, 8000)
		} catch {
			metadata = null
		}
	}

	const createdAt = Date.now()
	useDb()
		.prepare(
			`INSERT INTO leads (source, name, phone, email, message, metadata, created_at)
			 VALUES (?, ?, ?, ?, ?, ?, ?)`,
		)
		.run(source, name, phone, email, message, metadata, createdAt)

	return { ok: true }
})
