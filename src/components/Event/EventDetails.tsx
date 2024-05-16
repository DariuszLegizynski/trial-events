import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getEventDetails } from "../../actions/eventDetails"
import { JSON_URL } from "../../config"
import useFormattedDate from "../../hooks/useFormattedDate"
import { AppDispatch } from "../../store"
import { RootState } from "../../reducers/rootReducers"

const EventDetail = () => {
	const idEvent = useParams().id

	const dispatch: AppDispatch = useDispatch()
	const getDetails = useSelector((state: RootState) => state.eventDetails)

	useEffect(() => {
		if (idEvent) {
			dispatch(getEventDetails(idEvent))
		}
	}, [dispatch, idEvent])

	const eventDetails = getDetails.eventDetails

	const { date, time } = useFormattedDate(eventDetails.date)

	return (
		<article className="flex flex-col items-center text-white">
			<h1 className="pb-2">{eventDetails.title}</h1>
			<p className="self-end">{eventDetails.eventType}</p>
			<img className="my-4" src={`${JSON_URL}/${eventDetails.imagePath}`} alt={eventDetails.imgAlt} width={400} height={300} />
			<div className="flex w-full justify-between">
				<p>{date}</p>
				<p>{time}</p>
			</div>
			<p className="self-start">{eventDetails.location}</p>
			<p className="py-8 text-start">{eventDetails.description}</p>
			<p className='self-end pb-8 after:content-["€"]'>cost: {eventDetails.price}&nbsp;</p>
			<div className="grid grid-rows-2 grid-cols-[4rem_auto] sm:grid-cols-[8rem_auto] justify-start items-center pb-8 w-full">
				<p className='text-start after:content-[":"]'>Phone</p>
				<a href={`tel:${eventDetails.contactPhone}`} className="p text-start cursor-pointer">
					{eventDetails.contactPhone}
				</a>
				<p className='text-start after:content-[":"]'>E-Mail</p>
				<a href={`mailto:${eventDetails.contactEmail}`} className="p text-start cursor-pointer">
					{eventDetails.contactEmail}
				</a>
			</div>
			<Link className="back-btn" to={"/"}>
				&larr; Back
			</Link>
		</article>
	)
}

export default EventDetail
