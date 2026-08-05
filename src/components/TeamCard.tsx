
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

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      {/* Background Glow */}
      <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

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
          y: isHovered ? -10 : [0, -5, 0],
        }}
        transition={{
          y: isHovered ? { type: "spring", stiffness: 100 } : { duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
        }}
        className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-foreground/5 glass-card"
      >
        {/* Full Card Image */}
        {image && (
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            priority
          />
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        <div className="absolute inset-0 motherboard-grid opacity-[0.05] pointer-events-none" />

        {/* Content */}
        <div 
          className="absolute inset-0 flex flex-col justify-end p-8"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="relative z-10">
            <motion.h3 
              animate={{ y: isHovered ? -5 : 0 }}
              className="font-headline text-2xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase leading-none"
            >
              {name}
            </motion.h3>

            <AnimatePresence>
              {isHovered && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex gap-4"
                >
                  {linkedin && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {instagram && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-6 right-6 opacity-40">
          <div className="w-12 h-12 border-t-2 border-r-2 border-primary/50 rounded-tr-xl" />
        </div>
      </motion.div>
    </motion.div>
  );
};
