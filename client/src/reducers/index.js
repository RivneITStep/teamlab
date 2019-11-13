import { combineReducers } from "redux";
import auth from "./auth";
import allProfile from './allProfile'

export default combineReducers({
  auth,
  allProfile
});
