import { assertAdmin, getAdminToken } from '../../../utils/admin-session'
import { updateAdmin } from '../../../utils/admins-store'

export default defineEventHandler(async event => {
	const me = assertAdmin(event)
	const id = Number(getRouterParam(event, 'id'))
	if (!Number.isFinite(id) || id < 1) {
		throw createError({ statusCode: 400, statusMessage: 'Некорректный id' })
	}
	const body = await readBody<{
		email?: string
		password?: string
	}>(event).catch(() => ({}))

	const patch: { email?: string; plainPassword?: string } = {}
	if (typeof body.email === 'string' && body.email.trim()) {
		patch.email = body.email
	}
	if (typeof body.password === 'string' && body.password.length > 0) {
		patch.plainPassword = body.password
	}
	if (patch.email === undefined && patch.plainPassword === undefined) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Передайте новый email и/или пароль',
		})
	}

	const token = getAdminToken(event)
	const preserve =
		me.id === id && patch.plainPassword !== undefined && token
			? token
			: undefined

	const row = updateAdmin(
		id,
		patch,
		preserve ? { preserveSessionToken: preserve } : undefined,
	)
	return { ok: true, admin: row }
})
