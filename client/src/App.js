import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home/home";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Faq from "./components/Faq/faq";
import Login from "./components/Login/login";
import News from "./components/News/news";
import Posts from "./components/Posts/posts";
import Profile from "./components/Profile/profile";
import Register from "./components/Register/register";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

import "./App.scss";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
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
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
