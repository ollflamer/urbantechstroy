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

	/**
	 * App manifest (экспериментально): при включении Vite 7 иногда выдаёт
	 * «Failed to resolve import "#app-manifest"» на pre-transform (гонка алиаса при dev).
	 * Для лендинга не требуется; см. https://github.com/nuxt/nuxt/issues/33606
	 */
	experimental: {
		appManifest: false,
	},

	runtimeConfig: {
		/** Пароль для автосоздания / синхронизации bootstrap-админа (NUXT_ADMIN_PASSWORD) */
		adminPassword: process.env.NUXT_ADMIN_PASSWORD || '',
		/** Email bootstrap-админа (NUXT_ADMIN_EMAIL), должен совпадать с логином */
		adminBootstrapEmail: process.env.NUXT_ADMIN_EMAIL || '',
		/** Секрет для страницы регистрации первого администратора (/admin/register), если нет env-пароля */
		adminSetupKey: process.env.NUXT_ADMIN_SETUP_KEY || '',
		/** Путь к файлу SQLite (по умолчанию .data/site.db в корне проекта) */
		databasePath: process.env.NUXT_DATABASE_PATH || '.data/site.db',
		/** Каталог загруженных изображений (по умолчанию .data/uploads) */
		uploadDir: process.env.NUXT_UPLOAD_DIR || '.data/uploads',
		public: {
			/** Бренд для og:site_name и превью в соцсетях */
			siteName: 'URBANTECHSTROY',
			/**
			 * Публичный URL сайта без слэша в конце, например https://urbantechstroy.uz
			 * Нужен для абсолютных og:image (лого) и canonical. Если пусто — на SSR берётся origin запроса.
			 */
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
			/** Краткое описание компании для Open Graph / Twitter (можно переопределить в .env) */
			ogDescription: process.env.NUXT_PUBLIC_OG_DESCRIPTION || '',
		},
	},

	compatibilityDate: '2026-05-05',
})
