import React, {Fragment} from "react";
import Preloader from './../Preloader/Preloader'
import ProfileCreate from './ProfileCreate/ProfileCreateMain'
import "./profile.scss"
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PrShow extends React.Component
{
    state = {
        user_id: this.props.match.params.id
    }

    ProfileOvner() {
        return true
    }

    GitRepositories() {
        const profile = this.props.singlPr
        return profile.git_repositories.map((item) => {
            return (
                <option>

                    {item}

                </option>
            )
        })
    }

    Skills() {
        const profile = this.props.singlPr
        return profile.profile.skills.map((item) => {
            return (
                <li>{item}</li>
            )
        })
    }

    Education() {
        const profile = this.props.singlPr
        return profile.profile.education.map((item) => {
            let data = null;
            if (item.current) {
                data = "for now";
            } else {
                data = item.to;

            }
            return (
                <div className="profile-form-item education-form">
                    <div>Education</div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="name">School</label>
                            <input readOnly={this.ProfileOvner()} type="text" className="form-control"
                                   placeholder={item.school}/>
                        </div>
                        <div className="col">
                            <label htmlFor="name">Degree</label>
                            <input readOnly={this.ProfileOvner()} type="text" className="form-control"
                                   placeholder={item.degree}/>
                        </div>
                    </div>

                    <div className="row sub-ptofile-form">
                        <div className="col-8">
                            <label htmlFor="field">Field of Study</label>
                            <input readOnly={this.ProfileOvner()} type="text" className="form-control"
                                   placeholder={item.fieldofstady}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="from">From</label>
                            <input readOnly={this.ProfileOvner()} type="text" className="form-control"
                                   placeholder={item.from}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="to">To</label>
                            <input readOnly={this.ProfileOvner()} type="text" className="form-control"
                                   placeholder={data}/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="to">description</label>
                            <input readOnly={this.ProfileOvner()} type="text" className="form-control"
                                   placeholder={item.description}/>
                        </div>
                    </div>
                </div>
            )
        })
    }

    Expirience() {
        const profile = this.props.singlPr
        return profile.profile.experience.map((item) => {
            let data = null;
            if (item.current) {
                data = "for now";
            } else {
                data = item.to;

            }
            return (
                <div className="profile-form-item education-form">
                    <div>Experience</div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="name">Company</label>
                            <input readOnly={this.ProfileOvner()} type="text" className="form-control"
                                   placeholder={item.company}/>
                        </div>

          )
        })  
} 

    render(){
        let user_idFromParams=this.props.match.params.id
        return (!this.props.singlPr)?(<Preloader/>):
        (this.props.singlPr.errorMessage=='no Profile for this user already exist.')?(<ProfileCreate/>):
        (this.props.singlPr.profile.user_id!=user_idFromParams)?(<Preloader/>):
        (   
            <Fragment>  
                <Link to={'/profile'}  >
                Back
                </Link>
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
                            <div className="row profile-main">
                                <div className="row profile-main-bg ">
                                    <section className="profile-form">
                                        <div className="profile-form-item">
                                            <div className="row profile-block">
                                                <div className="col profile-block-left">
                                                    <label htmlFor="name">Git user name</label>
                                                    <input readOnly={this.ProfileOvner()} type="text"
                                                           className="form-control"
                                                           placeholder={this.props.singlPr.profile.githubusername}/>
                                                </div>
                                                <div className="col profile-block-right">
                                                    <label htmlFor="name">Name</label>
                                                    <input readOnly={this.ProfileOvner()} type="text"
                                                           className="form-control"
                                                           placeholder={this.props.singlPr.name}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-form-item">
                                            <div className="row profile-block">
                                                <div className="col profile-block-left">
                                                    <label htmlFor="name">Phone number</label>
                                                    <input readOnly={this.ProfileOvner()} type="phone"
                                                           className="form-control"
                                                           placeholder={this.props.singlPr.profile.social.phone_number}/>
                                                </div>
                                                <div className="col profile-block-right">
                                                    <label htmlFor="name">City</label>
                                                    <input readOnly={this.ProfileOvner()} type="text"
                                                           className="form-control"
                                                           placeholder={this.props.singlPr.profile.location}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-form-item social-form">
                                            <div>Social</div>
                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="position">GitHubRepositories</label>
                                                    <select className="form-control">

                                                        {this.GitRepositories()}
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="name">LinkedIn</label>
                                                    <input readOnly={this.ProfileOvner()} type="text"
                                                           className="form-control"
                                                           placeholder={this.props.singlPr.profile.social.linkedin}/>
                                                </div>
                                            </div>

                                            <div className="row sub-ptofile-form">
                                                <div className="col">
                                                    <label htmlFor="field">Facebook</label>
                                                    <input readOnly={this.ProfileOvner()} type="text"
                                                           className="form-control"
                                                           placeholder={this.props.singlPr.profile.social.facebook}/>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="field">Instagram</label>
                                                    <input readOnly={this.ProfileOvner()} type="text"
                                                           className="form-control"
                                                           placeholder={this.props.singlPr.profile.social.instagram}/>
                                                </div>
                                            </div>

                                            <div className="row sub-ptofile-form">
                                                <div className="col">
                                                    <label htmlFor="field">Twitter</label>
                                                    <input readOnly={this.ProfileOvner()} type="text"
                                                           className="form-control"
                                                           placeholder={this.props.singlPr.profile.social.twitter}/>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="field">Youtube</label>
                                                    <input readOnly={this.ProfileOvner()} type="text"
                                                           className="form-control"
                                                           placeholder={this.props.singlPr.profile.social.youtube}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-form-item social-form">
                                            <div>Skills</div>
                                            <div className="row">
                                                <div className="col">
                                                    <ul>
                                                        {this.Skills()}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {this.Education()}
                                        {this.Expirience()}
                                    </section>
                                </div>

                            </div>
                        </div>

                    </div>
                </Fragment>


            ))

    }
}

const mapStateToProps = state => {
    return {
        singlPr: state.allProfile.profile,
    };
};
export default connect(mapStateToProps)(PrShow);