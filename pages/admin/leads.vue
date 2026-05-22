<template>
	<div>
		<SiteHeader />
		<div class="min-h-dvh bg-[#F3F4F6] pb-20 pt-[calc(81px+1.5rem)]">
			<div class="container-site max-w-5xl">
				<NuxtLink to="/admin" class="text-sm text-[#155DFC]">← Назад</NuxtLink>
				<h1 class="mt-4 text-2xl font-bold text-[#101828]">Лиды</h1>
				<p class="mt-1 text-sm text-[#4A5565]">
					Заявки из блока «Свяжитесь с нами» и формы «Рассчитайте стоимость
					проекта» — со всеми полями, которые указал пользователь.
				</p>

				<div v-if="pending" class="mt-8 text-[#4A5565]">Загрузка…</div>
				<div v-else-if="error" class="mt-8 text-red-600">Ошибка загрузки</div>

				<ul v-else class="mt-8 space-y-4">
					<li
						v-for="row in items"
						:key="row.id"
						class="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm"
					>
						<div
							class="flex flex-wrap items-center justify-between gap-2 border-b border-[#F3F4F6] pb-3"
						>
							<div class="flex flex-wrap items-center gap-2">
								<span class="text-xs font-medium text-[#6A7282]"
									>#{{ row.id }}</span
								>
								<span
									class="rounded-full px-2.5 py-0.5 text-xs font-medium"
									:class="
										row.source === 'calculator'
											? 'bg-[#EFF6FF] text-[#155DFC]'
											: 'bg-[#F0FDF4] text-[#15803D]'
									"
								>
									{{
										row.source === 'calculator'
											? 'Расчёт стоимости'
											: 'Свяжитесь с нами'
									}}
								</span>
							</div>
							<time
								class="text-sm text-[#4A5565]"
								:datetime="new Date(row.created_at).toISOString()"
							>
								{{ formatDate(row.created_at) }}
							</time>
						</div>

						<dl
							class="mt-4 grid gap-3 text-sm sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2"
						>
							<div>
								<dt class="font-medium text-[#6A7282]">Имя</dt>
								<dd class="mt-0.5 text-[#101828]">{{ row.name || '—' }}</dd>
							</div>
							<div>
								<dt class="font-medium text-[#6A7282]">Телефон</dt>
								<dd class="mt-0.5 font-medium text-[#101828]">
									{{ row.phone }}
								</dd>
							</div>
							<div v-if="row.email" class="sm:col-span-2">
								<dt class="font-medium text-[#6A7282]">Email</dt>
								<dd class="mt-0.5 text-[#101828]">{{ row.email }}</dd>
							</div>
						</dl>

						<!-- Контакты: сообщение -->
						<div
							v-if="row.source === 'contact' && row.message"
							class="mt-4 rounded-xl bg-[#F9FAFB] p-4"
						>
							<p class="text-xs font-medium uppercase text-[#6A7282]">
								Сообщение
							</p>
							<p class="mt-1 whitespace-pre-wrap text-[#101828]">
								{{ row.message }}
							</p>
						</div>
						<div
							v-else-if="row.source === 'contact' && !row.message"
							class="mt-4 text-sm text-[#4A5565]"
						>
							Сообщение не указано
						</div>

						<!-- Калькулятор: все поля формы -->
						<div
							v-if="row.source === 'calculator'"
							class="mt-4 rounded-xl bg-[#F9FAFB] p-4"
						>
							<p class="text-xs font-medium uppercase text-[#6A7282]">
								Данные формы расчёта
							</p>
							<dl
								v-if="calcFields(row.metadata)"
								class="mt-3 grid gap-3 sm:grid-cols-2"
							>
								<div>
									<dt class="text-xs text-[#6A7282]">Тип услуги</dt>
									<dd class="mt-0.5 font-medium text-[#101828]">
										{{ calcFields(row.metadata)!.serviceLabel }}
									</dd>
								</div>
								<div>
									<dt class="text-xs text-[#6A7282]">Площадь (м²)</dt>
									<dd class="mt-0.5 font-medium text-[#101828]">
										{{ calcFields(row.metadata)!.area }}
									</dd>
								</div>
								<div class="sm:col-span-2">
									<dt class="text-xs text-[#6A7282]">Бюджет</dt>
									<dd class="mt-0.5 font-medium text-[#101828]">
										{{ calcFields(row.metadata)!.budget }}
									</dd>
								</div>
							</dl>
							<p v-else class="mt-2 text-sm text-[#4A5565]">
								Нет сохранённых полей формы (старая заявка).
								<span
									v-if="row.metadata"
									class="mt-1 block font-mono text-xs text-[#6A7282]"
								>
									{{ row.metadata }}
								</span>
							</p>
						</div>
					</li>
				</ul>

				<p
					v-if="!pending && !error && !items.length"
					class="mt-8 text-[#4A5565]"
				>
					Пока нет заявок
				</p>

				<p v-if="total" class="mt-6 text-sm text-[#4A5565]">
					Всего: {{ total }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false, middleware: 'admin' })

useHead({
	title: 'Админ — лиды',
	meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

type LeadRow = {
	id: number
	source: string
	name: string | null
	phone: string
	email: string | null
	message: string | null
	metadata: string | null
	created_at: number
}

type CalcMeta = {
	serviceType?: string
	serviceLabel?: string
	area?: string
	budget?: string
}

const { data, pending, error } = await useFetch<{
	items: LeadRow[]
	total: number
}>('/api/admin/leads', { credentials: 'include', query: { limit: 200 } })

const items = computed(() => data.value?.items ?? [])
const total = computed(() => data.value?.total ?? 0)

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

function calcFields(metadata: string | null): {
	serviceLabel: string
	area: string
	budget: string
} | null {
	if (!metadata?.trim()) return null
	try {
		const o = JSON.parse(metadata) as CalcMeta
		if (!o || typeof o !== 'object' || Array.isArray(o)) return null
		const serviceLabel =
			(o.serviceLabel && String(o.serviceLabel).trim()) ||
			(o.serviceType && String(o.serviceType).trim()) ||
			''
		const area = o.area != null && o.area !== '' ? String(o.area) : ''
		const budget =
			o.budget != null && String(o.budget).trim() !== '' ? String(o.budget) : ''
		if (!serviceLabel && !area && !budget) return null
		return {
			serviceLabel: serviceLabel || '—',
			area: area || '—',
			budget: budget || '—',
		}
	} catch {
		return null
	}
}
</script>
