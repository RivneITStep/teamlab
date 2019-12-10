import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { getProject, deleteProject } from "../../actions/project";
import Preloader from "../Preloader/Preloader";

import "./project.scss";

const Project = ({
  auth,
  getProject,
  addProject,
  deleteProject,
  project: { project, loading },
  match
}) => {
  useEffect(() => {
    getProject(match.params.id);
  }, [getProject]);

  return loading || project === null ? (
    <Preloader />
  ) : (
    <Fragment>
      <div className="container-fluid sProject-top-bg">
        <div className="container sProject-body">
          <section>
            <div className="row sProject-top">
              <h1 className="sProject-text">Single Project</h1>
            </div>
          </section>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <section>
            <div className="row">
              <div className="sProject-Title col-xl-12">
                <h2>{project.project.title}</h2>
              </div>
              <div className="sProject-Logo col-xl-4 ">
                <div className="sProject-title-logo col-xl-12">
                  <img
                    src={project.project.image}
                    alt="project-logo"
                    className="project-logo"
                  />
                </div>
                <div className="sProject-date col-xl-12">
                  <p>
                    <Moment format="DD-MM-YYYY">{project.project.date}</Moment>
                  </p>
                </div>
                <div className="sProject-skills col-xl-12">
                  <p>{project.project.stage}</p>
                </div>
              </div>
              <div className="sProject-Info col-xl-8">
                <div className="sProject-Description col-xl-12">
                  <p>{project.project.description}</p>
                </div>
              </div>
              {/* {!auth.loading && project.project.author.id === auth.user._id && (
                <Link to="/projects">
                  <button
                    onClick={e => deleteProject(project.project._id)}
                    type="button"
                    className="btn btn-outline-primary apply-project"
                  >
                    Delete Project
                  </button>
                </Link>
              )} */}
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

Project.propTypes = {
  auth: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
  getProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  project: state.project
});

export default connect(mapStateToProps, {
  getProject,
  deleteProject
})(Project);
