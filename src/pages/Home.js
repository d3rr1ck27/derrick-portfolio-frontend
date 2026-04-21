import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="section home-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hero-greeting">Hi there, I'm</p>
        <h1 className="hero-name">Derrick Love</h1>
        <h2 className="hero-title">
          Full-Stack Developer & <span>Data Science Enthusiast</span>
        </h2>
        <p className="hero-description">
          BSc Computer Science & Statistics graduate from Nelson Mandela University.
          I build intelligent, production-quality software from the ground up.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn-primary">
            View My Work
          </Link>
          <Link to="/contact" className="btn-outline">
            Get In Touch
          </Link>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <h3>3+</h3>
            <p>Projects Built</p>
          </div>
          <div className="stat">
            <h3>62</h3>
            <p>Unit Tests Written</p>
          </div>
          <div className="stat">
            <h3>6</h3>
            <p>Languages</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hero-badge"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="badge-ring">
          <span>DL</span>
        </div>
        <div className="badge-labels">
          <span className="badge-label">Java</span>
          <span className="badge-label">React</span>
          <span className="badge-label">Spring Boot</span>
          <span className="badge-label">Python</span>
          <span className="badge-label">SQL</span>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
