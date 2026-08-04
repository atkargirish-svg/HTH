
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Loader } from '@/components/Loader';
import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Timeline } from '@/components/Timeline';
import { TrackScout } from '@/components/TrackScout';
import { Marquee } from '@/components/Marquee';
import { MagneticButton } from '@/components/MagneticButton';
import { TeamCard } from '@/components/TeamCard';
import { Cpu, Zap, Smartphone, Lightbulb, Trophy } from 'lucide-react';

const leadershipMembers = [
  { name: "Sakshi Maind", role: "Lead" },
  { name: "Manish Wanjari", role: "Co-Lead" },
  { name: "Chaitanya Kadu", role: "Management Team" },
  { name: "Saurabh Chauhan", role: "Social Media Team Head" },
  { name: "Pranavti Thombre", role: "PR Team Head" },
  { name: "Atharva Atkar", role: "Technical Head" },
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
      <section id="about" className="py-20 md:py-40 relative bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="font-code text-primary tracking-[0.4em] uppercase text-xs mb-6 block text-center md:text-left">About HTH INDIA</span>
              <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter mb-8 md:mb-10 leading-none text-center md:text-left">
                ENGINEERING THE <br />
                <span className="text-white/20">NEXT FRONTIER</span>
              </h2>
              <div className="space-y-6 md:space-y-8">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body text-center md:text-left">
                  Hack The Hardware India (HTH INDIA) is a 24-hour national hardware hackathon organized by the Department of Electronics & Telecommunication Engineering at Suryodaya College of Engineering & Technology.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-6">
                  <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-3 text-primary">
                      <Lightbulb className="w-5 h-5" />
                      <span className="font-headline font-bold uppercase tracking-tight">Ideation</span>
                    </div>
                    <p className="text-sm text-muted-foreground">From concept to working hardware prototypes.</p>
                  </div>
                  <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-3 text-secondary">
                      <Smartphone className="w-5 h-5" />
                      <span className="font-headline font-bold uppercase tracking-tight">Mentorship</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Receive expert guidance from industry mentors.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-square hidden md:block"
            >
              <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="absolute inset-0 motherboard-grid opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                
                <div className="absolute bottom-10 left-10 p-6 glass-card border-white/10 rounded-2xl">
                  <span className="font-code text-[10px] text-muted-foreground block mb-1">DEPT_ETC</span>
                  <span className="font-headline font-black text-xl tracking-tight uppercase text-primary">Suryodaya College</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Tracks Section */}
      <section id="tracks" className="py-20 md:py-40 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-code text-primary tracking-[0.4em] uppercase text-xs block mb-4"
            >
              Specializations
            </motion.span>
            <h2 className="font-headline text-4xl md:text-8xl font-black tracking-tighter leading-none mb-10">CORE TRACKS</h2>
            <div className="glass-card p-8 md:p-12 rounded-3xl inline-block border-dashed border-primary/20 bg-primary/5">
               <p className="font-headline text-xl md:text-3xl font-black text-white/40 tracking-tight uppercase">
                 Official Tracks Coming Soon
               </p>
            </div>
          </div>
        </div>
      </section>

      <Timeline />

      {/* Prize Pool Section */}
      <section id="prizes" className="py-20 md:py-40 bg-[#0B1118]/30 relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 md:p-10 rounded-[2.5rem] border-primary/30 bg-primary/10 relative overflow-hidden">
                <Trophy className="w-16 h-16 md:w-24 md:h-24 text-primary mb-8 animate-bounce" />
                <h3 className="font-headline text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Prizes & Rewards</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  Total Prize Pool <span className="text-white font-black">₹30,000</span> including incubation support.
                </p>
                <div className="font-code text-[10px] md:text-xs text-primary font-bold tracking-widest uppercase py-4 border-t border-white/5">
                  Announced at closing ceremony
                </div>
              </div>
            </motion.div>
            <div className="space-y-6 md:space-y-10 text-center md:text-left">
               <span className="font-code text-primary tracking-[0.4em] uppercase text-xs block mb-4">Recognition</span>
               <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none">REWARDING <br/> INNOVATION</h2>
               <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                 Winners get access to incubation hubs and expert engineering resources.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="team" className="py-20 md:py-40 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 md:mb-32">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-code text-primary tracking-[0.4em] uppercase text-xs block mb-4"
            >
              The Visionaries
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-4xl md:text-8xl font-black tracking-tighter uppercase mb-6"
            >
              Core Team
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-24 gap-x-12">
            {leadershipMembers.map((member, i) => (
              <div 
                key={i} 
                className={`${i % 2 === 0 ? 'lg:translate-y-12' : 'lg:-translate-y-12'} transition-transform duration-1000`}
              >
                <TeamCard index={i} name={member.name} role={member.role} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrackScout />

      <Marquee />

      {/* CTA Section */}
      <section className="py-20 md:py-40 bg-background relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-4xl md:text-9xl font-black tracking-tighter mb-8 md:mb-12 uppercase leading-none">
              READY TO <br />
              <span className="text-primary">SOLDER?</span>
            </h2>
            <div className="flex flex-col items-center justify-center gap-6">
              <MagneticButton className="px-10 py-5 md:px-16 md:py-8 text-lg md:text-xl">
                REGISTER NOW
              </MagneticButton>
              <div className="font-code text-[10px] text-muted-foreground tracking-widest uppercase">
                Status: Coming Soon
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24 border-t border-white/5 bg-[#05070B] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20 mb-16 md:mb-24">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="text-primary w-6 h-6" />
                <span className="font-headline font-black text-2xl tracking-tighter uppercase">HTH INDIA</span>
              </div>
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-body">
                Hack The Hardware India - 24-Hour National Hackathon.<br/>
                <span className="text-white font-bold">Dept. of ETC Engineering</span><br/>
                SCET, Nagpur
              </p>
            </div>
            <div>
              <h4 className="font-code font-bold mb-6 text-white uppercase tracking-[0.3em] text-[10px]">Links</h4>
              <ul className="space-y-3 font-headline text-sm">
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors">Timeline</a></li>
                <li><a href="#team" className="text-muted-foreground hover:text-primary transition-colors">Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-code font-bold mb-6 text-white uppercase tracking-[0.3em] text-[10px]">Contact</h4>
              <p className="text-muted-foreground text-xs font-headline uppercase">Nagpur, India</p>
            </div>
          </div>
          <div className="pt-8 md:pt-12 border-t border-white/5 text-center md:text-left">
            <span className="font-code text-[9px] text-muted-foreground uppercase tracking-[0.2em]">© 2026 HTH INDIA. ALL SYSTEMS NOMINAL.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
