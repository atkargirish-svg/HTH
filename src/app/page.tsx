
"use client"

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Loader } from '@/components/Loader';
import TargetCursor from '@/components/TargetCursor';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Timeline } from '@/components/Timeline';
import { Marquee } from '@/components/Marquee';
import { MagneticButton } from '@/components/MagneticButton';
import { TeamCard } from '@/components/TeamCard';
import FluidGlass from '@/components/FluidGlass';
import LogoLoop from '@/components/LogoLoop';
import PixelCard from '@/components/PixelCard';
import { Cpu, Smartphone, Lightbulb, Trophy, CheckCircle2, Zap, Shield, Users } from 'lucide-react';
import Image from 'next/image';

// Dynamically import CircularGallery to prevent SSR issues with WebGL/OGL
const CircularGallery = dynamic(() => import('@/components/CircularGallery'), {
  ssr: false,
  loading: () => <div className="h-[400px] md:h-[600px] w-full bg-card/5 animate-pulse rounded-3xl" />
});

const highlights2k25 = [
  { image: '/2k25/d1.png', text: 'INNOVATION HUB' },
  { image: '/2k25/d2.png', text: 'TEAM SPIRIT' },
  { image: '/2k25/d3.png', text: 'FUTURE TECH' },
  { image: '/2k25/d4.png', text: 'HARDCORE BUILD' },
  { image: '/2k25/d5.png', text: 'WINNING MOMENTS' },
  { image: '/2k25/d6.png', text: 'PITCH SESSION' },
];

const facultySupport = [
  { 
    name: "Dr. Rasika Chafle", 
    linkedin: "https://www.linkedin.com/in/dr-rasika-chafle-1090bb1a9", 
    instagram: "https://www.instagram.com/rasika_manapure", 
    image: "/leads/rasika.png" 
  },
  { 
    name: "Prof. Damini Tonde", 
    linkedin: "https://www.linkedin.com/in/damini-tonde-273171276", 
    instagram: "https://www.instagram.com/daminidandade", 
    image: "/leads/damini.png" 
  },
  { 
    name: "Prof. Smita Matte", 
    linkedin: "#", 
    instagram: "#", 
    image: "/leads/smita.png" 
  },
];

const leadershipMembers = [
  { 
    name: "Sakshi Maind", 
    linkedin: "https://www.linkedin.com/in/techsakshi-maind?utm_source=share_via&utm_content=profile&utm_medium=member_android", 
    instagram: "https://www.instagram.com/codewiz17?igsh=Nnl1Y29icDFlZHVq", 
    image: "/leads/sakshi.PNG" 
  },
  { 
    name: "Manish Wanjari", 
    linkedin: "https://www.linkedin.com/in/manish-wanjari-17b00035b?utm_source=share_via&utm_content=profile&utm_medium=member_android", 
    instagram: "https://www.instagram.com/manii__talks__?igsh=MTZqOXRmZTBmNmhybA==", 
    image: "/leads/manish.PNG" 
  },
  { 
    name: "Chaitanya Kadu", 
    linkedin: "#", 
    instagram: "#", 
    image: "/leads/chaitanya.PNG" 
  },
  { 
    name: "Atharva Atkar", 
    linkedin: "https://www.linkedin.com/in/atharva-atkar-24271a384?utm_source=share_via&utm_content=profile&utm_medium=member_android", 
    instagram: "https://www.instagram.com/atharva_atkar1?igsh=MWd1d2NiMWdpbGsxbw==", 
    image: "/leads/atharva.PNG" 
  },
  { 
    name: "Pranavti Thombre", 
    linkedin: "https://www.linkedin.com/in/pranavti-thombre-130407360", 
    instagram: "https://www.instagram.com/pranavti_thombre?igsh=MXQ2bDZpdWZidzZlMg==", 
    image: "/leads/pranvti.PNG" 
  },
  { 
    name: "Saurabh Chavhan", 
    linkedin: "https://www.linkedin.com/in/saurabh-chavhan-30176a392?utm_source=share_via&utm_content=profile&utm_medium=member_ios", 
    instagram: "https://www.instagram.com/_sauuu_03_?igsh=MXRxNjd1ZmozbjZzdA%3D%3D&utm_source=qr", 
    image: "/leads/saurabh.PNG" 
  },
  { 
    name: "Kimaya Shrikrishna There", 
    linkedin: "https://www.linkedin.com/in/kimaya-there-812b7b389", 
    instagram: "https://www.instagram.com/kims_.there", 
    image: "/leads/kimaya.jpeg" 
  },
  { 
    name: "Shravani Dhabekar", 
    linkedin: "https://www.linkedin.com/in/shravani-dhabekar-45bb2b337", 
    instagram: "https://www.instagram.com/shravani_d06", 
    image: "/leads/shravni.jpeg" 
  },
];

