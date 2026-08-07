import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <Code2 className="logo-icon" />
            <span>Gbemicharles<span className="logo-accent">.dev</span></span>
          </a>
          <p className="footer-tagline">{personalInfo.tagline}</p>
        </div>

        <div className="footer-copy">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. Built with <Heart size={14} className="heart-icon" /> React & Vanilla CSS.
          </p>
        </div>

        <button onClick={scrollToTop} className="scroll-top-btn" title="Back to Top">
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
