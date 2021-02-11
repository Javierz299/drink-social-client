import React from 'react';

import './header.css';

import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div id="drink-social-header">
                <Link className="drink-social-logo" to="/" >Drink Social</Link>
            </div>
        </header>
    )
};

export default Header;
