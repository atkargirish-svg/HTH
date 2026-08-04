
"use client"

import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { date: 'OCT 12, 2024', title: 'Power On', desc: 'Registrations open nationwide. Form your squad of 4.' },
  { date: 'NOV 05, 2024', title: 'Blueprint Phase', desc: 'Abstract submission & technical review of hardware designs.' },
  { date: 'DEC 15, 2024', title: 'Solder Session', desc: 'Shortlisted teams announced. Prototype development begins.' },
  { date: 'JAN 20, 2025', title: 'Mainboard Finals', desc: '48-hour intensive hardware hackathon in Bangalore.' },
  { date: 'JAN 22, 2025', title: 'Grand Output', desc: 'Project showcase & National Award Ceremony.' },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-code text-primary tracking-[0.3em] uppercase"
          >
            Chronology
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-headline text-5xl md:text-6xl font-bold mt-4"
          >
            MOTHERBOARD TIMELINE
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Main Trace */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary via-accent to-primary"
            />
          </div>

          {events.map((event, i) => (
            <div key={i} className={`relative mb-24 flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-1/2 px-12">
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 rounded-2xl relative"
                >
                  <span className="font-code text-secondary text-sm block mb-2">{event.date}</span>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.desc}</p>
                  
                  {/* Decorative circuit trace connecting to center */}
                  <div className={`absolute top-1/2 w-12 h-[2px] bg-primary/30 ${i % 2 === 0 ? '-right-12' : '-left-12'}`} />
                </motion.div>
              </div>

              {/* Node dot */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <motion.div 
                  whileHover={{ scale: 1.5 }}
                  className="w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_hsl(var(--primary))]"
                >
                  <motion.div 
                    animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-full h-full rounded-full bg-primary/50"
                  />
                </motion.div>
              </div>

              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Traces */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <path d="M 0 10 L 50 10 L 60 20 L 60 80 L 70 90 L 100 90" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          <path d="M 0 30 L 40 30 L 50 40 L 50 70 L 60 80" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
};
