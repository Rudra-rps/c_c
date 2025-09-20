import React from 'react';

const AmbassadorForm: React.FC = () => {
  return (
  <div className="w-full glass-card p-4 md:p-6 border border-brand-purple shadow-2xl shadow-brand-purple/20">
      <h3 className="text-3xl font-bold text-center mb-6">Ambassador Application</h3>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <div className="md:col-span-2 text-center mt-2">
          <button type="submit" className="px-8 py-3 font-bold text-white rounded-lg btn-gradient transition-all duration-300 hover:scale-105">
            Submit Application
          </button>
        </div>
      </form>
    </div>
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

export default AmbassadorForm;
