import { Event } from "../../types/Event"
import { Link } from "react-router-dom"
import { JSON_URL } from "../../config"
import useFormattedDate from "../../hooks/useFormattedDate"

const EventListCard = ({ event }: { event: Event }) => {
	const { date, time } = useFormattedDate(event.date)

	return (
		<li key={event.id} className="py-8">
			<Link to={`/events/${event.id}`} className="grid gap-y-2 bg-secondary rounded-lg">
				<img className="rounded-t-lg sm:min-h-80" src={`${JSON_URL}/${event.imagePath}`} alt={event.imgAlt} width={400} height={300} />
				<section className="px-4 pb-4 sm:min-h-48">
					<p className="text-end text-grey">{event.eventType}</p>
					<div className="h3 font-bold !text-primary text-balance pt-2 pb-4 min-h-16">{event.title}</div>
					<div className="flex justify-between pb-2 text-grey">
						<p>{date}</p>
						<p>{time}</p>
					</div>
					<p className="flex text-grey">{event.location}</p>
				</section>
				<p className="underline mb-8">More &rarr;</p>
			</Link>
		</li>
	)
}

export default EventListCard
