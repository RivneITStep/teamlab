import { combineReducers } from "redux";
import auth from "./auth";
import allProfile from './allProfile';
import updatePostList from "./post";
import updateSinglePost from "./single-post";


export default combineReducers({
  auth,
  allProfile,
  postList: updatePostList,
  singlePost:updateSinglePost
});
