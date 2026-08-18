import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal, Sparkles, Github, Mail, Send, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import './Hero.css';

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = personalInfo.typingPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % personalInfo.typingPhrases.length);
      } else {
        setText(
          isDeleting
            ? currentPhrase.substring(0, text.length - 1)
            : currentPhrase.substring(0, text.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  const [tonPrice, setTonPrice] = useState(6.85);

  useEffect(() => {
    const priceInterval = setInterval(() => {
      setTonPrice((prev) => {
        const delta = (Math.random() - 0.5) * 0.08;
        return parseFloat((prev + delta).toFixed(2));
      });
    }, 10000);
    return () => clearInterval(priceInterval);
  }, []);

  const handleCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="hero-section" id="hero">
      {/* Background Decorative Glow Circles */}
      <div className="glow-circle glow-circle-1 animate-pulse-glow" />
      <div className="glow-circle glow-circle-2 animate-pulse-glow" />

      <div className="container hero-container">
        {/* Left Column: Headline & Intro */}
        <div className="hero-content">
          <div className="hero-status-row">
            <div className="status-badge">
              <span className="status-dot" />
              <span className="status-text">{personalInfo.status}</span>
            </div>

            <div className="web3-ticker">
              <span className="ticker-item">
                <span className="ticker-label">TON Network:</span>
                <span className="ticker-val success">Optimal</span>
              </span>
              <span className="ticker-divider">|</span>
              <span className="ticker-item">
                <span className="ticker-label">Gas Fee:</span>
                <span className="ticker-val text-cyan">Low (0.003 TON)</span>
              </span>
              <span className="ticker-divider">|</span>
              <span className="ticker-item">
                <span className="ticker-label">TON Price:</span>
                <span className="ticker-val font-mono">${tonPrice}</span>
              </span>
            </div>
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="hero-typing-container">
            <span className="typing-prefix">I am a </span>
            <span className="typing-text">{text}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-bio">{personalInfo.tagline}</p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch <Mail size={18} />
            </a>
            <a href={personalInfo.resumeUrl} download="Gbemicharles_Resume.pdf" onClick={handleCelebration} className="btn btn-outline celebration-btn" title="Download Resume">
              <Download size={18} /> Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-icon-btn" title="GitHub">
              <Github size={20} />
            </a>
            <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="social-icon-btn" title="Twitter / X">
              <Twitter size={20} />
            </a>
            <a href={personalInfo.telegram} target="_blank" rel="noreferrer" className="social-icon-btn" title="Telegram">
              <Send size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="social-icon-btn" title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Code Card / Floating Dev Badge */}
        <div className="hero-visual">
          <div className="hero-code-card glass-card animate-float">
            <div className="code-card-header">
              <div className="mac-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="code-card-title">
                <Terminal size={14} /> developer.ts
              </div>
            </div>
            <div className="code-card-body font-mono">
              <p><span className="keyword">const</span> <span className="variable">developer</span> = &#123;</p>
              <p className="indent"><span className="property">name</span>: <span className="string">"{personalInfo.name}"</span>,</p>
              <p className="indent"><span className="property">role</span>: <span className="string">"Senior Full-Stack Engineer"</span>,</p>
              <p className="indent"><span className="property">location</span>: <span className="string">"Remote Worldwide"</span>,</p>
              <p className="indent"><span className="property">coreTech</span>: [</p>
              <p className="indent-2"><span className="string">"React"</span>, <span className="string">"Node.js"</span>, <span className="string">"TypeScript"</span>,</p>
              <p className="indent-2"><span className="string">"PostgreSQL"</span>, <span className="string">"AWS"</span>, <span className="string">"Docker"</span></p>
              <p className="indent">],</p>
              <p className="indent"><span className="property">availableForHire</span>: <span className="boolean">true</span></p>
              <p>&#125;;</p>
              <br />
              <p><span className="comment">// Built to deliver clean, scalable software</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
