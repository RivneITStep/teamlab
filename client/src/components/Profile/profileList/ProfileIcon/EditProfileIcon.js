import React,{Fragment} from "react";

import { Link } from "react-router-dom";
import {allProfile} from '../../../../actions/allProfile'
import { connect } from "react-redux";
import Preloader from '../../../Preloader/Preloader'
class EditProfileIcon extends React.Component
{
    
  render(){
        return (
         <Fragment >
         <i className="far fa-edit"></i>
         </Fragment> 
        )
    }
}
const mapStateToProps = state => { 
   return { 
    auth: state.auth.user
   }; 
}; 
export default connect(mapStateToProps,
// {editProfile}
)(EditProfileIcon)