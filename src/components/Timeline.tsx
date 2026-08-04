"use client"

import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { date: 'OCT 12, 2024', title: 'Power On', desc: 'Registrations open nationwide. Form your squad of 4 engineering visionaries.' },
  { date: 'NOV 05, 2024', title: 'Blueprint Phase', desc: 'Abstract submission & technical review of hardware architectures.' },
  { date: 'DEC 15, 2024', title: 'Solder Session', desc: 'Shortlisted teams announced. Prototype development begins in labs.' },
  { date: 'JAN 20, 2025', title: 'Mainboard Finals', desc: '48-hour intensive hardware hackathon in the heart of Bangalore.' },
  { date: 'JAN 22, 2025', title: 'Grand Output', desc: 'Project showcase & National Hardware Award Ceremony.' },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-code text-primary tracking-[0.4em] uppercase text-xs mb-4 block">Operation Log</span>
            <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter">MOTHERBOARD TIMELINE</h2>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Main Trace */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary via-secondary to-primary"
            />
          </div>

          {events.map((event, i) => (
            <div key={i} className={`relative mb-32 flex items-start md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-16 md:px-16">
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="glass-card p-8 rounded-2xl relative group hover:border-primary/40 transition-colors duration-500"
                >
                  <div className="absolute top-4 right-4 font-code text-[10px] text-muted-foreground/30">LOG_{i+1}</div>
                  <span className="font-code text-primary text-xs font-bold block mb-3 tracking-widest">{event.date}</span>
                  <h3 className="font-headline text-3xl font-black text-white mb-4 tracking-tight uppercase">{event.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{event.desc}</p>
                  
                  {/* Decorative circuit trace connecting to center */}
                  <div className={`hidden md:block absolute top-1/2 w-16 h-[1px] bg-gradient-to-r ${i % 2 === 0 ? 'from-transparent to-primary -right-16' : 'from-primary to-transparent -left-16'}`} />
                </motion.div>
              </div>

              {/* Node dot with Pulse */}
              <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 z-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                >
                  <motion.div 
                    animate={{ scale: [1, 2.5, 1], opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="w-full h-full rounded-full bg-primary/40"
                  />
                </motion.div>
              </div>

              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Circuit Elements */}
      <div className="absolute top-0 right-0 w-1/4 h-full opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 0 10 L 40 10 L 50 20 L 50 80 L 60 90 L 100 90" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.2" />
          <circle cx="50" cy="20" r="1" fill="hsl(var(--primary))" />
          <circle cx="60" cy="90" r="1" fill="hsl(var(--primary))" />
        </svg>
      </div>
    </section>
  );
};
