<template>
	<div>
		<SiteHeader />

		<section
			class="relative overflow-hidden section-y-sm pt-[calc(81px+3rem)] sm:py-20 sm:pt-[calc(81px+5rem)] lg:py-24"
			style="
				background: linear-gradient(
					135deg,
					rgba(4, 25, 72, 1) 0%,
					rgba(25, 60, 184, 1) 100%
				);
			"
		>
			<div class="container-site relative z-10 text-center">
				<Reveal variant="blur-up" immediate :delay="0.1">
					<h1 class="heading-page text-white">О компании URBANTECHSTROY</h1>
					<p
						class="mx-auto mt-3 max-w-[896px] text-base leading-7 text-[#DBEAFE] sm:mt-4 sm:text-lg lg:text-2xl lg:leading-8"
					>
						Молодая, быстроразвивающаяся строительная компания с большим опытом
					</p>
				</Reveal>
			</div>
		</section>

		<section class="section-y-sm bg-white">
			<div class="container-site max-w-3xl space-y-4 sm:space-y-6">
				<p
					class="text-base leading-relaxed text-[#364153] sm:text-lg lg:text-xl lg:leading-[32.5px]"
				>
					Компания
					<strong class="font-bold text-[#155DFC]">«URBANTECHSTROY»</strong>
					предоставляет широкий спектр строительно-ремонтных услуг любой
					сложности.
				</p>
				<p
					class="text-sm leading-relaxed text-[#364153] sm:text-base lg:text-lg lg:leading-[29.25px]"
				>
					{{ aboutIntro.description }}
				</p>
			</div>
		</section>

		<section class="section-y-sm bg-[#F9FAFB]">
			<div
				class="container-site grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
			>
				<div
					v-for="stat in aboutStats"
					:key="stat.label"
					class="flex flex-col items-center rounded-[16px] bg-white px-5 py-6 text-center shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:px-6 sm:pb-8 sm:pt-8"
				>
					<img
						:src="stat.icon"
						alt=""
						class="h-14 w-14 shrink-0 sm:h-16 sm:w-16"
					/>
					<p
						class="mt-4 text-3xl font-bold leading-10 text-[#155DFC] sm:mt-6 sm:text-[36px]"
					>
						{{ stat.value }}
					</p>
					<p
						class="mt-2 w-full max-w-[280px] text-sm leading-6 text-[#4A5565] sm:text-base"
					>
						{{ stat.label }}
					</p>
				</div>
			</div>
		</section>

		<section class="section-y-sm bg-white lg:py-16">
			<div class="container-site">
				<h2 class="heading-subsection text-center">Портфолио наших работ</h2>
				<div
					class="mx-auto mt-8 grid max-w-[896px] grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12"
				>
					<div
						v-for="(item, index) in aboutPortfolio"
						:key="index"
						class="flex min-h-[72px] items-center gap-3 rounded-[14px] bg-[#F9FAFB] py-3 pl-3 pr-4 sm:min-h-[80px] sm:py-4 sm:pl-4 sm:pr-5"
					>
						<img
							:src="item.icon"
							alt=""
							class="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
						/>
						<p class="text-sm leading-6 text-[#364153] sm:text-base">
							{{ item.text }}
						</p>
					</div>
				</div>
			</div>
		</section>

		<section
			class="section-y-sm"
			style="
				background: linear-gradient(
					135deg,
					rgba(249, 250, 251, 1) 0%,
					rgba(243, 244, 246, 1) 100%
				);
			"
		>
			<div class="container-site">
				<div
					class="overflow-hidden rounded-[16px] bg-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] sm:rounded-[24px] lg:grid lg:h-[502px] lg:grid-cols-2"
				>
					<div
						class="relative min-h-[240px] sm:min-h-[320px] lg:min-h-0 lg:h-full"
					>
						<img
							:src="aboutDirector.image"
							alt="Алтухов Андрей Владимирович"
							class="absolute inset-0 h-full w-full object-cover object-center"
						/>
					</div>
					<div class="flex flex-col p-5 sm:p-8 lg:p-12">
						<span
							class="inline-flex w-fit rounded-full bg-[#DBEAFE] px-3 py-1.5 text-xs font-medium leading-5 text-[#1447E6] sm:px-4 sm:py-2 sm:text-[14px]"
						>
							Руководство компании
						</span>
						<h2
							class="mt-4 max-w-[512px] text-2xl font-bold leading-tight text-[#101828] sm:mt-6 sm:text-[32px] sm:leading-10 lg:text-[36px] lg:leading-[40px]"
						>
							{{ aboutDirector.name }}
						</h2>
						<p
							class="mt-3 text-base font-medium leading-7 text-[#155DFC] sm:mt-4 sm:text-lg lg:text-xl"
						>
							{{ aboutDirector.role }}
						</p>
						<div
							class="mt-4 flex max-w-[512px] flex-col gap-3 sm:mt-6 sm:gap-4"
						>
							<p
								v-for="(paragraph, index) in aboutDirector.paragraphs"
								:key="index"
								class="text-sm leading-relaxed text-[#364153] sm:text-base sm:leading-[26px]"
							>
								<template
									v-for="(part, partIndex) in paragraph"
									:key="partIndex"
								>
									<span
										v-if="part.emphasis === 'bold'"
										class="font-bold text-[#364153]"
										>{{ part.text }}</span
									>
									<span
										v-else-if="part.emphasis === 'accent'"
										class="font-bold text-[#155DFC]"
										>{{ part.text }}</span
									>
									<template v-else>{{ part.text }}</template>
								</template>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="section-y-sm bg-white lg:py-20">
			<div class="container-site max-w-3xl text-center">
				<h2 class="heading-subsection">Удобная оплата</h2>
				<p class="text-lead mt-3 sm:mt-4">
					Мы принимаем оплату любым удобным для вас способом
				</p>
				<div class="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3">
					<span
						v-for="method in aboutPaymentMethods"
						:key="method"
						class="rounded-[14px] bg-[#EFF6FF] px-4 py-2.5 text-sm font-medium leading-6 text-[#1447E6] sm:px-6 sm:py-3 sm:text-base"
					>
						{{ method }}
					</span>
				</div>
			</div>
		</section>

		<section
			class="section-y-sm"
			style="
				background: linear-gradient(
					135deg,
					rgba(4, 25, 72, 1) 0%,
					rgba(25, 60, 184, 1) 100%
				);
			"
		>
			<div class="container-site text-center">
				<h2 class="heading-subsection text-white">Свяжитесь с нами</h2>
				<p
					class="mt-3 text-base leading-7 text-[#DBEAFE] sm:mt-4 sm:text-lg lg:text-xl"
				>
					Готовы ответить на все ваши вопросы
				</p>
				<div
					class="mx-auto mt-8 flex w-full max-w-lg flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:gap-6"
				>
					<a
						href="tel:+998910023343"
						class="btn-full-mobile inline-flex h-12 items-center justify-center gap-3 rounded-[14px] bg-white px-6 text-sm font-bold text-[#155DFC] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:h-14 sm:px-8 sm:text-base"
					>
						<img src="/icons/about-contact-phone.svg" alt="" class="h-5 w-5" />
						+998 91 002 33 43
					</a>
					<a
						href="tel:+998999372027"
						class="btn-full-mobile inline-flex h-12 items-center justify-center gap-3 rounded-[14px] bg-white px-6 text-sm font-bold text-[#155DFC] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:h-14 sm:px-8 sm:text-base"
					>
						<img src="/icons/about-contact-phone.svg" alt="" class="h-5 w-5" />
						+998 99 937 20 27
					</a>
					<a
						href="#"
						class="btn-full-mobile inline-flex h-12 items-center justify-center gap-3 rounded-[14px] bg-[#1447E6] px-6 text-sm font-bold text-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:h-14 sm:px-8 sm:text-base"
					>
						<img
							src="/icons/about-contact-telegram.svg"
							alt=""
							class="h-5 w-5"
						/>
						Telegram
					</a>
				</div>
			</div>
		</section>

		<SiteFooter />
	</div>
</template>

<script setup lang="ts">
import {
	aboutIntro,
	aboutStats,
	aboutPortfolio,
	aboutDirector,
	aboutPaymentMethods,
} from '~/data/about'

useSeoMeta({
	title: 'О компании — URBANTECHSTROY',
	description:
		'URBANTECHSTROY — молодая, быстроразвивающаяся строительная компания с большим опытом. 28 лет опыта, 50+ специалистов, 60+ реализованных проектов.',
})
</script>
