import { getMergedServices } from '../../utils/merged-content'

export default defineEventHandler(() => {
	return getMergedServices()
})
