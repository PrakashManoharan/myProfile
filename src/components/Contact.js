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
                    <li>
                      <i className="material-icons left">person</i> Prakash
                      Manoharan
                    </li>
                    <div className="divider" />
                    <br />
                    <li>
                      <i className="material-icons left">mobile_friendly</i>
                      0470 084 197
                    </li>
                    <div className="divider" />
                    <br />
                    <li>
                      <Link className="grey-text text-darken-1" to="#">
                        <i className="material-icons left">email</i>
                        prax@outlook.com.au
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
