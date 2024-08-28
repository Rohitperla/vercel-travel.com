import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-us">
          <h4>About Us</h4>
          <p>
            Travel.com is dedicated to providing the best travel experiences around the world.
            Our mission is to make travel accessible and enjoyable for everyone.
          </p>
        </div>
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Packages</a></li>
            <li><a href="#">blog</a></li>
            <li><a href="#">contact</a></li> 
          </ul>
        </div>
        <div className="footer-section contact-us">
          <h4>Contact Us</h4>
          <p>26-3-83 gandhi nagar Nrp road 3 no bus stop opp to nori hospital 520003 vijayawada</p>
          <p>Phone: +91 9492912391</p>
          <p>Email: rohitperla00088@gmail.com</p>
        </div>
        <div className="footer-section follow-us">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Travel.com All rights reserved. Designed and developed by rohit</p>
      </div>
    </footer>
  );
};

export default Footer; 
