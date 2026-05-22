<template>
	<section id="contacts" class="section-y scroll-mt-header bg-[#F9FAFB]">
		<div class="container-site">
			<Reveal variant="fade-up">
				<div class="text-center">
					<h2 class="heading-section">Свяжитесь с нами</h2>
					<p class="text-lead mx-auto mt-3 max-w-2xl sm:mt-4">
						Готовы ответить на все ваши вопросы и обсудить ваш проект
					</p>
				</div>
			</Reveal>

			<div
				class="mt-10 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:items-stretch lg:gap-8"
			>
				<div class="flex flex-col gap-4 sm:gap-6 lg:gap-8">
					<Reveal
						v-for="(card, index) in contactCards"
						:key="card.title"
						variant="fade-right"
						:delay="staggerDelay(index, 0.1)"
					>
						<ContactCard :title="card.title" :icon-src="card.iconSrc">
							<template v-if="card.type === 'phones'">
								<a
									href="tel:+998910023343"
									class="block text-base leading-7 text-[#364153] sm:text-lg"
								>
									+998 91 002 33 43
								</a>
								<a
									href="tel:+998999372027"
									class="mt-1 block text-base leading-7 text-[#364153] sm:mt-2 sm:text-lg"
								>
									+998 99 937 20 27
								</a>
							</template>
							<template v-else-if="card.type === 'address'">
								<a
									:href="yandexMapsRouteUrl"
									target="_blank"
									rel="noopener noreferrer"
									class="text-sm leading-6 text-[#364153] underline-offset-2 transition hover:text-[#155DFC] hover:underline sm:text-base"
								>
									{{ officeAddress.display }}
								</a>
							</template>
							<template v-else-if="card.type === 'telegram'">
								<a
									href="#"
									class="text-base leading-7 text-[#155DFC] sm:text-lg"
								>
									@urbantechstroy
								</a>
							</template>
							<template v-else>
								<p class="text-sm leading-6 text-[#364153] sm:text-base">
									Любым удобным способом
								</p>
								<p
									class="mt-1 text-xs leading-5 text-[#6A7282] sm:mt-2 sm:text-sm"
								>
									Наличные, карты, банковский перевод, перечисление
								</p>
							</template>
						</ContactCard>
					</Reveal>
				</div>

				<Reveal
					variant="fade-left"
					:delay="0.15"
					class="flex min-h-[280px] w-full lg:min-h-0 lg:h-full"
				>
					<div
						class="flex h-full min-h-[280px] w-full flex-col overflow-hidden rounded-[16px] border border-[#F3F4F6] bg-white p-1 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] lg:min-h-0"
					>
						<ClientOnly>
							<div class="flex h-full min-h-[272px] flex-1 flex-col lg:min-h-0">
								<YandexMap />
							</div>
							<template #fallback>
								<div
									class="flex h-full min-h-[272px] flex-1 items-center justify-center rounded-[15px] bg-[#E5E7EB] lg:min-h-0"
								>
									<p class="text-sm text-[#4A5565]">Загрузка карты…</p>
								</div>
							</template>
						</ClientOnly>
					</div>
				</Reveal>
			</div>

			<Reveal variant="fade-up" class="mt-10 lg:mt-14">
				<div
					class="mx-auto max-w-[640px] rounded-[16px] border border-[#E5E7EB] bg-white p-6 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:p-8"
				>
					<h3 class="text-center text-xl font-bold text-[#101828] sm:text-2xl">
						Оставить заявку
					</h3>
					<p class="mt-2 text-center text-sm text-[#4A5565]">
						Оставьте контакты — перезвоним и обсудим ваш проект
					</p>
					<form class="mt-6 space-y-4" @submit.prevent="onLeadSubmit">
						<input
							v-model="leadForm.name"
							type="text"
							class="field-control"
							placeholder="Ваше имя"
							required
						/>
						<input
							v-model="leadForm.phone"
							type="tel"
							class="field-control"
							placeholder="+998 __ ___ __ __"
							required
						/>
						<textarea
							v-model="leadForm.message"
							rows="4"
							class="field-control min-h-[120px] resize-y py-3"
							placeholder="Сообщение (необязательно)"
						/>
						<button
							type="submit"
							:disabled="leadSubmitting"
							class="w-full rounded-[14px] bg-[#155DFC] py-3.5 text-sm font-semibold text-white disabled:opacity-60 sm:text-base"
						>
							{{ leadSubmitting ? 'Отправка…' : 'Отправить' }}
						</button>
						<p
							v-if="leadOk"
							class="text-center text-sm font-medium text-green-700"
						>
							Спасибо! Заявка принята.
						</p>
						<p v-if="leadErr" class="text-center text-sm text-red-600">
							{{ leadErr }}
						</p>
					</form>
				</div>
			</Reveal>
		</div>
	</section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { officeAddress, yandexMapsRouteUrl } from '~/data/contacts'

const leadForm = reactive({
	name: '',
	phone: '',
	message: '',
})
const leadSubmitting = ref(false)
const leadOk = ref(false)
const leadErr = ref('')

const onLeadSubmit = async () => {
	leadErr.value = ''
	leadOk.value = false
	leadSubmitting.value = true
	try {
		await $fetch('/api/leads', {
			method: 'POST',
			body: {
				source: 'contact',
				name: leadForm.name,
				phone: leadForm.phone,
				message: leadForm.message || undefined,
			},
		})
		leadOk.value = true
		leadForm.name = ''
		leadForm.phone = ''
		leadForm.message = ''
	} catch {
		leadErr.value = 'Не удалось отправить. Попробуйте позже или позвоните нам.'
	} finally {
		leadSubmitting.value = false
	}
}

const contactCards = [
	{ type: 'phones', title: 'Телефоны', iconSrc: '/icons/contact-phone.svg' },
	{
		type: 'address',
		title: 'Адрес',
		iconSrc: '/icons/contact-address.svg',
	},
	{
		type: 'telegram',
		title: 'Telegram',
		iconSrc: '/icons/contact-telegram.svg',
	},
	{
		type: 'payment',
		title: 'Оплата',
		iconSrc: '/icons/contact-payment.svg',
	},
] as const

const ContactCard = defineComponent({
	name: 'ContactCard',
	props: {
		title: { type: String, required: true },
		iconSrc: { type: String, required: true },
	},
	setup(props, { slots }) {
		return () =>
			h(
				'div',
				{
					class:
						'card-interactive rounded-[16px] border border-[#F3F4F6] bg-white px-5 pb-6 pt-5 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:px-[33px] sm:pb-8 sm:pt-[33px]',
				},
				[
					h('div', { class: 'flex items-start gap-3 sm:gap-4' }, [
						h(
							'div',
							{
								class:
									'flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#DBEAFE] p-2 sm:h-12 sm:w-12 sm:px-3',
							},
							[
								h('img', {
									src: props.iconSrc,
									alt: '',
									class: 'h-5 w-5 sm:h-6 sm:w-6',
								}),
							],
						),
						h('div', { class: 'min-w-0 pt-0.5 sm:pt-1' }, [
							h(
								'h3',
								{
									class:
										'text-base font-bold leading-7 text-[#101828] sm:text-lg',
								},
								props.title,
							),
							h('div', { class: 'mt-2 sm:mt-3' }, slots.default?.()),
						]),
					]),
				],
			)
	},
})
</script>

<style scoped>
.field-control {
	@apply h-[49px] w-full rounded-[14px] border border-[#D1D5DC] bg-white px-4 text-[16px] leading-6 text-[#101828] outline-none transition placeholder:text-[#101828]/50 focus:border-[#155DFC];
}
</style>
