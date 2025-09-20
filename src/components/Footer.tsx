import React from 'react';
import chainChapterLogo from "../assets/Chain Chapter.png";
import bgImage from "../assets/memory/75c09e4a-b09e-4eb0-86e5-60bb1964e9fb.jpg";

const Footer = () => {
  return (
    <footer
      className="relative border-t border-white/10 mt-20 py-12 px-4 overflow-hidden"
      aria-label="Site footer"
    >
      {/* background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          opacity: 0.14,
          filter: 'grayscale(6%) brightness(85%)',
        }}
      />

      {/* subtle gradient overlay to ensure text contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(10,8,15,0.4), rgba(10,8,15,0.7))',
        }}
      />

      <div className="container mx-auto text-center text-gray-300 relative z-20">
        <div className="flex items-center justify-center gap-3 mb-6">
          {/* ✅ Use import for logo instead of hardcoded /src path */}
          <img src={chainChapterLogo} alt="Chain Chapter Logo" className="w-7 h-7" />
          <span className="text-xl font-bold text-white">Chain Chapter</span>
        </div>
        <p className="max-w-3xl mx-auto mb-6">
          Empowering students worldwide through blockchain education, hackathons, seminars, and career opportunities. Building the future of Web3 with student innovation.
        </p>
        <p>&copy; {new Date().getFullYear()} Chain Chapter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
