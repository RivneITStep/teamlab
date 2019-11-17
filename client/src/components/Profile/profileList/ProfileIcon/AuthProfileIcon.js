import React,{Fragment} from "react";

import { Link } from "react-router-dom";
import {allProfile} from '../../../../actions/allProfile'
import { connect } from "react-redux";
class AuthProfileIcon extends React.Component
{
    state = {
        user_id:this.props.user_id
    }
  render(){
        return(
            
         <Fragment >
         <i className="far fa-id-card" onClick={()=>{console.log('authProfileClicked');this.props.allProfile(this.state.user_id)}}></i>
         </Fragment>
        )
    }
}
const mapStateToProps = state => { 
   return { 
    //   singlPr: state.allProfile.profile
   }; 
}; 
export default connect(mapStateToProps,{allProfile})(AuthProfileIcon)