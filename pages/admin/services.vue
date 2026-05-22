<template>
	<div>
		<SiteHeader />
		<div class="min-h-dvh bg-[#F3F4F6] pb-20 pt-[calc(81px+1.5rem)]">
			<div class="container-site max-w-5xl">
				<NuxtLink to="/admin" class="text-sm text-[#155DFC]">← Назад</NuxtLink>
				<h1 class="mt-4 text-2xl font-bold text-[#101828]">
					Услуги — карточки и контент
				</h1>
				<p class="mt-1 text-sm text-[#4A5565]">
					Карточки из кода: скрыть, сбросить правки, полностью убрать с сайта
					(можно вернуть). Дополнительные карточки — только в базе.
				</p>

				<div v-if="!pending && !error" class="mt-6 flex flex-wrap gap-3">
					<button
						type="button"
						class="rounded-xl bg-[#155DFC] px-4 py-2.5 text-sm font-semibold text-white"
						@click="addExtraService"
					>
						+ Добавить услугу
					</button>
				</div>

				<div v-if="pending" class="mt-8 text-[#4A5565]">Загрузка…</div>
				<div v-else-if="error" class="mt-8 text-red-600">Ошибка загрузки</div>

				<form v-else class="mt-8 space-y-8" @submit.prevent="onSave">
					<div
						v-for="slug in editorSlugs"
						:key="slug"
						class="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
					>
						<div
							class="flex flex-wrap items-start justify-between gap-3 border-b border-[#F3F4F6] pb-3"
						>
							<div>
								<p
									class="text-xs font-medium uppercase tracking-wide text-[#6A7282]"
								>
									{{ slug }}
								</p>
								<div class="mt-1 flex flex-wrap gap-2">
									<span
										v-if="isStatic(slug)"
										class="rounded-full bg-[#F0F9FF] px-2 py-0.5 text-xs text-[#026AA2]"
										>Из кода</span
									>
									<span
										v-else
										class="rounded-full bg-[#FFFAEB] px-2 py-0.5 text-xs text-[#B54708]"
										>Добавлена вручную</span
									>
									<span
										v-if="isStatic(slug) && isHidden(slug)"
										class="rounded-full bg-[#FEE2E2] px-2 py-0.5 text-xs text-[#B91C1C]"
										>Скрыта с сайта</span
									>
								</div>
							</div>
							<div class="flex flex-wrap gap-2">
								<button
									v-if="isStatic(slug)"
									type="button"
									class="rounded-lg border border-[#E5E7EB] px-3 py-1.5 text-xs font-medium text-[#364153] hover:bg-[#F9FAFB]"
									@click="toggleHidden(slug)"
								>
									{{ isHidden(slug) ? 'Показать на сайте' : 'Скрыть с сайта' }}
								</button>
								<button
									v-if="isStatic(slug)"
									type="button"
									class="rounded-lg border border-[#E5E7EB] px-3 py-1.5 text-xs font-medium text-[#364153] hover:bg-[#F9FAFB]"
									@click="resetToCodeDefaults(slug)"
								>
									Сбросить к коду
								</button>
								<button
									v-if="isStatic(slug)"
									type="button"
									class="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-800 hover:bg-red-100"
									@click="removeStatic(slug)"
								>
									Удалить с сайта
								</button>
								<button
									v-if="!isStatic(slug)"
									type="button"
									class="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-800 hover:bg-red-100"
									@click="removeExtra(slug)"
								>
									Удалить карточку
								</button>
							</div>
						</div>

						<div v-if="fields[slug]" class="mt-4 space-y-4">
							<label class="block text-sm font-medium text-[#364153]"
								>Заголовок</label
							>
							<input
								v-model="fields[slug].title"
								type="text"
								class="w-full rounded-xl border border-[#E5E7EB] px-3 py-2 text-[#101828]"
							/>
							<label class="block text-sm font-medium text-[#364153]"
								>Краткое описание</label
							>
							<textarea
								v-model="fields[slug].shortDescription"
								rows="3"
								class="w-full rounded-xl border border-[#E5E7EB] px-3 py-2 text-[#101828]"
							/>
							<label class="block text-sm font-medium text-[#364153]"
								>Полное описание</label
							>
							<textarea
								v-model="fields[slug].description"
								rows="5"
								class="w-full rounded-xl border border-[#E5E7EB] px-3 py-2 text-[#101828]"
							/>

							<AdminImageField
								v-model="fields[slug].image"
								label="Картинка на карточке"
								hint="URL или загрузка до 5 МБ."
							/>
							<AdminImageField
								v-model="fields[slug].heroImage"
								label="Картинка в шапке страницы"
								placeholder="Как на карточке, если пусто"
								hint="Если пусто при сохранении — подставится картинка карточки."
							/>

							<div class="mt-2">
								<AdminGalleryField
									:model-value="galleryUrls[slug] ?? []"
									@update:model-value="galleryUrls[slug] = $event"
								/>
							</div>
						</div>
					</div>

					<section
						v-if="deletedSlugs.length"
						class="rounded-2xl border border-[#FECACA] bg-[#FEF2F2] p-6"
					>
						<h2 class="text-lg font-semibold text-[#991B1B]">
							Удалённые карточки (из кода)
						</h2>
						<p class="mt-1 text-sm text-[#7F1D1D]">
							На сайте не показываются. «Вернуть» — затем «Сохранить всё».
						</p>
						<ul class="mt-4 space-y-2">
							<li
								v-for="slug in deletedSlugs"
								:key="'del-' + slug"
								class="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[#FECACA] bg-white px-4 py-2"
							>
								<code class="text-sm text-[#101828]">{{ slug }}</code>
								<button
									type="button"
									class="rounded-lg border border-[#155DFC] px-3 py-1.5 text-xs font-medium text-[#155DFC] hover:bg-[#EFF6FF]"
									@click="restoreDeleted(slug)"
								>
									Вернуть
								</button>
							</li>
						</ul>
					</section>

					<p v-if="saveMsg" class="text-sm text-green-700">{{ saveMsg }}</p>
					<p v-if="saveErr" class="text-sm text-red-600">{{ saveErr }}</p>
					<button
						type="submit"
						:disabled="saving"
						class="rounded-xl bg-[#155DFC] px-8 py-3 text-sm font-semibold text-white disabled:opacity-60"
					>
						{{ saving ? 'Сохранение…' : 'Сохранить всё' }}
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Service } from '~/data/services'

