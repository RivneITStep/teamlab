import React from "react";
import "./bottom-header.scss";
import Logo from "./logo/logo";
import NavBar from "./navbar/navbar";

const BottomHeader = () => {
  return (

        <div className="row header-bottom">
          <Logo />

          <NavBar />
        </div>

  );
};

export default BottomHeader;
