import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import 'materialize-css/dist/css/materialize.min.css';

import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Home from '../Home';
import Experience from '../Experience';
import Projects from '../Projects';
import Contact from '../Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <Header branding="PM" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/experience" component={Experience} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
