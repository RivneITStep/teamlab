import axios from "axios";
import {
    GET_PR_SUCCESS,
    GET_PR_FAIL} from './types'

export const singlProfile = (profileid) => async dispatch =>
 {
 
  try {

    const res = await axios.get(`/api/profile/show_single_profile/${profileid}`);
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
};