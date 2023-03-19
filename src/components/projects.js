import React from "react";

const Projects = (props) => {
  console.log(props);
  return (
    <div className="card">
      <a href={props.props.deployed}>
        <img
          src={props.props.image}
          className="card-img-top"
          alt={props.props.alt}
        ></img>
      </a>
      <div className="card-body">
        <h5 className="card-title">{props.props.name}</h5>
        <p className="card-text">{props.props.summary}</p>
        <a href={props.props.link}><button className="btn btn-primary"> Github Repo</button></a>
        <a href={props.props.deployed}><button className="btn btn-primary"> Deployed App</button></a>
      </div>
    </div>
  );
};

export default Projects;
