import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function SignUp() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const {setCurrentUser} = useOutletContext()

    async function handleRegister(e) {
        e.preventDefault()
        const new_user = {username, password}
        const res = await fetch('/api/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify(new_user)
            })
            if (res.ok) {
              const data = await res.json()
              setCurrentUser(data)
              navigate("/login")
            } else {
              alert('Invalid sign up')
            }
            console.log("posted" + new_user)
          }
   
    return (
      <div className="login-container">
            <form onSubmit={handleRegister}>
                <h2>Sign-up</h2>
                <label>Set Username:
                    <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    />
                </label>
                <label>Set Password:
                    <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                </label>
            <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default SignUp