import React, { useState } from 'react';
import { Layout, Server, Database, Cpu } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      default: return <Layout size={20} />;
    }
  };

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Technical Proficiency</span>
          <h2 className="section-title">Skills & <span className="gradient-text">Tech Stack</span></h2>
          <p className="section-description">
            A comprehensive overview of technologies, frameworks, and engineering tools I leverage daily.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="skills-tabs">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`skills-tab-btn ${activeCategory === idx ? 'active' : ''}`}
              onClick={() => setActiveCategory(idx)}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Active Skill Category Card */}
        <div className="skills-display-card glass-card">
          <div className="category-header">
            {getCategoryIcon(skillCategories[activeCategory].icon)}
            <h3>{skillCategories[activeCategory].name}</h3>
          </div>

          <div className="skills-list">
            {skillCategories[activeCategory].skills.map((skill, sIdx) => (
              <div key={sIdx} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tech Badge Pill Grid */}
        <div className="tech-pills-container">
          <span className="pills-label">Core Tools:</span>
          {["React", "Next.js", "TypeScript", "Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Git", "Tailwind", "GraphQL", "Vite"].map((tech, tIdx) => (
            <span key={tIdx} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
