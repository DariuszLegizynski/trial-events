import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import eventDetailsReducer from "./eventDetailsReducer"
import eventAdd from "./eventAdd"

const rootReducer = combineReducers({
	events: eventsReducer,
	eventDetails: eventDetailsReducer,
	addEvent: eventAdd,
})

export default rootReducer