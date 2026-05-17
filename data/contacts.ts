export const officeAddress = {
	display: 'Tashkent, Muhammad Yusuf street 45A',
	/** Для геокодера Яндекс.Карт */
	mapQuery: 'Ташкент, улица Мухаммада Юсуфа, 45А',
	lat: 41.298886,
	lon: 69.252029,
	zoom: 17,
} as const

export const yandexMapsRouteUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(officeAddress.mapQuery)}`
