"use client"

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { Cpu, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-char", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.03,
        ease: "power4.out",
        delay: 1.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const title = "HTH INDIA";

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
          transition={{ delay: 1.8, duration: 1 }}
          className="inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-card border-primary/20 text-primary mb-8 md:mb-12"
        >
          <Cpu className="w-3 h-3 md:w-4 md:h-4" />
          <span className="font-code text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">24-Hour National Hardware Hackathon</span>
        </motion.div>

        <h1 className="font-headline text-[clamp(2.5rem,10vw,8rem)] font-black leading-[0.85] tracking-tighter mb-6 md:mb-8 perspective-1000 text-foreground">
          <div className="overflow-hidden inline-flex flex-wrap justify-center">
            {title.split(" ").map((word, wi) => (
              <span key={wi} className="mr-[0.3em] last:mr-0 inline-flex">
                {word.split("").map((char, ci) => (
                  <span key={ci} className="hero-char inline-block">{char}</span>
                ))}
              </span>
            ))}
          </div>
          <br />
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary block mt-2 md:mt-4"
          >
            HACK THE HARDWARE
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed"
        >
          An overnight engineering spectacle building impactful hardware-driven solutions with expert support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 1 }}
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
          transition={{ delay: 3.5, duration: 1.5 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto pt-8 border-t border-foreground/5"
        >
          <div className="flex flex-col gap-1">
            <span className="font-code text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-widest">Date</span>
            <span className="font-headline font-bold text-sm md:text-lg text-foreground">SEPT 28-29, 2026</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-code text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-widest">Venue</span>
            <span className="font-headline font-bold text-sm md:text-lg text-foreground">SCET, NAGPUR</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-code text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-widest">Prize</span>
            <span className="font-headline font-bold text-sm md:text-lg text-foreground">₹50,000</span>
          </div>
          <div className="flex flex-col gap-1">
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
