import React from 'react';
import style from '../styles/navbar.css';

const AboutScroll = () => {
    const navElement = document.getElementById('about-anchor');
    navElement.scrollIntoView({behavior:"smooth", block:"start"});
}

const ProjectScroll = () => {
    const navElement = document.getElementById('project1');
    navElement.scrollIntoView({behavior:"smooth", block:"start"});
}

const HeaderScroll = () => {
    const navElement = document.getElementById('top');
    navElement.scrollIntoView({behavior:"smooth", block:"start"});
}

const SkillsScroll = () => {
    const navElement = document.getElementById('skill-anchor');
    navElement.scrollIntoView({behavior:"smooth", block:"start"});

}

const ContactScroll = () => {
    const navElement = document.getElementById('contactApp');
    navElement.scrollIntoView({behavior:"smooth", block:"start"});
}

const Navbar = () => {

        return(
            <div className="navbar" id = "main-nav">
                <a name='header' id='logo' onClick={HeaderScroll}>Scotty Parlor</a>
                <a name='about' onClick={AboutScroll}>About</a>
                <a name='project' onClick={ProjectScroll}>Projects</a>
                <a name='skill' onClick={SkillsScroll}>Skills</a>
                <a name='contact' onClick={ContactScroll}>Contact</a>
            </div>
        );
    }
export default Navbar;