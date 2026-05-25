import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Stats />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
