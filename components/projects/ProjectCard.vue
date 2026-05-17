<template>
	<NuxtLink
		:to="`/projects/${project.slug}`"
		class="card-interactive group relative block aspect-square overflow-hidden rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
	>
		<img
			:src="project.image"
			:alt="project.title"
			class="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"
		/>
		<div class="absolute inset-x-0 bottom-0 p-4 sm:p-6">
			<p class="text-xs leading-5 text-[#51A2FF] sm:text-sm">
				{{ project.categoryLabel }}
			</p>
			<h3
				class="mt-1.5 text-base font-bold leading-snug text-white sm:mt-2 sm:text-lg lg:text-xl lg:leading-7"
			>
				{{ project.title }}
			</h3>
			<p class="mt-2 text-[14px] leading-5 text-white/80">
				{{ project.shortDescription }}
			</p>
		</div>
	</NuxtLink>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
	project: Project
}>()
</script>
