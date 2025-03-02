import React, { useState } from 'react';
import basketIcon from '../assets/basket.png';
import searchIcon from '../assets/search_icon.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <p className="logo">QuickBite</p>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href="#menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href="#footer" onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
            <img src={searchIcon} alt="Search" className='search'/>
                <div className="navbar-search">
                   
                    <img src={basketIcon} alt="Basket" className='basket' />
                    <div className="dot"></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
