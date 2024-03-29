import React from "react";
import { NavLink, useNavigate } from "react-router-dom";


function Navbar({currentUser, setCurrentUser}){

    // const navigate = useNavigate()

    function handleLogout() {
        setCurrentUser(null)
        fetch('/api/logout', { method: 'DELETE' })
      }
    
    return(
        <nav>
            <ul className="nav-ul">
                <li className="welcome"> {currentUser && `Welcome, ${currentUser.username}!`} </li>
                <div className="right-side">
                    <NavLink to="/" className="custom-link">Home</NavLink>
                    {currentUser ? (
                        <>
                            <button className="custom-link" onClick={handleLogout}>Logout</button>
                        </>
                        ) : (
                            <>
                            <NavLink to="/login" className="custom-link">Login</NavLink>
                            <NavLink to="/sign-up" className="custom-link">Sign-Up</NavLink>
                            </>
                        )}
                </div>
            </ul>
      </nav>
        
    )
}

export default Navbar;