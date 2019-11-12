import {
    GET_PROFILES_SUCCESS,
    GET_PROFILES_FAIL
} from '../actions/types'

const initialState = {    
    profile: true,
    user: null
};

export default function (state = initialState, action) {
    const {type,payload} = action;
    
    switch (type) {
        case GET_PROFILES_SUCCESS:
            return  payload
            
        case GET_PROFILES_FAIL:
            return null;
        default:
            console.log("all profile reducer")
            return state;
    }
}