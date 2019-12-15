import React, {Fragment,useState} from "react";
import "../../profile.scss"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ExpirianceItem from "./ExpirienceItem"
class ExpirienceBlock extends React.Component
{

render()
{
    console.log(this.state);
      
        let exp=()=>{return null}
       
       if (this.props.tmp.experience&&this.props.tmp.experience!==[]) exp=()=>{return this.props.tmp.experience.map((item)=>{
           return (<ExpirianceItem items={item}/>)
       })}
    return(
        <div className="profile-form-item education-form">
            {exp()}
            <ExpirianceItem />
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
export default connect(mapStateToProps)(ExpirienceBlock);