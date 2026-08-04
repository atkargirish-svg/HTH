
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

  const rotateX = useSpring(useMotionValue(0), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useMotionValue(0), { damping: 20, stiffness: 200 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    rotateX.set((y - 0.5) * 15);
    rotateY.set((x - 0.5) * -15);
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
      className="glass-card group relative p-8 rounded-2xl h-full flex flex-col justify-between"
    >
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 138, 0, 0.1),
              transparent 80%
            )
          `,
        }}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
      />
      
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-primary w-6 h-6" strokeWidth={1.5} />
        </div>
        <span className="font-code text-xs tracking-widest text-secondary uppercase mb-2 block">{tag}</span>
        <h3 className="font-headline text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="mt-8 relative z-10" style={{ transform: "translateZ(20px)" }}>
        <button className="text-primary font-headline text-sm font-bold flex items-center gap-2 group/btn">
          EXPLORE TECH
          <motion.span className="group-hover/btn:translate-x-1 transition-transform">→</motion.span>
        </button>
      </div>
    </motion.div>
  );
};
