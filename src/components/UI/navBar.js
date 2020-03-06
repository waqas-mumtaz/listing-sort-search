import React from 'react';
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item" >
                        <img src="https://freighthub.com/wp-content/themes/freighthub/img/logo/logo.svg" width="112" height="28" />
                    </Link>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item">Home</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;
