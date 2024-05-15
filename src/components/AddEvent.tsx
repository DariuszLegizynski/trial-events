import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useDispatch } from "react-redux"
import { addEvent } from "../actions/eventAdd"

const AddEvent = () => {
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
	})

	const handleSubmit = values => {
		console.log(values)
		dispatch(addEvent(values))
	}

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
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

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	)
}

export default AddEvent
