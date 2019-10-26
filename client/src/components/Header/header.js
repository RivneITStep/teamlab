import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="row">
        <div className="col navigation">
          <nav>
            <ul className="main-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
              </ul>
          </nav>
        </div>
      </div>
    );
  };
  
  export default Header;
