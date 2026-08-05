
"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const links = [
  { name: 'ABOUT', href: '#about' },
  { name: 'TIMELINE', href: '#timeline' },
  { name: 'TRACKS', href: '#tracks' },
  { name: 'TEAM', href: '#team' },
];

const REGISTRATION_URL = "https://unstop.com/p/hack-the-hardware-india-2o-hth-india-2o-buildinnovatewin-suryodaya-college-of-engineering-technology-nagpur-1730720";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={cn(
            "flex items-center justify-between pointer-events-auto transition-all duration-700 rounded-full px-6 py-2.5",
            scrolled ? "glass-card border-foreground/10 shadow-lg" : "bg-transparent"
          )}
        >
          <div className="flex items-center gap-3">
            <Image 
              src="/logo1.PNG" 
              alt="HTH INDIA Logo" 
              width={140} 
              height={40} 
              className="h-8 md:h-10 w-auto object-contain cursor-target"
              priority
            />
          </div>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-code text-[11px] font-bold tracking-widest text-muted-foreground hover:text-primary transition-all duration-300 relative group cursor-target"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <MagneticButton 
              onClick={() => window.open(REGISTRATION_URL, "_blank")}
              className="px-6 py-2 text-[10px] tracking-widest cursor-target"
            >
              REGISTER
            </MagneticButton>
          </div>

          <button 
            className="md:hidden text-foreground p-2 cursor-target"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-3xl z-[90] p-12 flex flex-col items-center justify-center gap-8 pointer-events-auto md:hidden"
          >
            <div className="absolute top-10 left-10">
              <Image 
                src="/logo1.PNG" 
                alt="HTH INDIA Logo" 
                width={120} 
                height={35} 
                className="h-8 w-auto object-contain"
              />
            </div>
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileMenu(false)}
                className="font-headline text-4xl font-bold text-foreground hover:text-primary transition-colors tracking-tighter cursor-target"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <MagneticButton 
                onClick={() => {
                  window.open(REGISTRATION_URL, "_blank");
                  setMobileMenu(false);
                }}
                className="mt-8 text-lg px-10 py-5 cursor-target"
              >
                REGISTER NOW
              </MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
