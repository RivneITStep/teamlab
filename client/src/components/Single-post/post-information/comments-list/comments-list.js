import React from 'react';

import CommentsListItem from "../comments-list-item";

const CommentsList = ({comments}) => {
    console.log("comments:", comments);
    const list = comments.map(comment => {
        console.log("id:", comment._id);
        return (
            <div key={comment._id} className="single-comment justify-content-between d-flex">
                <CommentsListItem comment={comment}/>
            </div>
        );
    });

    return (
        <div className="comments-area">
            <h3> Comments</h3>
            <div className="comment-list">
                {comments.length > 0 ? list : "No comments yet."}
            </div>
        </div>

    );
};

export default CommentsList;