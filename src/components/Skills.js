import React from 'react';

export default function Skills() {
  return (
    <div className="card">
      <br />
      <span className="btn btn-large blue lighten-3">Skills</span>
      <div className="card-content">
        <br />
        <ul>
          <li>
            Front End Frameworks - HTML, CSS, Bootstrap, Material Design,
            Javascript frameworks like React
          </li>
          <br />
          <li>Responsive and mobile design</li>
          <br />
          <li>Cross-Browser development</li>
          <br />
          <li>Content management systems</li>
          <br />
          <li>Git and version control systems</li>
          <br />
          <li>Testing and debugging</li>
          <br />
          <li>Problem solving skills</li>
        </ul>
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
      <div className="card-content grey lighten-5">
        <div id="tab1">HTML5 | CSS3</div>
        <div id="tab2">Bootstrap 4 | Materialize CSS | SASS</div>
        <div id="tab3">ES2015 Javascript | React Framework</div>
        <div id="tab4">Node | Express | Axios | JSON</div>
        <div id="tab5">MongoDB | Mongooose</div>
        <div id="tab6">NPM | Github |Yarn | Webpack | Babel</div>
      </div>
    </div>
  );
}
