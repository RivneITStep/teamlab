import React, {Fragment, useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from 'react-redux'

import Home from "./components/Home/home";
import About from "./components/About/about";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/contact";
import Faq from "./components/Faq/faq";
import Login from "./components/Login/login";
import News from "./components/News/news";
import Posts from "./components/Posts/page-posts";
import Profile from "./components/Profile/profile";
import Register from "./components/Register/register";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Forgot from "./components/Forgot/forgot";

import PageSinglePost from "./components/Single-post/page-single-post";
//  
import SingleProject from "./components/Project/Project";
import AddProject from "./components/Projects/ProjectForm";

import ProfileList from "./components/Profile/profileList/ProfileList";
import PrShow from "./components/Profile/PrShow";
import {userRoles} from "./utils/defaulteConstants";

import "./App.scss";

import store from "./store";

import {loadUser} from "./actions/auth";

import setAuthToken from "./utils/setAuthToken";
import AdminPage from "./components/AdminPage/admin-page";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = ({user}) => {

    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    const [role, setRole] = useState('');
    useEffect(() => {
        if (user) setRole(user.role);
    }, [user]);

    return (

        <Fragment>
            <Header/>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/news" exact component={News}/>
            <Route path="/faq" exact component={Faq}/>
            <Route path="/posts" exact component={Posts}/>
            <Route path="/contact" exact component={Contact}/>
            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/add-project" exact component={AddProject}/>
            </Switch>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/profile" exact component={ProfileList}/>
            <Route path="/profile/show_single_profile/:id" exact component={PrShow}/>
            <Route path="/single-post/:id" exact component={PageSinglePost}/>
            <Route path="/single-project/:id" exact component={SingleProject}/>
            <Route path="/forgot" exact component={Forgot}/>
            {role === userRoles.admin ? <Route path="/admin-page" exact component={AdminPage}/> : null}
            <Footer/>
        </Fragment>
    );
};

const mapStateToProps = ({auth: {user}}) => ({
    user
});

export default connect(mapStateToProps)(App);
