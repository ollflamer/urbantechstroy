<template>
	<div
		class="relative h-full min-h-[272px] w-full flex-1 overflow-hidden rounded-[15px] bg-[#E5E7EB] lg:min-h-0"
	>
		<iframe
			:src="widgetUrl"
			class="absolute inset-0 h-full w-full border-0"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			:title="`Карта: ${officeAddress.display}`"
		/>
		<a
			:href="yandexMapsRouteUrl"
			target="_blank"
			rel="noopener noreferrer"
			class="absolute bottom-3 right-3 z-10 rounded-[10px] bg-white px-3 py-2 text-xs font-medium text-[#155DFC] shadow-md transition hover:bg-[#EFF6FF] sm:bottom-4 sm:right-4 sm:px-4 sm:text-sm"
		>
			Открыть в Яндекс Картах
		</a>
	</div>
</template>

<script setup lang="ts">
import { officeAddress, yandexMapsRouteUrl } from '~/data/contacts'

const widgetUrl = computed(() => {
	const params = new URLSearchParams({
		ll: `${officeAddress.lon},${officeAddress.lat}`,
		z: String(officeAddress.zoom),
		pt: `${officeAddress.lon},${officeAddress.lat},pm2rdm`,
		text: officeAddress.mapQuery,
		l: 'map',
		lang: 'ru_RU',
	})

	return `https://yandex.ru/map-widget/v1/?${params.toString()}`
})
</script>
