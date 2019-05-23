import React from 'react';
import '../css/footer.css';

export default function Footer() {
  return (
    <footer className="page-footer grey lighten-5">
      <div className="container center-align">
        <div className="row">
          <div className="col s12 nav-wrapper footer-list">
            <ul>
              <li className="hoverable">
                <a href="https://linkedin.com/in/prakash-manoharan-8a21ab187">
                  <i className="fab fa-linkedin blue-text text-lighten-3" />
                </a>
              </li>
              <li className="hoverable">
                <a href="https://twitter.com/MP2574">
                  <i className="fab fa-twitter blue-text text-lighten-3" />
                </a>
              </li>
              <li className="hoverable">
                <a href="https://github.com/prakashmanoharan">
                  <i className="fab fa-github blue-text text-lighten-3" />
                </a>
              </li>
            </ul>
          </div>
          <br />
          <br />
          <div className="col s12">
            <p className="grey-text text-darken-2">
              Designed and Developed by Prakash Manoharan © 2019
            </p>
          </div>
        </div>
      </div>
      <div className="grey lighten-2 footer-copyright">
        <div className="container grey-text center-align rights">
          &reg; All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
