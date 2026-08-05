
"use client"

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { Cpu, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import ShapeGrid from './ShapeGrid';

const REGISTRATION_URL = "https://unstop.com/p/hack-the-hardware-india-2o-hth-india-2o-buildinnovatewin-suryodaya-college-of-engineering-technology-nagpur-1730720";
const INSTA_URL = "https://www.instagram.com/suryodayacollege?igsh=MWVlYXowbmV1cThjdg==";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animations start after the loader (approx 3s)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 3.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(20px)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ delay: 3, duration: 2 }}
          className="absolute inset-0"
        >
          <ShapeGrid 
            speed={0.4} 
            squareSize={37} 
            direction='diagonal' 
            borderColor="rgba(0,0,0,0.6)" 
            hoverFillColor='rgba(164,31,19,0.08)' 
            shape='hexagon' 
            hoverTrailAmount={5} 
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto px-6 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-card border-primary/20 text-primary mb-8 md:mb-12 cursor-target"
        >
          <Cpu className="w-3 h-3 md:w-4 md:h-4" />
          <span className="font-code text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">HTH INDIA 2.0 • PAN-Level Innovation</span>
        </motion.div>

        <motion.div
          variants={logoVariants}
          className="relative w-full max-w-[320px] md:max-w-[750px] mx-auto mb-4 md:mb-6"
        >
          <Image 
            src="/home.png" 
            alt="HTH INDIA Home Logo" 
            width={1000} 
            height={400} 
            priority
            className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(164,31,19,0.15)]"
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-body"
        >
          HTH 2.0 is a 24-hour national hardware hackathon where students build functional prototypes to bridge the gap between academic learning and industrial engineering.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <MagneticButton 
            onClick={() => window.open(REGISTRATION_URL, "_blank")}
            className="w-full sm:w-auto px-12 py-5 text-base cursor-target"
          >
            REGISTER NOW
          </MagneticButton>
          <MagneticButton 
            variant="outline" 
            onClick={() => window.open(INSTA_URL, "_blank")}
            className="w-full sm:w-auto px-12 py-5 text-base cursor-target"
          >
            INSTAGRAM
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto pt-8 border-t border-foreground/5"
        >
          <div className="flex flex-col gap-1 items-center">
            <span className="font-code text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-widest">Deadline</span>
            <span className="font-headline font-bold text-sm md:text-lg text-foreground uppercase">AUG 27, 2026</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="font-code text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-widest">Venue</span>
            <span className="font-headline font-bold text-sm md:text-lg text-foreground">SCET, NAGPUR</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="font-code text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-widest">Prize Pool</span>
            <span className="font-headline font-bold text-sm md:text-lg text-foreground">₹50,000</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="font-code text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-widest">Status</span>
            <span className="font-headline font-bold text-sm md:text-lg text-primary uppercase">Active</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 5, duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/30"
      >
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
      </motion.div>
    </section>
  );
};
