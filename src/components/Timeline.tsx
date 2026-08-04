
"use client"

import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { day: 'DAY 1', time: '09:00 AM', title: 'Check-in', desc: 'Welcome & Verification.' },
  { day: 'DAY 1', time: '10:00 AM', title: 'Opening', desc: 'Hackathon Begins!' },
  { day: 'DAY 1', time: '02:00 PM', title: 'Lunch', desc: 'Strategic recharge.' },
  { day: 'DAY 1', time: '03:00 PM', title: 'Mentoring', desc: 'Expert hardware guidance.' },
  { day: 'DAY 1', time: '08:00 PM', title: 'Elimination', desc: 'Technical viability check.' },
  { day: 'OVERNIGHT', time: '11:00 PM', title: 'Build', desc: 'Intensive engineering.' },
  { day: 'DAY 2', time: '09:00 AM', title: 'Final Lap', desc: 'Polishing prototypes.' },
  { day: 'DAY 2', time: '12:00 PM', title: 'Grand Finale', desc: 'Results & Closing.' },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-20 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-code text-primary tracking-[0.4em] uppercase text-xs mb-4 block">Operation Log</span>
            <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter">TIMELINE</h2>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Main Trace */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] md:w-[2px] bg-white/5 -translate-x-1/2 overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary via-secondary to-primary"
            />
          </div>

          {events.map((event, i) => (
            <div key={i} className={`relative mb-12 md:mb-32 flex items-start md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-10 md:px-16">
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="glass-card p-4 md:p-8 rounded-xl md:rounded-2xl relative group hover:border-primary/40 transition-colors duration-500"
                >
                  <div className="absolute top-2 right-4 font-code text-[8px] text-muted-foreground/30">{event.day}</div>
                  <span className="font-code text-primary text-[10px] font-bold block mb-1 tracking-widest">{event.time}</span>
                  <h3 className="font-headline text-lg md:text-3xl font-black text-white mb-1 md:mb-4 tracking-tight uppercase">{event.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-base">{event.desc}</p>
                  
                  <div className={`hidden md:block absolute top-1/2 w-16 h-[1px] bg-gradient-to-r ${i % 2 === 0 ? 'from-transparent to-primary -right-16' : 'from-primary to-transparent -left-16'}`} />
                </motion.div>
              </div>

              {/* Node dot with Pulse */}
              <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 z-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
                >
                  <motion.div 
                    animate={{ scale: [1, 2, 2.5, 1], opacity: [1, 0.5, 0, 1] }}
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
    </section>
  );
};
