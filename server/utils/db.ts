import Database from 'better-sqlite3'
import { mkdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { hashPassword } from './auth-password'
import {
	isValidAdminEmail,
	normalizeAdminEmail,
	trimEnvValue,
} from './admin-email'

let _db: Database.Database | null = null

function initSchema(db: Database.Database) {
	db.exec(`
		CREATE TABLE IF NOT EXISTS content_overrides (
			kind TEXT PRIMARY KEY,
			payload TEXT NOT NULL,
			updated_at INTEGER NOT NULL
		);
		CREATE TABLE IF NOT EXISTS leads (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			source TEXT NOT NULL,
			name TEXT,
			phone TEXT NOT NULL,
			email TEXT,
			message TEXT,
			metadata TEXT,
			created_at INTEGER NOT NULL
		);
		CREATE TABLE IF NOT EXISTS admin_sessions (
			token TEXT PRIMARY KEY,
			expires_at INTEGER NOT NULL
		);
		CREATE TABLE IF NOT EXISTS admins (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			email TEXT NOT NULL UNIQUE COLLATE NOCASE,
			password_hash TEXT NOT NULL,
			created_at INTEGER NOT NULL,
			updated_at INTEGER NOT NULL
		);
	`)
	const sessCols = db.prepare(`PRAGMA table_info(admin_sessions)`).all() as {
		name: string
	}[]
	if (!sessCols.some(c => c.name === 'admin_id')) {
		db.exec('ALTER TABLE admin_sessions ADD COLUMN admin_id INTEGER')
	}
	/* Сессии без привязки к учётной записи после обновления схемы сбрасываются */
	db.prepare('DELETE FROM admin_sessions WHERE admin_id IS NULL').run()
}

/**
 * Создаёт или подтягивает учётную запись из NUXT_ADMIN_*:
 * - пустая БД → INSERT;
 * - есть админ с таким email → обновить пароль из .env (удобно при смене пароля);
 * - в БД ровно один админ, email в .env другой → обновить email+пароль (первый запуск
 *   без email, потом добавили NUXT_ADMIN_EMAIL).
 */
function applyEnvBootstrapAdmin(db: Database.Database) {
	let pw = ''
	let emailFromConfig = ''
	try {
		const rc = useRuntimeConfig()
		pw = trimEnvValue(
			String(rc.adminPassword || '') || process.env.NUXT_ADMIN_PASSWORD,
		)
		emailFromConfig = trimEnvValue(
			String(rc.adminBootstrapEmail || '') || process.env.NUXT_ADMIN_EMAIL,
		)
	} catch {
		pw = trimEnvValue(process.env.NUXT_ADMIN_PASSWORD)
		emailFromConfig = trimEnvValue(process.env.NUXT_ADMIN_EMAIL)
	}
	if (!pw) return

	const fallbackEmail = 'admin@urbantechstroy.local'
	const email = normalizeAdminEmail(emailFromConfig || fallbackEmail)
	if (!isValidAdminEmail(email)) {
		console.warn(
			'[UrbanTechStroy] NUXT_ADMIN_EMAIL некорректен — bootstrap-админ не применён.',
		)
		return
	}

	const hash = hashPassword(pw)
	const now = Date.now()
	const count = (
		db.prepare('SELECT COUNT(*) as c FROM admins').get() as { c: number }
	).c

	if (count === 0) {
		db.prepare(
			`INSERT INTO admins (email, password_hash, created_at, updated_at)
			 VALUES (?, ?, ?, ?)`,
		).run(email, hash, now, now)
		return
	}

	const match = db
		.prepare(`SELECT id FROM admins WHERE email = ? COLLATE NOCASE LIMIT 1`)
		.get(email) as { id: number } | undefined

	if (match) {
		db.prepare(
			`UPDATE admins SET password_hash = ?, updated_at = ? WHERE id = ?`,
		).run(hash, now, match.id)
		db.prepare('DELETE FROM admin_sessions WHERE admin_id = ?').run(match.id)
		return
	}

	if (count === 1) {
		const only = db
			.prepare(`SELECT id FROM admins ORDER BY id ASC LIMIT 1`)
			.get() as { id: number }
		db.prepare(
			`UPDATE admins SET email = ?, password_hash = ?, updated_at = ? WHERE id = ?`,
		).run(email, hash, now, only.id)
		db.prepare('DELETE FROM admin_sessions WHERE admin_id = ?').run(only.id)
	}
}

export function useDb(): Database.Database {
	if (_db) return _db

	const config = useRuntimeConfig()
	const path =
		(config.databasePath as string) ||
		process.env.NUXT_DATABASE_PATH ||
		'.data/site.db'

	mkdirSync(dirname(path), { recursive: true })
	_db = new Database(path)
	_db.pragma('journal_mode = WAL')
	initSchema(_db)
	applyEnvBootstrapAdmin(_db)
	return _db
}

export function getOverridesJson(
	kind: 'services' | 'projects',
): Record<string, unknown> {
	const row = useDb()
		.prepare('SELECT payload FROM content_overrides WHERE kind = ?')
		.get(kind) as { payload: string } | undefined
	if (!row?.payload) return {}
	try {
		const parsed = JSON.parse(row.payload) as unknown
		return typeof parsed === 'object' &&
			parsed !== null &&
			!Array.isArray(parsed)
			? (parsed as Record<string, unknown>)
			: {}
	} catch {
		return {}
	}
}

export function saveOverridesJson(
	kind: 'services' | 'projects',
	payload: Record<string, unknown>,
) {
	const now = Date.now()
	useDb()
		.prepare(
			`INSERT INTO content_overrides (kind, payload, updated_at)
			 VALUES (@kind, @payload, @updated_at)
			 ON CONFLICT(kind) DO UPDATE SET
			 payload = excluded.payload,
			 updated_at = excluded.updated_at`,
		)
		.run({
			kind,
			payload: JSON.stringify(payload),
			updated_at: now,
		})
}
