export interface Event {
	id: number | string
	name: string
	date: string
	location: string
	imgAlt: string
	eventType: string
	title: string
	price: number
	description: string
	contactPhone: string
	contactEmail: string
	imagePath: string
	image?: File | null
}
