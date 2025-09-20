import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ConsultPro</h3>
            <p>Transforming businesses through expert consulting and strategic guidance.</p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Strategic Planning</a></li>
              <li><a href="#services">Operational Excellence</a></li>
              <li><a href="#services">Digital Transformation</a></li>
              <li><a href="#services">Financial Advisory</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><button onClick={() => alert('Careers page coming soon!')} className="footer-button">Careers</button></li>
              <li><button onClick={() => alert('Privacy Policy coming soon!')} className="footer-button">Privacy Policy</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>hello@consultpro.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Business Ave, Suite 100<br/>New York, NY 10001</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 ConsultPro. All rights reserved.</p>
            <button onClick={scrollToTop} className="back-to-top">
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;