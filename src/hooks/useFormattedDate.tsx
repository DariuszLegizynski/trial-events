import { useState, useEffect } from "react"

const useFormattedDate = (isoDateString: string) => {
	const [date, setDate] = useState("")
	const [time, setTime] = useState("")

	useEffect(() => {
		const eventDate = new Date(isoDateString)
		const formattedDate = eventDate.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" }).split("/").join(".")
		const formattedTime = eventDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })

		setDate(formattedDate)
		setTime(formattedTime)
	}, [isoDateString])

	return { date, time }
}

export default useFormattedDate
