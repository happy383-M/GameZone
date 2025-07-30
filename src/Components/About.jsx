import React from 'react';

function About() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ color: '#00ffcc', marginBottom: '2rem' }}>About GameZone</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Welcome to <strong style={{ color: '#00ffcc' }}>GameZone</strong> - your ultimate destination for gaming excellence! 
          We are passionate gamers dedicated to bringing you the best gaming experience possible.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          <strong>Our Mission:</strong> To provide gamers worldwide with access to the latest games, 
          exclusive deals, and a community where gaming enthusiasts can connect and thrive.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          <strong>What We Offer:</strong>
        </p>
        <ul style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
          <li>Exclusive game deals with up to 80% off</li>
          <li>Latest releases from top gaming studios</li>
          <li>Multi-platform support (PC, PlayStation, Xbox)</li>
          <li>24/7 customer support</li>
          <li>Secure and fast digital delivery</li>
        </ul>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          <strong>Founded:</strong> 2020<br/>
          <strong>Headquarters:</strong> Gaming District, Digital City<br/>
          <strong>Games Served:</strong> 10,000+ titles
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#00ffcc' }}>
          Join millions of gamers who trust GameZone for their gaming needs!
        </p>
      </div>
    </div>

  )
}

export default About;

