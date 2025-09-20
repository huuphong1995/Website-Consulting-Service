import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      title: "Strategic Planning",
      description: "Develop comprehensive business strategies that align with your vision and drive sustainable growth.",
      features: ["Market Analysis", "Competitive Intelligence", "Growth Roadmaps", "Risk Assessment"]
    },
    {
      title: "Operational Excellence",
      description: "Optimize your operations to improve efficiency, reduce costs, and enhance productivity.",
      features: ["Process Optimization", "Performance Metrics", "Quality Management", "Resource Planning"]
    },
    {
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge technology solutions and digital strategies.",
      features: ["Technology Assessment", "Digital Strategy", "Implementation Support", "Change Management"]
    },
    {
      title: "Financial Advisory",
      description: "Expert financial guidance to help you make informed decisions and maximize profitability.",
      features: ["Financial Analysis", "Budget Planning", "Investment Strategy", "Cost Optimization"]
    },
    {
      title: "Organizational Development",
      description: "Build stronger teams and improve organizational culture for better performance.",
      features: ["Team Building", "Leadership Development", "Culture Assessment", "Training Programs"]
    },
    {
      title: "Market Entry",
      description: "Navigate new markets successfully with our comprehensive market entry strategies.",
      features: ["Market Research", "Entry Strategy", "Regulatory Guidance", "Partnership Development"]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive consulting solutions tailored to your business needs
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <div className="icon-placeholder">
                  {service.title.charAt(0)}
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;