import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Agree from '../components/images/office.jpg';
import PM from '../components/images/PM.jpg';

import M from 'materialize-css';
import '../css/side-menu.css';

class Sidemenu extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <div className="side-menu">
          <ul
            id="nav-mobile"
            className="sidenav sidenav-fixed blue lighten-3 hide-on-medium-and-down"
          >
            <li>
              <div className="user-view">
                <div className="background">
                  <img src={Agree} alt="background-pic" />
                </div>
                <img
                  className="circle profile-img"
                  src={PM}
                  alt="profile-pic"
                />
                <p className="white-text name name-card">Prakash MANOHARAN</p>
                <p className="white-text title name-card">
                  Front-End Developer
                </p>
                <p className="blue-text text-lighten-4 email name-card">
                  prax@outlook.com.au
                </p>
              </div>
            </li>
            <li className="hoverable">
              <Link to="/" className="white-text">
                Home<i className="material-icons left white-text">home</i>
              </Link>
            </li>
            <div className="divider" />
            <li className="hoverable">
              <Link to="/experience" className="white-text">
                Experience
                <i className="fas fa-briefcase white-text tiny" />
              </Link>
            </li>
            <div className="divider" />
            <li className="hoverable">
              <Link to="/projects" className="white-text">
                Projects
                <i className="fas fa-project-diagram tiny white-text" />
              </Link>
            </li>
            <div className="divider" />
            <li className="hoverable">
              <Link to="/downloads" className="white-text">
                Downloads
                <i className="fas fa-download tiny white-text" />
              </Link>
            </li>
            <div className="divider" />
            <li className="hoverable">
              <Link to="/contact" className="white-text">
                Contact
                <i className="fas fa-address-book white-text tiny" />
              </Link>
            </li>
            <div className="divider" />
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidemenu;
