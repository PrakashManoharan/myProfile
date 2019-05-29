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
          <h2>
            <span className="blue-text head-01">Front-End</span>
            <span className="blue-text text-lighten-4 head-02">Developer</span>
          </h2>{' '}
          <h5 className="blue-text text-lighten-4 center-align">
            Embracing new web technologies to develop highly secured web
            applications
          </h5>
        </div>
      </div>
    );
  }
}
