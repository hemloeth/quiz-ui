import React from "react";
import './Footer.css'

function Footer(){

   

    return(
        <div className="footer-page">

            <div className="footer-style-image">
                <a><img src="images/Group 331.png"></img></a>
            </div>
            <div>
                <img src="images/Group 6 1.png" className="footer-logo"></img>
            </div>

            <div className="menu-detail">
                <h4 className="footer-h4">Menu</h4>
                <ul className="custom-list">
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            
            <div className="services-detail">
                <h4 className="footer-h4">Services</h4>
                <ul className="custom-list">
                    <li>Planning</li>
                    <li>Strategy</li>
                    <li>Market</li>
                    <li>Management</li>
                </ul>
            </div>

            <a href="https://x.com/R3kuto" target="_blank">
                <div className="social-links">
                    <img src="images/twitter.png"></img>
                </div>
            </a>

            <a href="https://www.instagram.com/rustamali5025/" target="_blank">
                <div className="insta-links">
                    <img src="images/instagram.png" className="insta-link"></img>
                </div>
            </a>

            <div className="line"></div>
                <div className="privacy-policy">
                    <p>Copyright © 2024 Quizbaj. All Rights Reserved.</p>

                <div className="polciy">
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;