<template>
	<section id="about" class="relative z-[1] bg-[#F9FAFB] section-y-sm">
		<div class="container-site flex flex-col gap-10 lg:flex-row lg:gap-12">
			<Reveal
				variant="fade-right"
				class="w-full shrink-0 lg:w-[584px] lg:pt-[27px]"
			>
				<div>
					<h2 class="heading-section">О компании</h2>

					<p
						class="mt-4 text-base font-semibold leading-relaxed sm:mt-6 sm:text-lg lg:text-xl lg:leading-[32.5px]"
					>
						<span class="text-[#155DFC]">URBANTECHSTROY</span>
						<span class="font-normal text-[#364153]">
							— молодая, быстроразвивающаяся строительная компания с большим
							опытом
						</span>
					</p>

					<ul class="mt-6 flex flex-col gap-5 sm:mt-8 sm:gap-6">
						<Reveal
							v-for="(item, index) in homeAboutFeatures"
							:key="item.title"
							variant="fade-up"
							:delay="staggerDelay(index, 0.08, 0.15)"
							as="li"
							class="flex gap-4"
						>
							<img
								:src="item.icon"
								alt=""
								class="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
							/>
							<div class="min-w-0">
								<h3
									class="text-base font-semibold leading-snug text-[#101828] sm:text-lg sm:leading-[27px]"
								>
									{{ item.title }}
								</h3>
								<p
									class="mt-1.5 text-sm leading-6 text-[#4A5565] sm:mt-2 sm:text-base"
								>
									{{ item.description }}
								</p>
							</div>
						</Reveal>
					</ul>

					<Reveal variant="fade-up" :delay="0.45">
						<NuxtLink
							to="/about"
							class="btn-full-mobile mt-8 inline-flex h-12 items-center gap-3 rounded-[14px] bg-[#155DFC] px-6 text-sm font-semibold text-white shadow-[0px_12px_30px_rgba(16,24,40,0.12)] sm:mt-10 sm:h-14 sm:text-base"
						>
							Подробнее о компании
							<span aria-hidden="true">→</span>
						</NuxtLink>
					</Reveal>
				</div>
			</Reveal>

			<Reveal
				variant="fade-left"
				class="grid w-full grid-cols-2 gap-3 sm:gap-4 lg:w-[584px]"
			>
				<div class="flex flex-col gap-3 sm:gap-4">
					<Reveal
						v-for="(img, index) in aboutImagesLeft"
						:key="img.src"
						variant="scale"
						:delay="staggerDelay(index, 0.1)"
						class="overflow-hidden rounded-[12px] sm:rounded-[16px]"
					>
						<img
							:src="img.src"
							:alt="img.alt"
							class="h-full w-full object-cover"
							:class="
								index === 0
									? 'h-[140px] sm:h-[200px] lg:h-[256px]'
									: 'h-[100px] sm:h-[160px] lg:h-[192px]'
							"
						/>
					</Reveal>
				</div>

				<div class="flex flex-col gap-3 pt-6 sm:gap-4 sm:pt-8">
					<Reveal
						v-for="(img, index) in aboutImagesRight"
						:key="img.src"
						variant="scale"
						:delay="staggerDelay(index, 0.1, 0.12)"
						class="overflow-hidden rounded-[12px] sm:rounded-[16px]"
					>
						<img
							:src="img.src"
							:alt="img.alt"
							class="h-full w-full object-cover"
							:class="
								index === 0
									? 'h-[100px] sm:h-[160px] lg:h-[192px]'
									: 'h-[140px] sm:h-[200px] lg:h-[256px]'
							"
						/>
					</Reveal>
				</div>
			</Reveal>
		</div>
	</section>
</template>

<script setup lang="ts">
import { homeAboutFeatures } from '~/data/about'

const aboutImagesLeft = [
	{
		src: '/images/about-home-crane-worker.png',
		alt: 'Строитель на объекте даёт сигнал крановщику',
	},
	{
		src: '/images/about-home-welding.png',
		alt: 'Сварка металлоконструкций в производственном цеху',
	},
]

const aboutImagesRight = [
	{
		src: '/images/about-home-foundation.png',
		alt: 'Устройство свайного основания и арматура на стройплощадке',
	},
	{
		src: '/images/about-home-excavation.png',
		alt: 'Земляные работы: экскаваторы и буровая установка в котловане',
	},
]
</script>
