import React, {Fragment,useState} from "react";
import Preloader from '../../Preloader/Preloader'
import "../profile.scss"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ExpirienceBlock from "./ProfileExpiriance/ExpirienceBlock"
import EducationBlock from "./ProfileEducation/EducationBlock"
import {ClearTMP} from '../../../actions/allProfile'
import {socAction} from '../../../actions/allProfile'
import {profileToDb}from '../../../actions/allProfile'
import ProfileSkill from './ProfileExpiriance/ProfileSkills/ProfileSkill'



const  ProfileCreate = ({userPr,tmp,ClearTMP,socAction,profileToDb})=>
{
     const [formData, setFormData] = useState({
        githubusername:"",
        location: "",
        youtube:"",
        twitter:"",
        facebook:"",
        linkedin:"",
        instagram:"",
        phone_number:""
    });
const { githubusername,location,youtube,twitter,facebook,linkedin,instagram,phone_number} = formData;
const onChange = e =>{
           setFormData({ ...formData, [e.target.name]: e.target.value });
           
   }
const onSubmit = e => {
        e.preventDefault();
        socAction({githubusername,location,youtube,twitter,facebook,linkedin,instagram,phone_number});
        profileToDb(tmp);
    };
const plVal={git:"githubusername"}
if (tmp&&tmp.githubusername!="")
{
    plVal.git=tmp.githubusername
}
    
        return(
            <Fragment>
            
            <div className="container- fluid profile-top-bg">
                    <div className="container profile-body">
                            <section >
                                <div className="row profile-top">
                                <h1 className="news-text">Profile</h1>
                                </div>
                            </section>
                    </div>
                </div>
            <div className="container-fluid">
                    <div className="container">
                         <div className= "row profile-main" >
                            <div className= "row profile-main-bg " >
                            <section className= "profile-form" >
                                <form onSubmit={(e) =>onSubmit(e)}>
                                <div className="profile-form-item">
                                                <div className="row profile-block">
                                                    <div className="col profile-block-left">
                                                                <label htmlFor="name">Git user name</label>
                                                                <input   
                                                                        type="text" 
                                                                        className="form-control" 
                                                                        placeholder={tmp.githubusername}
                                                                        value ={tmp.githubusername}
                                                                        id="githubusername"
                                                                        name="githubusername"
                                                                        onChange={e =>onChange(e)}/>
                                                    </div>
                                                    <div className="col profile-block-right">
                                                                <label htmlFor="name">Name</label>
                                                                <input 
                                                                        readOnly  
                                                                        type="text" 
                                                                        className="form-control"
                                                                        placeholder={userPr.name} />
                                                    </div>
                                                </div>
                                            </div>
                                <div className="profile-form-item">
                                        <div className="row profile-block">
                                            <div className="col profile-block-left">
                            <label htmlFor="name">Phone number</label>
                            <input   
                            type="phone" 
                            className="form-control" 
                            placeholder="phone_number" 
                            id="phone_number"
                            name="phone_number"
                            onChange={e =>onChange(e)}
                            />
                        </div>
                                            <div className="col profile-block-right">
                        <label htmlFor="name">City</label>
                        <input type="text" className="form-control" placeholder="City" 
                        id="location"
                            name="location"
                            onChange={e =>onChange(e)}/>
                    </div>
                                        </div>
                                </div>
                                <div className="profile-form-item social-form">
                                    <div>Social</div>
                                    <Fragment>
                        <div className="row">                        
                            <div className="col">
                                <label htmlFor="name">LinkedIn</label>
                                <input  type="text" className="form-control" placeholder="LinkedIn"
                                id="linkedIn"
                                name="linkedIn"
                                onChange={e =>onChange(e)}/>
                            </div> 
                        </div>
                        <div className="row sub-ptofile-form">
                            <div className="col">
                                <label htmlFor="field">Facebook</label>
                                <input type="text" className="form-control" placeholder="Facebook"
                                    id="facebook"
                                name="facebook"
                                onChange={e =>onChange(e)}/>
                            </div> 
                            <div className="col">
                                <label htmlFor="field">Instagram</label>
                                <input   type="text" className="form-control" placeholder="Instagram"id="instagram"
                                name="instagram"
                                onChange={e =>onChange(e)}/>
                            </div> 
                        </div>
                        <div className="row sub-ptofile-form">
                            <div className="col">
                                <label htmlFor="field">Twitter</label>
                                <input   type="text" className="form-control" placeholder='Twitter' 
                                id="twitter"
                                name="twitter"
                                onChange={e =>onChange(e)}/>
                            </div> 
                            <div className="col">
                                <label htmlFor="field">Youtube</label>
                                <input   type="text" className="form-control" placeholder="Youtube" 
                                id="youtube"
                                name="youtube"
                                value={youtube}
                                onChange={e =>onChange(e)}
                                />
                            </div>
                        </div>
                        </Fragment>
                                </div>
                                 <button type="submit" className="btn btn-outline-dark btn-register">Save</button>
                                </form>
                                <div>Skills</div>
                                    <div className="row">
                                        <div className="col">
                                            <ProfileSkill/>
                                        </div>
                                    </div>
                               <EducationBlock/>
                               <ExpirienceBlock/>
                            </section>
                            </div>

                            <button className="btn" onClick={()=>ClearTMP() }>Decline</button>
                             
                         </div>
                    </div>
                </div>
                
            </Fragment>
        )

    
}
const mapStateToProps = state => { 
   return { 
       singlPr: state.allProfile.profile,
       userPr:state.auth.user,
       tmp:state.allProfile.tmpPr,


   }; 
}; 
export default connect(mapStateToProps,{ClearTMP,socAction,profileToDb})(ProfileCreate);