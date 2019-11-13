import React, { Fragment,Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { allProfile } from '../../actions/allProfile'
import "./profile.scss";

// import ProfileShow from './profileShow/profileShow'

 class  Profile extends Component  {
   componentDidMount(){
     console.log("mounted")
    this.props.allProfile();
   };
  
 
  render()
  {
    console.log(this.props.profiles);
     return (
       <Fragment>
        
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
