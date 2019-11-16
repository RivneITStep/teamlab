import {
    GET_PR_SUCCESS,
    GET_PR_FAIL,
    GET_PROFILES_OK,
    GET_PROFILES_NOT_OK} from  '../actions/types'


export default function (state, action) {
  if (!state)
  {
    return {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};
  }
    const {type,payload} = action;
    switch (type) {
        case GET_PROFILES_OK:
        {
            return {
              ...state,
              profiles: payload,
              loading: false
            };     
        break;
        }
        case GET_PROFILES_NOT_OK:
            return {
              ...state,
              profiles: [],
              error: payload,
              loading: false
            };
            break;
          case GET_PR_SUCCESS:
            return {
              ...state,
              
              profile: payload,
              loading: false
            };
            case GET_PR_FAIL:
            return{
              ...state,
              profile: {},
              error: payload,
              loading: false}
        default:
            return state;
    }
}