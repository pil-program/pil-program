import React from 'react';
import './AboutUsSection.css';
import coupleImage from '../assets/couple_2.png';
import houseImage from '../assets/house_3.png';

export default function AboutUsSection() {
  return (
    <div id="about" className="about-us-container">
      <div className="aboutus-header">
      <div className="couple-column">
        <div className="image-container">
          <img
            src={coupleImage}
            alt="Happy couple with camera and backpacks"
            className="section-image"
          />
        </div>
       <div className="stats-section">
          <div className="stats-header">
            <h2 className="stats-number">100+</h2>
            
          </div>
          <p className="stats-description">
            Happy customers
            
            in the last month.
            <br/>
            <a  href="#contact" className="highlight">
                  Get in touch !
                </a>
            
          </p>
          
        </div>
      </div>

      {/* Middle Column: Stats + House Image */}
      <div className="stats-column">
        <div className="stats-section">
          <div className="stats-header">
            <h2 className="stats-number">15,000+</h2>
            
          </div>
          <p className="stats-description">
           Hours of everyday stress saved 
            <br />
            for our early adopters.
          </p>
        </div>
        <div className="image-container">
          <img
            src={houseImage}
            alt="Beautiful house with garden"
            className="section-image"
          />
        </div>
      </div>
      </div>

      <div className="aboutus-columns">
        <div className="subtitle">A BIT</div>
        <h1 className="main-title">ABOUT US</h1>
        <p className="description-text">
          We are determined to help guide others through a more simpler life,
          without the stress of time, money, or work. our use of AI is to help
          real people find what they want in life, and how to achieve it —
          whether it's a new home, new adventures, or new friends. whatever
          you may need in your life, we are here to make it simpler but
          new.
        </p>
        <button className="learn-more-button">
            <span>Learn More</span>
        </button>

      </div>
    </div>
  );
}
