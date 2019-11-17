import React, { Fragment } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <div className="header-bottom-right col-9">
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div></div>
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li className="item">
                    <Link to="/" className="link-nav">
                      Home
                    </Link>
                  </li>
                  <li className="item">
                    <Link to='/about' className="link-nav">
                      About
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="projects" className="link-nav">
                      Projects
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="news" className="link-nav">
                      News
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="faq" className="link-nav">
                      FAQ
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="posts" className="link-nav">
                      Posts
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="contact" className="link-nav">
                      Contact
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="login" className="link-nav">
                      Login
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="register" className="link-nav">
                      Register
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="profile" className="link-nav">
                      Profile
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="single-post" className="link-nav">
                      SPost
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="single-project" className="link-nav">
                      SProject
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="forgot" className="link-nav">
                      Forgot
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li className="item">
              <Link to="/" className="link-nav">
                Home
              </Link>
            </li>
            <li className="item">
              <Link to="about" className="link-nav">
                About
              </Link>
            </li>
            <li className="item">
              <Link to="projects" className="link-nav">
                Projects
              </Link>
            </li>
            <li className="item">
              <Link to="news" className="link-nav">
                News
              </Link>
            </li>
            <li className="item">
              <Link to="faq" className="link-nav">
                FAQ
              </Link>
            </li>
            <li className="item">
              <Link to="posts" className="link-nav">
                Posts
              </Link>
            </li>
            <li className="item">
              <Link to="contact" className="link-nav">
                Contact
              </Link>
            </li>
            <li className="item">
              <Link to="login" className="link-nav">
                Login
              </Link>
            </li>
            <li className="item">
              <Link to="register" className="link-nav">
                Register
              </Link>
            </li>
            <li className="item">
              <Link to="profile" className="link-nav">
                Profile
              </Link>
            </li>
            <li className="item">
              <Link to="single-post" className="link-nav">
                SPost
              </Link>
            </li>
            <li className="item">
              <Link to="single-project" className="link-nav">
                SProject
              </Link>
            </li>
            <li className="item">
              <Link to="forgot" className="link-nav">
                Forgot
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default NavBar;
