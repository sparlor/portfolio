import React from 'react';
import ProjectStyle from '../styles/projects.css';

const Projects = (props) => {
    return (
        <div className = "projects" id = {props.id}>
            <a href='#' id='projectLink'>
            <h1 id = "appHeading">{props.projectName}</h1>
            <img id="projectImage" src={props.image}/>
            <p id = "listSummary">{props.children}</p>
            </a>
        </div>
    )
}

export default Projects;