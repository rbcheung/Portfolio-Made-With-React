import React from 'react'



const Projects = (props) => {
  console.log(props)
    return (
      <div className="card">
        <img
          src={props.props.image}
          className="card-img-top"
          alt={props.props.alt}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.props.name}</h5>
          <p className="card-text">{props.props.summary}</p>
        </div>
      </div>
    );

}

export default Projects;