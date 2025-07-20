import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Twitter Data Sentiment Analysis using Multiple ML Classifications',
    summary: 'Built a high-accuracy sentiment classifier for Twitter data using advanced NLP and ML techniques.',
    tools: ['Python', 'NLTK', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    github: 'https://github.com/VallurAbhignan/twitterdatasentiment'
  },
  {
    id: 2,
    title: 'A Framework for Social Media Reach Analysis',
    summary: 'Developed a deep learning pipeline to predict and optimize Instagram post engagement.',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Regex', 'JSON', 'BiLSTM'],
    github: 'https://github.com/VallurAbhignan/social-media-reach-analysis'
  },
  {
    id: 3,
    title: 'Customer Churn Prediction',
    summary: 'Created a predictive model to identify and reduce customer churn for telecom businesses.',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter Notebook'],
    github: 'https://github.com/VallurAbhignan/customer-churn-prediction'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          Projects
        </motion.h2>
        <motion.div className="projects-grid" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          {projects.map((project, idx) => (
            <motion.div key={project.id} className="project-card card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.6 }} viewport={{ once: true }}>
              <div className="project-content structured">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-summary">{project.summary}</div>
                  <div className="project-technologies">
                    {project.tools.map((tool) => (
                      <span key={tool} className="tech-tag">{tool}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links align-bottom">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="View on GitHub">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 