import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Languages',
    icon: '💻',
    skills: ['Java', 'JavaScript', 'Python', 'R', 'C#', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React', 'HTML', 'CSS', 'JavaFX', 'FXML'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Spring Boot', 'REST APIs', 'Maven', 'JPA', 'Hibernate'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'SQLite', 'JDBC', 'pgAdmin'],
  },
  {
    category: 'Testing',
    icon: '🧪',
    skills: ['JUnit 5', 'Mockito', 'Unit Testing', 'TDD'],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code', 'Maven', 'npm'],
  },
  {
    category: 'Data Science',
    icon: '📊',
    skills: ['scikit-learn', 'pandas', 'NumPy', 'Statistics', 'ML Algorithms'],
  },
  {
    category: 'Soft Skills',
    icon: '🤝',
    skills: ['Teaching & Mentoring', 'Problem Solving', 'Communication', 'Team Collaboration'],
  },
];

function Skills() {
  return (
    <div className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="section-title">My <span>Skills</span></h1>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              className="skill-card card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3>{cat.category}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;