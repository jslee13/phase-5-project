import { useState, useEffect } from 'react'
// import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
// import './App.css'

function App() {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    fetch('http://localhost:5555/groups')
      .then(res => res.json())
      .then(data => setGroups(data))
  }, [])

  return (
      <div>

        <Outlet context={{groups, setGroups}} />
        
      </div>
  )
}

export default App
