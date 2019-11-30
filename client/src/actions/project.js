import axios from "axios";
import { GET_PROJECTS, PROJECT_ERROR } from "./types";

// Get projects
export const getProjects = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:5000/api/projects");

    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: PROJECT_ERROR
    });
  }
};
