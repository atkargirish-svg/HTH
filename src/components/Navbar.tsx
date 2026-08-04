"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { cn } from '@/lib/utils';

const links = [
  { name: 'ABOUT', href: '#about' },
  { name: 'TIMELINE', href: '#timeline' },
  { name: 'TRACKS', href: '#tracks' },
  { name: 'AI SCOUT', href: '#scout' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] p-6 pointer-events-none">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={cn(
            "flex items-center justify-between pointer-events-auto transition-all duration-700 rounded-full px-6 py-3",
            scrolled ? "glass-card border-white/10" : "bg-transparent"
          )}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group overflow-hidden">
              <Cpu className="text-black w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-black text-lg tracking-tighter leading-none">HTH INDIA</span>
              <span className="font-code text-[8px] text-muted-foreground tracking-[0.2em] uppercase">Hack The Hardware</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-code text-[11px] font-bold tracking-widest text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <MagneticButton className="px-6 py-2 text-[10px] tracking-widest">
              REGISTER
            </MagneticButton>
          </div>

          <button 
            className="md:hidden text-foreground p-2"
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
            <div className="absolute top-10 left-10 flex items-center gap-3">
              <Cpu className="text-primary w-6 h-6" />
              <span className="font-headline font-black text-2xl tracking-tighter">HTH INDIA</span>
            </div>
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileMenu(false)}
                className="font-headline text-5xl font-bold text-foreground hover:text-primary transition-colors tracking-tighter"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <MagneticButton className="mt-8 text-xl px-12 py-6">
                REGISTER NOW
              </MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
