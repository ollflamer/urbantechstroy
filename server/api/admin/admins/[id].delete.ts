import { assertAdmin } from '../../../utils/admin-session'
import { deleteAdmin } from '../../../utils/admins-store'

export default defineEventHandler(event => {
	const me = assertAdmin(event)
	const id = Number(getRouterParam(event, 'id'))
	if (!Number.isFinite(id) || id < 1) {
		throw createError({ statusCode: 400, statusMessage: 'Некорректный id' })
	}
	if (me.id === id) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Нельзя удалить свою текущую учётную запись',
		})
	}
	deleteAdmin(id)
	return { ok: true }
})
