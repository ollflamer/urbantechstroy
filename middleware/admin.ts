export default defineNuxtRouteMiddleware(async to => {
	/* По имени маршрута — надёжнее, чем path (baseURL, слэши). */
	if (to.name === 'admin-login' || to.name === 'admin-register') return

	if (!to.path.startsWith('/admin')) return
	if (to.path === '/admin/login' || to.path.startsWith('/admin/login')) return
	if (to.path === '/admin/register' || to.path.startsWith('/admin/register'))
		return

	const headers = import.meta.server ? useRequestHeaders(['cookie']) : undefined

	try {
		await $fetch('/api/admin/me', {
			credentials: 'include',
			headers: headers as Record<string, string>,
		})
	} catch {
		return navigateTo('/admin/login')
	}
})
