import { readMultipartFormData } from 'h3'
import { assertAdmin } from '../../utils/admin-session'
import { saveUploadedImage } from '../../utils/uploads'

export default defineEventHandler(async event => {
	assertAdmin(event)
	const parts = await readMultipartFormData(event)
	const filePart = parts?.find(p => p.name === 'file' && p.data?.length)
	if (!filePart?.data) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Нужно поле file',
		})
	}
	const mime = filePart.type || 'application/octet-stream'
	const name = await saveUploadedImage(filePart.data, mime)
	const url = `/api/uploads/${name}`
	return { url }
})
