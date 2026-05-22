import { assertAdmin } from '../../../utils/admin-session'
import { getOverridesJson, saveOverridesJson } from '../../../utils/db'
import {
	mergeOverrides,
	normalizePersistedServices,
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
	const current = getOverridesJson('services')
	const next = mergeOverrides(current, body)
	const normalized = normalizePersistedServices(next)
	saveOverridesJson('services', normalized)
	pruneUnusedManagedUploads()
	return { ok: true, overrides: normalized }
})
