import React, { Fragment } from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <Fragment>
      <footer className="page-footer font-small mdb-color pt-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left mt-3 pb-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">TeamLab</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Projects</h6>
              <p>
                <a className="footer-a-hover" href="#!">
                  Open
                </a>
              </p>
              <p>
                <a className="footer-a-hover" href="#!">
                  In progress
                </a>
              </p>
              <p>
                <a className="footer-a-hover" href="#!">
                  Finished
                </a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a className="footer-a-hover" href="#!">
                  Your Account
                </a>
              </p>
              <p>
                <a className="footer-a-hover" href="#!">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a className="footer-a-hover" href="#!">
                  Help
                </a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 contact-us-footer">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <a href="https://www.google.com/maps/dir//50.618813,26.258895/@50.618813,26.258895,17z?hl=ru-UA">
                <i className="fas fa-home mr-3"></i> Soborna str, 16, Rivne,
                Ukraine
              </a>
              <a href="mailto:office_rv@itstep.org">
                <i className="fas fa-envelope mr-3"></i>office_rv@itstep.org
              </a>
              <a href="tel:+38-067-557-8704">
                <i className="fas fa-phone mr-3"></i> +38 (067) 557-87-04
              </a>
            </div>
          </div>
          <hr />

          <div className="row d-flex align-items-center footer-bottom">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left">
                © 2019 Copyright:
                <a href="https://rivne.itstep.org">
                  <strong> © 1999-2019 STEP IT Academy</strong>
                </a>
              </p>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/comp.academy.step"
                      title="Facebook"
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://mystat.itstep.org/en/auth/login/index"
                      title="MyStat"
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                    >
                      <i className="fas fa-user-graduate"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      title="GitHub"
                      href="https://github.com/RivneITStep"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
