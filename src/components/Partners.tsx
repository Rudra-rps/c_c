import React from 'react';
import hiveLogo from '../assets/hive_logo.svg';
import finafarmLogo from '../assets/finafarm_logo.svg';

const partners = [
  { name: 'Hive', href: 'https://hive.io', src: hiveLogo },
  { name: 'FinaFarm', href: 'https://finafarm.example', src: finafarmLogo },
];

const Partners: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Our Partners</h3>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-tile"
              aria-label={`Visit ${p.name}`}
            >
              <div className="partner-inner">
                <img src={p.src} alt={p.name} className="partner-logo" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
