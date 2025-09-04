import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-3xl text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay <span className="text-gradient">Updated</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Subscribe to our newsletter to get the latest news on events, hackathons, and opportunities.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all duration-300"
            required
          />
          <button type="submit" className="px-8 py-3 font-bold text-white rounded-lg btn-gradient transition-all duration-300 hover:scale-105">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
