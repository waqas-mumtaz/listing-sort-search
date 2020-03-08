import React from 'react';
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item" >
                        <img src="https://freighthub.com/wp-content/themes/freighthub/img/logo/logo.svg" width="112" height="28" alt="freighthub logo" />
                    </Link>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;
