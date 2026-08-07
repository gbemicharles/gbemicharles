import React from 'react';
import { Award, Code, CheckCircle, Zap, Shield, Globe } from 'lucide-react';
import { personalInfo, statsData } from '../data/portfolioData';
import './About.css';

export default function About() {
  const highlights = [
    {
      icon: <Code className="highlight-icon" />,
      title: "Clean Code & Architecture",
      desc: "Writing maintainable, well-documented, and scalable code structures that team members love to work with."
    },
    {
      icon: <Zap className="highlight-icon" />,
      title: "High Performance",
      desc: "Optimizing web performance, asset delivery, state rendering, and API response speeds for sub-second interactions."
    },
    {
      icon: <Shield className="highlight-icon" />,
      title: "Security & Reliability",
      desc: "Implementing modern security standards, role-based access control, payload encryption, and unit/E2E testing."
    },
    {
      icon: <Globe className="highlight-icon" />,
      title: "Global Remote Collaboration",
      desc: "Experienced working with distributed teams, async workflows, Git best practices, and Agile sprints."
    }
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get to know me</span>
          <h2 className="section-title">About <span className="gradient-text">Gbemicharles</span></h2>
          <p className="section-description">
            Passionate software craftsman bridging intuitive user interfaces with robust backend engineering.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {statsData.map((stat, idx) => (
            <div key={idx} className="stat-card glass-card">
              <h3 className="stat-number gradient-text">
                {stat.value}{stat.suffix}
              </h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bio Details & Key Strengths Grid */}
        <div className="about-grid">
          <div className="about-bio-card glass-card">
            <h3 className="about-bio-title">
              <Award size={22} className="title-icon" /> My Journey & Vision
            </h3>
            <p className="about-text">
              Over the past 6+ years, I have engineered digital products ranging from real-time analytics platforms to AI developer workspaces and high-converting e-commerce web applications.
            </p>
            <p className="about-text">
              I believe great software is not just about lines of code—it’s about creating impactful, responsive, and delightful user experiences while maintaining bulletproof system architecture under the hood.
            </p>
            
            <div className="about-location-badge">
              <CheckCircle size={18} className="check-icon" />
              <span>Based in {personalInfo.location}</span>
            </div>
          </div>

          <div className="about-highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card glass-card">
                <div className="highlight-header">
                  {item.icon}
                  <h4>{item.title}</h4>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
