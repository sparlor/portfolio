import React from 'react';
import LangStyle from '../styles/skills.css';
import reactjs from '../images/icons/react.svg';
import java from '../images/icons/java.svg';
import python from '../images/icons/python.svg';
import js from '../images/icons/js.svg';
import node from '../images/icons/node.svg';
import jenkins from '../images/icons/jenkins.svg';
import css3 from '../images/icons/css3.svg';
import linux from '../images/icons/linux.svg';
import microsoft from '../images/icons/microsoft.svg';
import apple from '../images/icons/apple.svg';
import vue from '../images/icons/vue.svg';
import html5 from '../images/icons/html5.svg';







const Skills = () => {
    return(
        <div className="skill-set" id='skill'>
            <h1 id = "heading">Skills and Experience</h1>

            <div className = "icon-area">
                <img id = 'icon' src = {reactjs}/>
                <img id = 'icon' src = {java}/>
                <img id = 'icon' src = {python}/>
                <img id = 'icon' src = {js}/>
                <img id = 'icon' src = {node}/>
                <img id = 'icon' src = {jenkins}/>
                <img id = 'icon' src = {css3}/>
                <img id = 'icon' src = {linux}/>
                <img id = 'icon' src = {microsoft}/>
                <img id = 'icon' src = {apple}/>
                <img id = 'icon' src = {vue}/>
                <img id = 'icon' src = {html5}/>
            </div>
        </div>

    );
}

export default Skills;