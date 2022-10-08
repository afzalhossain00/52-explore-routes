import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Products</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/contacts'>Contacts</Link>
                {/* <a href="/home">Home</a>
            <a href="/about">About</a> */}
            </nav>
            <h4>Common Header. It won't change.</h4>
        </div>
    );
};

export default Header;