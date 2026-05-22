<template>
	<div>
		<SiteHeader />
		<div class="min-h-dvh bg-[#F3F4F6] pb-20 pt-[calc(81px+1.5rem)]">
			<div class="container-site max-w-3xl">
				<NuxtLink to="/admin" class="text-sm text-[#155DFC]">← Назад</NuxtLink>
				<h1 class="mt-4 text-2xl font-bold text-[#101828]">Администраторы</h1>
				<p class="mt-1 text-sm text-[#4A5565]">
					Логин — только email. Добавление, смена email/пароля и удаление
					(нельзя удалить последнего и свою текущую учётную запись).
				</p>

				<section
					class="mt-8 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
				>
					<h2 class="text-lg font-semibold text-[#101828]">
						Новый администратор
					</h2>
					<form
						class="mt-4 grid gap-4 sm:grid-cols-2"
						@submit.prevent="onCreate"
					>
						<div class="sm:col-span-2">
							<label class="block text-sm font-medium text-[#364153]"
								>Email</label
							>
							<input
								v-model="createEmail"
								type="email"
								class="mt-1 w-full rounded-xl border border-[#E5E7EB] px-3 py-2 text-[#101828]"
								required
							/>
						</div>
						<div class="sm:col-span-2">
							<label class="block text-sm font-medium text-[#364153]"
								>Пароль</label
							>
							<input
								v-model="createPassword"
								type="password"
								minlength="8"
								class="mt-1 w-full rounded-xl border border-[#E5E7EB] px-3 py-2 text-[#101828]"
								required
							/>
						</div>
						<p v-if="createError" class="sm:col-span-2 text-sm text-red-600">
							{{ createError }}
						</p>
						<button
							type="submit"
							:disabled="createLoading"
							class="rounded-xl bg-[#155DFC] px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60 sm:col-span-2"
						>
							{{ createLoading ? 'Создание…' : 'Добавить' }}
						</button>
					</form>
				</section>

				<div v-if="pending" class="mt-8 text-[#4A5565]">Загрузка…</div>
				<div v-else-if="fetchError" class="mt-8 text-red-600">
					Ошибка загрузки
				</div>

				<ul v-else class="mt-8 space-y-4">
					<li
						v-for="row in admins"
						:key="row.id"
						class="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm"
					>
						<div class="flex flex-wrap items-start justify-between gap-3">
							<div>
								<p class="font-medium text-[#101828]">{{ row.email }}</p>
								<p class="mt-1 text-xs text-[#6A7282]">
									Создан: {{ formatDate(row.created_at) }}
									<span v-if="row.id === me?.id" class="ml-2 text-[#155DFC]">
										(вы)
									</span>
								</p>
							</div>
							<div class="flex flex-wrap gap-2">
								<button
									type="button"
									class="rounded-lg border border-[#E5E7EB] px-3 py-1.5 text-xs font-medium text-[#364153] hover:bg-[#F9FAFB]"
									@click="startEdit(row)"
								>
									Изменить
								</button>
								<button
									type="button"
									class="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-800 hover:bg-red-100 disabled:opacity-40"
									:disabled="row.id === me?.id"
									@click="onDelete(row)"
								>
									Удалить
								</button>
							</div>
						</div>

						<div
							v-if="editingId === row.id"
							class="mt-4 border-t border-[#F3F4F6] pt-4"
						>
							<form
								class="grid gap-3 sm:grid-cols-2"
								@submit.prevent="onSaveEdit"
							>
								<div class="sm:col-span-2">
									<label class="block text-sm font-medium text-[#364153]"
										>Email</label
									>
									<input
										v-model="editEmail"
										type="email"
										class="mt-1 w-full rounded-xl border border-[#E5E7EB] px-3 py-2 text-[#101828]"
										required
									/>
								</div>
								<div class="sm:col-span-2">
									<label class="block text-sm font-medium text-[#364153]"
										>Новый пароль (необязательно)</label
									>
									<input
										v-model="editPassword"
										type="password"
										minlength="8"
										placeholder="Оставьте пустым, чтобы не менять"
										class="mt-1 w-full rounded-xl border border-[#E5E7EB] px-3 py-2 text-[#101828]"
									/>
								</div>
								<p v-if="editError" class="sm:col-span-2 text-sm text-red-600">
									{{ editError }}
								</p>
								<div class="flex flex-wrap gap-2 sm:col-span-2">
									<button
										type="submit"
										:disabled="editLoading"
										class="rounded-xl bg-[#155DFC] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
									>
										{{ editLoading ? 'Сохранение…' : 'Сохранить' }}
									</button>
									<button
										type="button"
										class="rounded-xl border border-[#E5E7EB] px-4 py-2 text-sm font-medium text-[#364153]"
										@click="cancelEdit"
									>
										Отмена
									</button>
								</div>
							</form>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false, middleware: 'admin' })

