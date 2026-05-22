import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto'

const PREFIX = 'v1'

/** Хеш пароля для хранения в SQLite (scrypt). */
export function hashPassword(password: string): string {
	const salt = randomBytes(16)
	const key = scryptSync(password, salt, 64)
	return `${PREFIX}$${salt.toString('hex')}$${key.toString('hex')}`
}

export function verifyPassword(password: string, stored: string): boolean {
	try {
		const [ver, saltHex, hashHex] = stored.split('$')
		if (ver !== PREFIX || !saltHex || !hashHex) return false
		const salt = Buffer.from(saltHex, 'hex')
		const expected = Buffer.from(hashHex, 'hex')
		const key = scryptSync(password, salt, expected.length)
		return key.length === expected.length && timingSafeEqual(key, expected)
	} catch {
		return false
	}
}
