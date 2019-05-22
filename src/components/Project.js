import React from 'react';

export default function Project(props) {
  //console.log(props);
  return (
    <div className="row ">
      <div className="col s12 m4 ">
        <div className="card small">
          <div className="card-image">
            <img src={props.project.image} alt="projects" />
            <span className="card-title">{props.title}</span>
          </div>
          <div className="card-content">
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
