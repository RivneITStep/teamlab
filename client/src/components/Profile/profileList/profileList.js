import React, { Fragment } from "react";
import {Link} from "react-router-dom";

const profileList = () => {
const item=this.props.profile
console.log(item)
const path = `/profile/show_single_profile/${item.profile._id}`
console.log(path);
return (
        <Link to = {path} >
        <div>{item.user_name}</div>
        <div>{item.profile.githubusername}</div>
        <div>{item.profile.mainimage}</div>
         </Link>
        ) 
}  


export default profileList;
