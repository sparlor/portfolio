import React from 'react';
import style from '../styles/navbar.css';

const NavigationScroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 10) {
        document.getElementsByClassName("navbar").className="navScroll";
    }
}

window.onscroll = function() {
    NavigationScroll()
};

const Navbar = () => {

        return(
            <div className="navbar">
                <a href='#aboutMe'>About</a>
                <a href='#'>Projects</a>
                <a href='#'>Languages</a>
                <a href='#'>Contact</a>
            </div>
        );
    }

export default Navbar;