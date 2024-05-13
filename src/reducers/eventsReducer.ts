import { GET_EVENTS_LOADING, GET_EVENTS_SUCCESS, GET_EVENTS_FAIL } from '../actions/index'
import { Event } from '../types/Event'

const initialState = {
  eventList: [] as Event[],
  loading: false as boolean,
  error: null,
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        eventList: action.payload,
        loading: false,
        error: null,
      }
    case GET_EVENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default eventsReducer