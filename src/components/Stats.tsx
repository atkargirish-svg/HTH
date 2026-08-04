
"use client"

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stats = [
  { label: 'EXPECTED PARTICIPANTS', value: 5000, suffix: '+' },
  { label: 'PRIZE POOL INR', value: 10, suffix: 'LAKHS' },
  { label: 'HARDWARE TRACKS', value: 12, suffix: '' },
  { label: 'CITY HUB LOCATIONS', value: 25, suffix: '' },
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
    <div className="font-code text-5xl md:text-7xl font-bold flex items-baseline gap-2">
      <span className="text-primary">{count}</span>
      <span className="text-secondary text-2xl">{suffix}</span>
    </div>
  );
};

export const Stats = () => {
  return (
    <section className="py-32 relative bg-background overflow-hidden border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="h-1 w-12 bg-accent rounded-full mb-2" />
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="font-headline font-medium tracking-wider text-muted-foreground text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Matrix Rain overlay effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] motherboard-grid" />
    </section>
  );
};
