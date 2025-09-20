import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// fallback sample images (only used when memory folder is empty)
const sampleImages = [
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=1400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501769214405-9b6a6b1b8f3f?w=1400&q=60&auto=format&fit=crop",
];

const MemoryLane: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const [isPaused, setPaused] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  // dynamically load any images placed in src/assets/memory using Vite's glob
  useEffect(() => {
    try {
      // Load multiple image formats from memory folder
      const pngModules = import.meta.glob("../assets/memory/*.png", { eager: true });
      const jpgModules = import.meta.glob("../assets/memory/*.jpg", { eager: true });
      const jpegModules = import.meta.glob("../assets/memory/*.jpeg", { eager: true });
      const heicModules = import.meta.glob("../assets/memory/*.heic", { eager: true });

      const allModules = { ...pngModules, ...jpgModules, ...jpegModules, ...heicModules };

      const loaded = Object.values(allModules)
        .map((m: unknown) => (m && (m as { default?: string }).default) || m)
        .filter(Boolean) as string[];

      if (loaded.length) {
        setImages(loaded);
        console.log("✅ Loaded memory images:", loaded);
      } else {
        setImages(sampleImages);
        console.log("⚠️ No memory images found, using samples");
      }
    } catch (e) {
      console.error("❌ Error loading memory images:", e);
      setImages(sampleImages);
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    const run = async () => {
      if (!trackRef.current) return;

      // width of the duplicated track half
      const width = trackRef.current.scrollWidth / 2 || 0;

      // duration scales with width for consistent speed
      const duration = Math.max(12, width / 120);

      while (mounted) {
        if (isPaused) {
          await new Promise((r) => setTimeout(r, 200));
          continue;
        }

        await controls.start({
          x: -width,
          transition: { duration, ease: "linear" },
        });

        controls.set({ x: 0 });
      }
    };

    run();

    return () => {
      mounted = false;
      controls.stop();
    };
  }, [controls, isPaused, images]);

  const items = [...images, ...images]; // duplicate for infinite scroll illusion

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-6">Memory Down the Lane</h3>

        <div
          className="memory-rail overflow-hidden cursor-grab"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            ref={trackRef}
            className="memory-track flex"
            animate={controls}
            drag="x"
            dragElastic={0.08}
            onDragStart={() => setPaused(true)}
            onDragEnd={() => setPaused(false)}
            whileTap={{ cursor: "grabbing" }}
          >
            {items.map((src, i) => (
              <div key={i} className="memory-item flex-shrink-0 p-2">
                <div className="memory-card rounded-2xl shadow-md overflow-hidden">
                  <img
                    src={src}
                    alt={`Memory ${i + 1}`}
                    loading="lazy"
                    className="memory-img w-64 h-40 object-cover"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MemoryLane;
