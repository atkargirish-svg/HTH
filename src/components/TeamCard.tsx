
"use client"

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

interface TeamCardProps {
  name: string;
  role?: string;
  index: number;
  linkedin?: string;
  instagram?: string;
  image?: string;
}

export const TeamCard = ({ name, index, linkedin, instagram, image }: TeamCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="relative group w-full max-w-[280px] mx-auto"
    >
      {/* Background Glow */}
      <div className="absolute -inset-2 bg-primary/15 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{
          y: { type: "spring", stiffness: 100, damping: 10 }
        }}
        className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-foreground/5 glass-card shadow-sm"
      >
        {/* Full Card Image */}
        {image && (
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute inset-0 motherboard-grid opacity-[0.03] pointer-events-none" />

        {/* Content */}
        <div 
          className="absolute inset-0 flex flex-col justify-end p-5"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="relative z-10">
            <motion.h3 
              className="font-headline text-lg md:text-xl font-bold text-white mb-3 tracking-tight uppercase leading-none"
            >
              {name}
            </motion.h3>

            <AnimatePresence>
              {isHovered && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="flex gap-3"
                >
                  {linkedin && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {instagram && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-200"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-4 right-4 opacity-30">
          <div className="w-8 h-8 border-t border-r border-primary/40 rounded-tr-lg" />
        </div>
      </motion.div>
    </motion.div>
  );
};
