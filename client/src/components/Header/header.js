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
                <Link to="projects">Projects</Link>
              </li>
              <li>
                <Link to="news">News</Link>
              </li>
              <li>
                <Link to="faq">FAQ</Link>
              </li>
              <li>
                <Link to="posts">Posts</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <Link to="register">Register</Link>
              </li>
              <li>
                <Link to="profile">Profile</Link>
              </li>

              </ul>
          </nav>
        </div>
      </div>
    );
  };
  
  export default Header;
