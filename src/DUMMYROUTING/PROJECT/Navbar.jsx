import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h2 className="logo-heading">Siva Sankari P</h2>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <ul className="menu-list">
            <li className="menu-list-items"><a className="links" href="#home">Home</a></li>
            <li className="menu-list-items"><a className="links" href="#portfolio">Portfolio</a></li>
            <li className="menu-list-items"><a className="links" href="#about">About</a></li>
            {/*
            <li className="menu-list-items"><a className="links" href="#services">Services</a></li>
            */}
            <li className="menu-list-items"><a className="links" href="#contact">Contact Me</a></li>
            <li className="menu-list-items"><a className="links" href="#blog">Blogs</a></li>
            <li className="menu-list-items"><a className="links" href="#resume">Resume</a></li>
            <li className="menu-list-items"><a className="links" href="#achieve">Achievements</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

