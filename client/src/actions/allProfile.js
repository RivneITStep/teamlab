import axios from "axios";
import {
    GET_PROFILES_SUCCESS,
    GET_PROFILES_FAIL} from './types'

export const allProfile = () => async dispatch =>
 {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("api/profile", config);
    
    dispatch({
      type: GET_PROFILES_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILES_FAIL
    });
  }
};