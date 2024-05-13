import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// actions
import { getEvents } from "../actions/eventsActions"

// types
import { Event } from "../types/Event"

const EventList = () => {
	const dispatch = useDispatch()
	const allEvents = useSelector(state => state.events)

	useEffect(() => {
		dispatch(getEvents())
	}, [dispatch])

	return (
		<article>
			<h2>Events</h2>
			{allEvents.loading && <p>Loading...</p>}
			{allEvents.error && <p>Error: {allEvents.error}</p>}
			<ul>
				{allEvents.eventList.map((event: Event) => (
					<li key={event.id} className="py-8">
						<h3 className="font-bold">{event.title}</h3>
						<p>{event.description}</p>
					</li>
				))}
			</ul>
		</article>
	)
}

export default EventList
