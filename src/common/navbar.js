import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 
import { AiFillHome } from "react-icons/ai";
import { FaPersonWalkingLuggage } from "react-icons/fa6"; 
import { MdCardTravel } from "react-icons/md";
import { ImBlog } from "react-icons/im";
import { MdContactPage } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import logo from "../asserts/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? 'scrolled-navbar' : ''}`}>
      <div className="main-div">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt='logo' className='navbar-logo' />
        </Link>
        
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav"> 
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <AiFillHome className='nav-icons'/>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <FaPersonWalkingLuggage className='nav-icons'/> 
              <Link className="nav-link" to="/packages">Packages</Link>
            </li>
            <li className="nav-item">
              <MdCardTravel className='nav-icons'/> 
              <Link className="nav-link" to="/Mytrips">My trips</Link>
            </li>
            <li className="nav-item">
              <ImBlog className='nav-icons'/> 
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <MdContactPage className='nav-icons'/> 
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className='icon' onClick={toggleMenu}> 
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
