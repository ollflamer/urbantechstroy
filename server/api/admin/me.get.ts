import { assertAdmin } from '../../utils/admin-session'

export default defineEventHandler(event => {
	const admin = assertAdmin(event)
	return { ok: true, role: 'admin' as const, email: admin.email, id: admin.id }
})
