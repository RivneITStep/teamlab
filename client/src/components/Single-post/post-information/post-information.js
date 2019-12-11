import React, {Component, Fragment} from 'react';
import CommentsList from "./comments-list";
import LeaveAComment from "./leave-a-comment";
import Preloader from "../../Preloader/Preloader";

export default class PostInformation extends Component {

    state = {
        postData: null,
        like: false,
        error: false
    };

    updateLike = async () => {
        const {teamlabstoreService, post: {_id: postId}} = this.props;
        const {like} = this.state;

        let apiServiceMethod = '';
        like ? apiServiceMethod = 'setLikeToPost' : apiServiceMethod = 'deleteLikeFromPost';

        await teamlabstoreService[apiServiceMethod](postId)
            .then(() => {
                this.setState((state) => {
                    return {
                        like: !state.like
                    }
                })
            })
            .catch((err) => {
                this.setState((state) => {
                    return {
                        error: true
                    }
                })
            })
    };

    onLike = async () => {
        await this.updateLike();
    };

    render() {
        const {like} = this.state;
        const {post, user, loading, error} = this.props;

        const content = !loading ? <PostView like={like} post={post} user={user} onLike ={this.onLike}/> : <Preloader/>;

        return (
            <section className="post-content-area single-post-area">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 posts-list">
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const PostView =({post, user , like, onLike}) =>{
    const {title, author: {name: author}, text: content, date, views, comments, likes} = post;

    let likeClassName = "";
    like ? likeClassName = "like-true" : likeClassName = "";

    const userLikeArea = <a href="#" className={likeClassName} onClick={onLike}
    ><i className="fa fa-thumbs-up"
        aria-hidden="true"></i> {likes.length}
    </a>;
    const guestLikeArea = <a href="#">
        <i className="fa fa-thumbs-up"
           aria-hidden="true"></i> {likes.length}
    </a>;
    return (
        <Fragment>
            <div className="single-post row">
                <h3 className="mt-20 mb-20">{title}</h3>
                <p>
                    <img className="img-fluid"
                         src={require("../../../style/img/people-coffee-tea-meeting.jpg")}
                         alt="img/"/>
                    {content}
                </p>
            </div>
            <div className="single-post row">
                <div className="col-lg-6 col-md-6">
                    <p>Published:{date.split('T')[0]} Author: <a href="#">{author}</a></p>
                </div>
                <div className="col-lg-6 col-md-6 d-flex flex-row justify-content-around">
                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> {views}</a>
                    {user ? userLikeArea : guestLikeArea}
                    <a href="#"><i className="fa fa-comments"
                                   aria-hidden="true"></i> {comments.length}</a>
                </div>
            </div>
            <CommentsList comments={comments}/>
            {user ? <LeaveAComment/> : null}
        </Fragment>
    )
};