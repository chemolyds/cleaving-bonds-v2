import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './assets/styles.scss'
import Home from './pages/Home'
import Leaderboard from './pages/Leaderboard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
