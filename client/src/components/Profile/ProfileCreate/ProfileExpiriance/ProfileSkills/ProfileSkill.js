import React, {Fragment,useState} from "react";
import "../../../profile.scss"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {addSkill} from '../../../../../actions/allProfile'
const ProfileSkill=({tmp,addSkill})=>
{
    const [formData, setFormData] = useState({
        skill: "",
    });
    const { skill} = formData;

   const onChange = e =>{
           setFormData({ ...formData, [e.target.name]: e.target.value });
   }
    const onSubmit = e => {
        e.preventDefault();
        
        addSkill(skill);
    };

const skills=()=>{if (tmp.skills)
    return tmp.skills.map((item)=>{ return (<div>{item}</div>)} )
    else return null
}


return(
    <Fragment>
    <form onSubmit={(e) =>onSubmit(e)}>
    {skills()}
        <input 
            type="text" 
            className="form-control" 
            placeholder='Add Skill'
            id="skill"
            name="skill"
            onChange={e =>onChange(e)}
        />
        <button type="submit" className="btn btn-outline-dark btn-register"> add</button>
    </form> 
    </Fragment>
)
}
const mapStateToProps = state => { 
   return { 
       singlPr: state.allProfile.profile,
       tmp:state.allProfile.tmpPr,
   }; 
}; 
export default connect(mapStateToProps,{addSkill})(ProfileSkill);