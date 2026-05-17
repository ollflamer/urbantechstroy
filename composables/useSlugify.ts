export function useSlugify() {
	const slugify = (value: string) =>
		value
			.trim()
			.toLowerCase()
			.replace(/['"]/g, '')
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)+/g, '')

	return { slugify }
}
