import React from 'react';
import './Header.scss';

const Header: React.FC = () => (
    <header>
        <h3 className="heading"><a href="#banner">myTunes</a></h3>
        <nav className="navigation">
            <ul>
                <li><a href="#music">Music</a></li>
                <li><a href="#movies">Movies</a></li>
                <li><a href="#gift-cards">Gift Cards</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
