import React, {Component} from "react";
import PostList from "../../components/Posts/post-list";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import withTeamlabstoreService from "../../components/hoc";
import {fetchPosts} from "../../actions/post";
import compose from "../../utils/compose";

class PostListContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const {posts} = this.props;
        console.log("posts:", posts);
        return <PostList posts={posts}/>;
    }
}

const mapStateToProps = ({postList: {posts}}) => {
    return {posts};
};

const mapDispatchToProps = (dispatch, {teamlabstoreService}) => {
    return bindActionCreators({
        fetchPosts: fetchPosts(teamlabstoreService)
    }, dispatch);
};

export default compose(
    withTeamlabstoreService(),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(PostListContainer);