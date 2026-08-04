
"use client"

import React from 'react';
import { motion } from 'framer-motion';

export const Marquee = () => {
  return (
    <section id="partners" className="py-32 bg-[#0B1118]/30 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-code text-primary tracking-[0.4em] uppercase text-xs mb-4 block">Proud Partners</span>
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase">OUR SPONSORS</h2>
        </motion.div>
      </div>

      <div className="flex overflow-hidden group select-none">
        <div className="flex animate-marquee group-hover:pause-animation whitespace-nowrap py-10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="mx-12 md:mx-20 flex flex-col items-center justify-center opacity-30 grayscale">
              <div className="h-16 w-64 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center font-headline font-black text-2xl tracking-tighter italic">
                COMING SOON
              </div>
            </div>
          ))}
          {/* Duplicate for infinite effect */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i + 10} className="mx-12 md:mx-20 flex flex-col items-center justify-center opacity-30 grayscale">
              <div className="h-16 w-64 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center font-headline font-black text-2xl tracking-tighter italic">
                COMING SOON
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="font-code text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
          Sponsorships currently being onboarded. <span className="text-primary cursor-pointer hover:underline">Partner with us →</span>
        </p>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
