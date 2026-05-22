import type { Service } from '~/data/services'
import { services as staticServices } from '~/data/services'
import { assertAdmin } from '../../../utils/admin-session'
import { getOverridesJson } from '../../../utils/db'
import { splitOverridesPayload } from '../../../utils/content-store'
import {
	getMergedServices,
	getServiceDraftsMap,
} from '../../../utils/merged-content'

export default defineEventHandler(event => {
	assertAdmin(event)
	const raw = getOverridesJson('services')
	const { meta } = splitOverridesPayload<Service>(raw)
	const defaults = Object.fromEntries(
		staticServices.map(s => [s.slug, { ...s }]),
	) as Record<string, Service>

	return {
		merged: getMergedServices(),
		overrides: raw,
		staticSlugs: staticServices.map(s => s.slug),
		hiddenSlugs: meta.hiddenSlugs,
		deletedSlugs: meta.deletedSlugs,
		extras: meta.extras,
		drafts: getServiceDraftsMap(),
		defaults,
	}
})
