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
                <i className="material-icons disabled">account_circle</i>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
