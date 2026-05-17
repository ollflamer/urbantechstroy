<template>
	<footer class="bg-[#041948] px-4 sm:px-6 lg:px-8">
		<div class="container-site !px-0">
			<div
				class="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-16 lg:py-[39px]"
			>
				<div class="sm:col-span-2 lg:col-span-1 lg:max-w-[584px]">
					<div
						class="text-lg font-bold leading-7 tracking-[-0.025em] text-white sm:text-xl"
					>
						URBANTECHSTROY
					</div>

					<p
						class="mt-3 text-sm leading-relaxed text-[#99A1AF] sm:mt-4 sm:text-base sm:leading-[26px]"
					>
						Молодая, быстроразвивающаяся строительная компания с большим опытом.
						Реализуем проекты любой сложности по всему Узбекистану.
					</p>

					<div class="mt-4 flex items-center gap-4 sm:mt-6">
						<img
							src="/icons/footer-social-icons.svg"
							alt=""
							class="h-9 w-auto sm:h-10"
						/>
					</div>
				</div>

				<div>
					<div class="text-base font-bold leading-7 text-white sm:text-lg">
						Навигация
					</div>
					<nav
						class="mt-3 flex flex-col gap-2 text-sm leading-6 text-[#99A1AF] sm:mt-4 sm:gap-3 sm:text-base"
					>
						<NuxtLink to="/" class="hover:text-white">Главная</NuxtLink>
						<NuxtLink to="/about" class="hover:text-white">О компании</NuxtLink>
						<NuxtLink to="/services" class="hover:text-white">Услуги</NuxtLink>
						<NuxtLink to="/projects" class="hover:text-white">Проекты</NuxtLink>
						<NuxtLink to="/#calculator" class="hover:text-white"
							>Расчет стоимости</NuxtLink
						>
					</nav>
				</div>

				<div>
					<div class="text-base font-bold leading-7 text-white sm:text-lg">
						Контакты
					</div>
					<div
						class="mt-3 flex flex-col gap-2 text-sm leading-6 text-[#99A1AF] sm:mt-4 sm:gap-3 sm:text-base"
					>
						<a href="tel:+998910023343" class="hover:text-white"
							>+998 91 002 33 43</a
						>
						<a href="tel:+998999372027" class="hover:text-white"
							>+998 99 937 20 27</a
						>
						<a href="#" class="hover:text-white">@urbantechstroy</a>
						<div
							class="text-xs leading-relaxed sm:text-sm sm:leading-[22.75px]"
						>
							Tashkent, Muhammad Yusuf street 45A
						</div>
					</div>
				</div>
			</div>

			<div class="border-t border-[#1E2939] py-6 lg:pt-[33px]">
				<div
					class="flex flex-col gap-3 text-center text-xs leading-5 text-[#99A1AF] sm:flex-row sm:justify-between sm:text-left sm:text-sm"
				>
					<div>© {{ year }} URBANTECHSTROY. Все права защищены.</div>
					<div>Строительство и ремонт по всему Узбекистану</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
