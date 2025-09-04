import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Clip = {
  id: string;
  type: 'instagram' | 'video';
  src: string; // permalink for instagram or video url
  caption?: string;
};

const clips: Clip[] = [
  // raw insta clips
  { id: 'ig-1', type: 'instagram', src: 'https://www.instagram.com/chain_chapter/', caption: 'Recent clip from @chain_chapter' },
  // after that, add more real clips here as needed
  
];

const InstagramClips: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Load Instagram embed script once — when real permalinks are used this will convert blockquotes
    if (document.querySelector('script[src="https://www.instagram.com/embed.js"]')) return;
    const s = document.createElement('script');
    s.src = 'https://www.instagram.com/embed.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  useEffect(() => {
    // When index changes try to process Instagram embeds if the script is loaded
    // @ts-ignore
    if (window.instgrm && typeof window.instgrm.Embeds?.process === 'function') {
      // @ts-ignore
      window.instgrm.Embeds.process();
    }
  }, [index]);

  const prev = () => setIndex((i) => (i === 0 ? clips.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === clips.length - 1 ? 0 : i + 1));

  return (
    <section className="py-20 px-4">
  {/* top heading removed to avoid duplicating the Events section title */}

      <div className="max-w-4xl mx-auto relative">
        {/* Gradient border + inner card for neon/glass effect */}
        <div className="rounded-3xl p-1 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 shadow-neon overflow-visible">
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 flex items-center justify-center text-black font-bold">CC</div>
                <div>
                  <div className="font-semibold">@chain_chapter</div>
                  <div className="text-sm text-gray-400">Latest clips & reels</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={prev} className="bg-white/5 hover:bg-white/10 p-2 rounded-full">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={next} className="bg-white/5 hover:bg-white/10 p-2 rounded-full">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="w-full h-[580px] md:h-[500px] rounded-xl overflow-hidden bg-black flex items-center justify-center border border-white/5">
              {clips[index].type === 'video' ? (
                <video
                  src={clips[index].src}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                // Instagram embed: when you replace src with a post permalink this will render the embed
                <div className="w-full h-full flex items-center justify-center overflow-auto p-4 bg-gradient-to-b from-black/70 to-black/50">
                  <blockquote className="instagram-media" data-instgrm-permalink={clips[index].src} data-instgrm-version="14" style={{ width: '100%' }}>
                    <a href={clips[index].src} target="_blank" rel="noopener noreferrer">Open on Instagram</a>
                  </blockquote>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-300">{clips[index].caption}</p>
              <div className="flex items-center gap-2">
                {clips.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to clip ${i + 1}`}
                    className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/20'} transition-all`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramClips;