const domains = [
  {
    title: "Healthcare and Diagnostics",
    desc: "Smart solutions using sensors, IoT, and cloud for healthcare applications.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Embedded Systems & Automation",
    desc: "Intelligent automation using microcontrollers, sensors, and real-time control.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Robotics & Smart Manufacturing",
    desc: "Autonomous robotic systems and Industry 4.0 manufacturing solutions.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Renewable Energy & EV",
    desc: "Battery management, smart charging, and sustainable power systems.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Open Innovation",
    desc: "Interdisciplinary hardware projects addressing any real-world challenge.",
    icon: <Lightbulb className="w-6 h-6" />
  }
];

const techLogos = [
  { src: "/sponser/1.png", alt: "Sponsor 1" },
  { src: "/sponser/2.png", alt: "Sponsor 2" },
  { src: "/sponser/3.png", alt: "Sponsor 3" },
  { src: "/sponser/4.png", alt: "Sponsor 4" },
  { src: "/sponser/5.png", alt: "Sponsor 5" },
];

const REGISTRATION_URL = "https://unstop.com/p/hack-the-hardware-india-2o-hth-india-2o-buildinnovatewin-suryodaya-college-of-engineering-technology-nagpur-1730720";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-primary/20 selection:text-primary overflow-x-hidden max-w-full">
      <div className="noise-overlay" />
      <Loader />
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
        cursorColor="hsl(var(--primary))"
      />
      <Navbar />

      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="font-code text-primary tracking-[0.4em] uppercase text-xs mb-6 block text-center md:text-left">About HTH INDIA 2.0</span>
              <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter mb-8 md:mb-10 leading-none text-center md:text-left text-foreground uppercase">
                Bridging the <br />
                <span className="text-secondary/30">Engineering Gap</span>
              </h2>
              <div className="space-y-6 md:space-y-8">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body text-center md:text-left">
                  HTH INDIA 2.0 is a premier PAN-Level Hardware Innovation Competition. We bring together students and innovators from across India to transform ideas into industry-ready prototypes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-6">
                  <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-3 text-primary">
                      <Users className="w-5 h-5" />
                      <span className="font-headline font-bold uppercase tracking-tight">Eligibility</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Diploma, UG, and PG students from AICTE institutions.</p>
                  </div>
                  <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-3 text-secondary">
                      <Smartphone className="w-5 h-5" />
                      <span className="font-headline font-bold uppercase tracking-tight">Team Size</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Teams of 2 to 4 members. Cross-college allowed.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-video hidden md:block cursor-target"
            >
              <div className="absolute inset-0 glass-card rounded-[2.5rem] overflow-hidden group border-primary/10">
                <FluidGlass imagePlaceholder="/college.png" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 to-transparent" />
                
                <div className="absolute bottom-6 right-6 p-4 glass-card border-black/5 rounded-2xl z-10">
                  <span className="font-code text-[8px] text-muted-foreground block mb-1">VENUE</span>
                  <span className="font-headline font-black text-lg tracking-tight uppercase text-primary">SCET Nagpur</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsors Loop */}
      <div className="py-12 border-t border-foreground/5 bg-background overflow-hidden">
        <LogoLoop 
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={32}
          fadeOut
          fadeOutColor="hsl(var(--background))"
          scaleOnHover
        />
      </div>

      <Stats />

      {/* Tracks Section */}
      <section id="tracks" className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-code text-primary tracking-[0.4em] uppercase text-xs block mb-4"
            >
              Innovation Domains
            </motion.span>
            <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter leading-none mb-10 text-foreground uppercase">CORE TRACKS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {domains.map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="cursor-target h-[300px] md:h-[350px]"
              >
                <PixelCard variant="hth" className="w-full h-full">
                  <div className="p-8 flex flex-col justify-between h-full text-left">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                        {domain.icon}
                      </div>
                      <h3 className="font-headline font-black text-xl mb-4 tracking-tight uppercase">{domain.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{domain.desc}</p>
                    </div>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2k25 Highlights Section */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-foreground/5">
        <div className="container mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-code text-primary tracking-[0.4em] uppercase text-xs mb-4 block">Legacy</span>
            <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">HTH 2025 HIGHLIGHTS</h2>
          </motion.div>
        </div>

        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden cursor-target">
          <CircularGallery
            items={highlights2k25}
            bend={3}
            textColor="hsl(var(--primary))"
            borderRadius={0.05}
            scrollEase={0.02}
            fontUrl="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap"
            font="bold 24px Space Grotesk"
          />
        </div>
      </section>

      <Timeline />

      {/* Prize Pool Section */}
      <section id="prizes" className="py-24 bg-card/10 relative border-y border-foreground/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <span className="font-code text-primary tracking-[0.4em] uppercase text-xs block mb-4">The Rewards</span>
             <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-foreground">PRIZES & SUPPORT</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Runner Up 1 */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="glass-card p-8 rounded-[2.5rem] border-secondary/20 order-2 md:order-1 cursor-target">
              <Trophy className="w-12 h-12 text-secondary mb-6" />
              <h3 className="font-headline text-2xl font-black mb-2 uppercase">Runner-Up</h3>
              <div className="text-3xl font-black text-foreground mb-4">₹7,000</div>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Cash Reward</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> ₹10,000 Incubation Support</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Finalist Certificate</li>
              </ul>
            </motion.div>

            {/* 1st Winner */}
            <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} className="glass-card p-10 rounded-[2.5rem] border-primary/40 bg-primary/5 relative overflow-hidden order-1 md:order-2 cursor-target">
              <div className="absolute top-0 right-0 bg-primary text-white text-[8px] font-code font-bold px-4 py-1 rounded-bl-xl tracking-widest">PLATINUM</div>
              <Trophy className="w-16 h-16 text-primary mb-6 animate-bounce" />
              <h3 className="font-headline text-3xl font-black mb-2 uppercase">Winner</h3>
              <div className="text-4xl font-black text-foreground mb-4">₹10,000</div>
              <ul className="space-y-3 text-sm text-foreground mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Cash Reward</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> ₹10,000 Incubation Support</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Winner Trophy & Certificate</li>
              </ul>
            </motion.div>

            {/* 2nd Runner Up */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="glass-card p-8 rounded-[2.5rem] border-secondary/20 order-3 cursor-target">
              <Trophy className="w-12 h-12 text-secondary/60 mb-6" />
              <h3 className="font-headline text-2xl font-black mb-2 uppercase tracking-tight">2nd Runner-Up</h3>
              <div className="text-3xl font-black text-foreground mb-4">₹4,000</div>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary/60" /> Cash Reward</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary/60" /> ₹9,000 Incubation Support</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary/60" /> Finalist Certificate</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faculty Support Section */}
      <section id="faculty" className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-code text-primary tracking-[0.4em] uppercase text-xs block mb-4"
            >
              The Academic Mentors
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-3xl md:text-5xl font-black tracking-tighter uppercase mb-12 text-foreground"
            >
              Faculty Support
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto justify-items-center">
            {facultySupport.map((member, i) => (
              <div key={i} className="cursor-target w-full">
                <TeamCard 
                  index={i} 
                  name={member.name} 
                  linkedin={member.linkedin} 
                  instagram={member.instagram} 
                  image={member.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="team" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-code text-primary tracking-[0.4em] uppercase text-xs block mb-4"
            >
              The Visionaries
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-3xl md:text-5xl font-black tracking-tighter uppercase mb-12 text-foreground"
            >
              Meet The Core Team
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto justify-items-center">
            {leadershipMembers.map((member, i) => (
              <div key={i} className="cursor-target w-full">
                <TeamCard 
                  index={i} 
                  name={member.name} 
                  linkedin={member.linkedin} 
                  instagram={member.instagram} 
                  image={member.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-4xl md:text-8xl font-black tracking-tighter mb-8 md:mb-12 uppercase leading-none text-foreground">
              READY TO <br />
              <span className="text-primary">BUILD HTH 2.0?</span>
            </h2>
            <div className="flex flex-col items-center justify-center gap-6">
              <MagneticButton 
                onClick={() => window.open(REGISTRATION_URL, "_blank")}
                className="px-12 py-6 text-lg cursor-target"
              >
                REGISTER NOW
              </MagneticButton>
              <div className="font-code text-[10px] text-primary tracking-widest uppercase font-bold">
                Deadline: September 06, 2026
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-foreground/5 bg-card/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image 
                  src="/logo1.PNG" 
                  alt="HTH INDIA Logo" 
                  width={140} 
                  height={40} 
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                Hack The Hardware India 2.0 - 24-Hour National Hackathon.<br/>
                <span className="text-foreground font-bold">Dept. of ETC Engineering</span><br/>
                SCET, Nagpur
              </p>
            </div>
            <div>
              <h4 className="font-code font-bold mb-6 text-foreground uppercase tracking-[0.3em] text-[10px]">Links</h4>
              <ul className="space-y-3 font-headline text-sm">
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors cursor-target">About</a></li>
                <li><a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors cursor-target">Timeline</a></li>
                <li><a href="#team" className="text-muted-foreground hover:text-primary transition-colors cursor-target">Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-code font-bold mb-6 text-foreground uppercase tracking-[0.3em] text-[10px]">Contact</h4>
              <p className="text-muted-foreground text-xs font-headline uppercase">Nagpur, Maharashtra, India</p>
            </div>
          </div>
          <div className="pt-8 border-t border-foreground/5 text-center md:text-left">
            <span className="font-code text-[9px] text-muted-foreground uppercase tracking-[0.2em]">© 2026 HTH INDIA 2.0. ALL SYSTEMS NOMINAL.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
