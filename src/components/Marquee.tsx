
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { SponsorScroll } from './SponsorScroll';

export const Marquee = () => {
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

      <SponsorScroll />

      <div className="mt-12 text-center">
        <p className="font-code text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
          Fueling Innovation in Indian Hardware. <span className="text-primary cursor-pointer hover:underline">Become a Sponsor →</span>
        </p>
      </div>
    </section>
  );
};
