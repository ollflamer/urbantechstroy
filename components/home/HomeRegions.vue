<template>
	<section id="regions" class="section-y bg-white">
		<div class="container-site">
			<Reveal variant="scale" :duration="1">
				<div
					class="relative overflow-hidden rounded-[16px] p-6 text-white sm:rounded-[24px] sm:p-10 lg:p-16"
					style="
						background: linear-gradient(
							135deg,
							rgba(21, 93, 252, 1) 0%,
							rgba(4, 25, 72, 1) 100%
						);
					"
				>
					<div class="absolute inset-0 opacity-10">
						<div
							class="absolute right-0 top-0 h-40 w-40 rounded-full bg-white blur-[128px] sm:h-64 sm:w-64"
						/>
						<div
							class="absolute left-0 top-[120px] h-40 w-40 rounded-full bg-white blur-[128px] sm:top-[168px] sm:h-64 sm:w-64"
						/>
					</div>

					<div class="relative mx-auto max-w-[1088px] text-center">
						<Reveal variant="fade-up" :delay="0.1">
							<div
								class="mx-auto flex h-14 w-14 items-center justify-center rounded-[14px] bg-white/10 sm:h-16 sm:w-16 sm:rounded-[16px]"
							>
								<img
									src="/icons/regions-icon.svg"
									alt=""
									class="h-7 w-7 sm:h-8 sm:w-8"
								/>
							</div>
						</Reveal>

						<Reveal variant="fade-up" :delay="0.2">
							<h2
								class="mt-4 text-[26px] font-bold leading-tight sm:mt-6 sm:text-[36px] lg:text-[48px] lg:leading-[48px]"
							>
								Работаем по всему Узбекистану
								<span class="hidden sm:inline"><br /></span>
								<span class="sm:hidden"> </span>
								и за его пределами
							</h2>
						</Reveal>

						<Reveal variant="fade-up" :delay="0.3">
							<p
								class="mx-auto mt-4 max-w-[768px] text-base leading-7 text-[#DBEAFE] sm:mt-6 sm:text-lg lg:text-xl"
							>
								Наши бригады готовы выехать в любой регион страны для реализации
								вашего проекта. Гарантируем качество работ независимо от
								местоположения объекта.
							</p>
						</Reveal>

						<div
							class="mt-6 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3 lg:gap-4"
						>
							<Reveal
								v-for="(city, index) in cities"
								:key="city"
								variant="fade-up"
								:delay="staggerDelay(index, 0.06, 0.4)"
							>
								<div
									class="rounded-full bg-white/10 px-4 py-2 text-sm leading-6 sm:h-12 sm:px-[22px] sm:py-[10px] sm:text-base"
								>
									{{ city }}
								</div>
							</Reveal>
						</div>
					</div>
				</div>
			</Reveal>
		</div>
	</section>
</template>

<script setup lang="ts">
const cities = [
	'Ташкент',
	'Самарканд',
	'Бухара',
	'Андижан',
	'Фергана',
	'Наманган',
]
</script>
