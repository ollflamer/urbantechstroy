import type { Service } from '~/data/services'

export async function useSiteServicesList() {
	return await useAsyncData('site-content-services', async () => {
		try {
			return await $fetch<Service[]>('/api/content/services')
		} catch {
			const { services } = await import('~/data/services')
			return services
		}
	})
}
