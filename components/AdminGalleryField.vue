<template>
	<div>
		<label class="block text-sm font-medium text-[#364153]">{{ label }}</label>
		<p class="mt-1 text-xs text-[#6A7282]">
			Загрузка с компьютера, порядок стрелками, удаление кнопкой. Можно добавить
			внешний URL ниже.
		</p>

		<ul
			v-if="urls.length"
			class="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
		>
			<li
				v-for="(url, index) in urls"
				:key="`${index}-${url}`"
				class="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm"
			>
				<div class="relative aspect-[4/3] bg-[#F3F4F6]">
					<img :src="url" alt="" class="h-full w-full object-cover" />
				</div>
				<div class="flex flex-wrap gap-1 border-t border-[#F3F4F6] p-2">
					<button
						type="button"
						class="rounded-lg border border-[#E5E7EB] px-2 py-1 text-xs font-medium text-[#364153] hover:bg-[#F9FAFB] disabled:opacity-40"
						:disabled="index === 0"
						title="Вверх"
						@click="move(index, -1)"
					>
						↑
					</button>
					<button
						type="button"
						class="rounded-lg border border-[#E5E7EB] px-2 py-1 text-xs font-medium text-[#364153] hover:bg-[#F9FAFB] disabled:opacity-40"
						:disabled="index >= urls.length - 1"
						title="Вниз"
						@click="move(index, 1)"
					>
						↓
					</button>
					<button
						type="button"
						class="ml-auto rounded-lg border border-red-200 bg-red-50 px-2 py-1 text-xs font-medium text-red-800 hover:bg-red-100"
						@click="removeAt(index)"
					>
						Удалить
					</button>
				</div>
			</li>
		</ul>

		<div class="mt-3 flex flex-wrap items-end gap-2">
			<label
				class="cursor-pointer rounded-xl bg-[#155DFC] px-3 py-2 text-sm font-medium text-white hover:bg-[#1248CC] disabled:opacity-50"
			>
				<input
					type="file"
					accept="image/jpeg,image/png,image/webp,image/gif"
					class="sr-only"
					:disabled="uploading"
					@change="onFile"
				/>
				{{ uploading ? 'Загрузка…' : 'Добавить фото' }}
			</label>
			<div class="flex min-w-[12rem] flex-1 flex-wrap gap-2">
				<input
					v-model="manualUrl"
					type="text"
					placeholder="URL картинки"
					class="min-w-[10rem] flex-1 rounded-xl border border-[#E5E7EB] px-3 py-2 text-sm text-[#101828]"
					@keydown.enter.prevent="addManual"
				/>
				<button
					type="button"
					class="rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-medium text-[#364153] hover:bg-[#F9FAFB]"
					@click="addManual"
				>
					Добавить URL
				</button>
			</div>
		</div>
		<p v-if="galleryErr" class="mt-2 text-sm text-red-600">{{ galleryErr }}</p>
	</div>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		modelValue: string[]
		label?: string
	}>(),
	{ label: 'Галерея' },
)

const emit = defineEmits<{
	'update:modelValue': [value: string[]]
}>()

const uploading = ref(false)
const galleryErr = ref('')
const manualUrl = ref('')

const urls = computed(() => props.modelValue ?? [])

function setUrls(next: string[]) {
	emit('update:modelValue', next)
}

function removeAt(i: number) {
	const next = [...urls.value]
	next.splice(i, 1)
	setUrls(next)
}

function move(from: number, delta: number) {
	const to = from + delta
	if (to < 0 || to >= urls.value.length) return
	const next = [...urls.value]
	const [item] = next.splice(from, 1)
	next.splice(to, 0, item)
	setUrls(next)
}

function addManual() {
	const t = manualUrl.value.trim()
	if (!t) return
	galleryErr.value = ''
	setUrls([...urls.value, t])
	manualUrl.value = ''
}

async function onFile(e: Event) {
	const input = e.target as HTMLInputElement
	const file = input.files?.[0]
	input.value = ''
	if (!file) return
	uploading.value = true
	galleryErr.value = ''
	try {
		const body = new FormData()
		body.append('file', file)
		const res = await $fetch<{ url: string }>('/api/admin/upload', {
			method: 'POST',
			body,
			credentials: 'include',
		})
		setUrls([...urls.value, res.url])
	} catch {
		galleryErr.value = 'Не удалось загрузить'
	} finally {
		uploading.value = false
	}
}
</script>
