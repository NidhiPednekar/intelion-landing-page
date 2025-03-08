import React from 'react';
import Navbar from '/components/Navbar';
import Content from '/components/Content';
import Services from '/components/Services';
import Benefits from '/components/Benefits';
import About from '/components/About'; 
import Contact from '/components/Contact';
import Footer from '/components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <About />
      <Services />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;