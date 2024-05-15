export interface Event {
	id: number | string
	name: string
	date: string
	location: string
	thumbnail: string
	eventType: string
	title: string
	description: string
	contactPhone: string
	contactEmail: string
	imagePath: string
	image?: File | null
}
