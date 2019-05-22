import React from 'react';

import Project1 from '../components/images/csit.png';
import Project2 from '../components/images/wireill.png';
import Project3 from '../components/images/airccj.png';
import Project4 from '../components/images/PM Profile.png';
import '../css/projects.css';
import M from 'materialize-css';

class Projects extends React.Component {
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
          Key Projects{' '}
          <i className="grey-text text-lighten-1 fas fa-project-diagram left small" />
        </h5>
        <br />
        <br />
        <div className="row ">
          <div className="col s12 m4 ">
            <div className="card hoverable small">
              <div className="card-image">
                <ul>
                  <li className="grey lighten-4 blue-text text-lighten-3 card-heading">
                    IJCNC
                  </li>
                </ul>
                <a href="http://airccse.org/journal/ijcnc.html">
                  <img src={Project1} alt="project" />
                </a>
              </div>
              <div className="card-content">
                <p>
                  Conceptualize a layout and created a template for a webpage
                  with HTML5/CSS3.
                </p>
              </div>
            </div>
          </div>

          <div className="col s12 m4 ">
            <div className="card hoverable small">
              <div className="card-image">
                <ul>
                  <li className="grey lighten-4 blue-text text-lighten-3 card-heading">
                    WIREILLA
                  </li>
                </ul>
                <a href="https://wireilla.org">
                  <img src={Project2} alt="project2" />
                </a>
              </div>
              <div className="card-content">
                <p>
                  Designed, developed a website that is responsive across all
                  devices using HTML5/CSS3, Bootstrap 4, Javascript
                </p>
              </div>
            </div>
          </div>

          <div className="col s12 m4 ">
            <div className="card hoverable small">
              <div className="card-image">
                <ul>
                  <li className="grey lighten-4 blue-text text-lighten-3 card-heading">
                    AIRCCJ
                  </li>
                </ul>
                <a href="https://airccj.org">
                  <img src={Project3} alt="project3" />
                </a>
              </div>
              <div className="card-content">
                <p>
                  Designed, developed, tested and deployed webpage - HTML5/CSS3,
                  MaterializeCSS, Javascript
                </p>
              </div>
            </div>
          </div>

          <div className="col s12 m4 ">
            <div className="card hoverable small">
              <div className="card-image">
                <ul>
                  <li className="grey lighten-4 blue-text text-lighten-3 card-heading">
                    PRAX PROFILE
                  </li>
                </ul>

                <a href="https://wireilla.org">
                  <img src={Project4} alt="project4" />
                </a>
              </div>
              <div className="card-content">
                <p>
                  Designed, developed, tested and deployed website - React,
                  React-Router, MaterializeCSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

/* import React from 'react';
//import Project from './Project';

export default function Projects(props) {
  //console.log(props);
  return (
    <div>
      <h4 style={{ textTransform: 'uppercase' }}>
        Key Projects
        <i class="fas fa-project-diagram left" />
      </h4>
      <br />
      <br />
      <div className="row ">
        <div className="col s12 m4 ">
          <div className="card small">
            <div className="card-image">
              <img src={props.projects.src} alt="projects" />
              <span className="card-title">{props.projects.title}</span>
            </div>
            <div className="card-content">
              <p>{props.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



      {props.projects.map(project => {
        return <Project project={project} key={project.id} />;
      })}
 */
