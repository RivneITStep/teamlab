import React from 'react';

const LeaveAComment = () => {
    return (
        <div className="container-fluid sPost">
            <div className="container sPost-body-main">
                <div className="row sPost-body-comment">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 send-message">
                        <div className="comment-form">
                            <h4>Leave a Comment</h4>
                        </div>
                        <form action="" className="form-group ">
                            <div className="row form-group-sPost">
                                <div
                                    className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 comment-sPost"
                                >
                                    <input
                                        className="form-control form-control-lg sPost-input"
                                        name="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        required=""
                                    />
                                    <input
                                        className="form-control form-control-lg sPost-input"
                                        name="email"
                                        type="email"
                                        placeholder="Enter email address"
                                        required=""
                                    />
                                    <input
                                        className="form-control form-control-lg sPost-input"
                                        name="subject"
                                        type="text"
                                        placeholder="Enter subject"
                                        required=""
                                    />
                                </div>
                                <div
                                    className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-comment">
                            <textarea
                                className="sPost-textarea-field form-control"
                                name="message"
                                placeholder="Enter Message"
                                required=""
                            ></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="row sPost-btn">
                        <div
                            className="sPost-send-btn col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <button type="submit" className="btn btn-outline-dark">POST COMMENT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaveAComment;