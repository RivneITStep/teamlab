import React, { Fragment } from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <Fragment>
      <div className="container- fluid contact-top-bg">
        <div className="container contact-top-body">
          <section>
            <div className="row contact-top">
              <h1 className="contact-top-text">Contact us</h1>
            </div>
          </section>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container contact-body-main">
          <div className="row contact-body">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 contact-list">
              <div className="contact-details">
                <a
                  href="https://www.google.com/maps/dir//50.618813,26.258895/@50.618813,26.258895,17z?hl=ru-UA"
                  target="_blank" className="contact-address"
                >
                  <i className="fas fa-home mr-3" title="Visit us"></i>Soborna
                  str, 16
                </a>
                <p>Rivne, Ukraine</p>
              </div>
              <div className="contact-details">
                <a href="tel:+38-067-557-8704" className="phone-contact">
                  <i className="fas fa-phone-alt" title="Call us"></i>
                  (067) 557-87-04
                </a>
                <p>Mon to Fri 9am to 6 pm</p>
              </div>
              <div className="contact-details">
              <a href="mailto:office_rv@itstep.org" className="email-contact">
                <i className="fas fa-envelope mr-3" title="Email us"></i>office_rv@itstep.org
              </a>
                <p>Send us your query anytime!</p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 send-message">
              <form action="" className="form-group ">
                <div className="row form-group-contact">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 send-message-group">
                    <input
                      className="form-control form-control-lg contact-input"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required=""
                    />
                    <input
                      className="form-control form-control-lg contact-input"
                      name="email"
                      type="email"
                      placeholder="Enter email address"
                      required=""
                    />
                    <input
                      className="form-control form-control-lg contact-input"
                      name="subject"
                      type="text"
                      placeholder="Enter subject"
                      required=""
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-message">
                    <textarea
                      className="contact-textarea-field form-control"
                      name="message"
                      placeholder="Enter Message"
                      required=""
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="row contact-btn">
              <div className="contact-send-btn col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <button type="submit" className="btn btn-outline-dark btn-send">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
