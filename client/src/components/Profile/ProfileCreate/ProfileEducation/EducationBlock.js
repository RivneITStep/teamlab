import React, {Fragment,useState} from "react";
import "../../profile.scss"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EducationItem from "./EducationItem"
class EducationBlock extends React.Component
{

render()
{
    console.log(this.state);
    
        let edc=()=>{return null}
       
       if (this.props.tmp.education&&this.props.tmp.education!==[]) edc=()=>{return this.props.tmp.education.map((item)=>{
           return (<EducationItem items={item}/>)
       })}
    return(
        <div className="profile-form-item education-form">
            {edc()}
            <EducationItem />
        </div>
    )
}}

const mapStateToProps = state => { 
   return { 
       singlPr: state.allProfile.profile,
       tmp:state.allProfile.tmpPr,
       userPr:state.auth.user,
       isAuthenticated: state.auth.isAuthenticated


   }; 
}; 
export default connect(mapStateToProps)(EducationBlock);