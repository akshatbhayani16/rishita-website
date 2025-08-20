import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const contactDetails = [
  { label: 'Phone', value: '+1 234 567 8901', type: 'phone' },
  { label: 'Address', value: '123 Fashion Ave, Mumbai, India', type: 'address' },
  { label: 'Email', value: 'info@rishita.com', type: 'email' },
];

const Footer = ({ socialLinks }) => (
  <footer className="footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <span className="footer-logo">Tisya</span>
        <p className="footer-tagline">Luxury Jewellery & Purses</p>
      </div>
      <nav className="footer-nav">
        <Link to="/" className="footer-link">Home</Link>
        <Link to="/about" className="footer-link">About</Link>
        <Link to="/products" className="footer-link">Products</Link>
        <Link to="/contact" className="footer-link">Contact</Link>
      </nav>
      <div className="footer-social">
        <a href="https://instagram.com" className="footer-icon" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" className="footer-icon" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" className="footer-icon" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://pinterest.com" className="footer-icon" aria-label="Pinterest">
          <FaPinterestP />
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Tisya. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
