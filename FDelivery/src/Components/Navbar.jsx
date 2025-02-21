import React, { useState } from 'react';
import basketIcon from '../assets/basket.png';
import searchIcon from '../assets/search_icon.png';
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <p className="logo">QuickBite</p>
            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
                <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact Us</li>
            </ul>
            <div className="navbar-right">
            <img src={searchIcon} alt="Search" className='search'/>
                <div className="navbar-search">
                   
                    <img src={basketIcon} alt="Basket" className='basket' />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
