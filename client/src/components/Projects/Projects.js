import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProjects } from "../../actions/project";
import Preloader from "../Preloader/Preloader";
import ProjectItem from "./ProjectItem";

const Projects = ({ getProjects, project: { projects, loading } }) => {
  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return loading ? <Preloader/> : 
      <Fragment>
        <div className="container-fluid projects-top-bg">
            <div className="container projects-body">
                <section>
                    <div className="row projects-top">
                        <h1 className="projects-text">Projects</h1>
                    </div>
                </section>
            </div>
        </div>
        <div className="container-fluid">
            <div className="container project-body">
                <section>
                    <div className="project-title">
                        <h2>Open projects</h2>
                    </div>
                        <section className="project-block">
                            {projects.map(project => (
                                <ProjectItem key={project._id} project={project} />
                            ))} 
                        </section>
                </section>
            </div>
        </div>
      </Fragment>
};

Projects.propTypes = {
  getProjects: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, { getProjects })(Projects);
