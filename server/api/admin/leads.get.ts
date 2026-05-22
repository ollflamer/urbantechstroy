import { useDb } from '../../utils/db'
import { assertAdmin } from '../../utils/admin-session'

export default defineEventHandler(event => {
	assertAdmin(event)
	const query = getQuery(event)
	const limit = Math.min(Number(query.limit) || 100, 500)
	const offset = Math.max(Number(query.offset) || 0, 0)

	const rows = useDb()
		.prepare(
			`SELECT id, source, name, phone, email, message, metadata, created_at
			 FROM leads ORDER BY id DESC LIMIT ? OFFSET ?`,
		)
		.all(limit, offset) as Array<{
		id: number
		source: string
		name: string | null
		phone: string
		email: string | null
		message: string | null
		metadata: string | null
		created_at: number
	}>

	const total = (
		useDb().prepare('SELECT COUNT(*) as c FROM leads').get() as { c: number }
	).c

	return { items: rows, total, limit, offset }
})
