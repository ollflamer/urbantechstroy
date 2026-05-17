<template>
	<section class="container-site section-y-sm">
		<header class="space-y-2">
			<h1 class="heading-section">Blog</h1>
			<p class="text-lead">
				Example listing route: <code class="text-sm">/blog</code>.
			</p>
		</header>

		<ul class="mt-6 space-y-2 sm:mt-8">
			<li v-for="post in posts" :key="post.createdAt">
				<NuxtLink
					:to="`/blog/${toSlug(post.title)}`"
					class="text-base text-[#155DFC] underline sm:text-lg"
				>
					{{ post.title }}
				</NuxtLink>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
import type { Post } from '~/types/post'

const postsStore = usePostsStore()
const posts = computed<Post[]>(() => postsStore.getPosts())

const { slugify } = useSlugify()
const toSlug = (title: string) => slugify(title)
</script>
