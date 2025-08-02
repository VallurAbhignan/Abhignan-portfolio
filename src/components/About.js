import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          About Me
        </motion.h2>
        <div className="about-content">
          <motion.div className="about-text" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h3>Personal Summary</h3>
            <p>
              I am a passionate and detail-oriented computer science student with a strong interest in data science, machine learning, and full stack development. I love solving real-world problems with code and am always eager to learn new technologies and collaborate on impactful projects.
            </p>
            <p>
              I enjoy working on projects that combine data analysis, software engineering, and creative thinking. My goal is to contribute to innovative solutions that make a positive impact.
            </p>
          </motion.div>
          <motion.div className="about-stats" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h3>Education</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <h4>Graphic Era University</h4>
                <p>B.Tech in Computer Science</p>
                <p><strong>GPA:</strong> 7.64/10</p>
                <p><strong>Sept 2021 – July 2025</strong></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 