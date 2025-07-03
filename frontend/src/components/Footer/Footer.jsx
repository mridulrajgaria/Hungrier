import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'


const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo_bottom} alt="" />
                <p> Hungrier is your go-to food delivery app, bringing delicious meals from your favorite restaurants straight to your door. Fast, fresh, and reliable—satisfy your hunger with Hungrier!</p>
                <div className="footer-social-icons">
                    <a href="https://www.instagram.com/themridulrajgaria/" target="_blank" rel="noopener noreferrer">
                      <img src={assets.facebook_icon} alt="Instagram" />
                    </a>
                    <a href="https://x.com/MridulRajgaria" target="_blank" rel="noopener noreferrer">
                      <img src={assets.twitter_icon} alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/mridul-rajgaria-112257288/" target="_blank" rel="noopener noreferrer">
                      <img src={assets.linkedin_icon} alt="LinkedIn" />
                    </a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Quick Links</h2>
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/offers"><li>Offers</li></a>
                </ul>
                <div className="footer-download-app" style={{marginTop: '20px'}}>
                  <h2>Download App</h2>
                  <div style={{display: 'flex', gap: '10px'}}>
                    <a href="#"><img src={assets.app_store} alt="App Store" style={{width: '120px'}} /></a>
                    <a href="#"><img src={assets.play_store} alt="Google Play" style={{width: '120px'}} /></a>
                  </div>
                </div>
            </div>
            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+91 91530 90104</li>
                    <li>mridulrajgaria@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 © Hungrier. All rights reserved.</p>
    </div>
  )
}

export default Footer