import {
	createReadStream,
	existsSync,
	mkdirSync,
	readdirSync,
	unlinkSync,
} from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { isAbsolute, join } from 'node:path'

const MAX_BYTES = 5 * 1024 * 1024

const MIME_TO_EXT: Record<string, string> = {
	'image/jpeg': 'jpg',
	'image/jpg': 'jpg',
	'image/png': 'png',
	'image/webp': 'webp',
	'image/gif': 'gif',
}

/** Имя файла: UUID + расширение (только для публичной раздачи). */
const STORED_NAME_RE =
	/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.(jpg|jpeg|png|webp|gif)$/i

export function getUploadRoot(): string {
	const config = useRuntimeConfig()
	const dir = (config.uploadDir as string) || '.data/uploads'
	return isAbsolute(dir) ? dir : join(process.cwd(), dir)
}

export function ensureUploadDir() {
	const root = getUploadRoot()
	mkdirSync(root, { recursive: true })
	return root
}

export function isSafeStoredFilename(name: string): boolean {
	return STORED_NAME_RE.test(name)
}

export function extForImageMime(mime: string | undefined): string | null {
	if (!mime) return null
	const normalized = mime.split(';')[0]?.trim().toLowerCase() ?? ''
	return MIME_TO_EXT[normalized] ?? null
}

export function assertImageSize(buf: Buffer) {
	if (buf.length > MAX_BYTES) {
		throw createError({
			statusCode: 413,
			statusMessage: 'Файл больше 5 МБ',
		})
	}
}

export async function saveUploadedImage(
	buf: Buffer,
	mime: string,
): Promise<string> {
	assertImageSize(buf)
	const ext = extForImageMime(mime)
	if (!ext) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Допустимы только JPEG, PNG, WebP, GIF',
		})
	}
	const { randomUUID } = await import('node:crypto')
	const name = `${randomUUID()}.${ext}`
	const root = ensureUploadDir()
	const full = join(root, name)
	await writeFile(full, buf)
	return name
}

export function resolveStoredImagePath(name: string): string | null {
	if (!isSafeStoredFilename(name)) return null
	const full = join(getUploadRoot(), name)
	if (!existsSync(full)) return null
	return full
}

export function mimeForStoredFile(name: string): string {
	const ext = name.split('.').pop()?.toLowerCase()
	switch (ext) {
		case 'jpg':
		case 'jpeg':
			return 'image/jpeg'
		case 'png':
			return 'image/png'
		case 'webp':
			return 'image/webp'
		case 'gif':
			return 'image/gif'
		default:
			return 'application/octet-stream'
	}
}

export function createImageReadStream(path: string) {
	return createReadStream(path)
}

/** Имена файлов в каталоге загрузок, подходящие под безопасную раздачу. */
export function listSafeStoredFilenamesInUploadDir(): string[] {
	const root = getUploadRoot()
	if (!existsSync(root)) return []
	return readdirSync(root).filter(name => isSafeStoredFilename(name))
}

export function tryDeleteStoredUpload(name: string): boolean {
	if (!isSafeStoredFilename(name)) return false
	const full = resolveStoredImagePath(name)
	if (!full) return false
	try {
		unlinkSync(full)
		return true
	} catch {
		return false
	}
}

/** Удаляет файлы из каталога загрузок, имена которых нет в `referenced`. */
export function deleteUploadFilesNotIn(referenced: Set<string>): string[] {
	const deleted: string[] = []
	for (const name of listSafeStoredFilenamesInUploadDir()) {
		if (!referenced.has(name) && tryDeleteStoredUpload(name)) {
			deleted.push(name)
		}
	}
	return deleted
}
