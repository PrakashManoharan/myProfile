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
                <Link to="#user">
                  <img className="circle" src={PM} alt="profile-pic" />
                </Link>

                <Link to="#name">
                  <span className="white-text name">Prakash Manoharan</span>
                </Link>
                <Link to="#email">
                  <span className="white-text email">prax@outlook.com.au</span>
                </Link>
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
