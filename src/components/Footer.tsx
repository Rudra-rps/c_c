import React from 'react';
import chainChapterLogo from "../assets/Chain Chapter.png";
import bgImage from "../assets/memory/75c09e4a-b09e-4eb0-86e5-60bb1964e9fb.jpg";

const Footer = () => {
  return (
    <footer
      className="relative border-t border-white/10 mt-12 sm:mt-16 md:mt-20 py-8 sm:py-10 md:py-12 px-4 overflow-hidden"
      aria-label="Site footer"
    >
      {/* background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          opacity: 0.12,
          filter: 'grayscale(6%) brightness(85%)',
        }}
      />

      {/* subtle gradient overlay to ensure text contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(10,8,15,0.5), rgba(10,8,15,0.8))',
        }}
      />

      <div className="container mx-auto text-center text-gray-300 relative z-20 max-w-4xl">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          {/* ✅ Use import for logo instead of hardcoded /src path */}
          <img src={chainChapterLogo} alt="Chain Chapter Logo" className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="text-lg sm:text-xl font-bold text-white">Chain Chapter</span>
        </div>
        <p className="max-w-3xl mx-auto mb-4 sm:mb-6 text-sm sm:text-base px-4">
          Empowering students worldwide through blockchain education, hackathons, seminars, and career opportunities. Building the future of Web3 with student innovation.
        </p>
        <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} Chain Chapter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
