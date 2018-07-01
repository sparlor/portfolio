import React from 'react';
import style from '../styles/navbar.css';

const NavigationScroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 10) {
        document.getElementsByClassName("navbar").className="navScroll";
    }
}

const AboutScroll = () => {
    const navElement = document.getElementById('aboutMe');
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
    const navElement = document.getElementById('skill');
    navElement.scrollIntoView({behavior:"smooth", block:"start"});
}

window.onscroll = function() {
    {NavigationScroll}
};

const Navbar = () => {

        return(
            <div className="navbar">
                <a name='header' id='logo' onClick={HeaderScroll}>Scotty Parlor</a>
                <a name='about' onClick={AboutScroll}>About</a>
                <a name='project1' onClick={ProjectScroll}>Projects</a>
                <a name='skill' onClick={SkillsScroll}>Skills</a>
                <a href='#'>Contact</a>
            </div>
        );
    }
export default Navbar;