<template>
	<div v-if="project">
		<SiteHeader />

		<section
			class="relative flex min-h-[300px] w-full items-end overflow-hidden sm:min-h-[380px] lg:h-[480px] lg:items-stretch"
		>
			<img
				:src="project.heroImage ?? project.image"
				:alt="project.title"
				class="absolute inset-0 h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-black/50" />

			<div
				class="container-site relative z-10 w-full pb-8 pt-[calc(81px+3rem)] sm:pb-10 sm:pt-[calc(81px+4rem)] lg:pb-0 lg:pt-[calc(81px+5rem)]"
			>
				<NuxtLink
					to="/projects"
					class="inline-flex items-center gap-2 text-sm leading-6 text-white/90 hover:text-white sm:text-base"
				>
					<span aria-hidden="true">←</span>
					Вернуться к проектам
				</NuxtLink>

				<p class="mt-4 text-xs leading-5 text-[#51A2FF] sm:mt-6 sm:text-sm">
					{{ project.categoryLabel }}
				</p>
				<h1
					class="mt-1 max-w-[900px] text-2xl font-bold leading-tight text-white sm:mt-2 sm:text-4xl sm:leading-[44px] lg:text-[48px] lg:leading-[58px]"
				>
					{{ project.title }}
				</h1>
				<p
					class="mt-3 max-w-[720px] text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg"
				>
					{{ project.shortDescription }}
				</p>
			</div>
		</section>

		<section
			v-if="
				project.location || project.area || project.duration || project.year
			"
			class="section-y-sm bg-[#F9FAFB]"
		>
			<div
				class="container-site grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6"
			>
				<div
					v-if="project.location"
					class="rounded-[14px] border border-[#E5E7EB] bg-white p-4 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:rounded-[16px] sm:p-6"
				>
					<p class="text-xs leading-5 text-[#4A5565] sm:text-sm">Локация</p>
					<p
						class="mt-1 text-base font-semibold leading-7 text-[#101828] sm:mt-2 sm:text-lg"
					>
						{{ project.location }}
					</p>
				</div>
				<div
					v-if="project.area"
					class="rounded-[14px] border border-[#E5E7EB] bg-white p-4 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:rounded-[16px] sm:p-6"
				>
					<p class="text-xs leading-5 text-[#4A5565] sm:text-sm">Площадь</p>
					<p
						class="mt-1 text-base font-semibold leading-7 text-[#101828] sm:mt-2 sm:text-lg"
					>
						{{ project.area }}
					</p>
				</div>
				<div
					v-if="project.duration"
					class="rounded-[14px] border border-[#E5E7EB] bg-white p-4 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:rounded-[16px] sm:p-6"
				>
					<p class="text-xs leading-5 text-[#4A5565] sm:text-sm">
						Срок выполнения
					</p>
					<p
						class="mt-1 text-base font-semibold leading-7 text-[#101828] sm:mt-2 sm:text-lg"
					>
						{{ project.duration }}
					</p>
				</div>
				<div
					v-if="project.year"
					class="rounded-[14px] border border-[#E5E7EB] bg-white p-4 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:rounded-[16px] sm:p-6"
				>
					<p class="text-xs leading-5 text-[#4A5565] sm:text-sm">
						Год завершения
					</p>
					<p
						class="mt-1 text-base font-semibold leading-7 text-[#101828] sm:mt-2 sm:text-lg"
					>
						{{ project.year }}
					</p>
				</div>
			</div>
		</section>

		<section v-if="project.description" class="section-y-sm bg-white lg:py-20">
			<div class="container-site">
				<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
					<div>
						<h2 class="heading-subsection">О проекте</h2>
						<p
							class="mt-4 text-sm leading-relaxed text-[#364153] sm:mt-6 sm:text-base sm:leading-[26px]"
						>
							{{ project.description }}
						</p>

						<h3
							v-if="project.features?.length"
							class="mt-8 text-xl font-bold leading-8 text-[#101828] sm:mt-10 sm:text-2xl"
						>
							Особенности проекта
						</h3>
						<ul
							v-if="project.features?.length"
							class="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4"
						>
							<li
								v-for="(feature, index) in project.features"
								:key="index"
								class="flex items-start gap-3 text-sm leading-6 text-[#364153] sm:text-base"
							>
								<span
									class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#155DFC] text-xs text-white"
								>
									✓
								</span>
								{{ feature }}
							</li>
						</ul>
					</div>

					<div
						v-if="project.gallery?.length"
						class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
					>
						<div
							v-for="(src, index) in project.gallery"
							:key="index"
							:class="index === 0 ? 'sm:col-span-2' : ''"
							class="overflow-hidden rounded-[12px] sm:rounded-[16px]"
						>
							<img
								:src="src"
								alt=""
								class="h-[180px] w-full object-cover sm:h-[220px] lg:h-[240px]"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section
			v-if="relatedProjects.length"
			class="section-y-sm bg-[#F9FAFB] lg:py-20"
		>
			<div class="container-site">
				<h2 class="heading-subsection">Похожие проекты</h2>
				<div
					class="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-8 lg:mt-10 xl:grid-cols-3"
				>
					<ProjectCard
						v-for="item in relatedProjects"
						:key="item.slug"
						:project="item"
					/>
				</div>
			</div>
		</section>

		<HomeContacts />
		<SiteFooter />
	</div>

	<div
		v-else
		class="min-h-[60vh] bg-white pt-[calc(81px+3rem)] sm:pt-[calc(81px+5rem)]"
	>
		<div class="container-site text-center">
			<h1 class="heading-subsection">Проект не найден</h1>
			<NuxtLink
				to="/projects"
				class="mt-6 inline-flex text-sm font-medium text-[#155DFC] sm:text-base"
			>
				← Вернуться к проектам
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => String(route.params.slug))

const { data: projectsList } = await useSiteProjectsList()

const project = computed(
	() => projectsList.value?.find(p => p.slug === slug.value) ?? null,
)

const relatedProjects = computed(() =>
	(projectsList.value ?? [])
		.filter(
			p => p.slug !== slug.value && p.category === project.value?.category,
		)
		.slice(0, 3),
)

useSeoMeta({
	title: () =>
		project.value
			? `${project.value.title} — URBANTECHSTROY`
			: 'Проект не найден',
	description: () => project.value?.shortDescription ?? '',
})
</script>
