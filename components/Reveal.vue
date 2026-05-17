<template>
	<component
		:is="as"
		ref="rootRef"
		v-bind="$attrs"
		:class="[
			ready && 'reveal',
			ready && `reveal--${variant}`,
			{ 'reveal--visible': !ready || isVisible },
		]"
		:style="revealStyle"
	>
		<slot />
	</component>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

export type RevealVariant =
	| 'fade-up'
	| 'fade'
	| 'fade-down'
	| 'fade-left'
	| 'fade-right'
	| 'scale'
	| 'blur-up'

const props = withDefaults(
	defineProps<{
		as?: string
		variant?: RevealVariant
		/** Задержка в секундах */
		delay?: number
		/** Длительность в секундах */
		duration?: number
		once?: boolean
		/** Анимация при монтировании (герой, шапка) */
		immediate?: boolean
		threshold?: number
	}>(),
	{
		as: 'div',
		variant: 'fade-up',
		delay: 0,
		duration: 0.85,
		once: true,
		immediate: false,
		threshold: 0.12,
	},
)

const rootRef = ref<HTMLElement | null>(null)
const { isVisible, ready } = useReveal(rootRef, {
	once: props.once,
	immediate: props.immediate,
	threshold: props.threshold,
})

const revealStyle = computed(() => ({
	'--reveal-delay': `${props.delay}s`,
	'--reveal-duration': `${props.duration}s`,
}))
</script>
