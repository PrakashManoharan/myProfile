import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/header.css';
import M from 'materialize-css';

export default class Header1 extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed nav-bar">
          <nav className="blue lighten-3">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo logo">
                PRAX
              </Link>
              <Link to="#" className="sidenav-trigger" data-target="nav-mobile">
                <i className="material-icons">menu</i>
              </Link>
              <Link to="#" className="right account_circle">
                <i className="material-icons">account_circle</i>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

/*

        <ul
          id="nav-mobile"
          className="sidenav sidenav-fixed blue lighten-3 show-on-lg-only"
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
                <span className="white-text email">
                  prakash.manoharan@outlook.com
                </span>
              </Link>
            </div>
          </li>

          <li className="hoverable">
            <Link to="/" className="white-text">
              Home
            </Link>
          </li>
          <div className="divider" />
          <li className="hoverable">
            <Link to="/experience" className="white-text">
              Experience
            </Link>
          </li>
          <div className="divider" />
          <li className="hoverable">
            <Link to="/projects" className="white-text">
              Projects
            </Link>
          </li>
          <div className="divider" />
          <li className="hoverable">
            <Link to="/contact" className="white-text">
              Contact
            </Link>
          </li>
          <div className="divider" />
          <li className="hoverable">
            <Link to="/downloads" className="white-text">
              Downloads
            </Link>
          </li>
          <div className="divider" />
        </ul>

*/

/*
        <nav className="blue lighten-3">
          <div className="nav-wrapper">
            <Link to="#" className="brand-logo">
              PM
            </Link>
            <Link to="#" className="sidenav-trigger" data-target="nav-mobile">
              <i className="material-icons">menu</i>
            </Link>
          </div>
        </nav>


          <form>
            <div className="input-field">
              <input id="search" type="search" required />
              <label className="label-icon" for="search">
                <i className="material-icons blue-text text-darken-4">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>

*/
