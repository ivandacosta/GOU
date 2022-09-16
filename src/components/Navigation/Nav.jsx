import React from "react";
import { Link } from "react-router-dom";

//Style
import "./Nav.css"

const Nav = () => {
    return(
        <nav className="Navigation">
            <ul>
                <Link to="/" className="Link">Home</Link>
                <Link to="/about" className="Link">About Us</Link>
                <Link to="/contact" className="Link">Contact</Link>
            </ul>
        </nav>
    )
}

export default Nav