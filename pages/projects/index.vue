<template>
	<div>
		<SiteHeader />

		<section
			class="bg-gradient-to-br from-[#F9FAFB] to-white pb-10 pt-[calc(81px+3rem)] sm:pb-12 sm:pt-[calc(81px+4rem)] lg:pb-16 lg:pt-[calc(81px+5rem)]"
		>
			<div class="container-site text-center">
				<Reveal variant="blur-up" immediate :delay="0.1">
					<h1 class="heading-page font-medium">Наши проекты</h1>
					<p class="text-lead mx-auto mt-3 max-w-3xl sm:mt-4">
						Портфолио выполненных работ — жилые комплексы, коммерческие объекты
						и промышленное строительство
					</p>
				</Reveal>

				<Reveal variant="fade-up" immediate :delay="0.25">
					<div
						class="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-10 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-12"
					>
						<button
							v-for="cat in projectCategories"
							:key="cat.id"
							type="button"
							:class="filterButtonClass(cat.id)"
							@click="activeCategory = cat.id"
						>
							{{ cat.label }}
						</button>
					</div>
				</Reveal>
			</div>
		</section>

		<section class="bg-white pb-16 sm:pb-20 lg:pb-24">
			<div class="container-site">
				<div
					class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3"
				>
					<Reveal
						v-for="(project, index) in filteredProjects"
						:key="`${activeCategory}-${project.slug}`"
						variant="scale"
						:delay="staggerDelay(index, 0.07)"
						:once="false"
					>
						<ProjectCard :project="project" />
					</Reveal>
				</div>
			</div>
		</section>

		<HomeContacts />
		<SiteFooter />
	</div>
</template>

<script setup lang="ts">
import {
	projectCategories,
	getProjectsByCategory,
	type ProjectCategory,
} from '~/data/projects'

const activeCategory = ref<ProjectCategory>('all')

const filteredProjects = computed(() =>
	getProjectsByCategory(activeCategory.value),
)

const filterButtonClass = (id: ProjectCategory) => {
	const base =
		'shrink-0 rounded-[14px] px-4 py-2.5 text-sm font-medium leading-6 transition sm:h-[50px] sm:px-5 sm:text-[16px]'
	if (activeCategory.value === id) {
		return `${base} bg-[#155DFC] text-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]`
	}
	return `${base} border border-[#E5E7EB] bg-white text-[#364153] hover:border-[#155DFC] hover:text-[#155DFC]`
}

useSeoMeta({
	title: 'Проекты — URBANTECHSTROY',
	description:
		'Портфолио реализованных проектов URBANTECHSTROY: жилые комплексы, коммерческие объекты, промышленное строительство и ремонт.',
})
</script>
