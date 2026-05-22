<template>
	<div>
		<SiteHeader />
		<div class="min-h-dvh bg-[#F3F4F6] pb-16 pt-[calc(81px+1.5rem)]">
			<div class="container-site max-w-4xl">
				<h1 class="text-2xl font-bold text-[#101828]">Панель управления</h1>
				<p class="mt-1 text-sm text-[#4A5565]">
					Контент, заявки и учётные записи администраторов
				</p>

				<ul class="mt-8 grid gap-4 sm:grid-cols-2">
					<li>
						<NuxtLink
							to="/admin/admins"
							class="block rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:border-[#155DFC]"
						>
							<span class="font-semibold text-[#101828]">Администраторы</span>
							<p class="mt-1 text-sm text-[#4A5565]">
								Email, пароль: добавить, изменить, удалить
							</p>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink
							to="/admin/services"
							class="block rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:border-[#155DFC]"
						>
							<span class="font-semibold text-[#101828]">Услуги</span>
							<p class="mt-1 text-sm text-[#4A5565]">
								Карточки: скрыть, сбросить, добавить, удалить
							</p>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink
							to="/admin/projects"
							class="block rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:border-[#155DFC]"
						>
							<span class="font-semibold text-[#101828]">Проекты</span>
							<p class="mt-1 text-sm text-[#4A5565]">
								Карточки и страницы: скрыть, сбросить, добавить
							</p>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink
							to="/admin/leads"
							class="block rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:border-[#155DFC]"
						>
							<span class="font-semibold text-[#101828]">Лиды</span>
							<p class="mt-1 text-sm text-[#4A5565]">Заявки с сайта</p>
						</NuxtLink>
					</li>
				</ul>

				<button
					type="button"
					class="mt-10 text-sm font-medium text-[#155DFC] underline"
					@click="logout"
				>
					Выйти
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false, middleware: 'admin' })

useHead({
	title: 'Админ — главная',
	meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const logout = async () => {
	await $fetch('/api/admin/logout', { method: 'POST', credentials: 'include' })
	await navigateTo('/admin/login')
}
</script>
