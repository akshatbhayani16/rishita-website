import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="home-root">
      {/* Hero Banner */}
      <section className="home-hero">
        <div className="hero-bg" />
        <div className="hero-content fade-slide">
          <h1 className="hero-title">Timeless Jewellery, Crafted with Elegance</h1>
          <p className="hero-tagline">
            Discover exquisite pieces that celebrate your unique story.
          </p>
          <Link to="/collections" className="hero-cta">Shop Now</Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="collections-section fade-slide">
        <h2 className="section-title">Featured Collections</h2>
        <div className="collections-grid">
          <Link to="/collections/necklaces" className="collection-card">
            <img src="/images/collection-necklaces.jpg" alt="Necklaces" />
            <span className="collection-name">Necklaces</span>
          </Link>
          <Link to="/collections/earrings" className="collection-card">
            <img src="/images/collection-earrings.jpg" alt="Earrings" />
            <span className="collection-name">Earrings</span>
          </Link>
          <Link to="/collections/bracelets" className="collection-card">
            <img src="/images/collection-bracelets.jpg" alt="Bracelets" />
            <span className="collection-name">Bracelets</span>
          </Link>
          <Link to="/collections/rings" className="collection-card">
            <img src="/images/collection-rings.jpg" alt="Rings" />
            <span className="collection-name">Rings</span>
          </Link>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bestsellers-section fade-slide">
        <h2 className="section-title">Best Sellers</h2>
        <div className="bestsellers-grid">
          <div className="bestseller-card">
            <img src="/images/bestseller1.jpg" alt="Diamond Necklace" />
            <div className="bestseller-info">
              <span className="bestseller-name">Diamond Necklace</span>
              <Link to="/product/1" className="bestseller-cta">View</Link>
            </div>
          </div>
          <div className="bestseller-card">
            <img src="/images/bestseller2.jpg" alt="Gold Earrings" />
            <div className="bestseller-info">
              <span className="bestseller-name">Gold Earrings</span>
              <Link to="/product/2" className="bestseller-cta">View</Link>
            </div>
          </div>
          <div className="bestseller-card">
            <img src="/images/bestseller3.jpg" alt="Emerald Ring" />
            <div className="bestseller-info">
              <span className="bestseller-name">Emerald Ring</span>
              <Link to="/product/3" className="bestseller-cta">View</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="values-section fade-slide">
        <h2 className="section-title">Brand Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <span className="value-icon">🛠️</span>
            <h3 className="value-title">Craftsmanship</h3>
            <p className="value-description">Meticulous artistry in every detail.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">✨</span>
            <h3 className="value-title">Elegance</h3>
            <p className="value-description">Timeless style for every occasion.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🤍</span>
            <h3 className="value-title">Empowerment</h3>
            <p className="value-description">Designed to celebrate your unique story.</p>
          </div>
        </div>
      </section>

      {/* Instagram / Lifestyle Gallery */}
      <section className="gallery-section fade-slide">
        <h2 className="section-title">Lifestyle Gallery</h2>
        <div className="gallery-grid">
          <img src="/images/gallery1.jpg" alt="Jewellery Lifestyle 1" className="gallery-img" />
          <img src="/images/gallery2.jpg" alt="Jewellery Lifestyle 2" className="gallery-img" />
          <img src="/images/gallery3.jpg" alt="Jewellery Lifestyle 3" className="gallery-img" />
          <img src="/images/gallery4.jpg" alt="Jewellery Lifestyle 4" className="gallery-img" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;