
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
        delay: 3.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const title = "HTH INDIA";

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Matrix/PCB Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 motherboard-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.8, duration: 1 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border-primary/20 text-primary mb-12"
        >
          <Cpu className="w-4 h-4" />
          <span className="font-code text-[10px] font-bold tracking-[0.3em] uppercase">24-Hour National Hardware Hackathon</span>
        </motion.div>

        <h1 className="font-headline text-[clamp(3rem,12vw,10rem)] font-black leading-[0.85] tracking-tighter mb-8 perspective-1000">
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
            transition={{ delay: 4.5, duration: 1 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary block mt-4"
          >
            HACK THE HARDWARE
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.8, duration: 1 }}
          className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          HTH INDIA is a 24-hour overnight hardware hackathon where engineering students collaborate, innovate and build impactful hardware-driven solutions with mentor support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.1, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <MagneticButton className="px-10 py-5 text-base">
            REGISTER NOW
          </MagneticButton>
          <MagneticButton variant="outline" className="px-10 py-5 text-base">
            DOWNLOAD BROCHURE
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5, duration: 1.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/5"
        >
          <div className="flex flex-col gap-1">
            <span className="font-code text-[10px] text-muted-foreground uppercase tracking-widest">Date</span>
            <span className="font-headline font-bold text-lg">SEPT 28-29, 2026</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-code text-[10px] text-muted-foreground uppercase tracking-widest">Venue</span>
            <span className="font-headline font-bold text-lg">SCET, NAGPUR</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-code text-[10px] text-muted-foreground uppercase tracking-widest">Prize Pool</span>
            <span className="font-headline font-bold text-lg">₹30,000</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-code text-[10px] text-muted-foreground uppercase tracking-widest">Status</span>
            <span className="font-headline font-bold text-lg text-primary">COMING SOON</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/30"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};
