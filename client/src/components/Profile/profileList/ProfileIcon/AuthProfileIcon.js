import React,{Fragment} from "react";

import { Link } from "react-router-dom";
import {allProfile} from '../../../../actions/allProfile'
import { connect } from "react-redux";
import Preloader from '../../../Preloader/Preloader'
class AuthProfileIcon extends React.Component
{
    state = {
        user_id:this.props.user_id
    }
  render(){
        console.log("autj",this.props.auth._id)
        return (
         <Fragment >
         <i className="far fa-id-card" onClick={()=>{this.props.allProfile(this.props.auth._id)}}></i>
         </Fragment>
        )
    }
}
const mapStateToProps = state => { 
   return { 
    auth: state.auth.user
   }; 
}; 
export default connect(mapStateToProps,{allProfile})(AuthProfileIcon)