import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_LOADED,
  FETCH_POSTS_SUCCESS
} from "../actions/types";

const updatePostList = (state, action) => {
  if (!state)
    return {
      posts: []
    };

  const { type, payload } = action;

  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return {
        posts: []
      };
    case FETCH_POSTS_LOADED:
      return {
        posts: payload
      };
    case FETCH_POSTS_ERROR:
      return {
        posts: []
      };
    default:
      return {
        posts: state.postList
      };
  }
};

export default updatePostList;
