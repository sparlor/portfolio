import React from 'react';
import LangStyle from '../styles/skills.css';

const Skills = () => {
    return(
        <div className="skill-set" id='skill'>
            <div id = "skill-anchor" style = {{position:'relative', top:-59}}></div>
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
                <i class="fas fa-code-branch"><span id='text'>Git</span></i>


            </div>
        </div>

    );
}

export default Skills;