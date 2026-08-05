
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const sponsorLogos = [
  { id: 1, path: '/sponser/1.png' },
  { id: 2, path: '/sponser/2.png' },
  { id: 3, path: '/sponser/3.png' },
  { id: 4, path: '/sponser/4.png' },
  { id: 5, path: '/sponser/5.png' },
];

export const Marquee = () => {
  // Duplicate logos to ensure a smooth infinite scroll
  const displayLogos = [...sponsorLogos, ...sponsorLogos, ...sponsorLogos];

  return (
    <section id="partners" className="py-32 bg-card/5 border-t border-foreground/5 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-code text-primary tracking-[0.4em] uppercase text-xs mb-4 block">Official Partners</span>
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase">OUR SPONSORS</h2>
        </motion.div>
      </div>

      <div className="flex overflow-hidden group select-none">
        <div className="flex animate-marquee group-hover:pause-animation whitespace-nowrap py-10 items-center">
          {displayLogos.map((logo, i) => (
            <div key={`${logo.id}-${i}`} className="mx-8 md:mx-16 flex items-center justify-center transition-all duration-500 grayscale opacity-40 hover:grayscale-0 hover:opacity-100">
              <div className="relative h-16 w-32 md:h-24 md:w-48">
                <Image
                  src={logo.path}
                  alt={`Sponsor ${logo.id}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 192px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="font-code text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
          Fueling Innovation in Indian Hardware. <span className="text-primary cursor-pointer hover:underline">Become a Sponsor →</span>
        </p>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
