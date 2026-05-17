<template>
	<section id="services" class="section-y bg-white">
		<div class="container-site">
			<Reveal variant="fade-up">
				<div class="space-y-2 sm:space-y-3">
					<h2 class="heading-section">Наши услуги</h2>
					<p class="text-lead max-w-2xl">
						Предоставляем полный спектр строительных услуг для воплощения ваших
						идей в реальность
					</p>
				</div>
			</Reveal>

			<div
				class="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 lg:mt-12 lg:grid-cols-3"
			>
				<Reveal
					v-for="(service, index) in previewServices"
					:key="service.slug"
					variant="scale"
					:delay="staggerDelay(index)"
				>
					<ServiceCard :service="service" />
				</Reveal>
			</div>

			<Reveal
				variant="fade-up"
				:delay="0.35"
				class="mt-8 flex justify-center sm:mt-10 lg:mt-12"
			>
				<NuxtLink
					to="/services"
					class="btn-full-mobile inline-flex h-12 items-center gap-3 rounded-[14px] bg-[#155DFC] px-6 text-sm font-semibold text-white shadow-[0px_12px_30px_rgba(16,24,40,0.12)] sm:h-14 sm:text-base"
				>
					<span>Все услуги</span>
					<img src="/icons/services-all-icon.svg" alt="" class="h-5 w-5" />
				</NuxtLink>
			</Reveal>
		</div>
	</section>
</template>

<script setup lang="ts">
import { services } from '~/data/services'

const previewServices = services.slice(0, 3)
</script>
