import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getEventDetails } from "../../actions/eventDetails"
import { JSON_URL } from "../../config"
import useFormattedDate from "../../hooks/useFormattedDate"

const EventDetail = () => {
	const idEvent = useParams().id

	const dispatch = useDispatch()
	const getDetails = useSelector(state => state.eventDetails)

	useEffect(() => {
		dispatch(getEventDetails(idEvent))
	}, [dispatch, idEvent])

	const eventDetails = getDetails.eventDetails

	const { date, time } = useFormattedDate(eventDetails.date)

	return (
		<article>
			<h1>{eventDetails.title}</h1>
			<p>{eventDetails.description}</p>
			<p>{date}</p>
			<p>{time}</p>
			<p>{eventDetails.location}</p>
			<p>{eventDetails.price}</p>
			<p>{eventDetails.contactPhone}</p>
			<p>{eventDetails.contactEmail}</p>
			<img src={`${JSON_URL}/${eventDetails.imagePath}`} alt="lalalala" width={400} height={300} />
			<p>{eventDetails.eventType}</p>
			<Link className="font-bold" to={"/"}>
				Go Back
			</Link>
		</article>
	)
}

export default EventDetail
