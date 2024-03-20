import React from 'react';
import { useState } from 'react';
import {useNavigate, useOutletContext} from "react-router-dom";


function Login() {

    const {currentUser, setCurrentUser} = useOutletContext()
    const navigate = useNavigate()

    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const { isAuthenticated, login } = useAuth();
    

    async function handleLogin(e) {
        e.preventDefault()
        const userInfo = {username, password}
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(userInfo)
        })
        if (res.ok) {
          const data = await res.json()
          setCurrentUser(data)
          navigate("/")
     
        } else {
          alert('Invalid log in')
        }
    
    }
    
    return(
        <div>
            <form onSubmit={handleLogin}>
                <label> Username:
                    <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    />
                </label>
                <label> Password:
                    <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                </label>
            <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login