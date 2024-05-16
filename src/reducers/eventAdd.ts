import { ActionType } from "../types/ActionType"

const eventAdd = (state = [], action: ActionType) => {
	switch (action.type) {
		case "ADD_EVENT":
			return [...state, action.payload]
		default:
			return state
	}
}

export default eventAdd
