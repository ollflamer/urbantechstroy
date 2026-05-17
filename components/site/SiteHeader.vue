<template>
	<Teleport to="body">
		<header class="site-header" :class="{ 'header-entrance': entrance }">
			<div
				class="mx-auto flex h-[81px] w-full max-w-[1216px] items-center justify-between gap-3 px-4 lg:gap-4 lg:px-0"
			>
				<NuxtLink
					to="/"
					class="flex h-12 shrink-0 items-center gap-3"
					@click="closeMenu"
				>
					<img
						src="/brand/logo-784fe1.png"
						alt=""
						class="h-12 w-[62px] object-contain"
					/>
					<span
						class="hidden text-[18px] font-bold leading-7 tracking-[-0.025em] text-[#101828] min-[400px]:inline"
					>
						URBANTECHSTROY
					</span>
				</NuxtLink>

				<!-- Десктоп / широкий планшет: ≥1280px -->
				<nav
					class="hidden min-w-0 flex-1 items-center justify-center gap-5 xl:flex xl:gap-8"
				>
					<NuxtLink
						v-for="item in navItems"
						:key="item.to"
						:to="item.to"
						:class="navLinkClass(item.to)"
						class="shrink-0 whitespace-nowrap"
					>
						{{ item.label }}
					</NuxtLink>
				</nav>

				<div class="hidden shrink-0 items-center gap-4 xl:flex">
					<div class="flex flex-col items-end">
						<a
							href="tel:+998910023343"
							class="whitespace-nowrap text-[16px] font-medium leading-6 text-[#101828]"
						>
							+998 91 002 33 43
						</a>
						<a
							href="tel:+998999372027"
							class="whitespace-nowrap text-[14px] leading-5 text-[#4A5565]"
						>
							+998 99 937 20 27
						</a>
					</div>
					<a
						href="tel:+998910023343"
						class="flex h-10 w-10 shrink-0 items-center justify-center"
						aria-label="Позвонить"
					>
						<img src="/brand/icon-phone-header.svg" alt="" class="h-5 w-5" />
					</a>
				</div>

				<!-- Бургер: &lt;1280px или когда элементы не помещаются -->
				<button
					type="button"
					class="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] text-[#101828] transition-colors hover:bg-[#F3F4F6] xl:hidden"
					:aria-expanded="isMenuOpen"
					aria-controls="mobile-nav"
					:aria-label="isMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
					@click="toggleMenu"
				>
					<svg
						v-if="!isMenuOpen"
						class="h-6 w-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						aria-hidden="true"
					>
						<path d="M4 7h16M4 12h16M4 17h16" />
					</svg>
					<svg
						v-else
						class="h-6 w-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						aria-hidden="true"
					>
						<path d="M6 6l12 12M18 6L6 18" />
					</svg>
				</button>
			</div>

			<Teleport to="body">
				<Transition
					enter-active-class="transition-opacity duration-200 ease-out"
					enter-from-class="opacity-0"
					enter-to-class="opacity-100"
					leave-active-class="transition-opacity duration-150 ease-in"
					leave-from-class="opacity-100"
					leave-to-class="opacity-0"
				>
					<div
						v-if="isMenuOpen"
						class="fixed inset-0 top-[81px] z-[200] xl:hidden"
						aria-hidden="true"
						@click="closeMenu"
					>
						<div class="absolute inset-0 bg-black/40" />
					</div>
				</Transition>

				<Transition
					enter-active-class="transition-transform duration-300 ease-out"
					enter-from-class="translate-x-full"
					enter-to-class="translate-x-0"
					leave-active-class="transition-transform duration-200 ease-in"
					leave-from-class="translate-x-0"
					leave-to-class="translate-x-full"
				>
					<nav
						v-if="isMenuOpen"
						id="mobile-nav"
						class="fixed right-0 top-[81px] z-[210] flex h-[calc(100dvh-81px)] w-full max-w-[320px] flex-col bg-white shadow-[-8px_0_24px_rgba(0,0,0,0.12)] xl:hidden"
						aria-label="Мобильное меню"
					>
						<div class="flex flex-1 flex-col overflow-y-auto px-4 py-6">
							<NuxtLink
								v-for="item in navItems"
								:key="item.to"
								:to="item.to"
								:class="mobileNavLinkClass(item.to)"
								@click="closeMenu"
							>
								{{ item.label }}
							</NuxtLink>
						</div>

						<div class="shrink-0 border-t border-[#E5E7EB] p-4">
							<a
								href="tel:+998910023343"
								class="flex h-[56px] w-full items-center justify-center gap-3 rounded-[14px] bg-gradient-to-r from-[#155DFC] to-[#1447E6] text-[16px] font-medium text-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
								@click="closeMenu"
							>
								<img
									src="/brand/icon-phone-header.svg"
									alt=""
									class="h-5 w-5 brightness-0 invert"
								/>
								<span>+998 91 002 33 43</span>
							</a>
							<a
								href="tel:+998999372027"
								class="mt-3 flex h-12 w-full items-center justify-center rounded-[14px] border border-[#E5E7EB] text-[15px] font-medium text-[#364153]"
								@click="closeMenu"
							>
								+998 99 937 20 27
							</a>
						</div>
					</nav>
				</Transition>
			</Teleport>
		</header>
	</Teleport>
</template>

<script setup lang="ts">
defineProps<{
	entrance?: boolean
}>()

const route = useRoute()

const navItems = [
	{ to: '/', label: 'Главная' },
	{ to: '/about', label: 'О компании' },
	{ to: '/services', label: 'Услуги' },
	{ to: '/projects', label: 'Проекты' },
	{ to: '/#calculator', label: 'Расчет' },
	{ to: '/#contacts', label: 'Контакты' },
] as const

const isMenuOpen = ref(false)

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
	isMenuOpen.value = false
}

const isNavActive = (path: string) => {
	if (path === '/') return route.path === '/'
	if (path.startsWith('/about')) return route.path.startsWith('/about')
	if (path.startsWith('/services')) return route.path.startsWith('/services')
	if (path.startsWith('/projects')) return route.path.startsWith('/projects')
	if (path === '/#calculator') return route.hash === '#calculator'
	if (path === '/#contacts') return route.hash === '#contacts'
	return false
}

const navLinkClass = (path: string) => {
	const base = 'text-[16px] leading-6'
	return isNavActive(path) ? `${base} text-[#155DFC]` : `${base} text-[#364153]`
}

const mobileNavLinkClass = (path: string) => {
	const base =
		'block rounded-[12px] px-4 py-3.5 text-[18px] font-medium leading-7 transition-colors'
	return isNavActive(path)
		? `${base} bg-[#EFF6FF] text-[#155DFC]`
		: `${base} text-[#364153] hover:bg-[#F9FAFB]`
}

watch(
	() => route.fullPath,
	() => closeMenu(),
)

watch(isMenuOpen, open => {
	if (!import.meta.client) return
	document.body.style.overflow = open ? 'hidden' : ''
})

onUnmounted(() => {
	if (import.meta.client) {
		document.body.style.overflow = ''
	}
})
</script>
