import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'

// components
import EventList from './components/EventList'
import AddEvent from './components/AddEvent'
import EventDetail from './components/EventDetail'

const App = () => {
  const [events, setEvents] = useState([])

  return (
    <main>
      <h1>Welcome to my App</h1>
      <Routes>
				<Route exact path="/" element={<EventList />} />
				<Route exact path="/add" element={<AddEvent />} />
				<Route exact path="/event/:id" element={<EventDetail />} />
			</Routes>
    </main>
  )
}

export default App
