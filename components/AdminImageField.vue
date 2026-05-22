<template>
	<div class="mt-4">
		<label class="block text-sm font-medium text-[#364153]">{{ label }}</label>
		<p v-if="hint" class="mt-1 text-xs text-[#6A7282]">{{ hint }}</p>

		<div
			class="mt-3 flex flex-col gap-4 rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] p-4 sm:flex-row sm:items-start"
		>
			<div
				class="flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#E5E7EB] bg-white"
				:class="
					previewUrl ? 'h-36 w-full sm:h-32 sm:w-44' : 'h-28 w-full sm:w-44'
				"
			>
				<img
					v-if="previewUrl"
					:src="previewUrl"
					alt=""
					class="max-h-36 w-full object-contain sm:max-h-32"
				/>
				<span v-else class="px-4 py-8 text-center text-sm text-[#6A7282]">
					Нет изображения
				</span>
			</div>

			<div class="min-w-0 flex-1 space-y-2">
				<div class="flex flex-wrap gap-2">
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
						{{
							uploading
								? 'Загрузка…'
								: previewUrl
									? 'Заменить файлом'
									: 'Загрузить файл'
						}}
					</label>
					<button
						v-if="modelValue?.trim()"
						type="button"
						class="rounded-xl border border-red-200 bg-white px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-50"
						:disabled="uploading"
						@click="clearImage"
					>
						Убрать изображение
					</button>
				</div>

				<details
					class="group rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm"
				>
					<summary
						class="cursor-pointer list-none font-medium text-[#364153] marker:content-none [&::-webkit-details-marker]:hidden"
					>
						<span class="text-[#155DFC] group-open:underline">Свой URL</span>
						<span class="ml-1 font-normal text-[#6A7282]"
							>— вставить ссылку вручную</span
						>
					</summary>
					<input
						:value="modelValue"
						type="text"
						:placeholder="placeholder || 'https://… или /images/…'"
						class="mt-2 w-full rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#101828]"
						@input="
							$emit(
								'update:modelValue',
								($event.target as HTMLInputElement).value,
							)
						"
					/>
				</details>

				<p v-if="err" class="text-sm text-red-600">{{ err }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	modelValue: string
	label: string
	placeholder?: string
	hint?: string
}>()

const emit = defineEmits<{
	'update:modelValue': [value: string]
}>()

const uploading = ref(false)
const err = ref('')

const previewUrl = computed(() => props.modelValue?.trim() ?? '')

function clearImage() {
	emit('update:modelValue', '')
	err.value = ''
}

async function onFile(e: Event) {
	const input = e.target as HTMLInputElement
	const file = input.files?.[0]
	input.value = ''
	if (!file) return
	uploading.value = true
	err.value = ''
	try {
		const body = new FormData()
		body.append('file', file)
		const res = await $fetch<{ url: string }>('/api/admin/upload', {
			method: 'POST',
			body,
			credentials: 'include',
		})
		emit('update:modelValue', res.url)
	} catch {
		err.value = 'Не удалось загрузить файл'
	} finally {
		uploading.value = false
	}
}
</script>
