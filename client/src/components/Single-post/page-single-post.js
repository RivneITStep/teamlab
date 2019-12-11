import React, {Component} from "react";

import SinglePostHeader from "./single-post-header";

import "./page-single-post.scss";
import SinglePostContainer from "../../containers/single-post-container/single-post-container";

class PageSinglePost extends Component {

    render() {
        const {match: {params: {id}}} = this.props;
        return (
            <main>
                <SinglePostHeader/>
                <SinglePostContainer postId={id}/>
            </main>
        );
    };
}

export default PageSinglePost;