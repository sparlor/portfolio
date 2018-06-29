import React from 'react';
import aboutStyle from '../styles/about.css';
import sp from '../images/profile.png';

const About = () => {
    return (
    <div className='about' id='aboutMe'>
        <img id='sparlor' src={sp}/>
        <h1 id='aboutContent'>About Me</h1>
        <p id='aboutContent'>Hi, my name is Scotty Parlor. I am a web and software developer in Tampa, FL. I work professionally with Java and Groovy, and work on the side with ReactJS, Node.js, Ruby on Rails, Django, and Vue.js. I desire to continue growing in my learning and experience as I pursue more opportunities to serve my community.</p>
    </div>
    );
}

export default About;