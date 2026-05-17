export const MOTION_EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

/** Задержка для каскадного появления карточек в сетке */
export function staggerDelay(index: number, step = 0.09, base = 0) {
	return base + index * step
}

function isInViewport(el: HTMLElement, threshold = 0.12) {
	const rect = el.getBoundingClientRect()
	const viewHeight = window.innerHeight || document.documentElement.clientHeight
	const visible = Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0)
	return visible / Math.max(rect.height, 1) >= threshold
}

type UseRevealOptions = {
	once?: boolean
	threshold?: number
	rootMargin?: string
	immediate?: boolean
}

export function useReveal(
	target: Ref<HTMLElement | null | undefined>,
	options: UseRevealOptions = {},
) {
	const ready = ref(false)
	const isVisible = ref(false)
	const prefersReducedMotion = usePreferredReducedMotion()

	const reveal = () => {
		isVisible.value = true
	}

	onMounted(() => {
		ready.value = true

		if (prefersReducedMotion.value === 'reduce') {
			reveal()
			return
		}

		const el = unref(target)

		if (options.immediate) {
			requestAnimationFrame(() => reveal())
			return
		}

		if (el && isInViewport(el, options.threshold ?? 0.12)) {
			requestAnimationFrame(() => reveal())
			return
		}

		const { stop } = useIntersectionObserver(
			target,
			([entry]) => {
				if (entry?.isIntersecting) {
					reveal()
					if (options.once !== false) stop()
				}
			},
			{
				threshold: options.threshold ?? 0.12,
				rootMargin: options.rootMargin ?? '0px 0px -6% 0px',
			},
		)
	})

	return { isVisible, ready, prefersReducedMotion }
}
