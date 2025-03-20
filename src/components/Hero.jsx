import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <nav className="navbar">
        <div className="logo">PIL PROGRAM</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact Us</a>
        </div>
      </nav>

      <div className="content">
  {/* H1 with typewriter animation #1 */}
  <h1 className="journey typewriter-1">JOURNEY</h1>

  {/* H2 with typewriter animation #2 (delayed) */}
  <h2 className="simplified typewriter-2">SIMPLIFIED</h2>
</div>

    </div>
  );
};

export default Hero;