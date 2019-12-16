import React, { Fragment, useState,Component } from "react";
import './profileShow.scss'
import { connect } from "react-redux";

// import { singlProfile } from '../../../actions/singlProfile.js'
class ProfileShow extends Component{
state={
  id:this.props.match.params.id,
  loading:null
}

async componentDidMount(){
  try{
  //  await this.props.singlProfile(this.state.id);
  }
  catch(error){
    
  }
   
  };
  ProfileOvner(){
  return false
}

  render(){
    
     console.log("singl",this.props.pr.prof)

    return(
     <div>NOT loading</div>
    
    )
  }
}
 const mapStateToProps = state => { 
   return { 
     pr: state.singlProfile
   }; 
}; 
export default connect(mapStateToProps,) 
                      (ProfileShow); 