import axios from "axios";

export default class TeamlabstoreService {
    //PROJECT URL
    url = "http://localhost:5000";

    //POSTS SERVICE (CRUD)
    getPosts() {
        return axios.get(`${this.url}/api/posts`);
    }

    getSinglePost(id) {
        return axios.get(`${this.url}/api/posts/single-post/${id}`);
    }

    deleteSinglePost(id) {
        return axios.delete(`${this.url}/api/posts/single-post/${id}/delete`);
    }

    addNewPost() {
        return axios.post(`${this.url}/api/posts/add-new-post`);
    }

    updateSinglePost(id) {
        return axios.get(`${this.url}/api/posts/single-post/${id}/update`);
    }

    setLikeToPost(authorId, postId) {
        return axios.post(`${this.url}/api/posts/like/${authorId}/${postId}`);
    }

    deleteLikeFromPost(authorId, postId) {
        return axios.delete(`${this.url}/api/posts/like/${authorId}/${postId}`);
    }

    addCommentToSinglePost(id) {
        return axios.post(`${this.url}/api/posts/single-post/${id}/add-comment`);
    }

    deleteCommentToSinglePost(id, commentId) {
        return axios.delete(`${this.url}/api/posts/single-post/${id}/delete-comment/${commentId}`);
    }

    updateComment(commentId) {
        return axios.delete(`${this.url}/api/posts/single-post/update-comment/${commentId}`);
    }

}