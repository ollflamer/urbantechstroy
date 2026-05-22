<template>
	<section id="projects" class="section-y bg-[#F9FAFB]">
		<div class="container-site">
			<Reveal variant="fade-up">
				<div class="space-y-2 sm:space-y-3">
					<h2 class="heading-section">Наши проекты</h2>
					<p class="text-lead max-w-2xl">
						Реализованные проекты различной сложности по всему Узбекистану
					</p>
				</div>
			</Reveal>

			<div
				class="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:mt-12 lg:grid-cols-3"
			>
				<Reveal
					v-for="(project, index) in previewProjects"
					:key="project.slug"
					variant="scale"
					:delay="staggerDelay(index)"
				>
					<ProjectCard :project="project" />
				</Reveal>
			</div>

			<Reveal
				variant="fade-up"
				:delay="0.35"
				class="mt-8 flex justify-center sm:mt-10 lg:mt-12"
			>
				<NuxtLink
					to="/projects"
					class="btn-full-mobile inline-flex h-12 items-center gap-3 rounded-[14px] bg-[#155DFC] px-6 text-sm font-semibold text-white shadow-[0px_12px_30px_rgba(16,24,40,0.12)] sm:h-14 sm:text-base"
				>
					<span>Смотреть все проекты</span>
					<img src="/icons/projects-all-icon.svg" alt="" class="h-5 w-5" />
				</NuxtLink>
			</Reveal>
		</div>
	</section>
</template>

<script setup lang="ts">
const { data: projectsList } = await useSiteProjectsList()

const previewProjects = computed(() => (projectsList.value ?? []).slice(0, 3))
</script>
