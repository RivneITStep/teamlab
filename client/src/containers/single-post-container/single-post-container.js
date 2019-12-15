import React, {Component} from "react";
import PostInformation from "../../components/Single-post/post-information";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import withTeamlabstoreService from "../../components/hoc";
import {fetchSinglePost} from "../../actions/single-post";
import compose from "../../utils/compose";
import Preloader from "../../components/Preloader/Preloader";

class SinglePostContainer extends Component {

    componentDidMount() {
        this.props.fetchSinglePost();
    }

    render() {
        let loading = true;
        const {post, user, teamlabstoreService} = this.props;
        loading = !post || !post.author;
        return !loading ?
            <PostInformation teamlabstoreService={teamlabstoreService} loading={loading} user={user} post={post}/> :
            <Preloader/>;
    }
}

const mapStateToProps = ({auth: {user}, singlePost: {post}}) => ({user, post});

const mapDispatchToProps = (dispatch, {teamlabstoreService, postId}) => {
    return bindActionCreators({
        fetchSinglePost: fetchSinglePost(teamlabstoreService, postId)
    }, dispatch);
};

export default compose(
    withTeamlabstoreService(),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(SinglePostContainer);