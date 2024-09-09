import React from 'react';
import logo from '../plantify.png'; // Update this to the correct path of your PNG file

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Plantify " style={{ height: '100px', width:'250px'}} /> {/* Adjust height as needed */}
    </div>
  );
};

export default Logo;
