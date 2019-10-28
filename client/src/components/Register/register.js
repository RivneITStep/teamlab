import React, { Fragment, useState } from "react";
import "./register.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: ""
  });

  const { name, email, password, repassword } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== repassword) {
      console.log("Passwords do not match");
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <div className="container-fluid">
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
                <form className="login-form" onSubmit={e => onSubmit(e)}>
                  <div className="form-group">
                    <label htmlFor="uname">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="E-mail"
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
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={e => onChange(e)}
                      required
                    />
                    <small
                      id="passwordHelpBlock"
                      className="form-text text-muted"
                    >
                      Your password must be 6-20 characters long, contain
                      letters and numbers, and must not contain spaces, special
                      characters, or emoji.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Confirm password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="pwd"
                      placeholder="Confirm password"
                      name="repassword"
                      value={repassword}
                      onChange={e => onChange(e)}
                      required
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
