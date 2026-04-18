import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="section-title">About <span>Me</span></h1>
        <p className="section-subtitle">My story, background and what drives me</p>

        <div className="about-grid">
          <div className="about-text">
            <p>I'm a BSc Computer Science and Statistics graduate from Nelson Mandela University, Gqeberha. I'm passionate about building software that solves real problems — from secure desktop applications to intelligent data-driven systems.</p>
            <br />
            <p>During my studies I was recognised with the Scholar Merit Award in both my first and second year, and was invited to join the Golden Key International Honour Society for academic excellence.</p>
            <br />
            <p>I also served as a Student Assistant in the Computer Science department, where I facilitated lab sessions and provided one-on-one support to first-year students — an experience that sharpened both my technical and communication skills.</p>
            <br />
            <p>Outside of coding I'm passionate about the intersection of data science and software engineering — which is why I'm actively expanding into machine learning and Python alongside my Java and web development work.</p>

            <div className="about-buttons">
              <a href="/DerrickLoveCV.pdf" download className="btn-primary">
                Download CV
              </a>
              <a href="https://linkedin.com/in/derrick-love-384a1a281"
                target="_blank"
                rel="noreferrer"
                className="btn-outline">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="about-cards">
            <div className="card">
              <h3>🎓 Education</h3>
              <p>BSc Computer Science & Statistics</p>
              <p className="card-sub">Nelson Mandela University — 2023 to 2025</p>
            </div>
            <div className="card">
              <h3>🏆 Awards</h3>
              <p>Scholar Merit Award — Year 1 & 2</p>
              <p className="card-sub">Golden Key International Honour Society</p>
            </div>
            <div className="card">
              <h3>💼 Experience</h3>
              <p>Student Assistant — CS Department</p>
              <p className="card-sub">Feb 2024 to Oct 2024</p>
            </div>
            <div className="card">
              <h3>📍 Location</h3>
              <p>Gqeberha, South Africa</p>
              <p className="card-sub">Open to remote opportunities</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;