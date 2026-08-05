
"use client"

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative w-[300px] h-[300px] flex flex-col items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-64 h-64 mb-12 absolute opacity-20">
              <defs>
                <linearGradient id="traceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" />
                </linearGradient>
              </defs>
              
              <motion.path
                d="M 20 100 L 50 100 L 70 80 L 130 80 L 150 100 L 180 100"
                fill="none"
                stroke="url(#traceGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M 100 20 L 100 50 L 80 70 L 80 130 L 100 150 L 100 180"
                fill="none"
                stroke="url(#traceGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />
            </svg>

            <div className="text-center space-y-8 relative z-10 flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-48 h-16"
              >
                <Image 
                  src="/logo1.PNG" 
                  alt="HTH INDIA Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-48 h-[1px] bg-foreground/10 relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-primary"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="font-code text-[10px] tracking-widest text-muted-foreground uppercase font-bold">
                  INITIALIZING HARDWARE LAYER {progress}%
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
