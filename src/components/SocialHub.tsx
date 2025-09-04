import React from 'react';
import { Instagram, Send, Twitter, Linkedin } from 'lucide-react';

const socialPlatforms = [
  { name: 'Instagram', icon: Instagram, cta: 'Follow Us', color: 'brand-red', link: 'https://www.instagram.com/chain_chapter/?hl=en' },
  { name: 'Telegram', icon: Send, cta: 'Join Channel', color: 'brand-cyan', link: 'https://web.telegram.org/a/#-4846741018' },
  { name: 'Twitter', icon: Twitter, cta: 'Follow Us', color: 'brand-cyan', link: 'https://x.com/CHAIN_CHAPTER' },
  { name: 'LinkedIn', icon: Linkedin, cta: 'Connect', color: 'brand-red', link: 'https://www.linkedin.com/in/chainchapter/' },
];

const SocialHub = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Connect with <span className="text-gradient">Us</span>
          </h2>
          <p className="text-lg text-gray-400">Join the conversation and be part of our growing community.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialPlatforms.map((platform) => (
            <a href={platform.link} key={platform.name} target="_blank" rel="noopener noreferrer" className="group block">
              <div className={`p-8 rounded-2xl border-2 transition-all duration-300 h-full flex flex-col justify-between
                ${platform.color === 'brand-cyan' ? 'border-brand-cyan/40 group-hover:border-brand-cyan/90 group-hover:shadow-neon-cyan' : 'border-brand-red/40 group-hover:border-brand-red/90 group-hover:shadow-neon-red'}
              `}>
                <div>
                  <platform.icon className={`w-12 h-12 mb-4 ${platform.color === 'brand-cyan' ? 'text-brand-cyan' : 'text-brand-red'}`} />
                  <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                </div>
                <p className="font-semibold text-lg mt-6 transition-transform duration-300 group-hover:translate-x-2">
                  {platform.cta} &rarr;
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialHub;
