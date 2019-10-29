import React, { Fragment } from "react";
import "./contacts-header.scss";

const ContactsHeader = () => {
  return (
    <Fragment>
      <div className="header-top-center col">
        <ul>
          <li>
            <i className="fas fa-phone-alt" title="Call us"></i>
            <a href="tel:+38-067-557-8704" className="phone-header">
              +38 (067) 557-87-04
            </a>
          </li>
          <li className="email-header-li">
            <i className="fas fa-paper-plane" title="Email us"></i>
            <a href="mailto:office_rv@itstep.org">office_rv@itstep.org</a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default ContactsHeader;
