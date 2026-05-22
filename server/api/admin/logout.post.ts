import { destroyAdminSession } from '../../utils/admin-session'

export default defineEventHandler(event => {
	destroyAdminSession(event)
	return { ok: true }
})
