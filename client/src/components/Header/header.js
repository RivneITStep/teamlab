import React, { Fragment } from "react";
import "./header.scss";
import TopHeader from "./top-heder/top-header";
import BottomHeader from "./bottom-header/bottom-header";

const Header = () => {
  return (
    <Fragment>
      <header id="header">
        <div className="container-fluid header-top-bg">
          <div className="container header-top-container">
            <section>
              <TopHeader />
            </section>
          </div>
        </div>

        <div className="container-fluid header-bottom-bg ">
          <div className="container ">
            <BottomHeader />
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
