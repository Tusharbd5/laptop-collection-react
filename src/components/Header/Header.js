import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="LaptopLogo" />
            <h3 className='header-title'>Welcome to Laptop Collection</h3>
        </nav>
    );
};

export default Header;