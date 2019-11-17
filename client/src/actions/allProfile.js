import axios from "axios";
import {
    GET_PR_SUCCESS,
    GET_PR_FAIL,
    GET_PROFILES_SUCCESS,
    GET_PROFILES_FAIL} from './types';

export const allProfile = (user_id=false) => async dispatch =>
 {
 if (user_id)
 {
   try {
    const res = await axios.get(`/api/profile/show_single_profile/${user_id}`);
    console.log("GET_PR_SUCCESS",user_id)
    dispatch({
      type: GET_PR_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_PR_FAIL,
      payload: error
    });
  }
 }
 else {
    try {
      const res = await axios.get("/api/profile");
      dispatch({
        type: GET_PROFILES_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: GET_PROFILES_FAIL,
        payload: error
      });
    }
 }
};