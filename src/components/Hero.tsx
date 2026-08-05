"use client"

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { Cpu, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 motherboard-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-card border-primary/20 text-primary mb-8 md:mb-12"
        >
          <Cpu className="w-3 h-3 md:w-4 md:h-4" />
          <span className="font-code text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">24-Hour National Hardware Hackathon</span>
        </motion.div>

        {/* Logo Image replacing the HTH INDIA text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
          className="relative w-full max-w-[320px] md:max-w-[750px] mx-auto mb-4 md:mb-6"
        >
          <Image 
            src="/home.png" 
            alt="HTH INDIA Logo" 
            width={750} 
            height={375} 
            priority
            className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(164,31,19,0.15)]"
          />
        </motion.div>

        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary block font-headline text-2xl md:text-5xl font-black tracking-tighter mb-8"
        >
          HACK THE HARDWARE
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-body"
        >
          HTH INDIA is a 24-hour overnight hardware hackathon where engineering students collaborate, innovate and build impactful hardware-driven solutions with mentor support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <MagneticButton className="w-full sm:w-auto px-12 py-5 text-base">
            REGISTER NOW
          </MagneticButton>
          <MagneticButton variant="outline" className="w-full sm:w-auto px-12 py-5 text-base">
            BROCHURE
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 1.5 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto pt-8 border-t border-foreground/5"
        >
          <div className="flex flex-col gap-1 items-center">
            <span className="font-code text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-widest">Date</span>
            <span className="font-headline font-bold text-sm md:text-lg text-foreground">SEPT 28-29, 2026</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="font-code text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-widest">Venue</span>
            <span className="font-headline font-bold text-sm md:text-lg text-foreground">SCET, NAGPUR</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="font-code text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-widest">Prize</span>
            <span className="font-headline font-bold text-sm md:text-lg text-foreground">₹50,000</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="font-code text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-widest">Status</span>
            <span className="font-headline font-bold text-sm md:text-lg text-primary uppercase">Active</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/30"
      >
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
      </motion.div>
    </section>
  );
};
