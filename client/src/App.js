import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home/home";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
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
import SinglePost from "./components/Single-post/single-post";
import SingleProject from "./components/Single-project/single-project";

import ProfileList from './components/Profile/profileList/ProfileList'
import PrShow from './components/Profile/PrShow'


import "./App.scss";

// import store from "./store";
// import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);

  return (
        <Fragment>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/news" exact component={News} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/contact" exact component={Contact} />
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
          <Route path="/profile" exact component={Profile} />
          <Route  path ="/profile" exact component={ProfileList}/>
          <Route path ="/profile/show_single_profile/:id" exact  component={PrShow}/>
          <Route path="/single-post" exact component={SinglePost} />
          <Route path="/single-project" exact component={SingleProject} />
          <Route path="/forgot" exact component={Forgot} />
          <Footer />
        </Fragment>
  );
};

export default App;
