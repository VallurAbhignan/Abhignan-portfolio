import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaCuttlefish, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiGooglecolab, SiJupyter } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'C++', icon: <FaCuttlefish /> },
        { name: 'C', icon: <FaCuttlefish /> },
        { name: 'SQL', icon: <FaDatabase /> },
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'GitHub', icon: <FaGitAlt /> },
        { name: 'Google Colab', icon: <SiGooglecolab /> },
        { name: 'Jupyter Notebook', icon: <SiJupyter /> },
       ]
    },
    {
      title: 'Data & ML Libraries',
      skills: [
        { name: 'Pandas', icon: <SiPandas /> },
        { name: 'NumPy', icon: <SiNumpy /> },
        { name: 'Scikit-learn', icon: <SiScikitlearn /> },
        { name: 'TensorFlow', icon: <SiTensorflow /> },
    
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          Skills & Technologies
        </motion.h2>
        <motion.div className="skills-content" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          {skillCategories.map((category, idx) => (
            <motion.div key={category.title} className="skill-category" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.2, duration: 0.8 }} viewport={{ once: true }}>
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 