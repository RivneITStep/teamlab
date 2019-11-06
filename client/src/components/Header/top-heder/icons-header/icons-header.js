import React, { Fragment } from "react";
import "./icons-header.scss";

const IconsHeader = () => {
  return (
    <Fragment>
      <div className="header-top-left col">
        <ul className="social-header">
          <li>
            <a
              href="https://www.facebook.com/comp.academy.step"
              target="_blank"
              title="Facebook"
            >
              <i className="fab fa-facebook i-brand"></i>
            </a>
          </li>
          <li>
            <a
              href="https://mystat.itstep.org/en/auth/login/index"
              target="_blank"
              title="MyStat"
            >
              <i className="fab fa-user-graduate i-user"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RivneITStep"
              target="_blank"
              title="GitHub"
            >
               <i className="fab fa-github i-brand"></i>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default IconsHeader;
