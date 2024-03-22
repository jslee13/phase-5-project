import { useState, useEffect } from 'react'
import Navbar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import './css/App.css'

function App() {
  const [groups, setGroups] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5555/groups')
      .then(res => res.json())
      .then(data => setGroups(data))
  }, [])

  useEffect(() => {
    fetch('/api/check_session')
    .then(res => {
      if (res.ok) {
        res.json()
        .then( data => {
          if (data.id) {
            setCurrentUser(data)
          }
        })
        }
      })
  }, [])

  return (
      <div>
        <Header />
        <Navbar currentUser = {currentUser} setCurrentUser={setCurrentUser}/>
        <Outlet context={{groups, setGroups, currentUser, setCurrentUser}} />
        <Footer />
        
      </div>
  )
}

export default App
