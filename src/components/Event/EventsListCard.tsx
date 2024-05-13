import { Event } from "../../types/Event"

const EventListCard = ({ event }: { event: Event }) => {
	const eventDate = new Date(event.date)

	return (
		<li key={event.id} className="py-8">
			<p>{eventDate.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" }).split("/").join(".")}</p>
			<p>{eventDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })}</p>
			<h3 className="font-bold">{event.title}</h3>
		</li>
	)
}

export default EventListCard
