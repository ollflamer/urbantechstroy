<template>
	<div>
		<SiteHeader />

		<section
			class="section-y-sm bg-[#F9FAFB] pt-[calc(81px+3rem)] sm:pt-[calc(81px+4rem)]"
		>
			<div class="container-site text-center">
				<Reveal variant="blur-up" immediate :delay="0.1">
					<h1 class="heading-section">Полный спектр услуг</h1>
					<p class="text-lead mx-auto mt-3 max-w-2xl sm:mt-4">
						Выполняем все виды строительных и ремонтных работ
					</p>
				</Reveal>
			</div>
		</section>

		<section class="bg-white pb-16 pt-4 sm:pb-20 lg:pb-24">
			<div class="container-site">
				<div
					class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3"
				>
					<Reveal
						v-for="(service, index) in services"
						:key="service.slug"
						variant="scale"
						:delay="staggerDelay(index)"
					>
						<ServiceCard :service="service" />
					</Reveal>
				</div>
			</div>
		</section>

		<SiteFooter />
	</div>
</template>

<script setup lang="ts">
import { services } from '~/data/services'

useSeoMeta({
	title: 'Услуги — URBANTECHSTROY',
	description:
		'Полный спектр строительных и ремонтных услуг: жилые комплексы, частные дома, ремонт, фасады, кровля и многое другое.',
})
</script>
