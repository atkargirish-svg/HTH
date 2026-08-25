
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
  role?: string;
}

export const TeamCard = ({ name, index, linkedin, instagram, image, role }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative group w-full max-w-[230px] mx-auto"
    >
      <TiltedCard
        imageSrc={image || '/placeholder-user.png'}
        altText={name}
        captionText={name}
        containerHeight="290px"
        containerWidth="230px"
        imageHeight="290px"
        imageWidth="230px"
        rotateAmplitude={10}
        scaleOnHover={1.03}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <div className="flex flex-col gap-2 pointer-events-auto">
            <h3 className="font-headline text-sm font-bold text-white tracking-tight uppercase leading-tight">
              {name}
            </h3>
            {/* Role removed as requested */}
            <div className="flex gap-2 mt-2">
              {linkedin && linkedin !== "#" && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-200"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              )}
              {instagram && instagram !== "#" && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-200"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        }
      />
    </motion.div>
  );
};
