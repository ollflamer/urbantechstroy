import type { Service } from '~/data/services'
import type { Project } from '~/data/projects'
import { services as staticServices } from '~/data/services'
import { normalizeProject, projects as staticProjects } from '~/data/projects'
import { getOverridesJson } from './db'
import {
	CONTENT_META_KEY,
	applyObjectPatch,
	splitOverridesPayload,
} from './content-store'

function filterServiceExtras(
	extras: Service[],
	hidden: Set<string>,
	deleted: Set<string>,
): Service[] {
	return extras.filter(e => {
		if (deleted.has(e.slug)) return false
		const st = staticServices.find(s => s.slug === e.slug)
		if (!st) return true
		return hidden.has(st.slug)
	})
}

function filterProjectExtras(
	extras: Project[],
	hidden: Set<string>,
	deleted: Set<string>,
): Project[] {
	return extras.filter(e => {
		if (deleted.has(e.slug)) return false
		const st = staticProjects.find(s => s.slug === e.slug)
		if (!st) return true
		return hidden.has(st.slug)
	})
}

export function getMergedServices(): Service[] {
	const raw = getOverridesJson('services')
	const { meta, patches } = splitOverridesPayload<Service>(raw)
	const hidden = new Set(meta.hiddenSlugs)
	const deleted = new Set(meta.deletedSlugs)
	const extrasSafe = filterServiceExtras(meta.extras, hidden, deleted)

	const fromStatic = staticServices
		.filter(s => !hidden.has(s.slug) && !deleted.has(s.slug))
		.map(s => applyObjectPatch(s, patches[s.slug]))

	const used = new Set(fromStatic.map(s => s.slug))
	const extras = extrasSafe.filter(e => e.slug && !used.has(e.slug))

	return [...fromStatic, ...extras]
}

export function getMergedProjects(): Project[] {
	const raw = getOverridesJson('projects')
	const { meta, patches } = splitOverridesPayload<Project>(raw)
	const hidden = new Set(meta.hiddenSlugs)
	const deleted = new Set(meta.deletedSlugs)
	const extrasSafe = filterProjectExtras(meta.extras, hidden, deleted)

	const fromStatic = staticProjects
		.filter(p => !hidden.has(p.slug) && !deleted.has(p.slug))
		.map(p => applyObjectPatch(p, patches[p.slug]))

	const used = new Set(fromStatic.map(p => p.slug))
	const extras = extrasSafe.filter(e => e.slug && !used.has(e.slug))

	return [...fromStatic, ...extras].map(normalizeProject)
}

export function getServiceDraftsMap(): Record<string, Service> {
	const raw = getOverridesJson('services')
	const { meta, patches } = splitOverridesPayload<Service>(raw)
	const hidden = new Set(meta.hiddenSlugs)
	const deleted = new Set(meta.deletedSlugs)
	const map: Record<string, Service> = {}

	for (const s of staticServices) {
		if (deleted.has(s.slug)) continue
		map[s.slug] = applyObjectPatch(s, patches[s.slug])
	}
	for (const e of meta.extras) {
		if (deleted.has(e.slug)) continue
		const st = staticServices.find(s => s.slug === e.slug)
		if (!st || hidden.has(st.slug)) {
			map[e.slug] = { ...e }
		}
	}
	return map
}

export function getProjectDraftsMap(): Record<string, Project> {
	const raw = getOverridesJson('projects')
	const { meta, patches } = splitOverridesPayload<Project>(raw)
	const hidden = new Set(meta.hiddenSlugs)
	const deleted = new Set(meta.deletedSlugs)
	const map: Record<string, Project> = {}

	for (const p of staticProjects) {
		if (deleted.has(p.slug)) continue
		map[p.slug] = applyObjectPatch(p, patches[p.slug])
	}
	for (const e of meta.extras) {
		if (deleted.has(e.slug)) continue
		const st = staticProjects.find(s => s.slug === e.slug)
		if (!st || hidden.has(st.slug)) {
			map[e.slug] = { ...e } as Project
		}
	}
	for (const slug of Object.keys(map)) {
		map[slug] = normalizeProject(map[slug])
	}
	return map
}

