import React from "react";

import PostListItem from "../post-list-item";

import "./post-list.scss";

const PostList = ({posts}) => {
    console.log("postList:", posts);
    let cntr = 0;
    let className = "";
    if (!posts) return (<p>(((</p>);
    return (
        <div className="container-fluid main-bg">
            <div className="container user-posts">
                {posts.map(post => {
                    ++cntr;
                    if(!cntr%2) className ="row posts-block-row";
                    else className ="";
                    return (
                        <div className={className} key={post._id}>
                            <div className="col posts-block" >
                                <PostListItem post={post}/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PostList;