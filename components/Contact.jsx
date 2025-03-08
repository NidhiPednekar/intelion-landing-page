import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="btn primary-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;