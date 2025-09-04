import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20 py-12 px-4">
      <div className="container mx-auto text-center text-gray-400">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img src="/src/assets/Chain Chapter.png" alt="Chain Chapter Logo" className="w-7 h-7" />
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