definePageMeta({ layout: false, middleware: 'admin' })

useHead({
	title: 'Админ — услуги',
	meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const META_KEY = '_meta'

type Row = {
	title: string
	shortDescription: string
	description: string
	image: string
	heroImage: string
}

type AdminPayload = {
	merged: Service[]
	staticSlugs: string[]
	hiddenSlugs: string[]
	deletedSlugs: string[]
	extras: Service[]
	drafts: Record<string, Service>
	defaults: Record<string, Service>
}

function rowFromService(s: Service): Row {
	return {
		title: s.title,
		shortDescription: s.shortDescription,
		description: s.description ?? '',
		image: s.image,
		heroImage: s.heroImage ?? s.image,
	}
}

const fields = reactive<Record<string, Row>>({})
const galleryUrls = reactive<Record<string, string[]>>({})

const hiddenSlugs = ref<string[]>([])
const deletedSlugs = ref<string[]>([])
const extras = ref<Service[]>([])

const pendingReset = ref<Set<string>>(new Set())

const { data, pending, error, refresh } = await useFetch<AdminPayload>(
	'/api/admin/overrides/services',
	{ credentials: 'include' },
)

const staticSlugs = computed(() => data.value?.staticSlugs ?? [])

const activeStaticSlugs = computed(() =>
	staticSlugs.value.filter(s => !deletedSlugs.value.includes(s)),
)

const editorSlugs = computed(() => {
	const st = activeStaticSlugs.value
	const extraOnly = extras.value.map(e => e.slug).filter(sl => !st.includes(sl))
	return [...st, ...extraOnly]
})

function isStatic(slug: string) {
	return staticSlugs.value.includes(slug)
}

function isHidden(slug: string) {
	return hiddenSlugs.value.includes(slug)
}

function syncFromServer() {
	const d = data.value
	if (!d) return

	hiddenSlugs.value = [...d.hiddenSlugs]
	deletedSlugs.value = [...(d.deletedSlugs ?? [])]
	extras.value = d.extras.map(e => ({ ...e }))

	for (const slug of Object.keys(fields)) {
		delete fields[slug]
	}
	for (const slug of Object.keys(galleryUrls)) {
		delete galleryUrls[slug]
	}

	for (const [slug, svc] of Object.entries(d.drafts)) {
		fields[slug] = rowFromService(svc)
		galleryUrls[slug] = [...(svc.gallery ?? [])]
	}
}

function syncFromServerWhenReady() {
	if (pending.value || error.value || !data.value) return
	syncFromServer()
}

/** Только после загрузки — не к `data.value`, иначе сбросятся локально добавленные карточки до сохранения. */
watch([pending, error], syncFromServerWhenReady, { immediate: true })

function toggleHidden(slug: string) {
	const i = hiddenSlugs.value.indexOf(slug)
	if (i >= 0) hiddenSlugs.value.splice(i, 1)
	else hiddenSlugs.value.push(slug)
}

function resetToCodeDefaults(slug: string) {
	const d = data.value?.defaults[slug]
	if (!d) return
	pendingReset.value.add(slug)
	fields[slug] = rowFromService(d)
	galleryUrls[slug] = [...(d.gallery ?? [])]
}

function addExtraService() {
	const slug = `usluga-${Date.now()}`
	const s: Service = {
		slug,
		title: 'Новая услуга',
		shortDescription: '',
		image: '/images/services/service-interior.png',
		heroImage: '/images/services/service-interior.png',
		description: '',
		gallery: [],
	}
	extras.value.push(s)
	fields[slug] = rowFromService(s)
	galleryUrls[slug] = []
}

function removeExtra(slug: string) {
	if (isStatic(slug)) return
	const i = extras.value.findIndex(e => e.slug === slug)
	if (i >= 0) extras.value.splice(i, 1)
	delete fields[slug]
	delete galleryUrls[slug]
}

function removeStatic(slug: string) {
	if (!isStatic(slug)) return
	if (
		!confirm(
			'Убрать карточку с сайта? Её можно вернуть в блоке «Удалённые» ниже, затем сохранить.',
		)
	)
		return
	if (!deletedSlugs.value.includes(slug)) deletedSlugs.value.push(slug)
	const hi = hiddenSlugs.value.indexOf(slug)
	if (hi >= 0) hiddenSlugs.value.splice(hi, 1)
	pendingReset.value.delete(slug)
	delete fields[slug]
	delete galleryUrls[slug]
}

function restoreDeleted(slug: string) {
	const i = deletedSlugs.value.indexOf(slug)
	if (i >= 0) deletedSlugs.value.splice(i, 1)
	const d = data.value?.defaults[slug]
	if (d) {
		fields[slug] = rowFromService(d)
		galleryUrls[slug] = [...(d.gallery ?? [])]
	}
}

function galleryForSlug(slug: string): string[] {
	return (galleryUrls[slug] ?? []).map(s => s.trim()).filter(Boolean)
}

function optionalString(s: string): string | undefined {
	const t = s.trim()
	return t ? t : undefined
}

function rebuildExtrasFromForm(): Service[] {
	return extras.value.map(e => {
		const slug = e.slug
		const row = fields[slug]
		if (!row) return { ...e }
		const hero =
			row.heroImage.trim() || row.image.trim() || e.heroImage || e.image
		return {
			...e,
			slug,
			title: row.title,
			shortDescription: row.shortDescription,
			description: optionalString(row.description),
			image: row.image.trim() || e.image,
			heroImage: hero,
			gallery: galleryForSlug(slug),
		}
	})
}

const saving = ref(false)
const saveMsg = ref('')
const saveErr = ref('')

const onSave = async () => {
	saveMsg.value = ''
	saveErr.value = ''

	const rebuilt = rebuildExtrasFromForm()
	const seen = new Set<string>()
	for (const e of rebuilt) {
		if (seen.has(e.slug)) {
			saveErr.value = 'Дублируется slug: ' + e.slug
			return
		}
		seen.add(e.slug)
	}

	saving.value = true
	try {
		const patch: Record<string, unknown> = {
			[META_KEY]: {
				hiddenSlugs: [...hiddenSlugs.value],
				deletedSlugs: [...deletedSlugs.value],
				extras: rebuilt,
			},
		}

		for (const slug of staticSlugs.value) {
			if (deletedSlugs.value.includes(slug)) {
				patch[slug] = null
				continue
			}
			if (pendingReset.value.has(slug)) {
				patch[slug] = null
				continue
			}
			const row = fields[slug]
			const draft = data.value?.drafts[slug]
			if (!row || !draft) continue
			const hero =
				row.heroImage.trim() ||
				row.image.trim() ||
				(draft.heroImage ?? draft.image)
			patch[slug] = {
				title: row.title,
				shortDescription: row.shortDescription,
				description: optionalString(row.description),
				image: row.image.trim() || draft.image,
				heroImage: hero,
				gallery: galleryForSlug(slug),
			}
		}

		await $fetch('/api/admin/overrides/services', {
			method: 'PUT',
			body: patch,
			credentials: 'include',
		})
		pendingReset.value.clear()
		saveMsg.value = 'Сохранено'
		await refresh()
		syncFromServerWhenReady()
	} catch {
		saveErr.value = 'Не удалось сохранить'
	} finally {
		saving.value = false
	}
}
</script>
