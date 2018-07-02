import React from 'react';
import ProjectStyle from '../styles/projects.css';

const Projects = (props) => {
    return (
        <div className = "projects">
            <div id = {props.id} style = {{position:'absolute', top:-59}}></div>
            <a href='#' id='projectLink'>
            <img id="projectImage" src={props.image}/>
            <div className = "content">
            <h1 id = "appHeading">{props.projectName}</h1>
            <p id = "listSummary">{props.children}</p>
            <button id = "projectButton">Demo</button>
            </div>
            </a>
        </div>
    )
}

export default Projects;