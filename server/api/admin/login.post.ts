import { createAdminSession } from '../../utils/admin-session'
import { verifyPassword } from '../../utils/auth-password'
import {
	isValidAdminEmail,
	normalizeAdminEmail,
	trimEnvValue,
} from '../../utils/admin-email'
import { countAdmins, getAdminWithHashByEmail } from '../../utils/admins-store'

export default defineEventHandler(async event => {
	if (countAdmins() === 0) {
		throw createError({
			statusCode: 503,
			statusMessage:
				'Нет учётных записей. Задайте NUXT_ADMIN_PASSWORD и NUXT_ADMIN_EMAIL (первый запуск) или зарегистрируйте администратора по секретному ключу.',
		})
	}

	const body = await readBody<{ email?: string; password?: string }>(
		event,
	).catch(() => ({}))
	const email = normalizeAdminEmail(trimEnvValue(body?.email))
	const password = trimEnvValue(body?.password)
	if (!email || !password) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Укажите email и пароль',
		})
	}
	if (!isValidAdminEmail(email)) {
		throw createError({
			statusCode: 400,
			statusMessage:
				'Логин должен быть действительным адресом электронной почты',
		})
	}

	const row = getAdminWithHashByEmail(email)
	if (!row || !verifyPassword(password, row.password_hash)) {
		throw createError({
			statusCode: 401,
			statusMessage: 'Неверный email или пароль',
		})
	}

	createAdminSession(event, row.id)
	return { ok: true }
})
