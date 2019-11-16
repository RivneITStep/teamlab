import React, { Fragment } from "react";

import ProfileIcon from './ProfileIcon/ProfileIcon'
import { connect } from "react-redux";
import Preloader from '../../Preloader/Preloader'

class ProfileList extends React.Component {

Icons(profiles){
    return profiles.map((profile)=>{
      return <ProfileIcon key={profile._id} item={profile}/>
    })}

  render() {
    return (this.props.profiles.length===0) ? (
      <Preloader/>
    ):(<Fragment>
        {this.Icons(this.props.profiles)}
      </Fragment>)
  }
}


const mapStateToProps = state => { 
   return { 
     profiles: state.allProfile.profiles
   }; 
}; 
export default connect(mapStateToProps) 
                  (ProfileList);