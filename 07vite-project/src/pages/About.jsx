import React from 'react'
import "./About.css";


function About() {
  return (
    <div className="about-section">
      <div className="about-content">
        <img src="https://picsum.photos/seed/company/300/200" alt="Company" />
        <div>
          <h2>About Our Company</h2>
          <p>We are a leading provider of quality products serving customers worldwide. Our mission is to deliver reliable and stylish products at affordable prices. Customer satisfaction is our top priority.</p>
          <p>Contact Us:</p>
          <p>Phone: +91-9876543210</p>
          <p>Email: contact@company.com</p>
        </div>
      </div>
    </div>
  );
}

export  default About;


