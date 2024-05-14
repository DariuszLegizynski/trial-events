import { Route, Routes } from "react-router-dom"
import "./App.css"

// components
import EventsList from "./components/Event/EventsList"
import AddEvent from "./components/AddEvent"
import EventDetails from "./components/Event/EventDetails"

const App = () => {
	return (
		<main>
			<h1>Welcome to my App</h1>
			<Routes>
				<Route exact path="/" element={<EventsList />} />
				<Route exact path="/add" element={<AddEvent />} />
				<Route exact path="/events/:id" element={<EventDetails />} />
			</Routes>
		</main>
	)
}

export default App




