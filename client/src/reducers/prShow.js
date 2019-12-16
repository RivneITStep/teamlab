import {
    GET_PR_SUCCESS,
    GET_PR_FAIL} from '../actions/types.js'

let initialState = {};
initialState = {
  pr: {},
  error: {}
};
export default function (state = initialState, action) {
    const {type,payload} = action;
    
    switch (type) {
        case GET_PR_SUCCESS:
            return {
              ...state,
              pr: payload,
              
            };
        case GET_PR_FAIL:
            return {
              ...state,
              pr: {},
              error: payload,
            };
        default:
            return {
              pr: {},
              error: payload,
            };
    }
}