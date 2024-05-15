import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

// actions
import { getEvents } from "../../actions/eventsActions"

// types
import { Event } from "../../types/Event"

// components
import EventsListCard from "./EventsListCard"

const EventList = () => {
	const dispatch = useDispatch()
	const allEvents = useSelector(state => state.events)

	useEffect(() => {
		dispatch(getEvents())
	}, [dispatch])

	return (
		<article>
			<h2>Events</h2>
			<Link to={"/add"}>Add new Event</Link>
			{allEvents.loading && <p>Loading...</p>}
			{allEvents.error && <p>Error: {allEvents.error}</p>}
			<ul>
				{allEvents.eventList.map((event: Event) => (
					<EventsListCard key={event.id} event={event} />
				))}
			</ul>
		</article>
	)
}

export default EventList
