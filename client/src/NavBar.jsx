import React from "react";
import { NavLink, useNavigate } from "react-router-dom";


function Navbar({currentUser, setCurrentUser}){

    const navigate = useNavigate()

    function handleLogout() {
        setCurrentUser(null)
        fetch('/logout', { method: 'DELETE' })
      }
        console.log("the current user is" + currentUser)
    
    // function isLogin() {
    //     setCurrentUser(!currentUser)
    // }
    
    return(
        <nav>
            <ul>
                <NavLink to="/" className="custom-link">Home</NavLink>
                {currentUser ? (
                    <>
                        <li>Welcome, {currentUser.username}</li>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                    ) : (
                        <>
                        <NavLink to="/login" className="custom-link">Login</NavLink>
                         <NavLink to="/sign-up" className="custom-link">Sign-Up</NavLink>
                        </>
                    )}
            </ul>
      </nav>
        
    )
}

export default Navbar;