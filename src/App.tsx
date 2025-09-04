import React from 'react';
import Hero from './components/Hero';
import Opportunities from './components/Opportunities';
import Events from './components/Events';
import SocialHub from './components/SocialHub';
import InstagramClips from './components/InstagramClips';
import Newsletter from './components/Newsletter';
import Ambassador from './components/Ambassador';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Hero />
      <Opportunities />
      <Events />
  <InstagramClips />
      <SocialHub />
      <Newsletter />
      <Ambassador />
      <Footer />
    </main>
  );
}

export default App;
