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
    <section id="events" className="py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Upcoming <span className="text-gradient">Events</span>
        </h2>
        <p className="text-lg text-gray-400">Don't miss out on our next big thing.</p>
      </div>
      <div className="max-w-5xl mx-auto relative">
        <div className="overflow-hidden rounded-2xl h-[500px]">
          {/* single sliding track to avoid unmount/mount glitches */}
          <motion.div
            className="flex w-full h-full"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          >
            {events.map((ev, idx) => (
              <div key={idx} className="w-full flex-shrink-0 h-full relative">
                <img src={ev.bg} alt={ev.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold mb-4">{ev.title}</h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-300">
                    <div className="flex items-center gap-2"><Calendar size={18} /><span>{ev.date}</span></div>
                    <div className="flex items-center gap-2"><Clock size={18} /><span>{ev.time}</span></div>
                    <div className="flex items-center gap-2"><MapPin size={18} /><span>{ev.location}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-[-20px] md:left-[-30px] bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-[-20px] md:right-[-30px] bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Events;
