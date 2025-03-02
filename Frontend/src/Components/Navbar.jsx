import React, { useContext, useState } from 'react';
import basketIcon from '../assets/basket.png';
import searchIcon from '../assets/search_icon.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { StoreContext } from '../Context/Contet';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");
    const{getTotalCartAmount} = useContext(StoreContext)
 
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
                   
                    <Link to='/cart'><img src={basketIcon} alt="Basket" className='basket' /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
