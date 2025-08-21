import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Footer from '../components/Footer';
import "./Contact.css";

const socialLinks = [
  { href: 'https://instagram.com', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: 'https://facebook.com', icon: 'fab fa-facebook-f', label: 'Facebook' },
  { href: 'https://twitter.com', icon: 'fab fa-twitter', label: 'Twitter' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="contact-root">
        <section className="contact-intro fade-slide">
          <h1 className="contact-title">We’d love to hear from you</h1>
        </section>

        <section className="contact-main">
          <form className="contact-form fade-slide" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" className="contact-input" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" className="contact-input" value={form.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" className="contact-input" />
            <textarea name="message" placeholder="Your Message" className="contact-textarea" rows={5} value={form.message} onChange={handleChange} required />
            <button type="submit" className="contact-submit">Send Message</button>
          </form>

          <div className="contact-details fade-slide">
            <div className="contact-detail">
              <FaEnvelope className="contact-icon" />
              <span>hello@tisya.com</span>
            </div>
            <div className="contact-detail">
              <FaPhoneAlt className="contact-icon" />
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-detail">
              <FaMapMarkerAlt className="contact-icon" />
              <span>123, Luxury Lane, Mumbai, India</span>
            </div>
          </div>
        </section>

        {/* <section className="contact-social fade-slide">
          <a href="https://instagram.com" className="contact-social-icon" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://facebook.com" className="contact-social-icon" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://twitter.com" className="contact-social-icon" aria-label="Twitter"><FaTwitter /></a>
        </section> */}

        <section className="contact-note fade-slide">
          <p>Every piece tells a story — let’s start a conversation.</p>
        </section>
      </div>
      <Footer socialLinks={socialLinks} />
    </>
  );
};

export default Contact;