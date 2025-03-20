import React from 'react';
import './Products.css';
import parliamadeImage from '../assets/parliamade.png';
import detoursImage from '../assets/detours.png';
const Products = () => {
  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <h2 className="section-title">WHAT WE OFFER</h2>
        <p className="section-subtitle">EXPLORE OUR PRODUCTS</p>
        
        <div className="products-grid">
          <div className="product-card">
            <img 
              src={parliamadeImage}
              alt="Parliamade" 
              className="product-image"
            />
            <h3 className="product-title">Parliamade</h3>
            <p className="product-description">
              Find your dream home with Parliamade, the Tinder for house hunting. Swipe through listings, 
              chat with homeowners, and schedule viewings, all in one place. Our smart algorithm learns 
              your preferences to find the perfect match. House hunting made easy, fun, and stress-free.
            </p>
          </div>

          <div className="product-card">
            <img 
              src={detoursImage}
              alt="Detours" 
              className="product-image"
            />
            <h3 className="product-title">Detours</h3>
            <p className="product-description">
              Planning a road trip? Detours is your all-in-one companion for budgeting, finding the 
              perfect campsite, exploring van life options, and discovering hidden gems along the way. 
              We're changing how people experience the outdoors, making it easier and more enjoyable 
              than ever before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;