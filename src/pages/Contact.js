import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
     const response = await fetch('https://derrick-portfolio-backend-production.up.railway.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="section-title">Get In <span>Touch</span></h1>
        <p className="section-subtitle">Have an opportunity or just want to connect?</p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>I'm actively looking for junior developer opportunities — remote or based in South Africa. Feel free to reach out about any opportunities, collaborations, or just to connect.</p>

            <div className="contact-details">
              <div className="contact-item">
                <span>📧</span>
                <a href="mailto:derricklove2704@gmail.com">derricklove2704@gmail.com</a>
              </div>
              <div className="contact-item">
                <span>📍</span>
                <p>Gqeberha, South Africa</p>
              </div>
              <div className="contact-item">
                <span>💼</span>
                <a href="https://linkedin.com/in/derrick-love-384a1a281"
                  target="_blank"
                  rel="noreferrer">
                  LinkedIn Profile
                </a>
              </div>
              <div className="contact-item">
                <span>🐙</span>
                <a href="https://github.com/d3rr1ck27"
                  target="_blank"
                  rel="noreferrer">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Job opportunity / Collaboration"
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="5"
                required
              />
            </div>

            <button type="submit" className="btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="form-success">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="form-error">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
