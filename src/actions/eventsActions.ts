import { GET_EVENTS_LOADING, GET_EVENTS_SUCCESS, GET_EVENTS_FAIL } from "./index"
import { BASE_URL } from '../config'

export const getEvents = () => async dispatch => {
	try {
		dispatch({
			type: GET_EVENTS_LOADING,
		})

		const response = await fetch(`${BASE_URL}/events`)
		const data = await response.json()

		dispatch({
			type: GET_EVENTS_SUCCESS,
			payload: data,
		})
	} catch (e) {
		dispatch({
			type: GET_EVENTS_FAIL,
		})
	}
}
