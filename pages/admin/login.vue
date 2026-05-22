<template>
	<div>
		<SiteHeader />
		<div class="min-h-dvh bg-[#F3F4F6] px-4 py-16">
			<div class="mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
				<h1 class="text-center text-xl font-bold text-[#101828]">
					Админ-панель
				</h1>
				<p class="mt-2 text-center text-sm text-[#4A5565]">
					Вход по email и паролю
				</p>

				<form class="mt-8 space-y-4" @submit.prevent="onLogin">
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
							autocomplete="current-password"
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
						{{ loading ? 'Вход…' : 'Войти' }}
					</button>
				</form>

				<p
					v-if="showRegisterLink"
					class="mt-6 text-center text-sm text-[#4A5565]"
				>
					Первый вход?
					<NuxtLink
						to="/admin/register"
						class="font-medium text-[#155DFC] underline"
					>
						Регистрация администратора
					</NuxtLink>
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

useHead({
	title: 'Вход — админ',
	meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')
const showRegisterLink = ref(false)

onMounted(async () => {
	try {
		const s = await $fetch<{ hasAdmins: boolean }>('/api/admin/bootstrap')
		showRegisterLink.value = !s.hasAdmins
	} catch {
		showRegisterLink.value = false
	}
})

const onLogin = async () => {
	error.value = ''
	loading.value = true
	try {
		await $fetch('/api/admin/login', {
			method: 'POST',
			body: { email: email.value.trim(), password: password.value },
			credentials: 'include',
		})
		await navigateTo('/admin')
	} catch (e: unknown) {
		error.value =
			e && typeof e === 'object' && 'data' in e
				? String(
						(e as { data?: { statusMessage?: string } }).data?.statusMessage,
					)
				: 'Ошибка входа'
	} finally {
		loading.value = false
	}
}
</script>
