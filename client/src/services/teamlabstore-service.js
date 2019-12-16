import axios from "axios";

export default class TeamlabstoreService {
    //PROJECT URL
    url = "http://13.53.138.219";
    //CUSTOMIZE AXIOS
    config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

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

    updateSinglePost(id, body) {
        return axios.put(`${this.url}/api/posts/single-post/${id}/update`, body, this.config);
    }

    setLikeToPost(postId) {
        return axios.post(`${this.url}/api/posts/like/${postId}`);
    }

    deleteLikeFromPost(postId) {
        return axios.post(`${this.url}/api/posts/like/delete/${postId}`);
    }

    addCommentToSinglePost(id, body) {
        return axios.post(`${this.url}/api/posts/single-post/${id}/add-comment`, body, this.config);
    }

    deleteCommentToSinglePost(id, commentId) {
        return axios.delete(`${this.url}/api/posts/single-post/${id}/delete-comment/${commentId}`);
    }

    updateComment(commentId) {
        return axios.delete(`${this.url}/api/posts/single-post/update-comment/${commentId}`);
    }

}