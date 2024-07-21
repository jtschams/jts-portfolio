import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App
