import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
                {/* <a href="/home">Home</a>
            <a href="/about">About</a> */}
            </nav>
            <h4>Common Header. It won't change.</h4>
        </div>
    );
};

export default Header;