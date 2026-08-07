import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Career Path</span>
          <h2 className="section-title">Work Experience & <span className="gradient-text">Education</span></h2>
          <p className="section-description">
            A timeline of my professional roles, engineering achievements, and academic background.
          </p>
        </div>

        <div className="timeline">
          {experienceTimeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon-box glass-card">
                {item.type === 'Education' ? (
                  <GraduationCap className="timeline-icon education" size={20} />
                ) : (
                  <Briefcase className="timeline-icon work" size={20} />
                )}
              </div>

              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <span className="timeline-period">
                    <Calendar size={14} /> {item.period}
                  </span>
                  <span className={`timeline-badge ${item.type.toLowerCase()}`}>
                    {item.type}
                  </span>
                </div>

                <h3 className="timeline-role">{item.role}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <p className="timeline-desc">{item.description}</p>

                <div className="timeline-skills">
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="timeline-skill-pill font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
