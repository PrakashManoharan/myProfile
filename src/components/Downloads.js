import React from 'react';
import { Link } from 'react-router-dom';

import M from 'materialize-css';

class Resume extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <h5
          className="grey-text text-lighten-1"
          style={{ textTransform: 'uppercase' }}
        >
          Downloads{' '}
          <i className="grey-text text-lighten-1 fas fa-download left" />
        </h5>
        <br />
        <br />
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <br />
              <span className="btn btn-large blue lighten-3">Resume</span>
              <div className="card-content">
                <br />
                <br />
                <div className="btn btn-large  blue lighten-5 hoverable">
                  <a href="../components/files/PraxResume.docx" download>
                    <span className="grey-text">Prakash Resume{''}</span>
                  </a>
                  <Link to="#">
                    <i className="fas fa-file-download right white-text" />
                  </Link>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>

        <div className="card">
          <br />
          <span className="btn btn-large blue lighten-3">Certificates</span>
          <div className="row">
            <div className="card-content" />
            <div className="col s12 m4">
              <div className="card-content">
                <div className="btn btn-large hoverable blue lighten-5 grey-text">
                  <a href="../components/files/mongo.pdf" download>
                    <span className="grey-text">MongoDB Basics{''}</span>
                  </a>
                  <Link to="#">
                    <i className="fas fa-file-download right white-text" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card-content">
                <div className="btn btn-large hoverable  blue lighten-5">
                  <a
                    href="../components/files/Srum Master Certification.pdf"
                    download
                  >
                    <span className="grey-text">Scrum Master{''}</span>
                  </a>
                  <Link to="#">
                    <i className="fas fa-file-download right white-text" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              {' '}
              <div className="card-content">
                <div className="btn btn-large hoverable  blue lighten-5">
                  <a href="../components/files/ITIL Certification.pdf" download>
                    <span className="grey-text">ITIL Certification</span>
                  </a>
                  <Link to="#">
                    <i className="fas fa-file-download right white-text" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