useHead({
	title: 'Админ — администраторы',
	meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

type AdminRow = {
	id: number
	email: string
	created_at: number
	updated_at: number
}

const { data: me } = await useFetch<{ id: number; email: string }>(
	'/api/admin/me',
	{
		credentials: 'include',
	},
)

const {
	data,
	pending,
	error: fetchError,
	refresh,
} = await useFetch<{ admins: AdminRow[] }>('/api/admin/admins', {
	credentials: 'include',
})

const admins = computed(() => data.value?.admins ?? [])

const createEmail = ref('')
const createPassword = ref('')
const createLoading = ref(false)
const createError = ref('')

const editingId = ref<number | null>(null)
const editEmail = ref('')
const editPassword = ref('')
const editLoading = ref(false)
const editError = ref('')

const formatDate = (ts: number) => {
	const d = new Date(ts)
	return d.toLocaleString('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	})
}

const onCreate = async () => {
	createError.value = ''
	createLoading.value = true
	try {
		await $fetch('/api/admin/admins', {
			method: 'POST',
			body: {
				email: createEmail.value.trim(),
				password: createPassword.value,
			},
			credentials: 'include',
		})
		createEmail.value = ''
		createPassword.value = ''
		await refresh()
	} catch (e: unknown) {
		createError.value =
			e && typeof e === 'object' && 'data' in e
				? String(
						(e as { data?: { statusMessage?: string } }).data?.statusMessage,
					)
				: 'Ошибка'
	} finally {
		createLoading.value = false
	}
}

const startEdit = (row: AdminRow) => {
	editingId.value = row.id
	editEmail.value = row.email
	editPassword.value = ''
	editError.value = ''
}

const cancelEdit = () => {
	editingId.value = null
	editPassword.value = ''
	editError.value = ''
}

const onSaveEdit = async () => {
	if (editingId.value == null) return
	editError.value = ''
	const id = editingId.value
	const body: { email: string; password?: string } = {
		email: editEmail.value.trim(),
	}
	if (editPassword.value.trim().length > 0) {
		body.password = editPassword.value
	}
	editLoading.value = true
	try {
		await $fetch(`/api/admin/admins/${id}`, {
			method: 'PUT',
			body,
			credentials: 'include',
		})
		cancelEdit()
		await refresh()
	} catch (e: unknown) {
		editError.value =
			e && typeof e === 'object' && 'data' in e
				? String(
						(e as { data?: { statusMessage?: string } }).data?.statusMessage,
					)
				: 'Ошибка'
	} finally {
		editLoading.value = false
	}
}

const onDelete = async (row: AdminRow) => {
	if (row.id === me.value?.id) return
	if (!confirm(`Удалить администратора ${row.email}?`)) return
	try {
		await $fetch(`/api/admin/admins/${row.id}`, {
			method: 'DELETE',
			credentials: 'include',
		})
		await refresh()
	} catch (e: unknown) {
		alert(
			e && typeof e === 'object' && 'data' in e
				? String(
						(e as { data?: { statusMessage?: string } }).data?.statusMessage,
					)
				: 'Ошибка удаления',
		)
	}
}
</script>
