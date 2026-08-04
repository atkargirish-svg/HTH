
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Loader } from '@/components/Loader';
import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/Navbar';
import { MagneticButton } from '@/components/MagneticButton';
import { Stats } from '@/components/Stats';
import { Timeline } from '@/components/Timeline';
import { HardwareCard } from '@/components/HardwareCard';
import { TrackScout } from '@/components/TrackScout';
import { Cpu, Zap, Radio, Bot, Globe, HeartPulse } from 'lucide-react';

const tracks = [
  {
    title: "EDGE AI & ROBOTICS",
    tag: "TK-01",
    desc: "Deploy neural networks on embedded devices. Real-time vision, autonomous agents, and bio-inspired robotics.",
    icon: Bot
  },
  {
    title: "IoT ECOSYSTEMS",
    tag: "TK-02",
    desc: "Architecting large-scale sensor networks. LoraWAN, mesh protocols, and energy-harvesting hardware nodes.",
    icon: Globe
  },
  {
    title: "HEALTH TECH 2.0",
    tag: "TK-03",
    desc: "Next-gen diagnostic wearables, non-invasive sensors, and affordable medical hardware for rural clinics.",
    icon: HeartPulse
  },
  {
    title: "GREEN CHIPS",
    tag: "TK-04",
    desc: "Sustainable hardware engineering. Biodegradable PCBs, ultra-low power silicon, and e-waste repurposing.",
    icon: Zap
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Loader />
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.8, duration: 1 }}
            >
              <span className="font-code text-primary tracking-[0.4em] uppercase mb-6 block text-sm">
                National Level Hardware Challenge
              </span>
              <h1 className="font-headline text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-8">
                HACK THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">
                  HARDWARE
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl leading-relaxed mb-12">
                India's premiere engineering spectacle. 48 hours to solder, code, and deploy physical systems that change reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <MagneticButton className="px-10 py-5 text-lg">
                  DOWNLOAD BLUEPRINT
                </MagneticButton>
                <MagneticButton variant="outline" className="px-10 py-5 text-lg">
                  WATCH TEASER
                  <Radio className="w-5 h-5 animate-pulse" />
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Cinematic Background Elements */}
        <div className="absolute right-[-10%] top-[20%] w-[60%] h-[60%] opacity-20 pointer-events-none">
          <svg className="w-full h-full text-primary" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 10" />
            <motion.circle 
              cx="250" cy="250" r="150" 
              stroke="currentColor" 
              strokeWidth="1" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 4, duration: 5, repeat: Infinity, ease: "linear" }}
            />
            <path d="M 250 50 L 250 0 M 250 450 L 250 500 M 50 250 L 0 250 M 450 250 L 500 250" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Tracks Section */}
      <section id="tracks" className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="font-code text-primary tracking-[0.3em] uppercase block mb-4"
              >
                Specializations
              </motion.span>
              <h2 className="font-headline text-5xl md:text-6xl font-bold">CORE TRACKS</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-lg">
              Push the limits of silicon and copper in these curated competitive categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tracks.map((track, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <HardwareCard {...track} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Track Scout Section */}
      <TrackScout />

      {/* Footer */}
      <footer className="py-20 border-t border-border/50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Cpu className="text-black w-5 h-5" />
                </div>
                <span className="font-headline font-black text-2xl tracking-tighter">HTH INDIA</span>
              </div>
              <p className="text-muted-foreground max-w-sm text-lg leading-relaxed">
                Building the backbone of India's hardware revolution. Organized by the National Engineering Council.
              </p>
            </div>
            <div>
              <h4 className="font-headline font-bold mb-6 text-foreground uppercase tracking-widest text-sm">Navigation</h4>
              <ul className="space-y-4 font-code text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Resources</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Brand Assets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold mb-6 text-foreground uppercase tracking-widest text-sm">Follow the Pulse</h4>
              <ul className="space-y-4 font-code text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter (X)</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Discord Hub</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub Labs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-code text-xs text-muted-foreground">© 2024 HTH INDIA. ALL SYSTEMS OPERATIONAL.</span>
            <div className="flex gap-8 font-code text-xs text-muted-foreground uppercase">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Hardware</a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] motherboard-grid" />
      </footer>
    </main>
  );
}
