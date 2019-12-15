import React, { Fragment } from "react";
import "./bottom-header.scss";
import Logo from "./logo/logo";
import NavBar from "./navbar/navbar";

const BottomHeader = () => {
  return (
    <Fragment>
      <div className="row header-bottom">
        <Logo />

        <NavBar />
      </div>
    </Fragment>
  );
};

export default BottomHeader;
