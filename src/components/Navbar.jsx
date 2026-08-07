import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Zap, Code2 } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ currentTheme, setTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const extensions = ['.dev', '.ton', '.org', '.com'];
  const [extIndex, setExtIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const extInterval = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setExtIndex((prev) => (prev + 1) % extensions.length);
        setFadeClass('fade-in');
      }, 300);
    }, 3500);
    return () => clearInterval(extInterval);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const cycleTheme = () => {
    if (currentTheme === 'dark') setTheme('light');
    else if (currentTheme === 'light') setTheme('cyberpunk');
    else setTheme('dark');
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#" className="navbar-logo">
          <Code2 className="logo-icon" />
          <span className="logo-text">
            Gbemicharles<span className={`logo-accent ${fadeClass}`}>{extensions[extIndex]}</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="navbar-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="navbar-actions">
          {/* Theme Switcher Button */}
          <button
            onClick={cycleTheme}
            className="theme-toggle-btn"
            title={`Current Theme: ${currentTheme.toUpperCase()} (Click to switch)`}
          >
            {currentTheme === 'dark' && <Moon size={18} />}
            {currentTheme === 'light' && <Sun size={18} />}
            {currentTheme === 'cyberpunk' && <Zap size={18} className="cyber-glow" />}
            <span className="theme-name">{currentTheme}</span>
          </button>

          {/* Hire Me CTA */}
          <a href="#contact" className="btn btn-primary nav-cta">
            Hire Me
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
