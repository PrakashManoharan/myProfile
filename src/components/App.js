import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
                <Route path="/contact" component={Contact} />
                <Route path="/downloads" component={Downloads} />
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

/*


//import Project1 from '../components/images/csit.png';
//import Project2 from '../components/images/wireill.png';
//import Project3 from '../components/images/airccj.png';
//import Project4 from '../components/images/PM Profile.png';

/* const projects = {
  id: 1,
  src: Project1,
  alt: 'IJCNC PICTURE',
  title: 'IJCNC',
  content: 'Web Conference invitation page'
}; */

/* const projects = [
  {
    id: 1,
    image: Project1,
    alt: 'IJCNC picture',
    title: 'IJCNC',
    content: 'This is a conference inviting webpage'
  },
  {
    id: 2,
    image: Project2,
    alt: 'Wireilla picture',
    title: 'WIREILLA',
    content: 'This is a conference inviting webpage'
  },
  {
    id: 3,
    image: Project3,
    alt: 'AIRCCJ picture',
    title: 'AIRCCJ',
    content: 'AIRCC Webpage'
  },
  {
    id: 4,
    image: Project4,
    alt: 'Profile picture',
    title: 'PM | Profile',
    content: "Prakash Manoharan's profile webpage"
  }
]; */
