import React, { Fragment } from "react";
import "./top-header.scss";
import IconsHeader from "./icons-header/icons-header";
import ContactsHeader from "./contacts-header/conacts-header";
import ButtonsHeader from "./buttons-header/buttons-header";

const TopHeader = () => {
  return (
    <Fragment>
      <div className="row header-top">
        <IconsHeader />

        <ContactsHeader />

        <ButtonsHeader />
      </div>
    </Fragment>
  );
};

export default TopHeader;
