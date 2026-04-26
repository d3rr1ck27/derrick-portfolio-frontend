import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'FinTrack',
    description: 'A full-featured personal finance desktop application allowing users to track income and expenses, manage category budgets, and visualise spending patterns through interactive charts.',
    tech: ['Java', 'JavaFX', 'SQLite', 'BCrypt', 'JUnit 5', 'Maven'],
    github: 'https://github.com/d3rr1ck27/FinTrack',
    live: null,
    status: 'Completed',
  },
  {
    title: 'Portfolio Website',
    description: 'A full-stack personal portfolio website built with React and Spring Boot, featuring a REST API backend, PostgreSQL database, and deployed to the cloud.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'JavaScript', 'REST API'],
    github: 'https://github.com/d3rr1ck27',
    live: null,
    status: 'Completed',
  },
  {
    {
    title: 'SA Youth NEET Risk Predictor',
    description: 'Machine learning dashboard predicting youth unemployment risk across South Africa using real QLFS government microdata. Features province-level risk analysis, demographic breakdowns, and data-driven factor explanations.',
    tech: ['Python', 'XGBoost', 'Streamlit', 'pandas', 'scikit-learn', 'Plotly'],
    github: 'https://github.com/d3rr1ck27/sa-youth-unemployment-model',
    live: 'https://sa-youth-unemployment-model-shxlmrm5pckbqkpdxx5hv5.streamlit.app/',
    status: 'Live',
}
  },
];

function Projects() {
  return (
    <div className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="section-title">My <span>Projects</span></h1>
        <p className="section-subtitle">Things I've built and things I'm building</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
                    Live Demo
                  </a>
                )}
                {!project.github && !project.live && (
                  <span className="coming-soon-text">Coming Soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
