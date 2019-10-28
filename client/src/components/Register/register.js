import React, { Fragment } from "react";
import "./register.scss";

const Register = () => {
  return (
    <Fragment>
      <div className="container- fluid">
        <div className="container register-body">
          <section>
            <div className="row register-top">
              <div className="register-top-bg">
                <h4 className="register-text">Register</h4>
              </div>
            </div>
          </section>
          <section>
            <div className="row register-main">
              <div className="row register-main-bg">
                <form className="login-form">
                  <div className="form-group">
                    <label for="uname">First name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="sname">Last name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Surname"
                    />
                  </div>
                  <div className="form-group">
                    <label for="city">City:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="City"
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">Email address:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="pwd"
                      placeholder="Password"
                    />
                    <small
                      id="passwordHelpBlock"
                      className="form-text text-muted"
                    >
                      Your password must be 8-20 characters long, contain
                      letters and numbers, and must not contain spaces, special
                      characters, or emoji.
                    </small>
                  </div>
                  <div className="form-group">
                    <label for="pwd">Confirm password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="pwd"
                      placeholder="Confirm password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-outline-dark btn-register"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
