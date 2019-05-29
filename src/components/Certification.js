import React from 'react';
import scrum from './images/SMC.svg';
import itil from './images/ITIL.jpg';
import pmp from './images/pmp.jpg';
import mongodb from './images/mongodb.jpg';

import '../css/certification.css';

export default function Section01() {
  return (
    <div className="card">
      <br />
      <span className="btn btn-large blue lighten-3">
        Certification and Training
      </span>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col s12 m3">
          <div className="card">
            <div className="hoverable">
              <div className="card-image">
                {' '}
                <img
                  className="images-cert"
                  src={mongodb}
                  alt="PMP-Certification"
                />
              </div>
              <div className="card-content">
                <p className="center-align">MongoDB Basics</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m3">
          <div className="card">
            <div className="hoverable">
              <div className="card-image">
                <img
                  className="images-cert"
                  src={itil}
                  alt="ITIL-Certification"
                />
              </div>
              <div className="card-content">
                <p className="center-align">ITIL Service Management</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m3">
          <div className="card">
            <div className="hoverable">
              <div className="card-image">
                {' '}
                <img
                  className="images-cert"
                  src={scrum}
                  alt="scrum-certification"
                />
              </div>
              <div className="card-content">
                <p className="center-align">Scrum Master</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m3">
          <div className="card">
            <div className="hoverable">
              <div className="card-image">
                <img
                  className="images-cert"
                  src={pmp}
                  alt="ITIL-Certification"
                />
              </div>
              <div className="card-content">
                <p className="center-align">PMP Training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
