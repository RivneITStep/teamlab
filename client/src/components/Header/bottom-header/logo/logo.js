import React from "react";
import "../logo/logo.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="header-bottom-left col-3">
    <Link to="/">TeamLab</Link>
  </div>
  );
};

export default Logo;