import { assertAdmin } from '../../../utils/admin-session'
import { getOverridesJson, saveOverridesJson } from '../../../utils/db'
import {
	mergeOverrides,
	normalizePersistedProjects,
} from '../../../utils/merged-content'
import { pruneUnusedManagedUploads } from '../../../utils/upload-refs'

export default defineEventHandler(async event => {
	assertAdmin(event)
	const body = await readBody<Record<string, unknown>>(event)
	if (!body || typeof body !== 'object') {
		throw createError({
			statusCode: 400,
			statusMessage: 'Неверное тело запроса',
		})
	}
	const current = getOverridesJson('projects')
	const next = mergeOverrides(current, body)
	const normalized = normalizePersistedProjects(next)
	saveOverridesJson('projects', normalized)
	pruneUnusedManagedUploads()
	return { ok: true, overrides: normalized }
})
