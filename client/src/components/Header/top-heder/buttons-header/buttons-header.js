import React, { Fragment } from "react";
import "./buttons-header.scss";
import { Link } from "react-router-dom";

const ButtonsHeader = () => {
  return (
    <Fragment>
      <div className="header-top-right col">
        <Link to="/login">
          <button
            type="button"
            className="btn btn-login-header btn-outline-primary"
          >
            Login
          </button>
        </Link>
        <Link to="/register">
          <button
            type="button"
            className="btn btn-register-header btn-outline-primary"
          >
            Register
          </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default ButtonsHeader;
