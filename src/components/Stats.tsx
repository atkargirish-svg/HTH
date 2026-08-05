"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'INNOVATION', value: 24, suffix: 'HRS' },
  { label: 'TEAMS', value: 50, suffix: '' },
  { label: 'PARTICIPANTS', value: 200, suffix: '+' },
  { label: 'PRIZE POOL', value: 50, suffix: 'K' },
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
    <div className="font-headline text-4xl md:text-6xl font-black flex items-baseline gap-1 md:gap-2 tracking-tighter">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-foreground"
      >
        {count}
      </motion.span>
      <span className="text-primary text-sm md:text-2xl font-code font-bold tracking-widest">{suffix}</span>
    </div>
  );
};

export const Stats = () => {
  return (
    <section className="py-20 relative bg-background overflow-hidden border-y border-foreground/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col gap-3 md:gap-4 group"
            >
              <div className="flex items-center gap-2 md:gap-4">
                <div className="h-[1px] w-8 md:w-10 bg-primary/40 group-hover:w-16 transition-all duration-500" />
                <span className="font-code text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">
                  M_{i+1}
                </span>
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="font-headline font-medium tracking-wider text-muted-foreground text-[10px] md:text-xs uppercase opacity-60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] motherboard-grid" />
    </section>
  );
};
