<template>
	<section
		id="calculator"
		class="scroll-mt-header relative overflow-hidden py-16 md:py-20 lg:py-24"
		style="
			background: linear-gradient(
				135deg,
				rgba(4, 25, 72, 1) 0%,
				rgba(25, 60, 184, 1) 100%
			);
		"
	>
		<div
			class="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-white opacity-10 blur-[128px]"
			aria-hidden="true"
		/>
		<div
			class="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white opacity-10 blur-[128px]"
			aria-hidden="true"
		/>

		<div class="container-site relative z-[1] mx-auto max-w-[1024px]">
			<div class="flex flex-col items-center text-center">
				<Reveal variant="scale" :delay="0.05">
					<div
						class="flex h-16 w-16 items-center justify-center rounded-[16px] bg-white/10"
					>
						<img
							src="/icons/calculator-section-icon.svg"
							alt=""
							class="h-8 w-8"
						/>
					</div>
				</Reveal>

				<Reveal variant="fade-up" :delay="0.15">
					<h2
						class="mt-6 text-[32px] font-bold leading-tight text-white sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[48px]"
					>
						Рассчитайте стоимость проекта
					</h2>
				</Reveal>

				<Reveal variant="fade-up" :delay="0.25">
					<p
						class="mt-4 max-w-[672px] text-base leading-7 text-[#DBEAFE] sm:mt-6 sm:text-[20px] sm:leading-7"
					>
						Заполните форму и получите предварительный расчет стоимости в
						течение 24 часов
					</p>
				</Reveal>
			</div>

			<Reveal variant="fade-up" :delay="0.2" :duration="1">
				<form
					class="mt-10 rounded-[24px] bg-white px-5 pb-8 pt-8 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] sm:mt-12 sm:px-10 sm:pb-10 sm:pt-10 lg:px-12 lg:pb-12 lg:pt-12"
					@submit.prevent="onSubmit"
				>
					<div class="flex flex-col gap-6">
						<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
							<CalculatorField label="Тип услуги" required>
								<select
									v-model="form.serviceType"
									class="field-control appearance-none"
									required
								>
									<option disabled value="">Выберите услугу</option>
									<option
										v-for="option in serviceOptions"
										:key="option.value"
										:value="option.value"
									>
										{{ option.label }}
									</option>
								</select>
							</CalculatorField>

							<CalculatorField label="Площадь (м²)" required>
								<input
									v-model="form.area"
									type="number"
									min="1"
									class="field-control"
									placeholder="Например: 100"
									required
								/>
							</CalculatorField>

							<CalculatorField label="Бюджет" required>
								<select
									v-model="form.budget"
									class="field-control appearance-none"
									required
								>
									<option disabled value="">Выберите бюджет</option>
									<option
										v-for="option in calculatorBudgetOptions"
										:key="option"
										:value="option"
									>
										{{ option }}
									</option>
								</select>
							</CalculatorField>

							<CalculatorField label="Ваше имя" required>
								<input
									v-model="form.name"
									type="text"
									class="field-control"
									placeholder="Введите ваше имя"
									required
								/>
							</CalculatorField>
						</div>

						<CalculatorField label="Номер телефона" required>
							<input
								v-model="form.phone"
								type="tel"
								class="field-control"
								placeholder="+998 __ ___ __ __"
								required
							/>
						</CalculatorField>

						<button
							type="submit"
							:disabled="submitting"
							class="inline-flex h-14 w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-r from-[#155DFC] to-[#1447E6] text-[16px] font-medium leading-6 text-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
						>
							<img
								src="/icons/calculator-send-icon.svg"
								alt=""
								class="h-5 w-5"
							/>
							<span>Получить расчет</span>
						</button>

						<p class="text-center text-[14px] leading-5 text-[#4A5565]">
							Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
						</p>
						<p
							v-if="submitOk"
							class="text-center text-sm font-medium text-green-700"
						>
							Заявка отправлена. Мы свяжемся с вами в ближайшее время.
						</p>
						<p v-if="submitError" class="text-center text-sm text-red-600">
							{{ submitError }}
						</p>
					</div>
				</form>
			</Reveal>
		</div>
	</section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { calculatorBudgetOptions } from '~/data/calculator'

const { data: servicesList } = await useSiteServicesList()

const serviceOptions = computed(() =>
	(servicesList.value ?? []).map(s => ({
		value: s.slug,
		label: s.title,
	})),
)

const form = reactive({
	serviceType: '',
	area: '',
	budget: '',
	name: '',
	phone: '',
})

const submitting = ref(false)
const submitOk = ref(false)
const submitError = ref('')

const onSubmit = async () => {
	submitError.value = ''
	submitOk.value = false
	submitting.value = true
	try {
		const serviceLabel =
			serviceOptions.value.find(o => o.value === form.serviceType)?.label ??
			form.serviceType

		await $fetch('/api/leads', {
			method: 'POST',
			body: {
				source: 'calculator',
				name: form.name,
				phone: form.phone,
				metadata: {
					serviceType: form.serviceType,
					serviceLabel,
					area: String(form.area).trim(),
					budget: form.budget,
				},
			},
		})
		submitOk.value = true
		Object.assign(form, {
			serviceType: '',
			area: '',
			budget: '',
			name: '',
			phone: '',
		})
	} catch {
		submitError.value =
			'Не удалось отправить заявку. Попробуйте позже или позвоните нам.'
	} finally {
		submitting.value = false
	}
}

const CalculatorField = defineComponent({
	name: 'CalculatorField',
	props: {
		label: { type: String, required: true },
		required: { type: Boolean, default: false },
	},
	setup(props, { slots }) {
		return () =>
			h('div', { class: 'flex flex-col gap-2' }, [
				h(
					'label',
					{
						class: 'text-left text-[16px] font-medium leading-6 text-[#364153]',
					},
					[
						props.label,
						props.required
							? h('span', { class: 'text-[#155DFC]' }, ' *')
							: null,
					],
				),
				slots.default?.(),
			])
	},
})
</script>

<style scoped>
.field-control {
	@apply h-[49px] w-full rounded-[14px] border border-[#D1D5DC] bg-white px-4 py-3 text-[16px] leading-6 text-[#101828] outline-none transition placeholder:text-[#101828]/50 focus:border-[#155DFC];
}

select.field-control {
	@apply cursor-pointer;
}
</style>
