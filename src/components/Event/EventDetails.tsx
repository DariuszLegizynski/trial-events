import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getEventDetails } from "../../actions/eventDetails"
import { BASE_URL } from "../../config"

const EventDetail = () => {
	const idEvent = useParams().id

	const dispatch = useDispatch()
	const getDetails = useSelector(state => state.eventDetails)

	useEffect(() => {
		dispatch(getEventDetails(idEvent))
	}, [dispatch, idEvent])

	const eventDetails = getDetails.eventDetails

	return (
		<article>
			<h1>{eventDetails.title}</h1>
			<p>{eventDetails.description}</p>
			<p>{eventDetails.date}</p>
			<p>{eventDetails.location}</p>
			<p>{eventDetails.price}</p>
			<p>{eventDetails.contactPhone}</p>
			<p>{eventDetails.contactEmail}</p>
			<img src={`${BASE_URL}/${eventDetails.thumbnail}`} alt="lalalala" width={400} height={300} />
			<p>{eventDetails.eventType}</p>
			<Link className="font-bold" to={"/"}>
				Go Back
			</Link>
		</article>
	)
}

export default EventDetail