import React from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class Contact extends React.Component {
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
          Connect{' '}
          <i className="grey-text text-lighten-1 fas fa-address-book left" />
        </h5>
        <br />
        <br />
        <div>
          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <br />
                <span className="btn btn-large blue lighten-3">Contacts</span>
                <div className="card-content">
                  <br />
                  <ul>
                    <li>Prakash Manoharan</li>
                    <div className="divider" />
                    <br />
                    <li>047008417</li>
                    <div className="divider" />
                    <br />
                    <li>
                      <Link className="grey-text text-darken-1" to="#">
                        prakash.manoharan@outlook.com
                      </Link>
                    </li>
                    <div className="divider" />
                    <br />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;

/*
<nav className="grey lighten-3">
                    <ul className="nav-wrapper">
                      <li>
                        <Link to="#">
                          <i className="fab fa-skype fa-2x blue-text text-lighten-2" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-whatsapp fa-2x blue-text text-lighten-2" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-telegram-plane fa-2x blue-text text-lighten-2" />
                        </Link>
                      </li>
                    </ul>
                  </nav>

*/
