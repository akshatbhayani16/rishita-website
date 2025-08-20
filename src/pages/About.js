import React from "react";
import "./About.css";
import Footer from "../components/Footer";
import AboutContentPhoto from "../images/about-content.jpeg";
function About() {
  return (
    <div>
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>Tisya</h1>
          <p>
            Timeless elegance, exquisite craftsmanship.
            <br />
            Discover the story behind our luxury jewellery and purses.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-content-inner">
          <div className="about-content-image">
            <img
              src={AboutContentPhoto}
              alt="Founder"
              className="about-profile-img-rect" // changed class name
            />
          </div>
          <div className="about-content-text">
            <h2 className="about-title">Our Heritage</h2>
            <p className="about-description">
              Tisya is a celebration of artistry and sophistication. Founded
              with a passion for creating exceptional jewellery and purses, our
              brand blends classic design with modern sensibility. Each piece is
              meticulously crafted to reflect luxury, elegance, and
              individuality.
            </p>
            <div className="about-details">
              <div className="about-detail-item">
                <strong>Craftsmanship:</strong> Every item is handcrafted by
                skilled artisans using the finest materials, ensuring unmatched
                quality and attention to detail.
              </div>
              <div className="about-detail-item">
                <strong>Collections:</strong> Explore our curated collections of
                statement jewellery and designer purses, each designed to
                elevate your style for every occasion.
              </div>
              <div className="about-detail-item">
                <strong>Philosophy:</strong> We believe luxury is personal. Our
                bespoke services allow you to create custom pieces that tell
                your unique story.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Sections */}
      <section className="founder-section fade-slide">
        <div className="founder-card">
          <img
            src={AboutContentPhoto}
            alt="Founder"
            className="founder-img-circle"
          />
          <div style={{maxWidth: "680px"}}>
            <h2 className="section-title">Founder’s Story</h2>
            <p className="section-description">
              Inspired by a lifelong love for beauty and detail, Tisya’s founder
              envisioned a brand where every piece tells a story. From humble
              beginnings to a celebrated name in luxury, her journey is marked
              by passion, perseverance, and a commitment to timeless elegance.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section fade-slide">
        <h2 className="section-title">Brand Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <span className="value-icon">💎</span>
            <h3 className="value-title">Authenticity</h3>
            <p className="value-description">
              Genuine materials and honest craftsmanship are at the heart of
              every creation.
            </p>
          </div>
          <div className="value-card">
            <span className="value-icon">🌿</span>
            <h3 className="value-title">Sustainability</h3>
            <p className="value-description">
              Ethical sourcing and responsible practices ensure beauty with
              conscience.
            </p>
          </div>
          <div className="value-card">
            <span className="value-icon">🤍</span>
            <h3 className="value-title">Individuality</h3>
            <p className="value-description">
              Each piece is designed to celebrate your unique style and story.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="craft-section fade-slide">
        <div className="craft-card">
          <h2 className="section-title">Craftsmanship & Philosophy</h2>
          <p className="section-description">
            At Tisya, artistry meets innovation. Our philosophy blends
            traditional techniques with modern design, resulting in pieces that
            are both timeless and contemporary. Every detail is thoughtfully
            considered, ensuring a luxurious experience from creation to
            adornment.
          </p>
        </div>
      </section> */}
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default About;
