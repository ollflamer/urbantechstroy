export type ProjectCategory =
	| 'all'
	| 'residential'
	| 'commercial'
	| 'industrial'
	| 'repair'
	| 'metal'
	| 'landscaping'

export type ProjectCategoryOption = {
	id: ProjectCategory
	label: string
}

export const projectCategories: ProjectCategoryOption[] = [
	{ id: 'all', label: 'Все проекты' },
	{ id: 'residential', label: 'Жилое строительство' },
	{ id: 'commercial', label: 'Коммерческая недвижимость' },
	{ id: 'industrial', label: 'Промышленное строительство' },
	{ id: 'repair', label: 'Ремонт' },
	{ id: 'metal', label: 'Металлоконструкции' },
	{ id: 'landscaping', label: 'Благоустройство' },
]

export type Project = {
	slug: string
	category: Exclude<ProjectCategory, 'all'>
	categoryLabel: string
	title: string
	shortDescription: string
	image: string
	heroImage?: string
	location?: string
	area?: string
	duration?: string
	year?: string
	description?: string
	features?: string[]
	gallery?: string[]
}

export const projects: Project[] = [
	{
		slug: 'zhiloj-kompleks-riverside',
		category: 'residential',
		categoryLabel: 'Жилое строительство',
		title: 'Жилой комплекс "Riverside"',
		shortDescription:
			'Современный жилой комплекс премиум-класса на берегу реки',
		image: '/images/projects/project-riverside.png',
		heroImage: '/images/projects/project-riverside.png',
		location: 'Ташкент, район Учтепа',
		area: '45,000 м²',
		duration: '24 месяца',
		year: '2024',
		description:
			'Жилой комплекс "Riverside" — это воплощение современного комфортного проживания. Проект включает в себя три 12-этажных здания с развитой инфраструктурой, подземным паркингом и благоустроенной территорией. Использованы передовые технологии строительства и высококачественные материалы.',
		features: [
			'Энергоэффективные фасады',
			'Система умный дом',
			'Подземный паркинг на 200 мест',
			'Детские и спортивные площадки',
			'Собственная котельная',
			'Видеонаблюдение и охрана 24/7',
		],
		gallery: [
			'/images/projects/project-riverside.png',
			'/images/projects/project-apartment-renovation.png',
			'/images/projects/project-landscaping.png',
		],
	},
	{
		slug: 'kapitalnyj-remont-ofisa',
		category: 'commercial',
		categoryLabel: 'Коммерческая недвижимость',
		title: 'Капитальный ремонт офисного здания',
		shortDescription: 'Полная реконструкция офисного центра класса А',
		image: '/images/projects/project-office-repair.png',
	},
	{
		slug: 'proizvodstvennyj-ceh',
		category: 'industrial',
		categoryLabel: 'Промышленное строительство',
		title: 'Строительство производственного цеха',
		shortDescription:
			'Современный производственный комплекс с административным корпусом',
		image: '/images/projects/project-production-hall.png',
	},
	{
		slug: 'remont-kvartir-premium',
		category: 'repair',
		categoryLabel: 'Ремонт',
		title: 'Ремонт квартир премиум-класса',
		shortDescription: 'Дизайнерский ремонт квартир в элитном ЖК',
		image: '/images/projects/project-apartment-renovation.png',
	},
	{
		slug: 'montazh-metallokonstrukcij-angara',
		category: 'metal',
		categoryLabel: 'Металлоконструкции',
		title: 'Монтаж металлоконструкций ангара',
		shortDescription:
			'Строительство складского комплекса из металлоконструкций',
		image: '/images/projects/project-metal-warehouse.png',
	},
	{
		slug: 'blagoustrojstvo-territorii',
		category: 'landscaping',
		categoryLabel: 'Благоустройство',
		title: 'Благоустройство территории',
		shortDescription: 'Комплексное благоустройство жилого комплекса',
		image: '/images/projects/project-landscaping.png',
	},
]

export const getProjectBySlug = (slug: string) =>
	projects.find(p => p.slug === slug) ?? null

export const getProjectsByCategory = (category: ProjectCategory) =>
	category === 'all' ? projects : projects.filter(p => p.category === category)
