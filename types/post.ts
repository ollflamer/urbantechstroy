export type Post = {
	title: string
	content: string
	image: string | null
	createdAt: string
}

export type NewPost = Omit<Post, 'createdAt'> & {
	createdAt?: string
}
