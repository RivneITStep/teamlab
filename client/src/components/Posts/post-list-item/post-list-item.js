import React, {Fragment} from "react";

import "./post-list-item.scss";

const PostListItem = ({post}) => {
    const {title, author: {name: author}, text: content, date} = post;
    return (
        <Fragment>
            <div className="col-4 d-flex flex-row justify-content-center img-likes">
                <div className="d-flex flex-column justify-content-lg-center like-comments-views">
                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                    <a href="#"><i className="fa fa-thumbs-up" aria-hidden="true"></i> 834</a>
                    <a href="#"><i className="fa fa-comments" aria-hidden="true"></i> 234</a>
                </div>
                <div className="d-flex flex-column justify-content-around img-date-author">
                    <p className="date text-center font-weight-bold">{date.split('T')[0]}</p>
                    <div className="img-posts">
                    </div>
                    <p className="author">Author: <a href="#">{author}</a></p>
                </div>
            </div>

            <div className=" col-8 detials-posts">
                <h3 className="text-lg-center font-weight-bold"><a href="#">{title}</a></h3>
                <p>
                    {content}
                </p>
                <button type="submit" className="btn btn-outline-primary m-auto d-block">
                    Read more >>
                </button>
            </div>
        </Fragment>
    );
};

export default PostListItem;