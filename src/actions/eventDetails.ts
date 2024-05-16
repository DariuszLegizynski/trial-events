import { GET_EVENT_LOADING, GET_EVENT_SUCCESS, GET_EVENT_FAIL } from "./index"
import { JSON_URL } from "../config"
import { Dispatch } from "redux"

export const getEventDetails = (idEvent: string) => async (dispatch: Dispatch) => {
	try {
		dispatch({
			type: GET_EVENT_LOADING,
		})

		const response = await fetch(`${JSON_URL}/events/${idEvent}`)
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
