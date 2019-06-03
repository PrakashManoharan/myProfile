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
            <span className="head-01 center">Front-End</span>
            <span className="head-02 center">Developer</span>
          </h2>{' '}
          <h5 className="center">
            Embracing new web technologies to develop highly secured web
            applications
          </h5>
        </div>
      </div>
    );
  }
}
