import React, { useState } from 'react';
import '../App.css';
import logo from "../images/logo.jpg"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <a className="navbar-brand" href="#">
          <img src= {logo} alt="Logo" width="75" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={menuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={handleHamburgerClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                My Projects
              </a>
            </li>
          
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
