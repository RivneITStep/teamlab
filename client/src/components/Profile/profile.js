import React, { Fragment,Component } from "react";

import { connect } from "react-redux";
import { allProfile } from '../../actions/allProfile'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProfileList from './profileList/ProfileList'
import PrShow from './PrShow'
 class  Profile extends Component  {
  async componentDidMount(){
   try {
      console.log("profile render")
     this.props.allProfile();
   }
    catch (error) {
       console.error(error);
    }
   };
  

  
  render(){
    
     return (
        <Fragment>
       {/* <Router>
        <Route exact path ="/profile" component={ProfileList}/>
        <Route exact path ="/profile/show_single_profile/:id" component={PrShow}/>
        </Router> */}
        </Fragment>
     );
  }
}
const mapStateToProps = state => { 
   return { 
      // list: state.allProfile.profiles
   }; 
}; 
export default connect(mapStateToProps,{allProfile}) 
                  (Profile);
