import React from "react";
import "./Collections.css";
import Footer from "../components/Footer";

const products = [
  {
    name: "Diamond Necklace",
    description: "A timeless diamond necklace for every occasion.",
    price: "₹49,999",
    image: "/images/necklace.jpg",
    link: "https://www.amazon.in/",
  },
  {
    name: "Gold Earrings",
    description: "Elegant gold earrings with intricate detailing.",
    price: "₹19,999",
    image: "/images/earrings.jpg",
    link: "https://www.myntra.com/",
  },
  {
    name: "Emerald Bracelet",
    description: "Luxurious emerald bracelet for a touch of glamour.",
    price: "₹29,999",
    image: "/images/bracelet.jpg",
    link: "https://www.amazon.in/",
  },
  {
    name: "Classic Ring",
    description: "Classic gold ring with a modern twist.",
    price: "₹15,999",
    image: "/images/ring.jpg",
    link: "https://www.myntra.com/",
  },
  {
    name: "Pearl Pendant",
    description: "Sophisticated pearl pendant for understated elegance.",
    price: "₹24,999",
    image: "/images/pendant.jpg",
    link: "https://www.amazon.in/",
  },
  {
    name: "Ruby Studs",
    description: "Bold ruby studs to elevate your style.",
    price: "₹21,999",
    image: "/images/studs.jpg",
    link: "https://www.myntra.com/",
  },
];

function Collections() {
  return (
    <div className="collections-root">
      <section className="collections-header fade-slide">
        <h1 className="collections-title">Our Jewellery Collections</h1>
        <p className="collections-subtext">
          Discover timeless pieces crafted with elegance and artistry.
        </p>
      </section>
      <section className="collections-grid-section fade-slide">
        <div className="collections-grid">
          {products.map((product, idx) => (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card"
              key={idx}
            >
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-desc">{product.description}</p>
                <div className="product-bottom">
                  <span className="product-price">{product.price}</span>
                  <span className="product-btn">View</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section style={{ marginTop: "5rem" }}>
        <Footer/>
      </section>
    </div>
  );
}

export default Collections;