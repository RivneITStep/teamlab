import React, {Component} from "react";
import {connect} from "react-redux";

import SinglePostHeader from "./single-post-header";
import PostInformation from "./post-information";

import "./page-single-post.scss";

class PageSinglePost extends Component {
    render() {
        const {match: {params: {id}}} = this.props;
        const {posts, user} = this.props;
        console.log("post id:", id, "mstp: ", this.props);
        const post = posts.find(post => post._id === id);
        return (
            <main>
                <SinglePostHeader/>
                <PostInformation user={user} post={post}/>
            </main>
        );
    };
}

const mapStateToProps = ({user, postList: {posts}}) => ({user, posts});

export default connect(mapStateToProps, null)(PageSinglePost);