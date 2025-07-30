import React from 'react';
import './Footer.css'; // Make sure to create this file

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} GameZone. All rights reserved.</p>
    </footer>
  );
};

export default Footer;


