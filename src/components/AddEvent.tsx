import { useState, useRef } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useDispatch } from "react-redux"
import { addEvent } from "../actions/eventAdd"

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
		price: "",
		contactPhone: "",
		contactEmail: "",
		image: null,
	}

	const validationSchema = Yup.object({
		title: Yup.string().required("Title is required"),
		description: Yup.string().required("Description is required"),
		date: Yup.string().required("Date is required"),
		time: Yup.string().required("Time is required"),
		location: Yup.string().required("Location is required"),
		price: Yup.string().required("Price is required"),
		contactPhone: Yup.string().required("Contact Phone is required"),
		contactEmail: Yup.string().email("Invalid email").required("Contact Email is required"),
		image: Yup.mixed().required("A picture is required"),
	})

	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			dispatch(addEvent(values))
			setRequestStatus("Success")
		} catch {
			setRequestStatus("Failed")
		}
		setSubmitting(false)
	}

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
			{({ isSubmitting, setFieldValue, resetForm }) => (
				<Form>
					<div>
						<label htmlFor="title">Title</label>
						<Field type="text" id="title" name="title" />
						<ErrorMessage name="title" component="div" />
					</div>

					<div>
						<label htmlFor="description">Description</label>
						<Field type="text" id="description" name="description" />
						<ErrorMessage name="description" component="div" />
					</div>

					<div>
						<label htmlFor="date">Date</label>
						<Field type="text" id="date" name="date" />
						<ErrorMessage name="date" component="div" />
					</div>

					<div>
						<label htmlFor="time">Time</label>
						<Field type="text" id="time" name="time" />
						<ErrorMessage name="time" component="div" />
					</div>

					<div>
						<label htmlFor="location">Location</label>
						<Field type="text" id="location" name="location" />
						<ErrorMessage name="location" component="div" />
					</div>

					<div>
						<label htmlFor="price">Price</label>
						<Field type="text" id="price" name="price" />
						<ErrorMessage name="price" component="div" />
					</div>

					<div>
						<label htmlFor="contactPhone">Contact Phone</label>
						<Field type="text" id="contactPhone" name="contactPhone" />
						<ErrorMessage name="contactPhone" component="div" />
					</div>

					<div>
						<label htmlFor="contactEmail">Contact Email</label>
						<Field type="text" id="contactEmail" name="contactEmail" />
						<ErrorMessage name="contactEmail" component="div" />
					</div>

					<div>
						<label htmlFor="image">Add a Picture</label>
						<input
							ref={fileInputRef}
							name="image"
							type="file"
							onChange={e => {
								setFieldValue("image", e.currentTarget.files[0])
							}}
						/>
						<ErrorMessage name="image" component="div" />
					</div>

					<button className="font-bold" type="submit" disabled={isSubmitting}>
						Submit
					</button>
					<button
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
				</Form>
			)}
		</Formik>
	)
}

export default AddEvent
