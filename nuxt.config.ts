export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],

	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],

	css: ['~/assets/css/tailwind.css'],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			title: 'URBANTECHSTROY',
			link: [
				{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
				{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: '',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
				},
			],
		},
	},

	typescript: {
		strict: true,
	},

	runtimeConfig: {
		public: {
			siteName: 'UrbanTechStroy Blog',
		},
	},

	compatibilityDate: '2026-05-05',
})
