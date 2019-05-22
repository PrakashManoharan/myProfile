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
                <div className="btn btn-large  blue lighten-5 grey-text hoverable">
                  <a href="../components/files/PraxResume.docx">
                    <span>Prakash Resume{''}</span>
                    <Link to="#">
                      <i className="fas fa-file-download right white-text" />
                    </Link>
                  </a>
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
                  MongoDB{' '}
                  <Link to="#">
                    <i className="fas fa-file-download right white-text" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card-content">
                <div className="btn btn-large hoverable  blue lighten-5 grey-text">
                  Scrum Master{' '}
                  <Link to="#">
                    <i className="fas fa-file-download right white-text" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              {' '}
              <div className="card-content">
                <div className="btn btn-large hoverable  blue lighten-5 grey-text">
                  ITIL Serv.Mgmt{' '}
                  <Link to="#">
                    <i className="fas fa-file-download right white-text" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              {' '}
              <div className="card-content">
                <div className="btn btn-large hoverable  blue lighten-5 grey-text">
                  PMP Training{' '}
                  <Link to="#">
                    <i className="fas fa-file-download right white-text" />
                  </Link>
                </div>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
