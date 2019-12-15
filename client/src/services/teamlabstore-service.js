import axios from "axios";

export default class TeamlabstoreService {
    url = "http://localhost:5000";

    getPosts() {
        return axios.get(`${this.url}/api/posts`);
    }
}