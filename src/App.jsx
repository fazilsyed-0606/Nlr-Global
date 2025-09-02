import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import Mission from './components/Mission';
import Trust from './components/Trust';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <Mission />
      <Trust />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;