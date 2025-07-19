import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const contactDetails = [
  { label: 'Phone', value: '+1 234 567 8901', type: 'phone' },
  { label: 'Address', value: '123 Fashion Ave, Mumbai, India', type: 'address' },
  { label: 'Email', value: 'info@rishita.com', type: 'email' },
];

const Footer = ({ socialLinks }) => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-section brand">
        <h2 className="brand-name">Rishita</h2>
        <p className="brand-tagline">Elevate Your Elegance</p>
      </div>
      <div className="footer-section nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer-section contact">
        {contactDetails.map((item, idx) => (
          <div key={idx} className={`contact-item ${item.type}`}>
            <strong>{item.label}:</strong> <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="footer-bottom">
      <div className="social-icons">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Rishita. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
