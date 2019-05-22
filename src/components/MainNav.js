import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import M from 'materialize-css';

class MainNav extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed nav-bar">
          <nav className="blue lighten-3">
            <div className="nav-wrapper">
              <Link to="#" className="brand-logo logo">
                Prax
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default MainNav;
