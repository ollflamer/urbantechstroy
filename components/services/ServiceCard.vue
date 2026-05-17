<template>
	<NuxtLink
		:to="`/services/${service.slug}`"
		class="card-interactive block overflow-hidden rounded-[16px] border border-[#F3F4F6] bg-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
	>
		<div class="relative h-[200px] w-full sm:h-[224px]">
			<img
				:src="service.image"
				alt=""
				class="absolute inset-0 h-full w-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
			/>
			<div class="absolute bottom-4 left-4 right-4 flex items-start gap-2">
				<span
					class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#51A2FF] text-[10px] text-white"
				>
					✓
				</span>
				<h3
					class="text-base font-bold leading-snug text-white sm:text-[18px] sm:leading-[22.5px]"
				>
					{{ service.title }}
				</h3>
			</div>
		</div>

		<div class="p-4 sm:p-6">
			<p
				class="text-sm leading-relaxed text-[#4A5565] sm:text-base sm:leading-[26px]"
			>
				{{ service.shortDescription }}
			</p>
			<span
				class="mt-4 inline-flex items-center gap-2 text-[16px] font-medium text-[#155DFC]"
			>
				Узнать больше
				<span aria-hidden="true">→</span>
			</span>
		</div>
	</NuxtLink>
</template>

<script setup lang="ts">
import type { Service } from '~/data/services'

defineProps<{
	service: Service
}>()
</script>
