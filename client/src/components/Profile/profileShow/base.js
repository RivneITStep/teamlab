import React, { Fragment, useState,Component } from "react";
import './profileShow.scss'
import { connect } from "react-redux";
class ProfileShow extends Component{



// Social() {
//     const profile = this.props.showProfile
//          return (
//            < Fragment >
//            <div>{profile.profile.social.youtube}</div>
//            <div>{profile.profile.social.twitter}</div>
//            <div>{profile.profile.social.facebook}</div>
//            <div>{profile.profile.social.linkedin}</div>
//            <div>{profile.profile.social.instagram}</div>
//            <div>{profile.profile.social.phone_number}</div>
//           </Fragment>
//         )
        
//       }
// Skills() {
//     const profile = this.props.showProfile
//         return profile.profile.skills.map((item)=>{
//           return  (
//              <li>{item}</li>
//           )
//         })  
//       }
ProfileOvner(){
  return false
}


  render(){
   
     function  GitRepositories(profile) {
        return profile.git_repositories.map((item)=>{
          return (
          <option>
              {item}
          </option> 
        )
        })   
  }
    const idProfile=this.props.match.params.id;
    const profile=this.props.profiles.find(x=>x.profile._id===idProfile);
    console.log("singl",profile)
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
            < div className= "row profile-main" >
              < div className= "row profile-main-bg " >
                < section className= "profile-form" >
                  <div className="profile-form-item">
                      <div className="row profile-block">
                        <div className="col profile-block-left">
                                    <label htmlFor="name">Git user name</label>
                                    <input  readOnly={this.ProfileOvner()} type="text" className="form-control" placeholder={profile.profile.githubusername}  />
                        </div>
                        <div className="col profile-block-right">
                                    <label htmlFor="name">Name</label>
                                    <input  readOnly={this.ProfileOvner()} type="text" className="form-control" placeholder={profile.user_name} />
                        </div>
                      </div>
                      </div>
                      <div className="profile-form-item">
                            <div className="row profile-block">
                                <div className="col profile-block-left">
                                    <label htmlFor="name">Phone number</label>
                                    <input  readOnly={this.ProfileOvner()} type="phone" className="form-control" placeholder={profile.profile.social.phone_number} />
                                </div>
                                <div className="col profile-block-right">
                                    <label htmlFor="name">City</label>
                                    <input  readOnly={this.ProfileOvner()} type="text" className="form-control" placeholder={profile.profile.location} />
                                </div>
                            </div>
                      </div>

                      <div className="profile-form-item social-form">
                            <div>Social</div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="position">GitHubRepositories</label>
                                    <select >

                                       {GitRepositories(profile)}
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="name">LinkedIn</label>
                                    <input  readOnly={this.ProfileOvner()} type="text" className="form-control" placeholder={profile.profile.social.linkedin} />
                                </div>
                            </div>

                            {/* <div className="row sub-ptofile-form">
                                <div className="col">
                                    <label htmlFor="field">Facebook</label>
                                    <input  readOnly={this.ProfileOvner()} type="text" className="form-control" placeholder={profile.profile.social.facebook}/>
                                </div>
                                <div className="col">
                                    <label htmlFor="field">Instagram</label>
                                    <input  readOnly={this.ProfileOvner()} type="text" className="form-control" placeholder={profile.profile.social.instagram} />
                                </div>
                            </div>

                            <div className="row sub-ptofile-form">
                                <div className="col">
                                    <label htmlFor="field">Twitter</label>
                                    <input  readOnly={this.ProfileOvner()} type="text" className="form-control" placeholder={profile.profile.social.twitter} />
                                </div>
                                <div className="col">
                                    <label htmlFor="field">Youtube</label>
                                    <input  readOnly={this.ProfileOvner()} type="text" className="form-control" placeholder={profile.profile.social.youtube} />
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="profile-form-item social-form">
                            <div>Skills</div>
                            <div className="row">
                                <div className="col">
                                    <ul>
                                      {this.Skills()}
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        {/* { this.Education()} */}
                        {/* {this.Expirience()} */}
                </ section>
              </div>
            </div>
          </div>
        </div>
      </Fragment>

    );
  }
}
const mapStateToProps = state => { 
   return { 
     profiles: state.allProfile.profiles
   }; 
}; 
export default connect(mapStateToProps) 
                      (ProfileShow);