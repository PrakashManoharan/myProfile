import React, { Component } from 'react';
import M from 'materialize-css';

export default class Experience extends Component {
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
          Career History
          <i className="grey-text text-lighten-1 fas fa-briefcase left" />
        </h5>
        <br />
        <br />
        <div className="row">
          <div className="col s12">
            <ul className="collapsible popout">
              <li>
                <div className="collapsible-header">
                  <i className="fas fa-laptop-code fa-3x" />
                  <ul>
                    <li>Wireilla</li>
                    <li>Front-End Developer</li>
                    <li>Sydney</li>
                    <li>Jun 2018 - Current</li>
                  </ul>
                </div>
                <div className="collapsible-body blue lighten-5">
                  <span>
                    <ul>
                      <li>
                        Creating web applications that can scale up to rich
                        features, speed, web traffic and dynamic page loads with
                        the latest web frameworks
                      </li>
                      <br />
                      <li>
                        Implementing responsive web design principles and
                        patterns to ensure that the website renders well across
                        multiple devices
                      </li>
                      <br />
                      <li>
                        Use of variety of programming languages in order to
                        create user-friendly mobile based features
                      </li>
                      <br />

                      <li>
                        Build high-quality mockups and design different
                        prototypes. Provide high-quality graphics and visual
                        elements
                      </li>
                      <br />
                      <li>
                        Optimize web applications and sites for maximum speed
                      </li>
                      <br />
                      <li>
                        Working with multidisciplinary teams such as back-end
                        developers and web designers
                      </li>
                    </ul>
                  </span>
                </div>
              </li>
              <br />
              <li>
                <div className="collapsible-header">
                  <i className="fas fa-code fa-3x" />
                  <ul>
                    <li>Wireilla</li>
                    <li>Web Developer</li>
                    <li>Sydney</li>
                    <li>Jan 2017 - May 2018</li>
                  </ul>
                </div>
                <div className="collapsible-body blue lighten-5">
                  <span>
                    <ul>
                      <li>
                        Designed, developed, tested and deployed web
                        applications
                      </li>
                      <br />
                      <li>
                        Followed appropriate code structures using best
                        development practices to solve specific tasks
                      </li>
                      <br />
                      <li>
                        Collected specifications and requirements based on the
                        technical needs
                      </li>
                      <br />
                      <li>
                        Researched and proposed current technology trends to
                        meet the future needs of web applications
                      </li>
                      <br />
                      <li>
                        Assumed ownership of code throughout the development
                        cycle and production
                      </li>
                      <br />
                      <li>
                        Collaborated with web designers to align with the visual
                        design intent
                      </li>
                    </ul>
                  </span>
                </div>
              </li>
              <br />
              <li>
                <div className="collapsible-header">
                  <i className="fas fa-code fa-3x" />
                  <ul>
                    <li>Wireilla</li>
                    <li>Junior Web Developer</li>
                    <li>Sydney</li>
                    <li>Jan 2016 - Dec 2016</li>
                  </ul>
                </div>
                <div className="collapsible-body blue lighten-5">
                  <span>
                    <ul>
                      <li>
                        Written well designed, testable, efficient code using
                        HTML5/CSS3 best practices
                      </li>
                      <br />
                      <li>
                        Gathered and refined requirements to suit the technical
                        needs
                      </li>
                      <br />
                      <li>
                        Responsible for maintaining, expanding, and scaling the
                        sites
                      </li>
                      <br />
                      <li>
                        Stay plugged into emerging technology trends and apply
                        them into the development activities
                      </li>
                      <br />
                      <li>
                        Co-operate and collaborate with web designers to match
                        visual design intent
                      </li>
                    </ul>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
