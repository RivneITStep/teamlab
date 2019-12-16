import {
    FETCH_SINGLE_POST_ERROR,
    FETCH_SINGLE_POST_LOADED,
    FETCH_SINGLE_POST_SUCCESS
} from "../actions/types";

const InitialState = {
    post: {}
};

const updateSinglePost = (state = InitialState, action) => {

    const {type, payload} = action;

    switch (type) {
        case FETCH_SINGLE_POST_SUCCESS:
            return {
                post: {}
            };
        case FETCH_SINGLE_POST_LOADED:
            return {
                post: payload
            };
        case FETCH_SINGLE_POST_ERROR:
            return {
                post: {}
            };
        default:
            return {
                post: state.singlePost
            };
    }
};

export default updateSinglePost;