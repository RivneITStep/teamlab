import React, {useEffect, useState} from 'react';
import CommentsList from "./comments-list";
import LeaveAComment from "./leave-a-comment";
import Preloader from "../../Preloader/Preloader";

const PostInformation = ({teamlabstoreService, post, user, error}) => {

    const [info, setInfo] = useState('');

    useEffect(() => {
        setInfo({
            postData: post,
            like: false,
            error: false
        });
        console.log("postData:", info.postData);
        console.log("post:", post);
    }, []);

    const onUpdateLike = async (likePressed, postId) => {
        let apiServiceMethod = '';

        likePressed ? apiServiceMethod = 'setLikeToPost' : apiServiceMethod = 'deleteLikeFromPost';

        await teamlabstoreService[apiServiceMethod](postId)
            .then(() => {
                setInfo({...info, like: !likePressed})
            })
            .catch((err) => {
                setInfo({...info, error: true})
            })
    };

    const content = <PostView teamlabstoreService={teamlabstoreService} like={info.like} post={info.postData}
                              user={user}
                              onUpdateLike={onUpdateLike}
    />;

    return (
        <section className="post-content-area single-post-area">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 posts-list">
                            {info ? content : <Preloader/>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PostView = ({post, user, like, onUpdateLike, teamlabstoreService}) => {
    const {_id, title, author: {name: author}, text: content, date, views, comments, likes} = post;
    console.log("id:", _id, "like:", like);
    let likeClassName = "";
    const [total, setTotal] = useState(likes.length);

    like ? likeClassName = "like-true" : likeClassName = "";

    const likeArea = user ?
        <a href="#" className={likeClassName} onClick={() => {
            onUpdateLike(like, _id);
            !like ? setTotal(total + 1) : setTotal(total - 1);
        }
        }>
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>{total}
        </a> :
        <a href="#"><i className="fa fa-thumbs-up" aria-hidden="true"></i> {likes.length}</a>;
    return (
        <>
            <div className="single-post row">
                <h3 className="mt-20 mb-20" >{title}</h3>
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
                    {likeArea}
                    <a href="#"><i className="fa fa-comments" aria-hidden="true"></i> {comments.length}</a>
                </div>
            </div>
            <CommentsList comments={comments}/>
            {user ? <LeaveAComment teamlabstoreService={teamlabstoreService} postId={_id} user={user}
            /> : null}
        </>
    )
};

export default PostInformation