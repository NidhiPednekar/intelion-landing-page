import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

function Content() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Empowering Your Business with Innovative IT & SaaS Solutions.</h1>
        <p>Intelion delivers scalable SaaS products and tailored IT services to drive your digital transformation.</p>
        <div className="hero-buttons">
          <Link 
            to="services" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}
            className="btn primary-btn"
          >
            Explore Services
          </Link>
          <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}
            className="btn secondary-btn"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Content;