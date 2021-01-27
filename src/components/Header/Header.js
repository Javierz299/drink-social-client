import React from 'react';

import './header.css';

import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div id="drink-social-header">
                <Link to="/" >Drink Social</Link>
            </div>
        </header>
    )
};

export default Header;
