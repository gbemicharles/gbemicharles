import React, { useState } from 'react';
import { ExternalLink, Github, Info, X, Check } from 'lucide-react';
import { projectsData, projectCategories } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Featured Work</span>
          <h2 className="section-title">Software & <span className="gradient-text">Web Projects</span></h2>
          <p className="section-description">
            A selection of production-grade web applications, full-stack tools, and AI workstations I've designed and engineered.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-secondary overlay-btn"
                  >
                    <Info size={16} /> Details
                  </button>
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech Badges */}
                <div className="project-tech-tags">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="project-tech-tag font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn primary"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn secondary"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal Popup */}
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                <X size={20} />
              </button>

              <div className="modal-header">
                <span className="modal-category">{selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
              />

              <p className="modal-description">{selectedProject.description}</p>

              <h4 className="modal-subtitle">Key Achievements & Features:</h4>
              <ul className="modal-highlights">
                {selectedProject.highlights.map((h, idx) => (
                  <li key={idx}>
                    <Check size={16} className="check-icon" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="modal-tech-list">
                <h4>Built With:</h4>
                <div className="tech-pills">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="tech-pill font-mono">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-footer">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={18} /> Launch Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <Github size={18} /> View GitHub Repo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
