import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Moment from "react-moment";
import {connect} from "react-redux";

const ProjectItem = props => {
    return (
        <div className="row">
                                    <div className="col-xl-12 project-head-title">
                                            <p>TeamLab</p>
                                    </div>
                                    <div className="project-field">
                                        <div className=" col-xl-3 col-lg-3 col-md-12">
                                            <img src="../img/logo.jpg" alt="project-logo" className="project-logo"/>
                                        </div>
                                        <div className="project-description col-xl-9 col-lg-9 col-md-12">
                                            <h5>Description:</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore possimus cumque id quo eligendi. Quod quasi deleniti beatae dolorum! Similique corrupti asperiores dolores aliquid doloribus provident officia rem! Architecto, cumque.</p>
                                            <br/>
                                            <h5>Skills:</h5>
                                            <p>HTML, CSS, nodeJS</p>
                                            <h5>Date:</h5>
                                            <p>01.10.2019</p>
                                        </div>
                                    </div>
                                    <div className="project-apply-btn col-xl-12 col-lg-12 col-md-12">
                                        <button type="button" className="btn btn-outline-primary apply-project">Apply</button>
                                    </div>
                                </div>
    )
}

ProjectItem.propTypes = {
    project:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps, {}) (ProjectItem)
