import React from 'react';
import style from '../styles/navbar.css';

window.onscroll = function() {NavigationScroll()};

const NavigationScroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 10) {
        document.getElementsByClassName("navbar").className="navScroll";
    }
}

const Navbar = () => {

        return(
            <div className="navbar">
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Projects</a>
                <a href='#'>Contact</a>
            </div>
        );
    }

export default Navbar;