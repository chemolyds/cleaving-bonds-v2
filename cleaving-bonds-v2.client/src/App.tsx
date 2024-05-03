import { Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'

export default function App() {
  return (
    <div>
      <Navigation />
      <div id="contents">
        <Outlet />
      </div>
    </div>
  )
}
