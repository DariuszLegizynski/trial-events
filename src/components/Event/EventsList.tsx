import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { AppDispatch } from "../../store"
import { RootState } from "../../reducers/rootReducers"

// actions
import { getEvents } from "../../actions/eventsActions"

// types
import { Event } from "../../types/Event"

// components
import EventsListCard from "./EventsListCard"

const EventList = () => {
	const dispatch: AppDispatch = useDispatch()
	const allEvents = useSelector((state: RootState) => state.events)

	useEffect(() => {
		dispatch(getEvents())
	}, [dispatch])

	return (
		<article className="max-w-[68rem]">
			<h1 className="py-8">Events</h1>
			<Link to={"/add"} className="cta">
				Add new Event
			</Link>
			{allEvents.loading && <p>Loading...</p>}
			{allEvents.error && <p>Error: {allEvents.error}</p>}
			<ul className="grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{allEvents.eventList.map((event: Event) => (
					<EventsListCard key={event.id} event={event} />
				))}
			</ul>
		</article>
	)
}

export default EventList
