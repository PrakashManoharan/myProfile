import React from 'react';
import scrum from './images/SMC.png';
import itil from './images/itil.png';
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
        <div className="col s12 m4">
          <div className="card">
            <div className="hoverable">
              <div className="card-content">
                <img
                  className="images-cert"
                  src={mongodb}
                  alt="PMP-Certification"
                />
                <p className="center-align">MongoDB Basics Certification</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card">
            <div className="hoverable">
              <div className="card-content">
                <img
                  className="images-cert"
                  src={scrum}
                  alt="scrum-certification"
                />
                <p className="center-align">Scrum Master Certification</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card">
            <div className="hoverable">
              <div className="card-content">
                <img
                  className="images-cert"
                  src={itil}
                  alt="ITIL-Certification"
                />
                <p className="center-align">
                  ITIL Service Management Certification
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card">
            <div className="hoverable">
              <div className="card-content">
                <img
                  className="images-cert"
                  src={pmp}
                  alt="PMP-Certification"
                />
                <p className="center-align">PMP Certification Training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
