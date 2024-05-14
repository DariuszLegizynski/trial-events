import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import eventDetailsReducer from "./eventDetailsReducer"

const rootReducer = combineReducers({
	events: eventsReducer,
	eventDetails: eventDetailsReducer,
})

export default rootReducer