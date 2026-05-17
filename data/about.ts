export type AboutStat = {
	value: string
	label: string
	icon: string
}

export type AboutPortfolioItem = {
	text: string
	icon: string
}

export const aboutIntro = {
	lead: 'Компания «URBANTECHSTROY» предоставляет широкий спектр строительно-ремонтных услуг любой сложности.',
	description:
		'Наши строительные бригады — это команды профессионалов с многолетним опытом, проверенные временем. Мы гарантируем высокое качество работ, соблюдение сроков и индивидуальный подход к каждому проекту.',
}

export const aboutStats: AboutStat[] = [
	{
		value: '28',
		label: 'лет опыта в сфере строительства',
		icon: '/icons/about-stat-experience.svg',
	},
	{
		value: '50+',
		label: 'профессиональных специалистов',
		icon: '/icons/about-stat-specialists.svg',
	},
	{
		value: '60+',
		label: 'реализованных проектов',
		icon: '/icons/about-stat-projects.svg',
	},
]

export const aboutPortfolio: AboutPortfolioItem[] = [
	{
		text: 'Строительство жилых комплексов, общежитий и частных домов',
		icon: '/icons/about-portfolio-check.svg',
	},
	{
		text: 'Капитальный ремонт жилых домов и офисов',
		icon: '/icons/about-portfolio-check.svg',
	},
	{
		text: 'Все виды бетонных и кладочных работ',
		icon: '/icons/about-portfolio-check.svg',
	},
	{
		text: 'Благоустройство дорог и детских площадок',
		icon: '/icons/about-portfolio-check.svg',
	},
	{
		text: 'Отделка фасадов',
		icon: '/icons/about-portfolio-check.svg',
	},
	{
		text: 'Металлокаркасы любой сложности',
		icon: '/icons/about-portfolio-check.svg',
	},
]

export type AboutDirectorTextPart = {
	text: string
	emphasis?: 'bold' | 'accent'
}

export const aboutDirector = {
	name: 'Алтухов Андрей Владимирович',
	role: 'Директор • 28 лет в строительстве',
	image: '/images/about/director-andrey-altuhov.png',
	paragraphs: [
		[
			{ text: 'Во главе компании стоит директор с ' },
			{ text: '28-летним стажем работы', emphasis: 'bold' },
			{
				text: ', который имел опыт работать в самых разных проектах и направлениях в строительстве как за рубежом, так и в Узбекистане.',
			},
		],
		[
			{
				text: 'Начиная с рядового строителя до главного инженера в крупных проектах, и сейчас, он, Алтухов Андрей Владимирович с командой проверенных строителей с большим опытом ',
			},
			{ text: 'готов взяться за Ваш проект', emphasis: 'accent' },
			{ text: '.' },
		],
	] satisfies AboutDirectorTextPart[][],
}

export const aboutPaymentMethods = [
	'Наличные',
	'Безналичный расчет',
	'Банковский перевод',
	'По договору',
	'Перечисление',
]

export const homeAboutFeatures = [
	{
		icon: '/icons/about-stat-experience.svg',
		title: '28 лет опыта в сфере строительства',
		description:
			'Руководитель компании имеет богатый опыт управления строительными проектами',
	},
	{
		icon: '/icons/about-stat-specialists.svg',
		title: 'Международный опыт',
		description:
			'Реализация проектов как в Узбекистане, так и на международном уровне',
	},
	{
		icon: '/icons/about-stat-projects.svg',
		title: 'Профессиональная команда',
		description: 'Квалифицированные специалисты с многолетним опытом работы',
	},
]
