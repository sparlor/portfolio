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
                <i class="fab fa-react"><span id ='text'>React</span></i>                
                <i class="fab fa-java"><span id ='text'>Java</span></i>
                <i class="fab fa-python"><span id ='text'>Python</span></i>
                <i class="fab fa-js"><span id ='text'>JavaScript</span></i>
                <i class="fab fa-node"><span id ='text'>Node.js</span></i>
                <i class="fab fa-jenkins"><span id ='text'>Jenkins</span></i>
                <i class="fab fa-css3"><span id ='text'>CSS3</span></i>
                <i class="fab fa-linux"><span id ='text'>Linux</span></i>
                <i class="fab fa-windows"><span id ='text'>Windows</span></i>
                <i class="fab fa-apple"><span id ='text'>OSX</span></i>
                <i class="fab fa-vuejs"><span id ='text'>Vue.js</span></i>
                <i class="fab fa-html5"><span id ='text'>HTML5</span></i>
            </div>
        </div>

    );
}

export default Skills;