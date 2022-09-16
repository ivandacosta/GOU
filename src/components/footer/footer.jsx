import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

//Style
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="">
        <h3>GOU</h3>
      </div>

      <div className="ubication">
        <h3>Av. Libertador 5230</h3>
      </div>

      <div className="git">
        <a href="github.com">
          <FontAwesomeIcon icon={faLink} />
          Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
