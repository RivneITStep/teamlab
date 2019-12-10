import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProject } from "../../actions/project";
import "./projectForm.scss";

const ProjectForm = ({ addProject }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });
  const { title, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addProject({ title, description });
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="container register-body">
          <section>
            <div className="row register-main">
              <div className="row register-main-bg">
                <h1 className="register-text">Add new project</h1>
                <form className="login-form" onSubmit={e => onSubmit(e)}>
                  <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add title for the new project"
                      name="title"
                      value={title}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      cols="50"
                      rows="10"
                      placeholder="Add description for the new project"
                      name="description"
                      value={description}
                      onChange={e => onChange(e)}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-dark btn-register"
                  >
                    Add new project
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

ProjectForm.propTypes = {
  addProject: PropTypes.func.isRequired
};

export default connect(null, { addProject })(ProjectForm);
