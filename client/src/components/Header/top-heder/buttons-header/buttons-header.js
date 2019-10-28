import React from "react";
import "../buttons-header/buttons-header.scss";
//import { Link } from "react-router-dom";

const ButtonsHeader = () => {
  return (
    <div className="header-top-right col">
      <button type="button" className="btn btn-login-header btn-outline-primary">
        Login
      </button>
      <button type="button" className="btn btn-register-header btn-outline-primary">
        Register
      </button>
    </div>
  );
};

export default ButtonsHeader;
