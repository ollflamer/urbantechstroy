import type { Post } from '~/types/post'

export const mockPosts: Post[] = [
	{
		title: 'Welcome to the blog',
		content:
			'This is mock content. Next step is to replace this with a real CMS or DB.',
		image: null,
		createdAt: new Date('2026-01-10T10:00:00.000Z').toISOString(),
	},
	{
		title: 'Nuxt 3 project structure',
		content:
			'This post exists to demonstrate how pages can read from a Pinia store.',
		image: null,
		createdAt: new Date('2026-02-02T08:30:00.000Z').toISOString(),
	},
	{
		title: 'Admin-like editing (scaffold)',
		content:
			'The store includes add/update/delete actions to simulate admin editing capabilities.',
		image: null,
		createdAt: new Date('2026-03-05T15:45:00.000Z').toISOString(),
	},
]
