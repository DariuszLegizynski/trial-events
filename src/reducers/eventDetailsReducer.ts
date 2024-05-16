import { GET_EVENT_LOADING, GET_EVENT_SUCCESS, GET_EVENT_FAIL } from "../actions/index"
import { Event } from "../types/Event"
import { ActionType } from "../types/ActionType"

const initialState = {
	eventDetails: {} as Event,
	loading: false as boolean,
	error: null,
}

const eventDetailsReducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case GET_EVENT_LOADING:
			return {
				...state,
				loading: true,
				error: null,
			}
		case GET_EVENT_SUCCESS:
			return {
				...state,
				eventDetails: action.payload,
				loading: false,
				error: null,
			}
		case GET_EVENT_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			}

		default:
			return state
	}
}

export default eventDetailsReducer
