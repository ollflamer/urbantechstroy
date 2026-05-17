<template>
	<article class="container-site section-y-sm max-w-3xl">
		<header class="space-y-2">
			<h1 class="heading-subsection">{{ post?.title ?? 'Post' }}</h1>
			<p class="text-sm text-[#4A5565]">
				Slug: <code>{{ slug }}</code>
			</p>
		</header>

		<div class="prose mt-6 max-w-none text-[#364153]">
			<p v-if="!post">Loading…</p>
			<p v-else class="text-base leading-relaxed">{{ post.content }}</p>
		</div>
	</article>
</template>

<script setup lang="ts">
import type { Post } from '~/types/post'

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const postsStore = usePostsStore()
const post = computed<Post | null>(() => postsStore.getPostBySlug(slug.value))
</script>
