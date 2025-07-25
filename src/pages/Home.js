import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from '../components/Footer';

const featured = [
  {
    title: 'Signature Purses',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Elegant Jewellery',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Evening Clutches',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
  },
];

const products = [
  {
    name: 'Elegant Leather Purse',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    description: 'Handcrafted leather purse with gold accents.'
  },
  {
    name: 'Classic Pearl Necklace',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    description: 'Timeless pearl necklace for every occasion.'
  },
  {
    name: 'Designer Clutch',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    description: 'Chic clutch for evening outings.'
  }
];

const socialLinks = [
  { href: 'https://instagram.com', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: 'https://facebook.com', icon: 'fab fa-facebook-f', label: 'Facebook' },
  { href: 'https://twitter.com', icon: 'fab fa-twitter', label: 'Twitter' },
];

const Home = () => (
  <div className="home-root">
    {/* Hero Section */}
    <section className="home-hero-modern">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="brand-title">Rishita</h1>
        <p className="brand-tagline">Where Fashion Meets Timeless Elegance</p>
        <Link to="/products" className="hero-btn-modern">Shop Now</Link>
      </div>
    </section>

    {/* About Us Section - Modern, Fashion-Heavy */}
    <section className="about-summary-section about-modern">
      <div className="about-modern-inner">
        <div className="about-modern-image">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="About Rishita" />
        </div>
        <div className="about-modern-content">
          <h2>About Us</h2>
          <p>Rishita is a luxury brand specializing in exquisite purses and jewellery. Our journey began with a passion for timeless design and a commitment to quality craftsmanship. Each piece is thoughtfully created to add elegance and sophistication to your style. We believe in empowering individuals through unique accessories that tell a story.</p>
          <Link to="/about" className="about-link">Learn More</Link>
        </div>
      </div>
    </section>

    {/* Discover Section */}
    <section className="discover-section discover-modern">
      <h2>Discover Our World</h2>
      <p className="brand-story">
        At Rishita, we blend artistry and craftsmanship to create accessories that define luxury. Our purses and jewellery are designed for those who appreciate sophistication and individuality. Step into a world where every detail tells a story.
      </p>
      <div className="featured-grid">
        {featured.map((item, idx) => (
          <div className="featured-card featured-modern" key={idx}>
            <img src={item.image} alt={item.title} />
            <div className="featured-title">{item.title}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Footer Section */}
    <Footer socialLinks={socialLinks} />
  </div>
);

export default Home; 