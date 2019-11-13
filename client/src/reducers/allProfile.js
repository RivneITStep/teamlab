import {
    GET_PROFILES_SUCCESS,
    GET_PROFILES_FAIL
} from '../actions/types'

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};

export default function (state = initialState, action) {
    const {type,payload} = action;
    
    switch (type) {
        case GET_PROFILES_SUCCESS:
            return {
              ...state,
              profiles: payload,
              loading: false
            };

            
        case GET_PROFILES_FAIL:
            return {
              ...state,
              profiles: [],
              error: payload,
              loading: false
            };
            
        default:

            return state;
    }
}