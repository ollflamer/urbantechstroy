/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./app.vue',
		'./components/**/*.{vue,js,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./composables/**/*.{js,ts}',
		'./stores/**/*.{js,ts}',
		'./plugins/**/*.{js,ts}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
