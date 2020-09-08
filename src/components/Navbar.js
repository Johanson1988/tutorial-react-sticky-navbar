//Navbar.js
import React from 'react';
import './navbar.scss';
import Logo from './../img/logo.svg';
const Navbar=() => {
  return (
    <header className={navbarClasses.join(" ")}>

        <div className="logo">
            {/* your logo */}
        </div>
        <nav className="navigation">
            {/* your navigation */}
        </nav>

    </header>
  )
};
export default Navbar;