import {
    GET_PR_SUCCESS,
    GET_PR_FAIL
} from '../actions/types'
const initialState = {
  prof: null,
  repos: [],
  loading: true,
  error: {}
};
export default function (state = initialState, action) {
    const {type,payload} = action;
    
    switch (type) {
        case GET_PR_SUCCESS:
            return {
              ...state,
              prof: payload,
              loading: false
            };

            
        case GET_PR_FAIL:
            return {
              ...state,
              prof: {},
              error: payload,
              loading: false
            };
            
        default:

            return state;
    }
}