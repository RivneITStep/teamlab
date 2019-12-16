import React from "react";

import "./page-posts-header.scss";

const PagePostsHeader =()=>{
    return(
        <div className="container-fluid posts-top-bg">
            <div className="container posts-body">
                <section>
                    <div className="row posts-top">
                        <h1 className="posts-text">Posts</h1>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PagePostsHeader;