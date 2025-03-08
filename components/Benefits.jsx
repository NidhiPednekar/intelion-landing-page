import React from 'react';

function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <h2>Why Choose Intelion?</h2>
        <div className="benefit-list">
          <div className="benefit-item">
            <img src="/eff.jpg" alt="Efficiency Icon" />
            <p>Enhanced Efficiency</p>
          </div>
          <div className="benefit-item">
            <img src="/solutions.png" alt="Scalability Icon" />
            <p>Scalable Solutions</p>
          </div>
          <div className="benefit-item">
            <img src="/tech.jpg" alt="Innovation Icon" />
            <p>Innovative Technology</p>
          </div>
          <div className="benefit-item">
            <img src="/support.jpg" alt="Support Icon" />
            <p>Dedicated Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
