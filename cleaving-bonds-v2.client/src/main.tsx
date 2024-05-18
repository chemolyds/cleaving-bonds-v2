import '@/assets/styles.scss'
import Home from '@/pages/Home'
import Leaderboard from '@/pages/Leaderboard'
import Login from '@/pages/Login'
import Logout from '@/pages/Logout'
import Question from '@/pages/Question'
import QuestionSetsList from '@/pages/QuestionSetsList'
import AdminDashboard from '@/pages/admin/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="sets" element={<QuestionSetsList />} />
          <Route path="set/:tier/:topic" element={<Question />} />
          <Route path="admin">
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