export function mergeOverrides(
	current: Record<string, unknown>,
	patch: Record<string, unknown>,
): Record<string, unknown> {
	const next = { ...current }
	for (const [slug, fields] of Object.entries(patch)) {
		if (slug === CONTENT_META_KEY) {
			if (fields === null || fields === undefined) {
				delete next[CONTENT_META_KEY]
				continue
			}
			if (typeof fields === 'object' && !Array.isArray(fields)) {
				next[CONTENT_META_KEY] = structuredClone(
					fields as Record<string, unknown>,
				)
			}
			continue
		}
		if (fields === null || fields === undefined) {
			delete next[slug]
			continue
		}
		if (typeof fields !== 'object' || Array.isArray(fields)) continue
		const prev =
			next[slug] && typeof next[slug] === 'object' && !Array.isArray(next[slug])
				? (next[slug] as Record<string, unknown>)
				: {}
		next[slug] = { ...prev, ...(fields as Record<string, unknown>) }
	}
	return next
}

function dedupeHiddenSlugs(slugs: string[]): string[] {
	return [...new Set(slugs)]
}

function dedupeExtrasBySlug<T extends { slug: string }>(extras: T[]): T[] {
	const seen = new Set<string>()
	const out: T[] = []
	for (const e of extras) {
		if (!e.slug || seen.has(e.slug)) continue
		seen.add(e.slug)
		out.push(e)
	}
	return out
}

/** Убирает лишние ключи патчей (не статические slug) и нормализует meta. */
export function normalizePersistedServices(
	raw: Record<string, unknown>,
): Record<string, unknown> {
	const { meta, patches } = splitOverridesPayload<Service>(raw)
	const allow = new Set(staticServices.map(s => s.slug))
	const deleted = new Set(meta.deletedSlugs)
	const hiddenClean = dedupeHiddenSlugs(
		meta.hiddenSlugs.filter(s => !deleted.has(s)),
	)
	const extras = dedupeExtrasBySlug(
		meta.extras.filter(e => !deleted.has(e.slug)),
	)
	const out: Record<string, unknown> = {
		[CONTENT_META_KEY]: {
			hiddenSlugs: hiddenClean,
			deletedSlugs: dedupeHiddenSlugs(meta.deletedSlugs),
			extras: extras.map(e => ({ ...e })),
		},
	}
	for (const slug of allow) {
		if (deleted.has(slug)) continue
		const v = patches[slug]
		if (
			v !== null &&
			v !== undefined &&
			typeof v === 'object' &&
			!Array.isArray(v)
		) {
			out[slug] = v
		}
	}
	return out
}

export function normalizePersistedProjects(
	raw: Record<string, unknown>,
): Record<string, unknown> {
	const { meta, patches } = splitOverridesPayload<Project>(raw)
	const allow = new Set(staticProjects.map(p => p.slug))
	const deleted = new Set(meta.deletedSlugs)
	const hiddenClean = dedupeHiddenSlugs(
		meta.hiddenSlugs.filter(s => !deleted.has(s)),
	)
	const extras = dedupeExtrasBySlug(
		meta.extras.filter(e => !deleted.has(e.slug)),
	)
	const out: Record<string, unknown> = {
		[CONTENT_META_KEY]: {
			hiddenSlugs: hiddenClean,
			deletedSlugs: dedupeHiddenSlugs(meta.deletedSlugs),
			extras: extras.map(e => ({ ...e })),
		},
	}
	for (const slug of allow) {
		if (deleted.has(slug)) continue
		const v = patches[slug]
		if (
			v !== null &&
			v !== undefined &&
			typeof v === 'object' &&
			!Array.isArray(v)
		) {
			out[slug] = v
		}
	}
	return out
}
