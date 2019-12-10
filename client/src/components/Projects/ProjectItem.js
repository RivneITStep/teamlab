import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";


const ProjectItem = ({
  project: { _id, author, image, title, description, stage, date }
}) => (
  <section className="project-block">
    <div className="row">
    <div className="col-xl-12 project-head-title">
      <p>{title}</p>
    </div>
    <div className="project-field">
      <div className=" col-xl-3 col-lg-3 col-md-12">
        <img src={image} alt="project-logo" className="project-logo" />
      </div>
      <div className="project-description col-xl-9 col-lg-9 col-md-12">
        <h5>Description:</h5>
        <p>{description}</p>
        <br />
        <h5>Stage:</h5>
        <p>{stage}</p>
        <h5>Date:</h5>
        <p>
          <Moment format="DD-MM-YYYY">{date}</Moment>
        </p>
        <h5>Author:</h5>
        <p>{author.name}</p>
      </div>
    </div>
    <div className="project-apply-btn col-xl-12 col-lg-12 col-md-12">
      <Link to={`/single-project/${_id}`}>
        <button type="button" className="btn btn-outline-primary apply-project">
          Show more
        </button>
      </Link>
    </div>
    </div>
  </section>
);

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired
};

export default connect(null, {})(ProjectItem);
