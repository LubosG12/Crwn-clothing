import React from 'react';

import './footer.styles.scss';

const Footer = () => (
    <div className="footer">
        <div className="content-container">
        <div className="left-block">
            <span>Crwn clothing ltd.</span>
            <span>Fake Street 123</span>
            <span>Fake Town</span>
            <span>+421901234567</span>
            <span>customersupport@crwn.com</span>
        </div>
        <div className="right-block">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>

        </div>
        </div>
        <div className="credit">
            Made by <a href="https://github.com/LubosG12">Lubomir Furinda</a>
        </div>
    </div>
)

export default Footer;