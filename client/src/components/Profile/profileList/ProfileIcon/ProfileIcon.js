import React from "react";

import { Link } from "react-router-dom";
import {allProfile} from '../../../../actions/allProfile'
import { connect } from "react-redux";



class ProfileIcom extends React.Component
{
    state = {
        profile:this.props.item
    }

 
    render(){
   const profile=this.state.profile
    const path =`/profile/show_single_profile/${profile.profile.user_id}`
        return(
        <Link to={path} onClick={()=>{console.log("icon Clicked");this.props.allProfile(profile.profile.user_id)}}>
            <div>{profile.user_name}</div>
            <div>{profile.profile.githubusername}</div>
            <div>{profile.profile.mainimage}</div>




            
        </Link>
        )
    }
}
const mapStateToProps = state => { 
   return { 
    //   singlPr: state.allProfile.profile
   }; 
}; 
export default connect(mapStateToProps,{allProfile})(ProfileIcom)