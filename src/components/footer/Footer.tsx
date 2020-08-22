import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => (
    <footer>
        <div>
            <h2>Shop & Learn</h2>
            <hr />
            <ul>
                <li>Music</li>
                <li>Movies</li>
                <li>Shows</li>
                <li>Apps</li>
                <li>Gift Cards</li>
            </ul>
        </div>
        <div>
            <h2>Orange Store</h2>
            <hr />
            <ul>
                <li>Find a Store</li>
                <li>Today at Orange</li>
                <li>Orange Camp</li>
                <li>Financing</li>
                <li>Order Status</li>
            </ul>
        </div>
        <div>
            <h2>Education & Business</h2>
            <hr />
            <ul>
                <li>Orange & Education</li>
                <li>Shop For College</li>
                <li>Orange & Business</li>
                <li>Shop For Business</li>
                <li>Jobs</li>
            </ul>
        </div>
        <div>
            <h2>About Orange</h2>
            <hr />
            <ul>
                <li>Newsroom</li>
                <li>Orange Leadership</li>
                <li>Investors</li>
                <li>Events</li>
                <li>Contact</li>
            </ul>
        </div>
    </footer>
);

export default Footer;
