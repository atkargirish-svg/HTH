
"use client"

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative w-[300px] h-[300px]">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Circuit paths */}
              <motion.path
                d="M 100 20 L 100 50 M 100 50 L 150 75 M 100 50 L 50 75 M 150 75 L 150 125 M 50 75 L 50 125 M 150 125 L 100 150 M 50 125 L 100 150 M 100 150 L 100 180"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              {/* Processor Core */}
              <motion.rect
                x="85" y="85" width="30" height="30"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="2"
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: 45, scale: 1 }}
                transition={{ delay: 1, duration: 1, ease: "backOut" }}
              />
              {/* Pulse effect */}
              <motion.circle
                cx="100" cy="100" r="10"
                className="fill-primary/20 blur-md"
                animate={{ r: [10, 80, 10], opacity: [0, 0.5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center mt-64">
              <motion.h1 
                className="font-headline text-3xl font-bold tracking-widest text-primary"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                HTH INDIA
              </motion.h1>
              <motion.div 
                className="mt-4 w-48 h-1 bg-muted rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                <motion.div 
                  className="h-full bg-primary"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
