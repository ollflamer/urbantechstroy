import { assertAdmin } from '../../utils/admin-session'
import { listAdmins } from '../../utils/admins-store'

export default defineEventHandler(event => {
	assertAdmin(event)
	return { admins: listAdmins() }
})
