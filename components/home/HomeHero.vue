<template>
	<section class="relative flex min-h-[560px] w-full flex-col lg:h-[896px]">
		<div class="absolute inset-0 overflow-hidden">
			<img
				src="/images/hero-construction-site.png"
				alt=""
				class="hero-bg-zoom absolute inset-0 h-full w-full object-cover"
			/>
			<div
				class="absolute inset-0"
				style="
					background: linear-gradient(
						90deg,
						rgba(0, 0, 0, 0.7) 0%,
						rgba(0, 0, 0, 0.5) 50%,
						rgba(0, 0, 0, 0.3) 100%
					);
				"
			/>
		</div>

		<SiteHeader entrance />

		<div class="relative z-10 flex flex-1 flex-col">
			<div
				class="container-site flex flex-1 flex-col pb-12 pt-[calc(81px+2rem)] sm:pb-16 sm:pt-[calc(81px+3rem)] lg:pb-20 lg:pt-[calc(81px+4.5rem)]"
			>
				<div class="w-full max-w-[768px]">
					<Reveal variant="blur-up" immediate :delay="0.12" :duration="1">
						<h1
							class="text-[32px] font-bold leading-[1.15] text-white sm:text-[44px] md:text-[56px] lg:text-[72px] lg:leading-[90px]"
						>
							Строительство и ремонт под ключ в Узбекистане
						</h1>
					</Reveal>

					<Reveal variant="fade-up" immediate :delay="0.28" :duration="0.9">
						<p
							class="mt-4 text-base leading-7 text-[#E5E7EB] sm:mt-6 sm:text-lg lg:text-2xl lg:leading-8"
						>
							Реализуем проекты любой сложности — от идеи до готового объекта
						</p>
					</Reveal>

					<Reveal variant="fade-up" immediate :delay="0.44" :duration="0.9">
						<div class="btn-row mt-8 sm:mt-10">
							<NuxtLink
								to="/#calculator"
								class="btn-full-mobile inline-flex h-[52px] items-center gap-3 rounded-[14px] bg-gradient-to-r from-[#155DFC] to-[#1447E6] px-6 text-[15px] font-medium text-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] sm:h-[58px] sm:px-8 sm:text-[16px]"
							>
								<img src="/icons/icon-calc-left.svg" alt="" class="h-5 w-5" />
								<span>Рассчитать стоимость</span>
								<img src="/icons/icon-arrow-right.svg" alt="" class="h-5 w-5" />
							</NuxtLink>

							<NuxtLink
								to="/#contacts"
								class="btn-full-mobile inline-flex h-[52px] items-center gap-3 rounded-[14px] border border-white/30 bg-white/10 px-6 text-[15px] font-medium text-white backdrop-blur-sm transition-[transform,background-color] duration-300 hover:scale-[1.02] hover:bg-white/20 active:scale-[0.98] sm:h-[58px] sm:px-8 sm:text-[16px]"
							>
								<img src="/icons/icon-phone.svg" alt="" class="h-5 w-5" />
								<span>Связаться с нами</span>
							</NuxtLink>
						</div>
					</Reveal>
				</div>
			</div>
		</div>
	</section>
</template>
