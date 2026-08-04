
"use client"

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { User, Linkedin, Github, Instagram } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  index: number;
}

export const TeamCard = ({ name, role, index }: TeamCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Parallax for internal elements
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  // Organic Floating Animation
  const floatingY = [0, -15, 0];
  const floatingRotate = [0, 0.5, 0, -0.5, 0];

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 100, 
        scale: 0.8,
        rotate: 10
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotate: 0
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="relative z-10"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          y: isHovered ? -20 : floatingY,
          rotate: isHovered ? 0 : floatingRotate
        }}
        transition={{
          y: isHovered ? { type: "spring", stiffness: 100 } : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: index * 0.8 }
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="group relative w-full max-w-[380px] aspect-[4/5] mx-auto"
      >
        {/* Ambient Glow */}
        <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        {/* Main Glass Bubble Body */}
        <div className="absolute inset-0 glass-card rounded-[3rem] overflow-hidden border-white/[0.08] group-hover:border-primary/40 transition-colors duration-500 shadow-2xl">
          {/* Animated Internal Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-primary/[0.03]" />
          
          {/* Shimmer Sweep Effect */}
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12 pointer-events-none"
          />

          {/* PCB Pattern Texture */}
          <div className="absolute inset-0 motherboard-grid opacity-[0.03] scale-150 group-hover:opacity-[0.08] transition-opacity duration-700" />

          {/* Content Wrapper for Parallax */}
          <motion.div 
            style={{ x: translateX, y: translateY, transformStyle: "preserve-3d" }}
            className="relative h-full w-full flex flex-col items-center justify-center p-8"
          >
            {/* Profile Image Area */}
            <div className="relative mb-10" style={{ transform: "translateZ(50px)" }}>
              {/* Spinning Glow Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-primary/20 opacity-40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border border-primary/30 opacity-60"
              />
              
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 flex items-center justify-center relative z-10 overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                <User className="w-16 h-16 text-white/10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-50" />
                {/* Subtle Reflection Sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>

            {/* Identity Info */}
            <div className="text-center" style={{ transform: "translateZ(30px)" }}>
              <motion.h3 
                animate={{ y: isHovered ? -5 : 0 }}
                className="font-headline text-3xl font-black text-white mb-4 tracking-tighter uppercase"
              >
                {name}
              </motion.h3>
              
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-code text-[11px] text-primary font-black tracking-[0.2em] uppercase">
                  {role}
                </span>
              </div>
            </div>

            {/* Social Icons - Hover Reveal */}
            <div className="absolute bottom-10 flex gap-6" style={{ transform: "translateZ(40px)" }}>
              <AnimatePresence>
                {isHovered && (
                  <>
                    <motion.a
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      href="#"
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/50 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.05 }}
                      href="#"
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/50 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.1 }}
                      href="#"
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/50 transition-all duration-300"
                    >
                      <Instagram className="w-4 h-4" />
                    </motion.a>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Bottom Interactive Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary/20 blur-md group-hover:w-full group-hover:bg-primary/40 transition-all duration-700" />
        </div>
      </motion.div>
    </motion.div>
  );
};
