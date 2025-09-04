import React from 'react';
import { Award, Mic, BookOpen, Globe, TrendingUp } from 'lucide-react';

const features = [
  { icon: Award, text: 'Official Recognition' },
  { icon: Mic, text: 'Expert Speakers' },
  { icon: BookOpen, text: 'Educational Resources' },
  { icon: Globe, text: 'Global Network' },
  { icon: TrendingUp, text: 'Leadership Experience' },
];

const Ambassador = () => {
  return (
    <section id="application-form" className="py-20 px-4 container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Chain Chapter at <span className="text-gradient">Your Campus</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Lead the Web3 revolution at your university. Become a Campus Ambassador and bring the future of blockchain to your peers.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="glass-card p-6 text-center flex flex-col items-center justify-center transition-all duration-300 hover:border-brand-cyan hover:scale-105">
            <feature.icon className="w-10 h-10 mb-3 text-brand-cyan" />
            <p className="font-semibold">{feature.text}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 border border-brand-purple shadow-2xl shadow-brand-purple/20">
        <h3 className="text-3xl font-bold text-center mb-8">Ambassador Application</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Full Name" id="name" type="text" placeholder="John Doe" />
          <InputField label="Email Address" id="email" type="email" placeholder="john.doe@example.com" />
          <InputField label="Phone Number" id="phone" type="tel" placeholder="+1 234 567 890" />
          <InputField label="University" id="university" type="text" placeholder="University of Innovation" />
          <InputField label="Year of Study" id="year" type="text" placeholder="e.g., 2nd Year" />
          <InputField label="Stream/Major" id="stream" type="text" placeholder="e.g., Computer Science" />
          <div className="md:col-span-2">
            <TextAreaField label="Previous Experience" id="experience" placeholder="Any leadership roles, event organization, etc." />
          </div>
          <div className="md:col-span-2">
            <TextAreaField label="Motivation" id="motivation" placeholder="Why do you want to be a Chain Chapter Ambassador?" />
          </div>
          <div className="md:col-span-2">
            <TextAreaField label="Vision" id="vision" placeholder="What is your vision for the Web3 community at your campus?" />
          </div>
          <div className="md:col-span-2 text-center mt-4">
            <button type="submit" className="px-10 py-4 font-bold text-white rounded-lg btn-gradient transition-all duration-300 hover:scale-105 animate-button-glow">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const InputField = ({ id, label, type, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all duration-300"
      required
    />
  </div>
);

const TextAreaField = ({ id, label, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <textarea
      id={id}
      name={id}
      rows={4}
      placeholder={placeholder}
      className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all duration-300"
      required
    />
  </div>
);

export default Ambassador;
