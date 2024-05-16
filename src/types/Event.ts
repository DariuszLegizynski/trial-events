export interface Event extends FormValues {
	id: number | string
	imagePath: string
}

export interface FormValues {
	title: string
	description: string
	date: string
	time: string
	location: string
	price: number
	contactPhone: string
	contactEmail: string
	image?: File | null
	imgAlt: string
	eventType: string
}
