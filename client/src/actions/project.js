import axios from "axios";
import {
  GET_PROJECTS,
  GET_PROJECT,
  PROJECT_ERROR,
  ADD_PROJECT,
  DELETE_PROJECT
} from "./types";

// Get projects
export const getProjects = () => async dispatch => {
  try {
    const res = await axios.get("/api/projects");

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

// Get single project
export const getProject = id => async dispatch => {
  try {
    const res = await axios.get(`/api/projects/${id}`);

    dispatch({
      type: GET_PROJECT,
      payload: res.data
    });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: PROJECT_ERROR
    });
  }
};

// Delete project
export const deleteProject = id => async dispatch => {
  try {
    await axios.delete(`/api/projects/${id}`);

    dispatch({
      type: DELETE_PROJECT,
      payload: id
    });
  } catch (error) {
    // console.log(error.response.data.errors);
    dispatch({
      type: PROJECT_ERROR
    });
  }
};

// Add new project
export const addProject = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post(
      "/api/projects/",
      formData,
      config
    );

    dispatch({
      type: ADD_PROJECT,
      payload: res.data
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: PROJECT_ERROR
    });
  }
};
