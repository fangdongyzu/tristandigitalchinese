import React from 'react';
import '../styles/Footer.css'
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <p> Desgined by Tristan &copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
