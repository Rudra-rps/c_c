import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Opportunities from './components/Opportunities';
import Events from './components/Events';
import MemoryLane from './components/MemoryLane';
import SocialHub from './components/SocialHub';
import Partners from './components/Partners';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Opportunities />
        <MemoryLane />
        <Events />
        <SocialHub />
        <Partners />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}

export default App;
