import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className='footer-content-left'>
               <p className="logo">QuickBite</p>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis commodi quae iste ipsum, laudantium reprehenderit eos vero, natus, quam magni explicabo odio nisi nam numquam sed sit provident quasi dolore!</p>
               <div className="footer-social-icons">
                <img src="src\assets\facebook_icon.png" alt="" />
                <img src="src\assets\twitter_icon.png" alt="" />
                <img src="src\assets\linkedin_icon.png" alt="" />
               </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>9089563421</li>
                    <li>contact@Quickbite.com</li>
                </ul>

            </div>
        </div>
    <br></br>
    <p className="footer-copyright">Copyright 2024 @ QuickBite.com</p>
    </div>
  )
}

export default Footer
