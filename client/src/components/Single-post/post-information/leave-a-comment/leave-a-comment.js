import React, {useEffect, useState} from 'react';
import {fetchSinglePost} from "../../../../actions/single-post";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import compose from "../../../../utils/compose";
import withTeamlabstoreService from "../../../hoc";

const LeaveAComment = ({postId, user, teamlabstoreService, fetchSinglePost}) => {
    console.log("user:", user);
    const [newComment, setComment] = useState('');

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log("SUBMIT");
            const body = JSON.stringify({comment: newComment});
            console.log('body:', body);

            const res = await teamlabstoreService.addCommentToSinglePost(postId, body);
            console.log(res);
            await fetchSinglePost(teamlabstoreService, postId);
        } catch (e) {
            console.log(e)
        }
        // onAddComment(newComment);
    };

    const handleChange = e => {
        const value = e.target.value;
        console.log("value:", value);
        setComment(value);
    };

    return (
        <div className="container-fluid sPost">
            <div className="container sPost-body-main">
                <div className="row sPost-body-comment">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 send-message">
                        <div className="comment-form">
                            <h4>Leave a Comment</h4>
                        </div>
                        <div className="row form-group-sPost">
                            <div
                                className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-comment">
                                <form onSubmit={onSubmit} className="form-group ">
                                     <textarea
                                         className="sPost-textarea-field form-control"
                                         name="message"
                                         placeholder="Enter Message"
                                         required
                                         value={newComment}
                                         onChange={handleChange}
                                     ></textarea>
                                    <button type="submit" className="btn btn-outline-dark"
                                    >POST COMMENT
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch, {teamlabstoreService, postId}) => {
    return bindActionCreators({
        fetchSinglePost: fetchSinglePost(teamlabstoreService, postId)
    }, dispatch);
};

export default compose(
    withTeamlabstoreService(),
    connect(
        null,
        mapDispatchToProps
    )
)(LeaveAComment);