import React, { Fragment,Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { allProfile } from '../../actions/allProfile'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./profile.scss";

import profileShow from './profileShow/profileShow'
import Login from "../Login/login";

 class  Profile extends Component  {
   componentDidMount(){
     console.log("mounted")
    this.props.allProfile();
   };
  profileList() {
    const items=this.props.profiles
          return items.map ((item)=>{
            const path = `/profile/show_single_profile/${item.profile._id}`
            console.log(path);
            return (
              <Fragment>
              < Link to = {path} >
              <div>{item.user_name}</div>
              <div>{item.profile.githubusername}</div>
              <div>{item.profile.mainimage}</div>
              </Link>
              < Route path = {path} exact component = {profileShow}/>
              </Fragment>
            )}) 
        }  

 
  render()
  {
    console.log(this.props.profiles);
    
     return (
       <Fragment>
         <Router>
        {this.profileList()}
        </Router>
       </Fragment>
     );
  }
 };
const mapStateToProps = state => { 
   return { 
     profiles: state.allProfile.profiles
   }; 
}; 
export default connect(mapStateToProps,{allProfile}) 
                  (Profile);
