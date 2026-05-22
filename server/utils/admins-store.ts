import { useDb } from './db'
import { hashPassword } from './auth-password'
import { isValidAdminEmail, normalizeAdminEmail } from './admin-email'

export type AdminRow = {
	id: number
	email: string
	created_at: number
	updated_at: number
}

export function listAdmins(): AdminRow[] {
	return useDb()
		.prepare(
			`SELECT id, email, created_at, updated_at FROM admins ORDER BY id ASC`,
		)
		.all() as AdminRow[]
}

export function countAdmins(): number {
	const row = useDb().prepare('SELECT COUNT(*) as c FROM admins').get() as {
		c: number
	}
	return row.c
}

export function getAdminById(id: number): AdminRow | undefined {
	return useDb()
		.prepare(
			`SELECT id, email, created_at, updated_at FROM admins WHERE id = ?`,
		)
		.get(id) as AdminRow | undefined
}

export function getAdminWithHashByEmail(
	email: string,
): { id: number; email: string; password_hash: string } | undefined {
	const norm = normalizeAdminEmail(email)
	return useDb()
		.prepare(
			`SELECT id, email, password_hash FROM admins WHERE email = ? COLLATE NOCASE`,
		)
		.get(norm) as
		| { id: number; email: string; password_hash: string }
		| undefined
}

export function insertAdmin(emailRaw: string, plainPassword: string): AdminRow {
	const email = normalizeAdminEmail(emailRaw)
	if (!isValidAdminEmail(email)) {
		throw createError({
			statusCode: 400,
			statusMessage:
				'Логин должен быть действительным адресом электронной почты',
		})
	}
	if (plainPassword.length < 8) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Пароль не короче 8 символов',
		})
	}
	const now = Date.now()
	const hash = hashPassword(plainPassword)
	try {
		const res = useDb()
			.prepare(
				`INSERT INTO admins (email, password_hash, created_at, updated_at)
				 VALUES (@email, @password_hash, @created_at, @updated_at)`,
			)
			.run({
				email,
				password_hash: hash,
				created_at: now,
				updated_at: now,
			})
		const id = Number(res.lastInsertRowid)
		const row = getAdminById(id)
		if (!row) {
			throw createError({ statusCode: 500, statusMessage: 'Ошибка создания' })
		}
		return row
	} catch (e: unknown) {
		if (
			e &&
			typeof e === 'object' &&
			'code' in e &&
			(e as { code?: string }).code === 'SQLITE_CONSTRAINT_UNIQUE'
		) {
			throw createError({
				statusCode: 409,
				statusMessage: 'Администратор с таким email уже существует',
			})
		}
		throw e
	}
}

export function updateAdmin(
	id: number,
	patch: { email?: string; plainPassword?: string },
	options?: { preserveSessionToken?: string },
): AdminRow {
	const row = getAdminById(id)
	if (!row) {
		throw createError({ statusCode: 404, statusMessage: 'Не найдено' })
	}
	let email = row.email
	if (patch.email !== undefined) {
		email = normalizeAdminEmail(patch.email)
		if (!isValidAdminEmail(email)) {
			throw createError({
				statusCode: 400,
				statusMessage:
					'Логин должен быть действительным адресом электронной почты',
			})
		}
	}
	const now = Date.now()
	if (patch.plainPassword !== undefined && patch.plainPassword.length > 0) {
		if (patch.plainPassword.length < 8) {
			throw createError({
				statusCode: 400,
				statusMessage: 'Пароль не короче 8 символов',
			})
		}
		const hash = hashPassword(patch.plainPassword)
		const preserve = options?.preserveSessionToken
		if (preserve) {
			deleteOtherSessionsForAdmin(id, preserve)
		} else {
			deleteSessionsForAdmin(id)
		}
		try {
			useDb()
				.prepare(
					`UPDATE admins SET email = ?, password_hash = ?, updated_at = ? WHERE id = ?`,
				)
				.run(email, hash, now, id)
		} catch (e: unknown) {
			if (
				e &&
				typeof e === 'object' &&
				'code' in e &&
				(e as { code?: string }).code === 'SQLITE_CONSTRAINT_UNIQUE'
			) {
				throw createError({
					statusCode: 409,
					statusMessage: 'Администратор с таким email уже существует',
				})
			}
			throw e
		}
	} else if (patch.email !== undefined && email !== row.email) {
		try {
			useDb()
				.prepare(`UPDATE admins SET email = ?, updated_at = ? WHERE id = ?`)
				.run(email, now, id)
		} catch (e: unknown) {
			if (
				e &&
				typeof e === 'object' &&
				'code' in e &&
				(e as { code?: string }).code === 'SQLITE_CONSTRAINT_UNIQUE'
			) {
				throw createError({
					statusCode: 409,
					statusMessage: 'Администратор с таким email уже существует',
				})
			}
			throw e
		}
	}
	const next = getAdminById(id)
	if (!next) {
		throw createError({ statusCode: 500, statusMessage: 'Ошибка обновления' })
	}
	return next
}

export function deleteSessionsForAdmin(adminId: number): void {
	useDb().prepare('DELETE FROM admin_sessions WHERE admin_id = ?').run(adminId)
}

export function deleteOtherSessionsForAdmin(
	adminId: number,
	exceptToken: string,
): void {
	useDb()
		.prepare('DELETE FROM admin_sessions WHERE admin_id = ? AND token != ?')
		.run(adminId, exceptToken)
}

export function deleteAdmin(id: number): void {
	const c = countAdmins()
	if (c <= 1) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Нельзя удалить последнего администратора',
		})
	}
	deleteSessionsForAdmin(id)
	const res = useDb().prepare('DELETE FROM admins WHERE id = ?').run(id)
	if (res.changes === 0) {
		throw createError({ statusCode: 404, statusMessage: 'Не найдено' })
	}
}
