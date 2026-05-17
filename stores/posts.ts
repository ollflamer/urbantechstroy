import { defineStore } from 'pinia'
import type { NewPost, Post } from '~/types/post'
import { mockPosts } from '~/data/mockPosts'

export const usePostsStore = defineStore('posts', () => {
	const posts = ref<Post[]>([...mockPosts])

	const getPosts = () => posts.value

	const addPost = (post: NewPost) => {
		const createdAt = post.createdAt ?? new Date().toISOString()
		posts.value.unshift({
			title: post.title,
			content: post.content,
			image: post.image ?? null,
			createdAt,
		})
	}

	const deletePost = (createdAt: string) => {
		posts.value = posts.value.filter(p => p.createdAt !== createdAt)
	}

	const updatePost = (
		createdAt: string,
		patch: Partial<Omit<Post, 'createdAt'>>,
	) => {
		const idx = posts.value.findIndex(p => p.createdAt === createdAt)
		if (idx === -1) return

		posts.value[idx] = {
			...posts.value[idx],
			...patch,
			createdAt: posts.value[idx].createdAt,
		}
	}

	const getPostBySlug = (slug: string) => {
		const { slugify } = useSlugify()
		return posts.value.find(p => slugify(p.title) === slug) ?? null
	}

	return {
		posts,
		getPosts,
		addPost,
		deletePost,
		updatePost,
		getPostBySlug,
	}
})
