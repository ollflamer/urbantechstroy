import { getOverridesJson } from './db'
import { deleteUploadFilesNotIn, isSafeStoredFilename } from './uploads'

/**
 * Ищет в строке пути вида /api/uploads/<uuid>.<ext> и добавляет безопасные имена файлов.
 */
export function collectManagedUploadFilenamesFromString(
	str: string,
	out: Set<string>,
) {
	const re = /\/api\/uploads\/([^?\s"'<>]+)/gi
	let m: RegExpExecArray | null
	while ((m = re.exec(str)) !== null) {
		const raw = m[1]?.split('/')[0]
		if (!raw) continue
		let name: string
		try {
			name = decodeURIComponent(raw)
		} catch {
			name = raw
		}
		if (isSafeStoredFilename(name)) out.add(name)
	}
}

export function collectManagedUploadFilenamesFromJson(
	value: unknown,
	out: Set<string>,
): void {
	if (value === null || value === undefined) return
	if (typeof value === 'string') {
		collectManagedUploadFilenamesFromString(value, out)
		return
	}
	if (Array.isArray(value)) {
		for (const item of value) collectManagedUploadFilenamesFromJson(item, out)
		return
	}
	if (typeof value === 'object') {
		for (const v of Object.values(value as Record<string, unknown>)) {
			collectManagedUploadFilenamesFromJson(v, out)
		}
	}
}

/** Все загрузки, на которые есть ссылки в сохранённых overrides (услуги + проекты). */
export function getReferencedManagedUploadFilenames(): Set<string> {
	const out = new Set<string>()
	collectManagedUploadFilenamesFromJson(getOverridesJson('services'), out)
	collectManagedUploadFilenamesFromJson(getOverridesJson('projects'), out)
	return out
}

/**
 * Удаляет файлы из каталога загрузок, которых нет в overrides.
 * Вызывать после успешного сохранения контента.
 */
export function pruneUnusedManagedUploads(): string[] {
	const refs = getReferencedManagedUploadFilenames()
	return deleteUploadFilesNotIn(refs)
}
