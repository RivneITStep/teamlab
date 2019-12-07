import {
  GET_PROJECTS,
  GET_PROJECT,
  PROJECT_ERROR,
  ADD_PROJECT,
  DELETE_PROJECT
} from "../actions/types";

const initialState = {
  projects: [],
  project: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
        loading: false
      };
    case GET_PROJECT:
      return {
        ...state,
        project: payload,
        loading: false
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [payload, ...state.projects.projects],
        loading: false
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.projects.filter(
          project => project._id !== payload
        ),
        loading: false
      };
    case PROJECT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
