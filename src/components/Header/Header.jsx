import React from "react";
import { Link } from "react-router-dom";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

//style
import "./Header.css";

//
import Nav from "../Navigation/Nav";
function Header() {
  return (
    <header>
      <div className="Logo">
        <Link className="Link" to="/">
          <h2>GOU</h2>
        </Link>
      </div>

      <Nav />

      <div className="Cart">
        <p>
          <FontAwesomeIcon icon={faCartShopping} /> 0
        </p>
      </div>
    </header>
  );
}

export default Header;
