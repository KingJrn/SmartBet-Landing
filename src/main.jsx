import React from 'react'
import ReactDOM from 'react-dom/client'
import TwakTo from './TwakTo.jsx'
import App from './App.jsx'
import './bulma.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TwakTo/>
    <App />
  </React.StrictMode>,
)
