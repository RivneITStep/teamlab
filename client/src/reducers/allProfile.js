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
    PROFILE_TO_DB_FAIL,
    ADD_SKILL,
    EDIT_PROFILE} from  '../actions/types'


export default function (state, action) {
  if (!state)
  {
    return {
  profile: null,
  editProfile:false,
  profiles: [],
  repos: [],
  loading: true,
  tmpPr:{
          location: "",
          skills: [],
          githubusername: "",
          experience: [],
          education: [],
          social: {
              youtube: "",
              twitter:"",
              facebook: "",
              linkedin: "",
              instagram:"",
              phone_number:""
          },
          mainimage: "",
      },
 error: {}
};
  }
    const {type,payload} = action;
    switch (type) {
      case EDIT_PROFILE:
        return {
              ...state,
              tmpPr:{...state.profile.profile},  
              editProfile:true,
              loading: false,
            };     
        break;
      case ADD_SKILL:
        return {
              ...state,
              tmpPr:{...state.tmpPr,
                    skills:[...state.tmpPr.skills,payload]},  
              loading: false,
            };     
        break;
      case PROFILE_TO_DB_FAIL:
        return {
              ...state,
              tmpPr:{...state.tmpPr}, 
              error:payload, 
              loading: false

            };     
        break;

      case PROFILE_TO_DB_SUCCESS:
        return {
              ...state,
             tmpPr:{
                    location: "",
                    skills: [],
                    githubusername: "",
                    experience: [],
                    education: [],
                    social: {
                        youtube: "",
                        twitter:"",
                        facebook: "",
                        linkedin: "",
                        instagram:"",
                        phone_number:""
                    },
                      mainimage: ""
                  },
              loading: false,
              editProfile: false,
            };     
        break;

      case SOCIAL_TO_STORE:
            return {
              ...state,
              tmpPr:{...state.tmpPr,
              githubusername:payload.githubusername,
              social:{
              youtube: payload.youtube,
              twitter:payload.twitter,
              facebook: payload.facebook,
              linkedin: payload.linkedin,
              instagram:payload.instagram,
              phone_number:payload.phone_number
              }
                    },
              loading: false
            };  
      
      case EXP_TO_STORE:
            return {
              ...state,
              tmpPr:{...state.tmpPr,
                    experience:[ ...state.tmpPr.experience , payload]},
              loading: false
            };     
        break;
        case ED_TO_STORE:
            return {
              ...state,
              tmpPr:{...state.tmpPr,
                    education:[ ...state.tmpPr.education , payload]},
              loading: false
            };    
        case CLEAR_TMP_STORE:
            return {
              ...state,
              tmpPr:{
                    location: "",
                    skills: [],
                    githubusername: "",
                    experience: [],
                    education: [],
                    social: {
                        youtube: "",
                        twitter:"",
                        facebook: "",
                        linkedin: "",
                        instagram:"",
                        phone_number:""
                    },
                    mainimage: ""
                },
              loading: false,
              editProfile:false
            };     
        break;
        case GET_PROFILES_SUCCESS:
            return {
              ...state,
              profiles: payload,
              editProfile:false,
              loading: false
            };     
        break;
        case GET_PROFILES_FAIL:
            return {
              ...state,
              profiles: [],
              error: payload,
              editProfile:false,
              loading: false
            };
            break;
          case GET_PR_SUCCESS:
            return {
              ...state,
              profile: payload,
              editProfile:false,
              loading: false
            };
            case GET_PR_FAIL:
            return{
              ...state,
              profile: {},
              editProfile:false,
              error: payload,
              loading: false}
        default:
            return state;
    }
}