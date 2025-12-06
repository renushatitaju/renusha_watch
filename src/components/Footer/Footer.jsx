import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.png"
import facebook_icon from "../../assets/facebook_icon.jpg"
import Instagram_icon from "../../assets/Instagram_icon.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" height="20px" />
            <p>The Watch Vault</p>
        </div>
        <ul className='footer-links'>
<li>About</li>
<li>Products</li>
<li>Offices</li>
<li>Company</li>
<li>Contact</li>
        </ul>
        <div className='footer-social-icon'>

<div className="footer-icon-container">
<img src={facebook_icon} alt="" height="30px"  />
</div>

<div className="footer-icon-container">
<img src={Instagram_icon} alt="" height="30px" />
</div>

        </div>
        <div className="footer-copyright">
            <hr/>
            <p> &copy; Copyright 2025 </p>
        </div>
    </div>
  )
}

export default Footer