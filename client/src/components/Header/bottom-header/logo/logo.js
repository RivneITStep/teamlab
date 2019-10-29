import React, { Fragment } from "react";
import "./logo.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Fragment>
      <div className="header-bottom-left col-3">
        <Link to="/">TeamLab</Link>
      </div>
    </Fragment>
  );
};

export default Logo;
