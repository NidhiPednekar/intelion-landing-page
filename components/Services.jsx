import React from 'react';

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="/service.avif" alt="Managed Services Icon" />
            <h3>Managed Services</h3>
            <p>Free up your internal resources to focus on the business by letting us handle day-to-day support services, management, and monitoring of your IT.</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
          <div className="service-card">
            <img src="/consult.png" alt="IT Consulting Icon" />
            <h3>IT Consulting & Advisory</h3>
            <p>Our expert IT consultants provide strategic guidance and actionable insights to optimize your technology investments and achieve your business objectives.</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
           <div className="service-card">
            <img src="/security.avif" alt="Cyber Security Icon" />
            <h3>Cyber Security</h3>
            <p>Protect your valuable data and systems with our comprehensive cyber security solutions, designed to mitigate risks and ensure business continuity.</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
          <div className="service-card">
            <img src="/webdev.jpg" alt="Web Development Icon" />
            <h3>Web Development</h3>
            <p>Establish an impactful online presence with our web development services, designed to reach your target audience effectively and drive business growth.</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
          <div className="service-card">
            <img src="/mobdev.png" alt="Mobile Development Icon" />
            <h3>Mobile Development</h3>
            <p>Create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms to engage your customers on the go.</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
          <div className="service-card">
            <img src="/cloud.png" alt="Cloud Services Icon" />
            <h3>Cloud Services</h3>
            <p>Leverage the power of the cloud with our comprehensive cloud services, enabling scalability, flexibility, and cost-efficiency for your business operations.</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
