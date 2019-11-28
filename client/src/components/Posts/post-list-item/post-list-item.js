import React, {Fragment} from "react";
import {Link} from "react-router-dom";

import "./post-list-item.scss";

const PostListItem = ({post}) => {
    const {title, author: {name: author}, text: content, date, _id, views, comments, likes} = post;
    const linkStyle = {
        color: 'inherit',
        textDecoration: 'inherit'
    };
    return (
        <Fragment>
            <div className="col-4 d-flex flex-row justify-content-center img-likes">
                <div className="d-flex flex-column justify-content-lg-center like-comments-views">
                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> {views}</a>
                    <a href="#"><i className="fa fa-thumbs-up" aria-hidden="true"></i> {likes.length}</a>
                    <a href="#"><i className="fa fa-comments" aria-hidden="true"></i> {comments.length}</a>
                </div>
                <div className="d-flex flex-column justify-content-around img-date-author">
                    <p className="date text-center font-weight-bold">{date.split('T')[0]}</p>
                    <Link style={linkStyle} to={`/single-post/${_id}`}>
                        <div className="img-posts">
                        </div>
                    </Link>
                    <p className="author">Author: <a href="#">{author}</a></p>
                </div>
            </div>

            <div className=" col-8 detials-posts">
                <Link style={linkStyle} to={`/single-post/${_id}`} >
                    <h3 className="text-lg-center font-weight-bold"><a href="#">{title}</a></h3>
                    <p>
                        {content}
                    </p>
                    <button type="submit" className="btn btn-outline-primary m-auto d-block">
                        Read more >>
                    </button>
                </Link>
            </div>
        </Fragment>
    );
};

export default PostListItem;