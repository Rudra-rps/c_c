import React, { useState, useRef } from 'react';
import AmbassadorModal from './AmbassadorModal';
import chainChapterLogo from '../assets/Chain Chapter.png';

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openApplication = () => setModalOpen(true);
  const closeApplication = () => setModalOpen(false);

  return (
    <section id="who-we-are" className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-brand-purple/40 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-brand-red/30 blur-[150px] rounded-full"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-8">
          <div className="logo-wrap">
            <img 
              src={chainChapterLogo} 
              alt="Chain Chapter Logo" 
              className="w-30 h-30 md:w-32 md:h-32 logo-animated" 
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 max-w-4xl leading-tight">
          Chain Chapter ⇀ THE N3XT GEN OF <span className="text-gradient">WEB 3 ARCHITECTS</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Join thousands of students in the premier blockchain education community. Participate in hackathons, attend seminars, join webinars, and unlock career opportunities in Web3.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            ref={useRef<HTMLButtonElement | null>(null)}
            onClick={openApplication}
            className="px-8 py-4 font-bold text-white rounded-lg btn-gradient transition-all duration-300 hover:scale-105 hover:shadow-neon-cyan"
          >
            Join Now
          </button>
        </div>
      </div>
  <AmbassadorModal open={modalOpen} onClose={closeApplication} />
    </section>
  );
};

export default Hero;
