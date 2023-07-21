import './NavLinks.css';
import React, { useContext } from 'react';
import{ NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth-context';
const NavLinks = props => {
    const auth = useContext(AuthContext)

    return(
        <ul className='nav-links'>
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            {auth.isLoggedIn && (
                <li>
                <NavLink to="/ul/places">My Places</NavLink>
            </li>
            )}
             {auth.isLoggedIn && (
            <li>
                <NavLink to="/places/new">Add place</NavLink>
            </li>
            )}
            {!auth.isLoggedIn && (
            <li>
                <NavLink to="/auth">Authentication</NavLink>
            </li>
            )}
        </ul>
    )

}
export default NavLinks;