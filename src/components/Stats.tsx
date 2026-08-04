
"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'NON-STOP INNOVATION', value: 24, suffix: 'HRS' },
  { label: 'TOTAL TEAMS', value: 50, suffix: '' },
  { label: 'PARTICIPANTS', value: 200, suffix: '+' },
  { label: 'PRIZE POOL', value: 30, suffix: 'K' },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalDuration = 2000;
    let incrementTime = Math.abs(Math.floor(totalDuration / end));

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="font-headline text-6xl md:text-8xl font-black flex items-baseline gap-2 tracking-tighter">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-white"
      >
        {count}
      </motion.span>
      <span className="text-primary text-2xl md:text-3xl font-code font-bold tracking-widest">{suffix}</span>
    </div>
  );
};

export const Stats = () => {
  return (
    <section className="py-40 relative bg-background overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col gap-6 group"
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-primary/40 group-hover:w-20 transition-all duration-500" />
                <span className="font-code text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">
                  Metric_{i+1}
                </span>
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="font-headline font-medium tracking-wider text-muted-foreground text-sm uppercase opacity-60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative pulse effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] motherboard-grid" />
    </section>
  );
};
