/** Зарезервированный ключ в JSON переопределений (не slug). */
export const CONTENT_META_KEY = '_meta' as const

export type ContentMeta<T extends { slug: string }> = {
	hiddenSlugs: string[]
	/** Slug карточек из кода, полностью убранных с сайта (можно вернуть в админке). */
	deletedSlugs: string[]
	extras: T[]
}

export function splitOverridesPayload<T extends { slug: string }>(
	raw: Record<string, unknown>,
): { meta: ContentMeta<T>; patches: Record<string, unknown> } {
	const patches = { ...raw }
	const metaRaw = patches[CONTENT_META_KEY]
	delete patches[CONTENT_META_KEY]

	let hiddenSlugs: string[] = []
	let deletedSlugs: string[] = []
	let extras: T[] = []

	if (metaRaw && typeof metaRaw === 'object' && !Array.isArray(metaRaw)) {
		const m = metaRaw as Record<string, unknown>
		if (Array.isArray(m.hiddenSlugs)) {
			hiddenSlugs = m.hiddenSlugs.filter(
				(x): x is string => typeof x === 'string',
			)
		}
		if (Array.isArray(m.deletedSlugs)) {
			deletedSlugs = m.deletedSlugs.filter(
				(x): x is string => typeof x === 'string',
			)
		}
		if (Array.isArray(m.extras)) {
			extras = m.extras.filter(
				(x): x is T =>
					Boolean(x) &&
					typeof x === 'object' &&
					!Array.isArray(x) &&
					typeof (x as { slug?: unknown }).slug === 'string',
			) as T[]
		}
	}

	return { meta: { hiddenSlugs, deletedSlugs, extras }, patches }
}

export function applyObjectPatch<T>(item: T, patch: unknown): T {
	if (!patch || typeof patch !== 'object' || Array.isArray(patch)) {
		return item
	}
	return { ...item, ...(patch as Partial<T>) } as T
}
