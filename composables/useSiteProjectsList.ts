import type { Project } from '~/data/projects'

export async function useSiteProjectsList() {
	return await useAsyncData('site-content-projects', async () => {
		try {
			return await $fetch<Project[]>('/api/content/projects')
		} catch {
			const { projects } = await import('~/data/projects')
			return projects
		}
	})
}
