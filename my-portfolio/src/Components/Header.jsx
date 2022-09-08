import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="nav__container">
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Portfolio</NavLink>
            <NavLink to="/">Contact</NavLink> 
        </nav>
    );
}
export default Header;