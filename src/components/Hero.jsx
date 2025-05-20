import React, { useState } from 'react';
import backgroundVideo from '../assets/background.mp4';
import './Hero.css';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hero-container">
        <video
        className="bg-video"
        src={backgroundVideo}
        autoPlay      // start immediately
        loop          // repeat forever
        muted         // autoplay policy compliance
        playsInline   // mobile Safari compliance
      />
      <nav className="navbar">
        <div className="logo">PILPROGRAM</div>
        
        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          ☰
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links desktop">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact Us</a>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          ✕
        </div>
        <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
      </div>

      <div className="content">
        <h1 className="journey typewriter-1">JOURNEY</h1>
        <h2 className="simplified typewriter-2">SIMPLIFIED</h2>
      </div>
    </div>
  );
};

export default Hero;
