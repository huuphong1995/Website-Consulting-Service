import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About ConsultPro</h2>
            <p className="about-description">
              With over 15 years of experience in business consulting, we specialize in 
              helping companies navigate complex challenges and achieve sustainable growth. 
              Our team of expert consultants brings deep industry knowledge and proven 
              methodologies to every project.
            </p>
            <div className="stats">
              <div className="stat-item">
                <h3>200+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>95%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="placeholder-image">
              <span>Our Team</span>
            </div>
          </div>
        </div>
        
        <div className="values">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <h4>Excellence</h4>
              <p>We deliver exceptional results that exceed expectations</p>
            </div>
            <div className="value-item">
              <h4>Innovation</h4>
              <p>We embrace cutting-edge solutions and creative thinking</p>
            </div>
            <div className="value-item">
              <h4>Integrity</h4>
              <p>We maintain the highest standards of professionalism and ethics</p>
            </div>
            <div className="value-item">
              <h4>Partnership</h4>
              <p>We build long-term relationships based on trust and collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;