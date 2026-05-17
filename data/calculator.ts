import { services } from '~/data/services'

export const calculatorBudgetOptions = [
	'До $50 000',
	'$50 000 – $100 000',
	'$100 000 – $250 000',
	'Более $250 000',
] as const

export const calculatorServiceOptions = services.map(service => ({
	value: service.slug,
	label: service.title,
}))
