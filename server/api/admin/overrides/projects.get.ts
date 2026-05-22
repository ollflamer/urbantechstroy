import type { Project } from '~/data/projects'
import { projects as staticProjects } from '~/data/projects'
import { assertAdmin } from '../../../utils/admin-session'
import { getOverridesJson } from '../../../utils/db'
import { splitOverridesPayload } from '../../../utils/content-store'
import {
	getMergedProjects,
	getProjectDraftsMap,
} from '../../../utils/merged-content'

export default defineEventHandler(event => {
	assertAdmin(event)
	const raw = getOverridesJson('projects')
	const { meta } = splitOverridesPayload<Project>(raw)
	const defaults = Object.fromEntries(
		staticProjects.map(p => [p.slug, { ...p }]),
	) as Record<string, Project>

	return {
		merged: getMergedProjects(),
		overrides: raw,
		staticSlugs: staticProjects.map(p => p.slug),
		hiddenSlugs: meta.hiddenSlugs,
		deletedSlugs: meta.deletedSlugs,
		extras: meta.extras,
		drafts: getProjectDraftsMap(),
		defaults,
	}
})
