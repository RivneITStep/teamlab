import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';

import Home from './components/Home/home';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Faq from './components/Faq/faq';
import Login from './components/Login/login';
import News from './components/News/news';
import Posts from './components/Posts/posts';
import Profile from './components/Profile/profile';
import Register from './components/Register/register';


class App extends React.Component {
    render () {
        return(
<Router>
       <Route path = "/" exact component = {Home} />
       <Route path = "/about" exact component = {About} />
       <Route path = "/projects" exact component = {Projects} />
       <Route path = "/news" exact component = {News} />
       <Route path = "/faq" exact component = {Faq} />
       <Route path = "/posts" exact component = {Posts} />
       <Route path = "/contact" exact component = {Contact} />
       <Route path = "/login" exact component = {Login} />
       <Route path = "/register" exact component = {Register} />
       <Route path = "/profile" exact component = {Profile} />
</Router> 
);    
}
}


ReactDOM.render(<App />, document.getElementById('root'));
