import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_LOADED,
  FETCH_POSTS_SUCCESS
} from "./types";

const postsLoaded = newPosts => {
  const { data } = newPosts;
  return {
    type: FETCH_POSTS_LOADED,
    payload: data[1]
  };
};

const postsRequested = () => {
  return {
    type: FETCH_POSTS_SUCCESS
  };
};

const postsError = error => {
  const { data } = error;
  return {
    type: FETCH_POSTS_ERROR,
    payload: data[0]
  };
};

const fetchPosts = teamlabstoreService => () => dispatch => {
  dispatch(postsRequested());
  teamlabstoreService
    .getPosts()
    .then(data => {
      console.log("fetch POSTS:", data);
      dispatch(postsLoaded(data));
    })
    .catch(err => {
      dispatch(postsError(err));
    });
};

export { fetchPosts };
