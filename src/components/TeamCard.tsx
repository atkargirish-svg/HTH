
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
}

export const TeamCard = ({ name, role }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      {/* Soft Orange Glow Background */}
      <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative glass-card p-8 rounded-[3rem] flex flex-col items-center text-center border-white/5 group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
        {/* Floating Animation Wrapper */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative mb-6"
        >
          {/* Circular Photo Placeholder / Liquid Glass Effect */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center relative z-10 overflow-hidden">
            <User className="w-12 h-12 text-white/20" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50" />
          </div>
          
          {/* Border Glow Ring */}
          <div className="absolute -inset-1 rounded-full border border-primary/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </motion.div>

        <h3 className="font-headline text-xl font-black text-white mb-2 tracking-tight uppercase">
          {name}
        </h3>
        
        {/* Role Badge */}
        <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10">
          <span className="font-code text-[10px] text-primary font-bold tracking-widest uppercase">
            {role}
          </span>
        </div>

        {/* Decorative Circuit Lines */}
        <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-5 group-hover:opacity-20 transition-opacity">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <path d="M 0 50 L 50 50 L 50 100" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};
