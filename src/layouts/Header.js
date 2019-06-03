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
        <div className="nav-bar navbar-fixed show-on-small-only">
          <nav className="blue lighten-3">
            <div className="nav-wrapper">
              <Link
                to="/"
                className="brand-logo logo center blue-text text-lighten-4 hide-on-small-and-medium"
              >
                PRAX
              </Link>
              <Link to="#" className="sidenav-trigger" data-target="nav-mobile">
                <i className="material-icons">menu</i>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
