import { useState, useRef } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { addEvent } from "../actions/eventAdd"

import { Event, FormValues } from "../types/Event"

const AddEvent = () => {
	const [requestStatus, setRequestStatus] = useState("")
	const fileInputRef = useRef()

	const dispatch = useDispatch()

	const initialValues = {
		title: "",
		description: "",
		date: "",
		time: "",
		location: "",
		price: 0,
		contactPhone: "",
		contactEmail: "",
		image: null,
		imgAlt: "",
		eventType: "",
	}

	const validationSchema = Yup.object({
		title: Yup.string().required("Title is required"),
		description: Yup.string().required("Description is required"),
		date: Yup.string()
			.matches(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d\d$/, "Invalid date format. Please use the following format: DD-MM-YYYY")
			.required("Date is required"),
		time: Yup.string()
			.matches(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format. Please use the following format: HH:MM")
			.required("Time is required"),
		location: Yup.string().required("Location is required"),
		price: Yup.string().required("Price is required"),
		contactPhone: Yup.string().required("Contact Phone is required"),
		contactEmail: Yup.string().email("Invalid email").required("Contact Email is required"),
		image: Yup.mixed().required("A picture is required"),
		imgAlt: Yup.string().required("Image alt text is required"),
		eventType: Yup.string().oneOf(["culture", "sport", "health"]).required("Event Type is required"),
	})

	const handleSubmit = async (values: Event, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
		const date = new Date(`${values.date.split("-").reverse().join("-")}T${values.time}`)
		const isoDate = date.toISOString()

		const newValues = {
			...values,
			date: isoDate,
		}

		try {
			dispatch(addEvent(newValues))
			setRequestStatus("Success")
		} catch {
			setRequestStatus("Failed")
		}
		setSubmitting(false)
	}

	return (
		<>
			<h1 className="mb-8">Add a new Event</h1>
			<Formik<FormValues> initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				{({ isSubmitting, setFieldValue, resetForm }) => (
					<Form className="grid gap-y-2 text-white">
						<div className="flex flex-col items-center">
							<label className="after:content-[':']" htmlFor="title">
								Title
							</label>
							<Field type="text" id="title" name="title" className="rounded-md" />
							<ErrorMessage className="pt-1.5 text-warning" name="title" component="div" />
						</div>

						<div className="flex flex-col items-center">
							<label className="after:content-[':'] text-start" htmlFor="eventType">
								Event Type
							</label>
							<Field className="rounded-md min-w-[194px]" as="select" id="eventType" name="eventType">
								<option value="">Select Event Type</option>
								<option value="culture">Culture</option>
								<option value="sport">Sport</option>
								<option value="health">Health</option>
							</Field>
							<ErrorMessage className="pt-1.5 text-warning" name="eventType" component="div" />
						</div>

						<div className="flex flex-col items-center">
							<label className="after:content-[':']" htmlFor="description">
								Description
							</label>
							<Field className="rounded-md" type="text" id="description" name="description" />
							<ErrorMessage className="pt-1.5 text-warning" name="description" component="div" />
						</div>

						<div className="flex flex-col items-center">
							<label className="after:content-[':']" htmlFor="date">
								Date
							</label>
							<Field className="rounded-md" type="text" id="date" name="date" />
							<ErrorMessage className="pt-1.5 text-warning" name="date" component="div" />
						</div>

						<div className="flex flex-col items-center">
							<label className="after:content-[':']" htmlFor="time">
								Time
							</label>
							<Field className="rounded-md" type="text" id="time" name="time" />
							<ErrorMessage className="pt-1.5 text-warning" name="time" component="div" />
						</div>

						<div className="flex flex-col items-center">
							<label className="after:content-[':']" htmlFor="location">
								Location
							</label>
							<Field className="rounded-md" type="text" id="location" name="location" />
							<ErrorMessage className="pt-1.5 text-warning" name="location" component="div" />
						</div>

						<div className="flex flex-col items-center">
							<label className="after:content-[':']" htmlFor="price">
								Price
							</label>
							<Field className="rounded-md" type="text" id="price" name="price" />
							<ErrorMessage className="pt-1.5 text-warning" name="price" component="div" />
						</div>

						<div className="flex flex-col items-center">
							<label className="after:content-[':']" htmlFor="contactPhone">
								Contact Phone
							</label>
							<Field className="rounded-md" type="text" id="contactPhone" name="contactPhone" />
							<ErrorMessage className="pt-1.5 text-warning" name="contactPhone" component="div" />
						</div>

						<div className="flex flex-col items-center">
							<label className="after:content-[':']" htmlFor="contactEmail">
								Contact Email
							</label>
							<Field className="rounded-md" type="text" id="contactEmail" name="contactEmail" />
							<ErrorMessage className="pt-1.5 text-warning" name="contactEmail" component="div" />
						</div>

						<div className="flex flex-col items-center">
							<label className="after:content-[':']" htmlFor="image">
								Add a Picture
							</label>
							<div className="flex flex-col items-center">
								<button type="button" className="rounded-full text-black bg-secondary py-1 px-2 my-3" onClick={() => fileInputRef.current?.click()}>
									Choose File
								</button>
								<span className="pb-1">{fileInputRef.current?.files[0].name || "No file chosen"}</span>
							</div>
							<input
								className="hidden"
								ref={fileInputRef}
								name="image"
								type="file"
								onChange={e => {
									setFieldValue("image", e.currentTarget.files[0])
								}}
							/>
							<ErrorMessage className="pt-1.5 text-warning" name="image" component="div" />
						</div>

						<div className="flex flex-col items-center">
							<label className="after:content-[':']" htmlFor="contactEmail">
								Image Alt Text
							</label>
							<Field className="rounded-md" type="text" name="imgAlt" />
							<ErrorMessage className="pt-1.5 text-warning" name="imgAlt" component="div" />
						</div>
						<section className="flex flex-col items-center gap-y-8 mt-16">
							<button className="cta font-bold" type="submit" disabled={isSubmitting}>
								Submit
							</button>
							<button
								className="clear-btn"
								type="button"
								onClick={() => {
									setFieldValue("image", null)
									resetForm()
									if (fileInputRef.current) {
										fileInputRef.current.value = ""
									}
								}}
							>
								Clear
							</button>
							{requestStatus && <p>{requestStatus}</p>}
							<Link to="/" className="back-btn">
								&larr; Back
							</Link>
						</section>
					</Form>
				)}
			</Formik>
		</>
	)
}

export default AddEvent
