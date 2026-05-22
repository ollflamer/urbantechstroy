import { randomBytes } from 'node:crypto'
import { getCookie, deleteCookie, setCookie } from 'h3'
import type { H3Event } from 'h3'
import { useDb } from './db'

const COOKIE = 'uts_admin'

const WEEK_MS = 7 * 24 * 60 * 60 * 1000

export function createAdminSession(event: H3Event, adminId: number) {
	const token = randomBytes(32).toString('hex')
	const expiresAt = Date.now() + WEEK_MS
	useDb()
		.prepare(
			'INSERT INTO admin_sessions (token, expires_at, admin_id) VALUES (?, ?, ?)',
		)
		.run(token, expiresAt, adminId)

	setCookie(event, COOKIE, token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		path: '/',
		maxAge: Math.floor(WEEK_MS / 1000),
		sameSite: 'lax',
	})
}

export function destroyAdminSession(event: H3Event) {
	const token = getCookie(event, COOKIE)
	if (token) {
		useDb().prepare('DELETE FROM admin_sessions WHERE token = ?').run(token)
	}
	deleteCookie(event, COOKIE, { path: '/' })
}

export function getAdminToken(event: H3Event): string | undefined {
	return getCookie(event, COOKIE) || undefined
}

export type AdminSessionUser = { id: number; email: string }

export function assertAdmin(event: H3Event): AdminSessionUser {
	const token = getAdminToken(event)
	if (!token) {
		throw createError({ statusCode: 401, statusMessage: 'Требуется вход' })
	}
	const row = useDb()
		.prepare(
			`SELECT a.id AS id, a.email AS email
			 FROM admin_sessions s
			 INNER JOIN admins a ON a.id = s.admin_id
			 WHERE s.token = ? AND s.expires_at > ?`,
		)
		.get(token, Date.now()) as AdminSessionUser | undefined
	if (!row) {
		destroyAdminSession(event)
		throw createError({ statusCode: 401, statusMessage: 'Сессия истекла' })
	}
	return row
}
