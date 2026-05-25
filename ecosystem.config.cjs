/**
 * PM2: подхватывает переменные из `.env` в корне проекта (на сервере).
 * Без этого Nuxt в production не видит NUXT_ADMIN_* — bootstrap-админ не создаётся.
 *
 * Запуск:
 *   cd /var/www/urbantechstroy
 *   pm2 delete СТАРОЕ_ИМЯ 2>/dev/null   # например blog, если раньше так называли
 *   pm2 start ecosystem.config.cjs
 *   pm2 save
 */
const { readFileSync, existsSync } = require('node:fs')
const { resolve } = require('node:path')

function loadEnvFile(filePath) {
	const env = {}
	if (!existsSync(filePath)) return env
	let raw = readFileSync(filePath, 'utf8')
	if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1)
	for (const line of raw.split(/\r?\n/)) {
		const s = line.trim()
		if (!s || s.startsWith('#')) continue
		const eq = s.indexOf('=')
		if (eq <= 0) continue
		const key = s.slice(0, eq).trim()
		let val = s.slice(eq + 1).trim()
		if (
			(val.startsWith('"') && val.endsWith('"')) ||
			(val.startsWith("'") && val.endsWith("'"))
		) {
			val = val.slice(1, -1)
		}
		env[key] = val
	}
	return env
}

const root = __dirname
const envFromFile = loadEnvFile(resolve(root, '.env'))

module.exports = {
	apps: [
		{
			name: 'urbantechstroy',
			cwd: root,
			script: '.output/server/index.mjs',
			interpreter: 'node',
			env: {
				NODE_ENV: 'production',
				...envFromFile,
			},
		},
	],
}
