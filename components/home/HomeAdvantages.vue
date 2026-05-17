<template>
	<section
		id="advantages"
		class="section-y"
		style="
			background: linear-gradient(
				135deg,
				rgba(239, 246, 255, 1) 0%,
				rgba(249, 250, 251, 1) 100%
			);
		"
	>
		<div class="container-site">
			<Reveal variant="fade-up">
				<div class="text-center">
					<h2 class="heading-section">Почему выбирают нас</h2>
					<p class="text-lead mx-auto mt-3 max-w-2xl sm:mt-4">
						Мы создаем долгосрочные отношения с клиентами на основе доверия и
						качества
					</p>
				</div>
			</Reveal>

			<div
				class="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4"
			>
				<Reveal
					v-for="(card, index) in advantageCards"
					:key="card.title"
					variant="fade-up"
					:delay="staggerDelay(index)"
				>
					<AdvCard
						:icon-src="card.iconSrc"
						:title="card.title"
						:text="card.text"
					/>
				</Reveal>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const advantageCards = [
	{
		iconSrc: '/icons/adv-icon-1.svg',
		title: 'Комплексный подход',
		text: 'Берем на себя все этапы строительства — от проектирования до финишной отделки',
	},
	{
		iconSrc: '/icons/adv-icon-2.svg',
		title: 'Гарантия качества',
		text: 'Используем только проверенные материалы и предоставляем гарантию на все работы',
	},
	{
		iconSrc: '/icons/adv-icon-3.svg',
		title: 'Соблюдение сроков',
		text: 'Четко планируем процесс и соблюдаем установленные сроки выполнения работ',
	},
	{
		iconSrc: '/icons/adv-icon-4.svg',
		title: 'Индивидуальный подход',
		text: 'Учитываем все пожелания клиента и адаптируем решения под конкретные задачи',
	},
]

type Props = {
	iconSrc: string
	title: string
	text: string
}

const AdvCard = defineComponent({
	name: 'AdvCard',
	props: {
		iconSrc: { type: String, required: true },
		title: { type: String, required: true },
		text: { type: String, required: true },
	},
	setup(props: Props) {
		return () =>
			h(
				'div',
				{
					class:
						'card-interactive rounded-[16px] border border-[#F3F4F6] bg-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]',
				},
				[
					h('div', { class: 'p-5 sm:p-[33px]' }, [
						h(
							'div',
							{
								class:
									'h-12 w-12 rounded-[14px] p-3 sm:h-14 sm:w-14 sm:p-[14px]',
								style:
									'background: linear-gradient(135deg, rgba(43, 127, 255, 1) 0%, rgba(21, 93, 252, 1) 100%)',
							},
							[
								h('img', {
									src: props.iconSrc,
									alt: '',
									class: 'h-6 w-6 sm:h-7 sm:w-7',
								}),
							],
						),
						h(
							'h3',
							{
								class:
									'mt-4 text-base font-bold leading-snug text-[#101828] sm:mt-6 sm:text-lg sm:leading-[27px]',
							},
							props.title,
						),
						h(
							'p',
							{
								class:
									'mt-2 text-sm leading-relaxed text-[#4A5565] sm:mt-3 sm:text-base sm:leading-[26px]',
							},
							props.text,
						),
					]),
				],
			)
	},
})
</script>
