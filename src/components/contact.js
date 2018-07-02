import React from 'react';
import contactStyle from '../styles/contact.css';

const Contact = () => {
    return (
    <div className = "contact" id = "contactApp">
        <h1 id = "heading">Contact</h1>

        <a href="https://www.linkedin.com/in/scotty-j-parlor-41aa5676/" target ="_blank" class="iconLink"><i class="fab fa-linkedin" id = "contactIcon"></i></a>

        <a href ="mailto:sparlor91@gmail.com" class="iconLink"><i class="far fa-envelope" id = "contactIcon"></i></a>

        <a href = "https://www.instagram.com/techopscott/" class = "iconLink" target = "_blank"><i class="fab fa-instagram" id = "contactIcon"></i></a>

        <a href="https://github.com/sparlor" class="iconLink" target="_blank"><i class="fab fa-github" id="contactIcon"></i></a>
        {/*<i class="fab fa-twitter-square" id = "contactIcon"></i>
        <i class="fab fa-pinterest" id = "contactIcon"></i>*/}
    </div>
        );
}

export default Contact;