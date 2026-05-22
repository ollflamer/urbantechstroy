import { sendStream, setResponseHeader } from 'h3'
import {
	createImageReadStream,
	mimeForStoredFile,
	resolveStoredImagePath,
} from '../../utils/uploads'

export default defineEventHandler(event => {
	const name = getRouterParam(event, 'filename')
	if (!name) {
		throw createError({ statusCode: 404, statusMessage: 'Not found' })
	}
	const path = resolveStoredImagePath(name)
	if (!path) {
		throw createError({ statusCode: 404, statusMessage: 'Not found' })
	}
	setResponseHeader(event, 'Content-Type', mimeForStoredFile(name))
	setResponseHeader(
		event,
		'Cache-Control',
		'public, max-age=31536000, immutable',
	)
	return sendStream(event, createImageReadStream(path))
})
