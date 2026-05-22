<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

const pub = config.public as {
	siteName: string
	siteUrl: string
	ogDescription: string
}

const defaultOgDescription =
	'URBANTECHSTROY — строительная компания. Жилые и коммерческие объекты, капитальный ремонт, инженерные и отделочные работы, благоустройство. Оставьте заявку — рассчитаем сроки и стоимость проекта.'

const description = (String(pub.ogDescription || '').trim() ||
	defaultOgDescription) as string

const siteOrigin = computed(() => {
	const fromEnv = String(pub.siteUrl || '')
		.trim()
		.replace(/\/$/, '')
	if (fromEnv) return fromEnv
	if (import.meta.server) {
		try {
			return useRequestURL().origin
		} catch {
			return ''
		}
	}
	if (import.meta.client) return window.location.origin
	return ''
})

const ogImage = computed(() => {
	const o = siteOrigin.value
	if (!o) return undefined
	return `${o}/favicon.png`
})

const ogPageUrl = computed(() => {
	const o = siteOrigin.value
	if (!o) return undefined
	return `${o}${route.path}`
})

useSeoMeta({
	description,
	ogSiteName: pub.siteName,
	ogType: 'website',
	ogLocale: 'ru_RU',
	ogTitle: pub.siteName,
	ogDescription: description,
	ogImage: () => ogImage.value,
	ogImageAlt: pub.siteName,
	ogUrl: () => ogPageUrl.value,
	twitterCard: 'summary',
	twitterTitle: pub.siteName,
	twitterDescription: description,
	twitterImage: () => ogImage.value,
})

useHead({
	htmlAttrs: { lang: 'ru' },
	link: computed(() => {
		const o = siteOrigin.value
		if (!o) return []
		return [{ rel: 'canonical', href: `${o}${route.path}` }]
	}),
})
</script>
