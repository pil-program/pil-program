import React from 'react';
import './AboutUsSection.css';
import coupleImage from '../assets/couple.png';
import houseImage from '../assets/house.png';

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
        <div className="customers-section">
          <h3 className="customers-title">Happy Customers</h3>
          <div className="divider"></div>
          {/* <div className="divider2"></div> */}
          <div className="emoji-container">
            <span className="emoji">😍</span>
            <span className="emoji">😊</span>
            <span className="emoji">😀</span>
            <span className="emoji">😄</span>
            <span className="emoji-large">😁</span>
          </div>
        </div>
      </div>

      {/* Middle Column: Stats + House Image */}
      <div className="stats-column">
        <div className="stats-section">
          <div className="stats-header">
            <h2 className="stats-number">30,000+</h2>
            <svg
              className="arrow-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="#4ADE80"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="stats-description">
            Sales in July 2021 with 5 star ratings
            <br />
            and happy clients.
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
