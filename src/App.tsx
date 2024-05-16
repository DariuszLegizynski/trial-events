import { Route, Routes } from "react-router-dom"
import "./App.css"

// components
import EventsList from "./components/Event/EventsList"
import AddEvent from "./components/AddEvent"
import EventDetails from "./components/Event/EventDetails"

const App = () => {
	return (
		<main className="grid grid-cols-1 mx-auto max-w-[68rem]">
			<Routes>
				<Route exact path="/" element={<EventsList />} />
				<Route exact path="/add" element={<AddEvent />} />
				<Route exact path="/events/:id" element={<EventDetails />} />
			</Routes>
		</main>
	)
}

export default App




