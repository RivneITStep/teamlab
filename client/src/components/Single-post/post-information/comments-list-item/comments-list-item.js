import React, {Fragment} from 'react';

const CommentsListItem = ({comment}) => {
    const {commentDate, author, comment: content} = comment;
    return (
        <Fragment>
            <div className="user justify-content-between d-flex">
                <div className="thumb">
                    <img src={require("../../../../style/img/def_avatar.png")} alt="img/"/>
                </div>
                <div className="desc">
                    <h5><a href="#">{author.name}</a></h5>
                    <p className="date">{commentDate.split('T')[0]}, {commentDate.split('T')[1].split('.')[0]}</p>
                    <p className="comment">{content}</p>
                </div>
            </div>
            <div className="reply-btn">
                <button type="submit" className="btn btn-outline-dark">
                    reply
                </button>
            </div>
        </Fragment>
    );
};

export default CommentsListItem;