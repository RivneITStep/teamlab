import React, { Fragment } from "react";
import { connect } from "react-redux";
import { allProfile } from '../../actions/allProfile'
import "./profile.scss";

// import ProfileShow from './profileShow/profileShow'

 const Profile = ({allProfile}) => {
   


  return (
    <Fragment>

      <div >Profile</div>

    </Fragment>
  );

};
function mapStateToProps(state){
  return
  {
      // profile:state.allProfile
  };
}
export default connect(mapStateToProps(),{allProfile}) 
                  (Profile);
