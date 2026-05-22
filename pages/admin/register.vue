<template>
	<div>
		<SiteHeader />
		<div class="min-h-dvh bg-[#F3F4F6] px-4 py-16">
			<div class="mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
				<h1 class="text-center text-xl font-bold text-[#101828]">
					Регистрация администратора
				</h1>

				<div v-if="pending" class="mt-8 text-center text-sm text-[#4A5565]">
					Проверка…
				</div>

				<div
					v-else-if="registrationClosed"
					class="mt-6 space-y-4 text-sm text-[#4A5565]"
				>
					<p>
						В базе уже есть хотя бы один администратор (часто это автоматически
						созданная учётная запись из
						<code class="rounded bg-[#F3F4F6] px-1 text-xs"
							>NUXT_ADMIN_PASSWORD</code
						>
						+
						<code class="rounded bg-[#F3F4F6] px-1 text-xs"
							>NUXT_ADMIN_EMAIL</code
						>). Страница регистрации первого пользователя недоступна.
					</p>
					<p>
						Войдите с существующим email или добавьте коллег в разделе
						«Администраторы» после входа.
					</p>
					<div class="flex flex-col gap-2 pt-2 sm:flex-row sm:justify-center">
						<NuxtLink
							to="/admin/login"
							class="inline-flex justify-center rounded-xl bg-[#155DFC] px-4 py-2.5 text-center text-sm font-semibold text-white"
						>
							Войти
						</NuxtLink>
						<NuxtLink
							to="/admin/admins"
							class="inline-flex justify-center rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-center text-sm font-medium text-[#364153]"
						>
							Администраторы
						</NuxtLink>
					</div>
				</div>

				<template v-else>
					<p class="mt-2 text-center text-sm text-[#4A5565]">
						Только для первой учётной записи. Нужен секретный ключ из
						<code class="rounded bg-[#F3F4F6] px-1 text-xs"
							>NUXT_ADMIN_SETUP_KEY</code
						>
					</p>

					<form class="mt-8 space-y-4" @submit.prevent="onSubmit">
						<div>
							<label class="block text-sm font-medium text-[#364153]"
								>Секретный ключ</label
							>
							<input
								v-model="setupKey"
								type="password"
								autocomplete="off"
								class="mt-1 w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#101828] outline-none focus:border-[#155DFC]"
								required
							/>
						</div>
						<div>
							<label class="block text-sm font-medium text-[#364153]"
								>Email (логин)</label
							>
							<input
								v-model="email"
								type="email"
								autocomplete="username"
								class="mt-1 w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#101828] outline-none focus:border-[#155DFC]"
								required
							/>
						</div>
						<div>
							<label class="block text-sm font-medium text-[#364153]"
								>Пароль</label
							>
							<input
								v-model="password"
								type="password"
								autocomplete="new-password"
								minlength="8"
								class="mt-1 w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#101828] outline-none focus:border-[#155DFC]"
								required
							/>
							<p class="mt-1 text-xs text-[#6A7282]">Не менее 8 символов</p>
						</div>
						<div>
							<label class="block text-sm font-medium text-[#364153]"
								>Повтор пароля</label
							>
							<input
								v-model="password2"
								type="password"
								autocomplete="new-password"
								class="mt-1 w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#101828] outline-none focus:border-[#155DFC]"
								required
							/>
						</div>
						<p v-if="error" class="text-sm text-red-600">{{ error }}</p>
						<button
							type="submit"
							:disabled="loading"
							class="w-full rounded-xl bg-[#155DFC] py-3 text-sm font-semibold text-white disabled:opacity-60"
						>
							{{ loading ? 'Создание…' : 'Создать и войти' }}
						</button>
					</form>

					<p class="mt-6 text-center text-sm">
						<NuxtLink
							to="/admin/login"
							class="font-medium text-[#155DFC] underline"
						>
							Уже есть аккаунт — войти
						</NuxtLink>
					</p>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

useHead({
	title: 'Регистрация — админ',
	meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const setupKey = ref('')
const email = ref('')
const password = ref('')
const password2 = ref('')
const loading = ref(false)
const error = ref('')

const { data: bootstrap, pending } = await useFetch<{ hasAdmins: boolean }>(
	'/api/admin/bootstrap',
	{ credentials: 'omit' },
)

const registrationClosed = computed(() => bootstrap.value?.hasAdmins === true)

const onSubmit = async () => {
	error.value = ''
	if (password.value !== password2.value) {
		error.value = 'Пароли не совпадают'
		return
	}
	loading.value = true
	try {
		await $fetch('/api/admin/register', {
			method: 'POST',
			body: {
				email: email.value.trim(),
				password: password.value,
				setupKey: setupKey.value,
			},
			credentials: 'include',
		})
		await navigateTo('/admin')
	} catch (e: unknown) {
		error.value =
			e && typeof e === 'object' && 'data' in e
				? String(
						(e as { data?: { statusMessage?: string } }).data?.statusMessage,
					)
				: 'Ошибка регистрации'
	} finally {
		loading.value = false
	}
}
</script>
