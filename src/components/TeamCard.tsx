"use client"

import React, { useRef, useState } from 'react';
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

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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

  const floatingY = [0, -10, 0];
  const floatingRotate = [0, 0.5, 0, -0.5, 0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9, rotate: 5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          y: isHovered ? -15 : floatingY,
          rotate: isHovered ? 0 : floatingRotate
        }}
        transition={{
          y: isHovered ? { type: "spring", stiffness: 100 } : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: index * 0.8 }
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative w-full max-w-[340px] aspect-[4/5] mx-auto"
      >
        <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <div className="absolute inset-0 glass-card rounded-[2.5rem] overflow-hidden border-foreground/[0.05] group-hover:border-primary/30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          
          <div className="absolute inset-0 motherboard-grid opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700" />

          <motion.div 
            style={{ x: translateX, y: translateY, transformStyle: "preserve-3d" }}
            className="relative h-full w-full flex flex-col items-center justify-center p-6"
          >
            <div className="relative mb-8" style={{ transform: "translateZ(50px)" }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border border-dashed border-primary/20 opacity-40"
              />
              <div className="w-32 h-32 rounded-full bg-background border border-foreground/10 flex items-center justify-center relative z-10 overflow-hidden shadow-lg">
                <User className="w-12 h-12 text-foreground/10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50" />
              </div>
            </div>

            <div className="text-center" style={{ transform: "translateZ(30px)" }}>
              <motion.h3 
                animate={{ y: isHovered ? -3 : 0 }}
                className="font-headline text-2xl font-black text-foreground mb-4 tracking-tighter uppercase"
              >
                {name}
              </motion.h3>
              
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="font-code text-[10px] text-primary font-black tracking-widest uppercase">
                  {role}
                </span>
              </div>
            </div>

            <div className="absolute bottom-8 flex gap-5" style={{ transform: "translateZ(40px)" }}>
              <AnimatePresence>
                {isHovered && (
                  <>
                    <motion.a
                      initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}
                      href="#" className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/40"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}
                      transition={{ delay: 0.05 }}
                      href="#" className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/40"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary/10 blur-sm group-hover:w-full transition-all duration-700" />
        </div>
      </motion.div>
    </motion.div>
  );
};
