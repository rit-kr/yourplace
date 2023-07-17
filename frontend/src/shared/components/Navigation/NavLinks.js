import './NavLinks.css';
import React from 'react';
import{ NavLink } from 'react-router-dom'
const NavLinks = props => {
    return(
        <ul className='nav-links'>
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            <li>
                <NavLink to="/ul/places">My Places</NavLink>
            </li>
            <li>
                <NavLink to="/places/new">Add place</NavLink>
            </li>
            <li>
                <NavLink to="/auth">Authentication</NavLink>
            </li>
        </ul>
    )

}
export default NavLinks;