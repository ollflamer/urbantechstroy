<template>
	<div v-if="service">
		<SiteHeader />

		<section
			class="relative flex min-h-[280px] w-full items-end overflow-hidden sm:min-h-[360px] lg:h-[420px] lg:items-stretch"
		>
			<img
				:src="service.heroImage ?? service.image"
				alt=""
				class="absolute inset-0 h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-black/50" />

			<div
				class="container-site relative z-10 w-full pb-8 pt-[calc(81px+3rem)] sm:pb-10 sm:pt-[calc(81px+4rem)] lg:pb-0 lg:pt-[calc(81px+5rem)]"
			>
				<NuxtLink
					to="/services"
					class="inline-flex items-center gap-2 text-sm leading-6 text-white/90 hover:text-white sm:text-base"
				>
					<span aria-hidden="true">←</span>
					Вернуться к услугам
				</NuxtLink>

				<h1
					class="mt-4 max-w-[900px] text-2xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl sm:leading-[44px] lg:text-[48px] lg:leading-[58px]"
				>
					{{ service.title }}
				</h1>
				<p
					class="mt-3 max-w-[720px] text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg"
				>
					{{ service.shortDescription }}
				</p>
			</div>
		</section>

		<section v-if="service.description" class="section-y-sm bg-white lg:py-20">
			<div
				class="container-site grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
			>
				<div>
					<h2 class="heading-subsection">Описание услуги</h2>
					<p
						class="mt-4 text-sm leading-relaxed text-[#364153] sm:mt-6 sm:text-base sm:leading-[26px]"
					>
						{{ service.description }}
					</p>

					<h3
						v-if="service.benefits?.length"
						class="mt-8 text-xl font-bold leading-8 text-[#101828] sm:mt-10 sm:text-2xl"
					>
						Преимущества
					</h3>
					<ul
						v-if="service.benefits?.length"
						class="mt-4 space-y-3 sm:mt-6 sm:space-y-4"
					>
						<li
							v-for="(benefit, index) in service.benefits"
							:key="index"
							class="flex items-start gap-3 text-sm leading-6 text-[#364153] sm:text-base"
						>
							<span
								class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#155DFC] text-xs text-white"
							>
								✓
							</span>
							{{ benefit }}
						</li>
					</ul>
				</div>

				<div
					v-if="service.gallery?.length"
					class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
				>
					<div
						v-for="(src, index) in service.gallery"
						:key="index"
						class="overflow-hidden rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:rounded-[16px]"
					>
						<img
							:src="src"
							alt=""
							class="h-[200px] w-full object-cover sm:h-[240px] lg:h-[280px]"
						/>
					</div>
				</div>
			</div>
		</section>

		<section v-else class="section-y-sm bg-white lg:py-20">
			<div class="container-site max-w-3xl">
				<h2 class="heading-subsection">Описание услуги</h2>
				<p
					class="mt-4 text-sm leading-relaxed text-[#364153] sm:mt-6 sm:text-base sm:leading-[26px]"
				>
					{{ service.shortDescription }}
				</p>
			</div>
		</section>

		<section
			v-if="service.stages?.length"
			class="section-y-sm bg-[#F9FAFB] lg:py-20"
		>
			<div class="container-site">
				<h2 class="heading-subsection">Этапы выполнения работ</h2>
				<p
					class="mt-2 text-sm leading-7 text-[#4A5565] sm:mt-3 sm:text-base lg:text-lg"
				>
					Профессиональный подход к каждому этапу
				</p>

				<div
					class="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:mt-10 lg:grid-cols-3"
				>
					<div
						v-for="stage in service.stages"
						:key="stage.step"
						class="rounded-[14px] border border-[#E5E7EB] bg-white p-5 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:p-6"
					>
						<div
							class="flex h-9 w-9 items-center justify-center rounded-full bg-[#155DFC] text-sm font-semibold text-white sm:h-10 sm:w-10 sm:text-base"
						>
							{{ stage.step }}
						</div>
						<p
							class="mt-3 text-sm leading-6 text-[#364153] sm:mt-4 sm:text-base"
						>
							{{ stage.title }}
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="section-y-sm bg-[#155DFC] lg:py-20">
			<div class="container-site text-center">
				<h2 class="heading-subsection text-white">Готовы начать работу?</h2>
				<p
					class="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#DBEAFE] sm:mt-4 sm:text-base lg:text-lg"
				>
					Свяжитесь с нами для получения консультации и расчёта стоимости
				</p>
				<div
					class="btn-row mx-auto mt-6 max-w-md justify-center sm:mt-8 sm:max-w-none"
				>
					<a
						href="#contacts"
						class="btn-full-mobile inline-flex h-12 items-center rounded-[10px] bg-white px-6 text-sm font-semibold text-[#155DFC] sm:text-base"
					>
						Оставить заявку
					</a>
					<a
						href="tel:+998910023343"
						class="btn-full-mobile inline-flex h-12 items-center rounded-[10px] border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white sm:text-base"
					>
						Позвонить сейчас
					</a>
				</div>
			</div>
		</section>

		<HomeContacts />
		<SiteFooter />
	</div>

	<div v-else>
		<SiteHeader />
		<div class="container-site py-24 sm:py-32">
			<p class="text-base text-[#4A5565] sm:text-lg">Услуга не найдена.</p>
			<NuxtLink to="/services" class="mt-4 inline-block text-[#155DFC]">
				Вернуться к услугам
			</NuxtLink>
		</div>
		<SiteFooter />
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => String(route.params.slug))

const { data: servicesList } = await useSiteServicesList()

const service = computed(
	() => servicesList.value?.find(s => s.slug === slug.value) ?? null,
)

useSeoMeta({
	title: () =>
		service.value
			? `${service.value.title} — URBANTECHSTROY`
			: 'Услуга — URBANTECHSTROY',
	description: () => service.value?.shortDescription ?? '',
})
</script>
