import React from 'react';
import CommentsList from "./comments-list";
import LeaveAComment from "./leave-a-comment";

const PostInformation = ({user, post}) => {
    const {title, author: {name: author}, text: content, date, views, comments, likes} = post;

    return (
        <section className="post-content-area single-post-area">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 posts-list">
                            <div className="single-post row">
                                <div className="col-lg-12 col-md-12">
                                    <h3 className="mt-20 mb-20">{title}</h3>
                                    <p>
                                        <img className="img-fluid"
                                             src={require("../../../style/img/people-coffee-tea-meeting.jpg")}
                                             alt="img/"/>
                                        {content}
                                    </p>
                                    <p>Published:{date} Author: {author}, Views: {views}, Likes: {likes}</p>
                                </div>
                            </div>
                            <CommentsList comments={comments}/>
                            {user ? <LeaveAComment/> : null}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostInformation;