import React, { Component } from 'react';
import M from 'materialize-css';
import '../css/showcase.css';

export default class Showcase extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="showcase">
        <div className="showcase-content">
          <h2 className="showcase-header">
            <span className="head-01 grey-text text-darken-2 center-align">
              Front-End
            </span>
            <span className="head-02 grey-text center-align">Developer</span>
          </h2>
          <h5 className="p-text center-align">
            Embracing new web technologies to develop highly secured web
            applications
          </h5>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
