import {
    FETCH_SINGLE_POST_ERROR,
    FETCH_SINGLE_POST_LOADED,
    FETCH_SINGLE_POST_SUCCESS
} from "./types";

const singlePostLoaded = post => {
    const {data} = post;
    return {
        type: FETCH_SINGLE_POST_LOADED,
        payload: data[1]
    }
};

const singlePostRequested = () => {
    return {
        type: FETCH_SINGLE_POST_SUCCESS
    }
};

const singlePostError = error => {
    const {data} = error;
    return {
        type: FETCH_SINGLE_POST_ERROR,
        payload: data
    }
};

const fetchSinglePost = (teamlabstoreService,postId) => () => dispatch => {
    dispatch(singlePostRequested());
    console.log("hip-hop");
    teamlabstoreService
        .getSinglePost(postId)
        .then(data => {
            console.log("fetch POST:",data);
            dispatch(singlePostLoaded(data));
        })
        .catch(err => {
            dispatch(singlePostError(err));
        });
};

export {fetchSinglePost};