import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <>
        <div className='footer' id='footer'>
            <div className="footer-content">


                <div className="footer-content-left">
                    <img src={'assets/zomato.png'}/>
                    <p>Choose from a diverse menu featuring a delectable array of dishes. Our Mission is to satisfy your cravings and elevate your dining experience, one delecious meal at a time.</p>

                    <div className="footer-social-icon">
                        <img src={'assets/facebook_icon.png'}/>
                        <img src={'assets/twitter_icon.png'}/>
                        <img src={'assets/linkedin_icon.png'}/>
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                    
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 226 232 7777</li>
                        <li>help@zomato.com</li>
                    </ul>
                </div>

            </div>

        </div>
        <hr/>
        <p className='footer-copyright'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
    </>
  )
}