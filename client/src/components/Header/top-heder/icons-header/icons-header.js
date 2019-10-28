import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../icons-header/icons-header.scss";
import { Link } from "react-router-dom";

const IconsHeader = () => {
  return (
    <div className="header-top-left col">
      <ul className="social-header">
        <li>
          <Link
            to="https://www.facebook.com/comp.academy.step"
            // target="_blank"
            // title="Facebook"
          >
           <i className="fa fa-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link
            to="https://mystat.itstep.org/en/auth/login/index"
            target="_blank"
            title="MyStat"
          >
            <i className="fa fa-user-graduate"></i>
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/RivneITStep"
            target="_blank"
            title="GitHub"
          >
            <i className="fa fa-github"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default IconsHeader;
