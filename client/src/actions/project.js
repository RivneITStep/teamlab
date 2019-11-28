import axios from "axios";
import { GET_PROJECTS, PROJECT_ERROR } from "./types";

// Get projects
export const getProjects = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:5000/api/");
  } catch (error) {}
};
