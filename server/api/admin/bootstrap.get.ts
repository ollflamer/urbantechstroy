import { countAdmins } from '../../utils/admins-store'

/** Публичный статус: есть ли учётные записи (для ссылки «Регистрация»). */
export default defineEventHandler(() => {
	return {
		hasAdmins: countAdmins() > 0,
	}
})
