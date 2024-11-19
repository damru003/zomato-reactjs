import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <>
      <div className="header container">
        <div className="header-content">
          <h2>Order Your</h2>
          <h1>Favorite Food Here</h1>
          <p>Choose from a diverse menu featuring a delectable array of dishes. Our Mission is to satisfy your cravings and elevate your dining experience, one delecious meal at a time.</p>
          <button>Check Menu</button>
        </div>
      </div>
    </>
  )
}