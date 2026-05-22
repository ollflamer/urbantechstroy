import { createAdminSession } from '../../utils/admin-session'
import { countAdmins, insertAdmin } from '../../utils/admins-store'
import { isValidAdminEmail, normalizeAdminEmail } from '../../utils/admin-email'

/** Только первый администратор (когда в БД ещё нет записей). */
export default defineEventHandler(async event => {
	const config = useRuntimeConfig(event)
	const body = await readBody<{
		email?: string
		password?: string
		setupKey?: string
	}>(event).catch(() => ({}))

	if (countAdmins() > 0) {
		throw createError({
			statusCode: 403,
			statusMessage:
				'Регистрация доступна только для первого администратора. Добавьте пользователей в разделе «Администраторы».',
		})
	}

	const emailRaw = body?.email ?? ''
	const password = body?.password ?? ''
	const setupKey = typeof body?.setupKey === 'string' ? body.setupKey : ''

	if (!emailRaw || !password) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Укажите email и пароль',
		})
	}
	const email = normalizeAdminEmail(emailRaw)
	if (!isValidAdminEmail(email)) {
		throw createError({
			statusCode: 400,
			statusMessage:
				'Логин должен быть действительным адресом электронной почты',
		})
	}

	const envSetupKey = String(config.adminSetupKey || '')
	if (!envSetupKey) {
		throw createError({
			statusCode: 403,
			statusMessage:
				'Задайте NUXT_ADMIN_SETUP_KEY в .env для регистрации первого администратора либо используйте NUXT_ADMIN_PASSWORD + NUXT_ADMIN_EMAIL (учётная запись создаётся автоматически при первом обращении к серверу).',
		})
	}
	if (setupKey !== envSetupKey) {
		throw createError({
			statusCode: 403,
			statusMessage: 'Неверный секретный ключ регистрации',
		})
	}

	const row = insertAdmin(email, password)
	createAdminSession(event, row.id)
	return { ok: true, id: row.id }
})
