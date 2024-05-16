import { ADD_EVENT_SUCCESS, ADD_EVENT_FAIL, UPLOAD_FILE_SUCCESS, UPLOAD_FILE_FAIL } from "./index"
import { JSON_URL, IMAGE_UPLOAD_URL } from "../config"
import { Event } from "../types/Event"
import { Dispatch } from "redux"

export const addEvent = (newEvent: Event) => async (dispatch: Dispatch) => {
	const imageFile = new FormData()
	imageFile.append("image", newEvent.image)

	try {
		const response = await fetch(`${IMAGE_UPLOAD_URL}/upload`, {
			method: "POST",
			body: imageFile,
		})

		if (response.ok) {
			const data = await response.json()

			dispatch({
				type: UPLOAD_FILE_SUCCESS,
				payload: data,
			})
		} else {
			dispatch({
				type: UPLOAD_FILE_FAIL,
			})
		}
	} catch (e) {
		dispatch({
			type: UPLOAD_FILE_FAIL,
		})
	}

	const fileName = newEvent.image?.name
	newEvent.imagePath = `images/${fileName}`

	delete newEvent.image

	try {
		const response = await fetch(`${JSON_URL}/events`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newEvent),
		})

		if (response.ok) {
			const data = await response.json()

			dispatch({
				type: ADD_EVENT_SUCCESS,
				payload: data,
			})
		} else {
			dispatch({
				type: ADD_EVENT_FAIL,
			})
		}
	} catch (e) {
		dispatch({
			type: ADD_EVENT_FAIL,
		})
	}
}
