"use client"

import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface HardwareCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tag: string;
}

export const HardwareCard = ({ title, description, icon: Icon, tag }: HardwareCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { damping: 25, stiffness: 150 });
  const rotateY = useSpring(useMotionValue(0), { damping: 25, stiffness: 150 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    rotateX.set((y - 0.5) * 12);
    rotateY.set((x - 0.5) * -12);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass-card group relative p-10 rounded-2xl h-full flex flex-col justify-between overflow-hidden"
    >
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 138, 0, 0.08),
              transparent 80%
            )
          `,
        }}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
      />
      
      <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-black transition-all duration-500">
          <Icon className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />
        </div>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-code text-[10px] tracking-[0.3em] text-primary uppercase font-bold">{tag}</span>
          <div className="h-[1px] flex-1 bg-white/5" />
        </div>
        <h3 className="font-headline text-3xl font-black mb-6 tracking-tight">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm font-body opacity-80 group-hover:opacity-100 transition-opacity">
          {description}
        </p>
      </div>

      <div className="mt-12 relative z-10" style={{ transform: "translateZ(30px)" }}>
        <button className="text-[10px] font-code font-bold tracking-[0.2em] text-white flex items-center gap-3 group/btn uppercase">
          <span className="relative overflow-hidden inline-block">
            <span className="block transition-transform duration-300 group-hover/btn:-translate-y-full">EXPLORE TECH</span>
            <span className="absolute top-full left-0 block transition-transform duration-300 group-hover/btn:-translate-y-full text-primary">EXPLORE TECH</span>
          </span>
          <motion.div 
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-primary group-hover/btn:bg-primary group-hover/btn:text-black transition-all"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm">→</span>
          </motion.div>
        </button>
      </div>

      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <path d="M 100 0 L 100 20 M 100 0 L 80 0" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </motion.div>
  );
};
