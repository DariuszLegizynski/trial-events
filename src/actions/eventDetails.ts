import { GET_EVENT_LOADING, GET_EVENT_SUCCESS, GET_EVENT_FAIL } from "./index"
import { BASE_URL } from "../config"

export const getEventDetails = idEvent => async dispatch => {
	try {
		dispatch({
			type: GET_EVENT_LOADING,
		})

		const response = await fetch(`${BASE_URL}/events/${idEvent}`)
		const data = await response.json()

		dispatch({
			type: GET_EVENT_SUCCESS,
			payload: data,
		})
	} catch (e) {
		dispatch({
			type: GET_EVENT_FAIL,
		})
	}
}