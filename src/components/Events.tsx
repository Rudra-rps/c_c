import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const events = [
  { title: 'DeFi Deep Dive', date: 'Oct 28, 2025', time: '4:00 PM UTC', location: 'Virtual / Discord', bg: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { title: 'NFT Marketplace Hackathon', date: 'Nov 15, 2025', time: '9:00 AM UTC', location: 'Online', bg: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { title: 'Intro to Smart Contracts', date: 'Dec 02, 2025', time: '6:00 PM UTC', location: 'Virtual / Zoom', bg: 'https://images.pexels.com/photos/593158/pexels-photo-593158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { title: 'Web3 Career Fair', date: 'Dec 10, 2025', time: '2:00 PM UTC', location: 'Online Platform', bg: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? events.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === events.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="events" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
          Upcoming <span className="text-gradient">Events</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-400 px-2">Don't miss out on our next big thing.</p>
      </div>
      <div className="max-w-5xl mx-auto relative px-8 sm:px-12">
        <div className="overflow-hidden rounded-2xl h-[400px] sm:h-[450px] md:h-[500px]">
          {/* single sliding track to avoid unmount/mount glitches */}
          <motion.div
            className="flex w-full h-full"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          >
            {events.map((ev, idx) => (
              <div key={idx} className="w-full flex-shrink-0 h-full relative">
                <img src={ev.bg} alt={ev.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">{ev.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-300">
                    <div className="flex items-center gap-2"><Calendar size={16} className="sm:w-[18px] sm:h-[18px]" /><span>{ev.date}</span></div>
                    <div className="flex items-center gap-2"><Clock size={16} className="sm:w-[18px] sm:h-[18px]" /><span>{ev.time}</span></div>
                    <div className="flex items-center gap-2"><MapPin size={16} className="sm:w-[18px] sm:h-[18px]" /><span>{ev.location}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-2 bg-white/10 p-2 sm:p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors z-10" aria-label="Previous event">
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-2 bg-white/10 p-2 sm:p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors z-10" aria-label="Next event">
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  );
};

export default Events;
