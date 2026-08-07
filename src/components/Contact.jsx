import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Let's Connect</span>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-description">
            Have a project in mind, a software role to fill, or just want to chat tech? Send me a message!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info Panel */}
          <div className="contact-info-card glass-card">
            <h3>Contact Information</h3>
            <p className="contact-info-subtitle">
              Feel free to reach out directly via email or social channels. I usually respond within 24 hours.
            </p>

            <div className="info-items-list">
              <div className="info-item">
                <div className="info-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="info-label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="info-val">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <Globe size={20} />
                </div>
                <div>
                  <span className="info-label">Web Domains</span>
                  <div className="domains-list">
                    <a href="https://gbemicharles.com" target="_blank" rel="noreferrer" className="info-val block-link">gbemicharles.com</a>
                    <a href="https://gbemicharles.org" target="_blank" rel="noreferrer" className="info-val block-link">gbemicharles.org</a>
                    <a href="https://gbemicharles.dev" target="_blank" rel="noreferrer" className="info-val block-link">gbemicharles.dev</a>
                    <a href="https://dns.ton.org/#gbemicharles" target="_blank" rel="noreferrer" className="info-val block-link">gbemicharles.ton</a>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-val">{personalInfo.location}</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="info-label">Availability</span>
                  <span className="info-val">Full-time, Contract, Remote</span>
                </div>
              </div>
            </div>

            <div className="contact-socials-wrapper">
              <span className="info-label">Connect on Socials</span>
              <div className="contact-socials">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-btn" title="GitHub">
                  <Github size={18} />
                </a>
                <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="social-btn" title="Twitter / X">
                  <Twitter size={18} />
                </a>
                <a href={personalInfo.telegram} target="_blank" rel="noreferrer" className="social-btn" title="Telegram">
                  <Send size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="contact-form-card glass-card">
            {submitted && (
              <div className="toast-success animate-float">
                <CheckCircle2 size={20} />
                <span>Message sent successfully! I'll get back to you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Full-time role"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or offer..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary submit-btn"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
