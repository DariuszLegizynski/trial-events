import { GET_EVENTS_LOADING, GET_EVENTS_SUCCESS, GET_EVENTS_FAIL } from "./index"
import { JSON_URL } from "../config"
import { Dispatch } from "redux"

export const getEvents = () => async (dispatch: Dispatch) => {
	try {
		dispatch({
			type: GET_EVENTS_LOADING,
		})

		const response = await fetch(`${JSON_URL}/events`)
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
