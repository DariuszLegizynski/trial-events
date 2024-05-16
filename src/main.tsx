import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from './store.js'
import App from './App.tsx'
import "./styles/index.css"
import "./styles/components.css"
import "./styles/globals.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
      
    </BrowserRouter>
  </React.StrictMode>,
)


