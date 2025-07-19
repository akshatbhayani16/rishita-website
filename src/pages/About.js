import React from 'react';
import Footer from '../components/Footer';

const socialLinks = [
  { href: 'https://instagram.com', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: 'https://facebook.com', icon: 'fab fa-facebook-f', label: 'Facebook' },
  { href: 'https://twitter.com', icon: 'fab fa-twitter', label: 'Twitter' },
];

const About = () => (
  <>
    <div className="about-page">
      <h2>About Rishita</h2>
      <p>Rishita is a luxury brand specializing in exquisite purses and jewellery. Our journey began with a passion for timeless design and a commitment to quality craftsmanship. Each piece is thoughtfully created to add elegance and sophistication to your style.</p>
      <p>We believe in empowering individuals through unique accessories that tell a story. Our values are rooted in authenticity, creativity, and customer satisfaction.</p>
    </div>
    <Footer socialLinks={socialLinks} />
  </>
);

export default About; 