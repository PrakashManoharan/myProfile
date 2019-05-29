import React from 'react';
import '../css/summary.css';

export default function Skills() {
  return (
    <div className="card">
      <br />
      <span className="btn btn-large blue lighten-3">Skills</span>
      <div className="card-content blue lighten-5 grey-text">
        <br />
        <li>
          Front-End Frameworks - HTML5, CSS3, Bootstrap, MaterializeCSS,
          Javascript, React, Node.
        </li>
        <br />
        <li>Responsive mobile design.</li>
        <br />
        <li>Cross-Browser development.</li>
        <br />
        <li>Git and version control systems.</li>
        <br />
        <li>Testing and debugging.</li>
        <br />
        <li>Problem solving skills.</li>
      </div>
      <div className="card-tabs blue lighten-2">
        <ul className="tabs tabs-width-fixed tabs-transparent">
          <li className="tab">
            <a href="#tab1">Web Languages</a>
          </li>
          <li className="tab">
            <a href="#tab2">Pre-Processor</a>
          </li>
          <li className="tab">
            <a href="#tab3">Web Technologies</a>
          </li>
          <li className="tab">
            <a href="#tab4">Server-Side </a>
          </li>
          <li className="tab">
            <a href="#tab5">Database</a>
          </li>
          <li className="tab">
            <a href="#tab6">Tools</a>
          </li>
        </ul>
      </div>
      <div className="card-content">
        <div id="tab1">
          <li className="skills-tab">HTML5</li>
          <li className="skills-tab">CSS3</li>
        </div>
        <div id="tab2">
          <li className="skills-tab">Bootstrap 4</li>
          <li className="skills-tab">MaterializeCSS</li>
          <li className="skills-tab">SASS</li>
        </div>
        <div id="tab3">
          <li className="skills-tab">ES2015 JavaScript</li>
          <li className="skills-tab">React Framework/Libraries</li>
        </div>
        <div id="tab4">
          <li className="skills-tab">Node</li>
          <li className="skills-tab">Express</li>
          <li className="skills-tab">Axios</li>
          <li className="skills-tab">JSON</li>
        </div>
        <div id="tab5">
          <li className="skills-tab">MongoDB</li>
          <li className="skills-tab">Mongoose</li>
        </div>
        <div id="tab6">
          <li className="skills-tab">NPM</li>
          <li className="skills-tab">Yarn</li>
          <li className="skills-tab">Webpack</li>
          <li className="skills-tab">Babel</li>
          <li className="skills-tab">GitHub</li>
        </div>
      </div>
    </div>
  );
}
