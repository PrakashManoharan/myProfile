import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import 'materialize-css/dist/css/materialize.min.css';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Downloads from './Downloads';
import Sidemenu from './Sidemenu';
import M from 'materialize-css';

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <Header branding="Prax" />
            <div className="col s12 m12 l3">
              <Sidemenu />
            </div>
            <div className="col s12 m12 l9">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/experience" component={Experience} />
                <Route path="/projects" component={Projects} />
                <Route path="/downloads" component={Downloads} />
                <Route path="/contact" component={Contact} />
              </Switch>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
