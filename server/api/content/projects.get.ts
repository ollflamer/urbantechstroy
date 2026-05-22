import { getMergedProjects } from '../../utils/merged-content'

export default defineEventHandler(() => {
	return getMergedProjects()
})
