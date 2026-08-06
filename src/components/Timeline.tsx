
"use client"

import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { day: 'STAGE 1', time: 'SEP 06, 2026', title: 'Registration Deadline', desc: 'Final date to submit team details and idea proposals via Unstop.' },
  { day: 'STAGE 2', time: 'SEP 07, 2026', title: 'Shortlisting Results', desc: 'Announcement of Top 50 teams based on innovation and technical feasibility.' },
  { day: 'STAGE 3', time: 'SEP 28, 09:00 AM', title: 'Grand Finale Kickoff', desc: 'Welcome ceremony and start of the 24-hour offline build session at SCET.' },
  { day: 'STAGE 3', time: 'SEP 28, 03:00 PM', title: 'Expert Mentorship', desc: 'Industry mentors review prototype progress and technical documentation.' },
  { day: 'STAGE 3', time: 'SEP 29, 09:00 AM', title: 'Final Submission', desc: 'Deadline for prototype building and start of jury demonstrations.' },
  { day: 'STAGE 3', time: 'SEP 29, 12:00 PM', title: 'Grand Finale', desc: 'Product pitches, Q&A, and result announcement ceremony.' },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-code text-primary tracking-[0.4em] uppercase text-xs mb-4 block">Event Journey</span>
            <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter text-foreground">THE ROADMAP</h2>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Main Trace */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] md:w-[2px] bg-foreground/5 -translate-x-1/2 overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary via-secondary to-primary"
            />
          </div>

          {events.map((event, i) => (
            <div key={i} className={`relative mb-12 md:mb-24 flex items-start md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-10 md:px-12">
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="glass-card p-4 md:p-6 rounded-2xl relative group hover:border-primary/30"
                >
                  <div className="absolute top-2 right-4 font-code text-[8px] text-muted-foreground/30">{event.day}</div>
                  <span className="font-code text-primary text-[10px] font-bold block mb-1 tracking-widest">{event.time}</span>
                  <h3 className="font-headline text-lg md:text-2xl font-black text-foreground mb-1 md:mb-3 tracking-tight uppercase">{event.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{event.desc}</p>
                  
                  <div className={`hidden md:block absolute top-1/2 w-12 h-[1px] bg-gradient-to-r ${i % 2 === 0 ? 'from-transparent to-primary -right-12' : 'from-primary to-transparent -left-12'}`} />
                </motion.div>
              </div>

              {/* Node dot with Pulse */}
              <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 z-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                >
                  <motion.div 
                    animate={{ scale: [1, 2, 2.5, 1], opacity: [1, 0.5, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="w-full h-full rounded-full bg-primary/30"
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
