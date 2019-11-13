import axios from "axios";
import {
    GET_PROFILES_SUCCESS,
    GET_PROFILES_FAIL} from './types'

export const allProfile = () => async dispatch =>
 {
 console.log("action")
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
};