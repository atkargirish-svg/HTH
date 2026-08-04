"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Loader } from '@/components/Loader';
import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Timeline } from '@/components/Timeline';
import { HardwareCard } from '@/components/HardwareCard';
import { TrackScout } from '@/components/TrackScout';
import { Marquee } from '@/components/Marquee';
import { MagneticButton } from '@/components/MagneticButton';
import { Cpu, Zap, Bot, Globe, HeartPulse, Shield, Smartphone, Lightbulb } from 'lucide-react';

const tracks = [
  {
    title: "EDGE AI & VISION",
    tag: "SYS-01",
    desc: "Implementing transformer models and CNNs on localized silicon. Focus on ultra-low latency inference and real-time processing.",
    icon: Bot
  },
  {
    title: "SECURE CONNECTIVITY",
    tag: "SYS-02",
    desc: "Next-gen communication protocols. Hardware-level encryption, decentralised mesh networking, and industrial-grade IoT nodes.",
    icon: Shield
  },
  {
    title: "BIO-SENSING ARCH",
    tag: "SYS-03",
    desc: "Precision health tech wearables. High-fidelity non-invasive sensors, biometric data synthesis, and diagnostic hardware.",
    icon: HeartPulse
  },
  {
    title: "ENERGY SYSTEMS",
    tag: "SYS-04",
    desc: "Sustainable power engineering. Advanced battery management, energy harvesting modules, and high-efficiency power delivery.",
    icon: Zap
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-primary selection:text-black">
      <div className="noise-overlay" />
      <Loader />
      <CustomCursor />
      <Navbar />

      <Hero />

      {/* About Section */}
      <section id="about" className="py-40 relative bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="font-code text-primary tracking-[0.4em] uppercase text-xs mb-6 block">The Initiative</span>
              <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-none">
                ENGINEERING THE <br />
                <span className="text-white/20">NEXT FRONTIER</span>
              </h2>
              <div className="space-y-8">
                <p className="text-xl text-muted-foreground leading-relaxed font-body">
                  HTH INDIA is the definitive national hardware hackathon, designed to challenge the limits of engineering. It's not just about code; it's about silicon, PCBs, sensors, and the physical realization of innovation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-primary">
                      <Lightbulb className="w-5 h-5" />
                      <span className="font-headline font-bold uppercase tracking-tight">Ideation</span>
                    </div>
                    <p className="text-sm text-muted-foreground">From concept to schematic, every wire matters.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-secondary">
                      <Smartphone className="w-5 h-5" />
                      <span className="font-headline font-bold uppercase tracking-tight">Deployment</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Real-world hardware for national scale impact.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="absolute inset-0 motherboard-grid opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 rounded-full animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-white/10 rounded-full" />
                
                <div className="absolute bottom-10 left-10 p-6 glass-card border-white/10 rounded-2xl">
                  <span className="font-code text-[10px] text-muted-foreground block mb-1">UNIT_001</span>
                  <span className="font-headline font-black text-xl tracking-tight">NATIONAL HUB</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Tracks Section */}
      <section id="tracks" className="py-40 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-code text-primary tracking-[0.4em] uppercase text-xs block mb-4"
              >
                Specializations
              </motion.span>
              <h2 className="font-headline text-5xl md:text-8xl font-black tracking-tighter leading-none">CORE COMPETITION TRACKS</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-lg leading-relaxed border-l border-white/10 pl-8">
              Push the boundaries of silicon and systems in these curated competitive tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tracks.map((track, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <HardwareCard {...track} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Timeline />

      <TrackScout />

      <Marquee />

      {/* CTA Section */}
      <section className="py-40 bg-background relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-6xl md:text-9xl font-black tracking-tighter mb-12 uppercase leading-none">
              READY TO <br />
              <span className="text-primary">SOLDER?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
              Applications are currently being screened nationwide. Join the elite engineering squad and build the future.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <MagneticButton className="px-16 py-8 text-xl">
                APPLY FOR UNIT
              </MagneticButton>
              <div className="font-code text-xs text-muted-foreground tracking-widest uppercase">
                Remaining Slots: 12 Teams
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 opacity-[0.03] motherboard-grid pointer-events-none" />
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 bg-[#05070B] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <Cpu className="text-black w-6 h-6" />
                </div>
                <span className="font-headline font-black text-3xl tracking-tighter">HTH INDIA</span>
              </div>
              <p className="text-muted-foreground max-w-sm text-lg leading-relaxed font-body">
                Building the backbone of India's hardware revolution. Engineering at national scale.
              </p>
            </div>
            <div>
              <h4 className="font-code font-bold mb-10 text-white uppercase tracking-[0.3em] text-[10px]">Operations</h4>
              <ul className="space-y-5 font-headline text-sm font-medium">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300">Specifications</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300">Technical Log</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300">Support Hub</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300">Brand Assets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-code font-bold mb-10 text-white uppercase tracking-[0.3em] text-[10px]">Communication</h4>
              <ul className="space-y-5 font-headline text-sm font-medium">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300">Terminal (X)</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300">Discord Core</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300">Git Labs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-1">
              <span className="font-code text-[9px] text-muted-foreground uppercase tracking-[0.2em]">© 2024 HTH INDIA. ALL SYSTEMS NOMINAL.</span>
              <span className="font-code text-[9px] text-primary/40 uppercase tracking-[0.2em]">Built for National Engineering Council</span>
            </div>
            <div className="flex gap-12 font-code text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
