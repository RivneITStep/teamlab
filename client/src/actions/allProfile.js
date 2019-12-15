import axios from "axios";
import {
    GET_PR_SUCCESS,
    GET_PR_FAIL,
    GET_PROFILES_SUCCESS,
    GET_PROFILES_FAIL,
    EXP_TO_STORE,
    ED_TO_STORE,
    CLEAR_TMP_STORE,
    SOCIAL_TO_STORE,
    PROFILE_TO_DB_SUCCESS,
    PROFILE_TO_DB_FAIL} from './types';

export const allProfile = (user_id=false) => async dispatch =>
 {
 if (user_id)
 {
   try {
    const res = await axios.get(`http://localhost:5000/api/profile/show_single_profile/${user_id}`);
    console.log('res',res);
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
export const ExpAction = (exp)=>async dispatch=>{
  
  dispatch({
      type: EXP_TO_STORE,
      payload: exp
    });
}
export const EDAction = (ed)=>async dispatch=>{
  
  dispatch({
      type: ED_TO_STORE,
      payload: ed
    });
}
export const ClearTMP= ()=>async dispatch=>{
  
  dispatch({
      type: CLEAR_TMP_STORE,
      payload: "1"
    });
}
export const socAction = (soc)=>async dispatch=>{

  dispatch({
      type: SOCIAL_TO_STORE,
      payload: soc
    });
}
export const profileToDb = (data)=>async dispatch=>{
  const config = {
   headers: {
      "Content-Type": "application/json",
      // "x-auth-token":localStorage.getItem("token")
    }
  };
  const body = JSON.stringify(data);
  console.log(config);
  console.log(body)
  try {
    const res = await axios.post("http://localhost:5000/api/profile/add",body,config);
    console.log(res.data)
    dispatch({
      type: PROFILE_TO_DB_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type:PROFILE_TO_DB_FAIL,
      payload: error.response.data.errorMessage
    });
  }
}


