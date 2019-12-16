import axios from "axios";
export default class TeamlabstoreService {
  //CUSTOMIZE AXIOS
  config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  //POSTS SERVICE (CRUD)
  getPosts() {
    return axios.get(`/api/posts`);
  }
  getSinglePost(id) {
    return axios.get(`/api/posts/single-post/${id}`);
  }
  deleteSinglePost(id) {
    return axios.delete(`/api/posts/single-post/${id}/delete`);
  }
  addNewPost() {
    return axios.post(`/api/posts/add-new-post`);
  }
  updateSinglePost(id, body) {
    return axios.put(`/api/posts/single-post/${id}/update`, body, this.config);
  }
  setLikeToPost(postId) {
    return axios.post(`/api/posts/like/${postId}`);
  }
  deleteLikeFromPost(postId) {
    return axios.post(`/api/posts/like/delete/${postId}`);
  }
  addCommentToSinglePost(id, body) {
    return axios.post(
      `/api/posts/single-post/${id}/add-comment`,
      body,
      this.config
    );
  }
  deleteCommentToSinglePost(id, commentId) {
    return axios.delete(
      `/api/posts/single-post/${id}/delete-comment/${commentId}`
    );
  }
  updateComment(commentId) {
    return axios.delete(`/api/posts/single-post/update-comment/${commentId}`);
  }
}
