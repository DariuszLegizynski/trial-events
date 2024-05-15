import { ADD_EVENT_SUCCESS, ADD_EVENT_FAIL } from "./index"
import { BASE_URL } from "../config"
import { Event } from "../types/Event"

export const addEvent = (newEvent: Event) => async dispatch => {
	try {
		const response = await fetch(`${BASE_URL}/events`, {
			method: "POST",
			headers: {
				"Content-Type": "multipart/form-data",
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
