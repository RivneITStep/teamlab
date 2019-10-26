import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'
import './index.scss';
import Home from './components/Home/home';
import About from './components/About/about';
import Contact from './components/Contact/contact';

class App extends React.Component {
    render () {
        return(
<Router>
       <Route path = "/" exact component = {Home} />
       <Route path = "/about" exact component = {About} />
       <Route path = "/contact" exact component = {Contact} />
</Router> 
);    
}
}


ReactDOM.render(<App />, document.getElementById('root'));
