import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Transform Your Business with Expert Consulting</h1>
          <p className="hero-subtitle">
            We help businesses achieve their goals through strategic consulting, 
            operational excellence, and innovative solutions tailored to your needs.
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToContact} className="btn btn-primary">Get Started</button>
            <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} 
                    className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">
            <span>Professional Consulting Services</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;