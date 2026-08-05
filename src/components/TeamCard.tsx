
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';
import TiltedCard from './TiltedCard';

interface TeamCardProps {
  name: string;
  index: number;
  linkedin?: string;
  instagram?: string;
  image?: string;
}

export const TeamCard = ({ name, index, linkedin, instagram, image }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative group w-full max-w-[280px] mx-auto"
    >
      <TiltedCard
        imageSrc={image || '/placeholder-user.png'}
        altText={name}
        captionText={name}
        containerHeight="350px"
        containerWidth="280px"
        imageHeight="350px"
        imageWidth="280px"
        rotateAmplitude={12}
        scaleOnHover={1.05}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <div className="flex flex-col gap-3 pointer-events-auto">
            <h3 className="font-headline text-lg font-bold text-white tracking-tight uppercase leading-none mb-2">
              {name}
            </h3>
            <div className="flex gap-3">
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
            </div>
          </div>
        }
      />
    </motion.div>
  );
};
