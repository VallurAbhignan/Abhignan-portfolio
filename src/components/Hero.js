import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Hero.css';
import avatar from '../assets/Cartoon-Avatar-Transparent.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p className="hero-greeting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
              Hello, I'm
            </motion.p>
            <motion.h1 className="hero-name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
              Vallur Abhignan
            </motion.h1>
            <motion.h2 className="hero-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
              Aspiring Data Scientist Role 
            </motion.h2>
            <motion.p className="hero-description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
              Hyderabad, India
            </motion.p>
           
          </motion.div>
        </div>
        <motion.div className="hero-image" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
          <div className="hero-avatar shadcn-avatar">
            <img src={avatar} alt="Abhignan Avatar" className="avatar-face" />
          </div>
        </motion.div>
        <motion.div className="hero-social" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
          <a href="mailto:vallurabhignan@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Email">
            <FaEnvelope />
          </a>
          <a href="tel:+919550051388" target="_blank" rel="noopener noreferrer" className="social-link" title="Phone">
            <FaPhone />
          </a>
          <a href="https://www.linkedin.com/in/vallur-abhignan13" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/VallurAbhignan" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 