
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
      <section id="about" className="py-40 relative bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="font-code text-primary tracking-[0.4em] uppercase text-xs mb-6 block">About HTH INDIA</span>
              <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-none">
                ENGINEERING THE <br />
                <span className="text-white/20">NEXT FRONTIER</span>
              </h2>
              <div className="space-y-8">
                <p className="text-xl text-muted-foreground leading-relaxed font-body">
                  Hack The Hardware India (HTH INDIA) is a 24-hour national hardware hackathon organized by the Department of Electronics & Telecommunication Engineering at Suryodaya College of Engineering & Technology. The event provides an innovation-driven platform where students collaborate in teams, solve real-world engineering challenges, develop working hardware prototypes, receive guidance from mentors and present their solutions before judges after an intensive overnight build experience.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-primary">
                      <Lightbulb className="w-5 h-5" />
                      <span className="font-headline font-bold uppercase tracking-tight">Ideation</span>
                    </div>
                    <p className="text-sm text-muted-foreground">From concept to working hardware prototypes.</p>
                  </div>
                  <div className="flex flex-col gap-2">
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
              className="relative aspect-square"
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
      <section id="tracks" className="py-40 bg-background relative overflow-hidden">
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
            <h2 className="font-headline text-5xl md:text-8xl font-black tracking-tighter leading-none mb-10">CORE TRACKS</h2>
            <div className="glass-card p-12 rounded-3xl inline-block border-dashed border-primary/20 bg-primary/5">
               <p className="font-headline text-3xl font-black text-white/40 tracking-tight uppercase">
                 Official Tracks Coming Soon
               </p>
            </div>
          </div>
        </div>
      </section>

      <Timeline />

      {/* Prize Pool Section */}
      <section id="prizes" className="py-40 bg-[#0B1118]/30 relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-10 rounded-[2.5rem] border-primary/30 bg-primary/10 relative overflow-hidden">
                <Trophy className="w-24 h-24 text-primary mb-8 animate-bounce" />
                <h3 className="font-headline text-5xl font-black mb-6 uppercase tracking-tighter">Prizes & Rewards</h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Total Prize Pool <span className="text-white font-black">₹30,000</span> including incubation support. Prize distribution details will be announced during the closing ceremony.
                </p>
                <div className="font-code text-xs text-primary font-bold tracking-widest uppercase py-4 border-t border-white/5">
                  Full breakdown available at ceremony
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Zap className="w-40 h-40" />
                </div>
              </div>
            </motion.div>
            <div className="space-y-10">
               <span className="font-code text-primary tracking-[0.4em] uppercase text-xs block mb-4">Recognition</span>
               <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">REWARDING <br/> INNOVATION</h2>
               <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                 We believe in empowering hardware engineers. Beyond the prize pool, winners get access to incubation hubs and expert engineering resources.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="team" className="py-40 bg-background relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 motherboard-grid opacity-[0.02] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
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
              transition={{ delay: 0.1 }}
              className="font-headline text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6"
            >
              Meet The Leadership
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed"
            >
              The passionate team driving HTH INDIA and building India's next-generation hardware innovation ecosystem.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
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
              Registrations will be open nationwide soon. Join the elite engineering squad and build the future of Indian hardware.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <MagneticButton className="px-16 py-8 text-xl">
                REGISTER NOW
              </MagneticButton>
              <div className="font-code text-xs text-muted-foreground tracking-widest uppercase">
                Status: Coming Soon
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
                <span className="font-headline font-black text-3xl tracking-tighter uppercase">HTH INDIA</span>
              </div>
              <p className="text-muted-foreground max-w-md text-lg leading-relaxed font-body">
                Hack The Hardware India - 24-Hour National Hardware Hackathon.<br/>
                <span className="text-white font-bold">Department of Electronics & Telecommunication Engineering</span><br/>
                Suryodaya College of Engineering & Technology
              </p>
            </div>
            <div>
              <h4 className="font-code font-bold mb-10 text-white uppercase tracking-[0.3em] text-[10px]">Navigation</h4>
              <ul className="space-y-5 font-headline text-sm font-medium">
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-all duration-300">About</a></li>
                <li><a href="#timeline" className="text-muted-foreground hover:text-primary transition-all duration-300">Timeline</a></li>
                <li><a href="#tracks" className="text-muted-foreground hover:text-primary transition-all duration-300">Tracks</a></li>
                <li><a href="#team" className="text-muted-foreground hover:text-primary transition-all duration-300">Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-code font-bold mb-10 text-white uppercase tracking-[0.3em] text-[10px]">Contact</h4>
              <p className="text-muted-foreground text-sm font-headline mb-4 uppercase">Nagpur, Maharashtra, India</p>
              <div className="font-code text-[10px] text-primary font-bold uppercase tracking-widest">
                Official Links Coming Soon
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-1">
              <span className="font-code text-[9px] text-muted-foreground uppercase tracking-[0.2em]">© 2026 HTH INDIA. ALL SYSTEMS NOMINAL.</span>
              <span className="font-code text-[9px] text-primary/40 uppercase tracking-[0.2em]">Designed & Developed by Team HTH INDIA</span>
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
