import React from "react";

import SinglePostHeader from "./single-post-header";

import "./page-single-post.scss";

import SinglePostContainer from "../../containers/single-post-container/single-post-container";

const PageSinglePost = ({match: {params: {id}}}) => {

    return (
        <main>
            <SinglePostHeader/>
            <SinglePostContainer postId={id}/>
        </main>
    );
};

export default PageSinglePost;