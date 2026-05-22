const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Убирает BOM/пробелы по краям — типично для значений из .env (Windows). */
export function trimEnvValue(raw: string | undefined | null): string {
	if (raw == null) return ''
	return String(raw)
		.replace(/^\uFEFF/, '')
		.replace(/\r\n/g, '\n')
		.trim()
}

export function normalizeAdminEmail(raw: string): string {
	return raw.trim().toLowerCase()
}

export function isValidAdminEmail(email: string): boolean {
	return EMAIL_RE.test(email)
}
