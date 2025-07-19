import React, { useState } from 'react';
import Footer from '../components/Footer';

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
      <div className="contact-page">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <p>Email: info@rishita.com</p>
          <p>Phone: +1 234 567 8901</p>
          <p>Address: 123 Fashion Ave, Mumbai, India</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          <button type="submit">Send Message</button>
        </form>
        {submitted && <p className="thank-you">Thank you for contacting us! We'll get back to you soon.</p>}
      </div>
      <Footer socialLinks={socialLinks} />
    </>
  );
};

export default Contact; 