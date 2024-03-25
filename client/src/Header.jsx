import { NavLink } from "react-router-dom"

function Header() {
    return(
        <h1>
            <NavLink to="/" className="title"> K-Forum </NavLink>
        </h1>
    )
}

export default Header