import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import M from 'materialize-css';

class Header extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="blue lighten-2">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="#" className="brand-logo">
                PM
              </Link>
              <Link
                to="#"
                className="sidenav-trigger"
                data-target="slide_out"
              >
                <i className="material-icons">menu</i>
              </Link>
              <ul className="hide-on-med-and-down right">
                <li>
                  <Link
                    className="hoverable waves-effect waves-light"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="hoverable waves-effect waves-light"
                    to="/experience"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    className="hoverable waves-effect waves-light"
                    to="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="hoverable waves-effect waves-light"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <ul className="sidenav" id="slide_out">
          <li className="hoverable">
            <Link to="/">
              <i className="material-icons blue-text">home</i>
              Home
            </Link>
          </li>
          <div className="divider" />
          <li className="hoverable">
            <Link to="/experience">
              <i className="material-icons blue-text">work</i> Experience
            </Link>
          </li>
          <div className="divider" />
          <li className="hoverable">
            <Link to="/projects">
              <i className="material-icons blue-text">assignment</i>{' '}
              Projects
            </Link>
          </li>
          <div className="divider" />
          <li className="hoverable">
            <Link to="/contact">
              <i className="material-icons blue-text">email</i> Contact
            </Link>
          </li>
          <div className="divider" />
        </ul>
      </div>
    );
  }
}

/*
<div className=" navbar-fixed">
        <nav className="z-depth-2 blue lighten-2">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                PM
              </Link>
              <Link to="/" className="sidenav-trigger" data-target="slide_out">
                <i className="material-icons">menu</i>
              </Link>
              <ul className="hide-on-med-and-down right">
                <li>
                  <Link className="hoverable waves-effect waves-light" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="hoverable waves-effect waves-light"
                    to="/experience"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    className="hoverable waves-effect waves-light"
                    to="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="hoverable waves-effect waves-light"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <ul className="sidenav" id="slide_out">
          <li className="hoverable">
            <Link to="/">
              <i className="material-icons blue-text">home</i>
              Home
            </Link>
          </li>
          <div className="divider" />
          <li className="hoverable">
            <Link to="/experience">
              <i className="material-icons blue-text">work</i> Experience
            </Link>
          </li>
          <div className="divider" />
          <li className="hoverable">
            <Link to="/projects">
              <i className="material-icons blue-text">assignment</i> Projects
            </Link>
          </li>
          <div className="divider" />
          <li className="hoverable">
            <Link to="/contact">
              <i className="material-icons blue-text">email</i> Contact
            </Link>
          </li>
          <div className="divider" />
        </ul>
      </div>
*/

Header.defaultProps = {
  branding: 'PM Profile'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
