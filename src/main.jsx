import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home.jsx'
import 'leaflet/dist/leaflet.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
