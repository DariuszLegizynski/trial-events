import { Event } from "../../types/Event"
import { Link } from "react-router-dom"
import { JSON_URL } from "../../config"

const EventListCard = ({ event }: { event: Event }) => {
	const eventDate = new Date(event.date)

	return (
		<li key={event.id} className="py-8">
			<Link to={`/events/${event.id}`} className="grid gap-y-2 bg-secondary rounded-lg">
				<img className="rounded-t-lg sm:min-h-48" src={`${JSON_URL}/${event.imagePath}`} alt="lalalala" width={400} height={300} />
				<section className="px-4 pb-4 sm:min-h-48">
					<div className="h3 font-bold !text-primary text-balance pt-2 pb-4 min-h-20">{event.title}</div>
					<div className="flex justify-between pb-2">
						<p>{eventDate.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" }).split("/").join(".")}</p>
						<p>{eventDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })}</p>
					</div>
					<p className="flex">{event.location}</p>
				</section>
				<p className="underline mb-8">More &rarr;</p>
			</Link>
		</li>
	)
}

export default EventListCard
