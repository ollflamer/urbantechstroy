import { assertAdmin } from '../../utils/admin-session'
import { insertAdmin } from '../../utils/admins-store'

export default defineEventHandler(async event => {
	assertAdmin(event)
	const body = await readBody<{ email?: string; password?: string }>(
		event,
	).catch(() => ({}))
	const email = body?.email ?? ''
	const password = body?.password ?? ''
	if (!email || !password) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Укажите email и пароль',
		})
	}
	const row = insertAdmin(email, password)
	return { ok: true, id: row.id }
})
