import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

import "./login.scss";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="container login-body-main">
          <section>
            <div className="row login-main">
              <div className="row login-main-bg">
              <h1 className="login-text">Login</h1>
                <form className="login-form" onSubmit={e => onSubmit(e)}>
                  <div className="form-group">
                    <label htmlFor="email">Email address:</label>
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
                    <label htmlFor="pwd">Password:</label>
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
                    <Link to="/forgot">
                      Forgot password?</Link>
                  </div>
                  <div className="register-link">
                    <Link to="/register">
                      Dont have an account? Register here
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-outline-dark"
                    value="Login"
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
