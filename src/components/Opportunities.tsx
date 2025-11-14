import React from 'react';
import { Zap, Mic, Briefcase, Users, BookOpen, Wrench } from 'lucide-react';

const opportunities = [
  { icon: Zap, title: 'Hackathons & Competitions', description: 'Test your skills and win amazing prizes.' },
  { icon: Mic, title: 'Seminars & Webinars', description: 'Learn from industry leaders and experts.' },
  { icon: Briefcase, title: 'Career Opportunities', description: 'Connect with top companies in the Web3 space.' },
  { icon: Users, title: 'Student Network', description: 'Collaborate with a global community of builders.' },
  { icon: BookOpen, title: 'Educational Resources', description: 'Access curated content and learning paths.' },
  { icon: Wrench, title: 'Hands-On Events', description: 'Get practical experience with workshops.' },
];

const Opportunities = () => {
  return (
    <section id="what-we-do" className="py-12 sm:py-16 md:py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
            Opportunities at a <span className="text-gradient">Glance</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 px-2">Everything you need to kickstart your Web3 journey.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {opportunities.map((item, index) => (
            <div key={index} className="glass-card p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-brand-cyan group">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-brand-cyan/10 rounded-lg flex-shrink-0">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-cyan" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
