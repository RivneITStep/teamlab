import React from "react";
import "./page-posts.scss";

import PagePostsHeader from "./page-posts-header";
import PostListContainer from "../../containers/post-list-container/post-list-container";

const PagePosts = () => {
    return (
        <main>
            <PagePostsHeader/>
            <PostListContainer />
        </main>
    );
};

export default PagePosts;