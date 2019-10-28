import React, { Fragment } from "react";
import "./login.scss";

const Login = () => {
  return (
    <Fragment>
      <div className="container- fluid login-top-bg">
        <div className="container login-body">
          <section>
            <div className="row login-top">
              <h1 className="login-text">Login</h1>
            </div>
          </section>
        </div>
      </div>

      <div className="container- fluid">
        <div className="container login-body-main">
          <section>
            <div className="row login-main">
              <div className="row login-main-bg">
                <form className="login-form">
                  <div className="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" />
                  </div>
                  <div className="forgot">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="register-link">
                    <a href="register.html" target="_blank">
                      Dont have an account? Register here
                    </a>
                  </div>

                  <button type="submit" className="btn btn-outline-dark">
                    Login
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

export default Login;
