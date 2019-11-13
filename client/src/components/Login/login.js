import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log("Success");
  };
  return (
    <Fragment>
      <div className="container-fluid login-top-bg">
        <div className="container login-body">
          <section>
            <div className="row login-top">
              <h1 className="login-text">Login</h1>
            </div>
          </section>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container login-body-main">
          <section>
            <div className="row login-main">
              <div className="row login-main-bg">
                <form className="login-form" onSubmit={e => onSubmit(e)}>
                  <div className="form-group">
                    <label for="email">Email address:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="pwd"
                      name="password"
                      value={password}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                  <div className="forgot">
                    <a href="!#">Forgot password?</a>
                  </div>
                  <div className="register-link">
                    <Link to="/register">
                      Dont have an account? Register here
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-outline-dark"
                    value="Register"
                  >
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
