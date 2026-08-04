
"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const links = [
  { name: 'TIMELINE', href: '#timeline' },
  { name: 'TRACKS', href: '#tracks' },
  { name: 'AI SCOUT', href: '#scout' },
  { name: 'PARTNERS', href: '#partners' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] p-6 pointer-events-none">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`flex items-center justify-between pointer-events-auto transition-all duration-500 rounded-full px-6 py-3 ${
            scrolled ? 'glass-card' : ''
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Cpu className="text-black w-6 h-6" />
            </div>
            <span className="font-headline font-black text-xl tracking-tighter">HTH INDIA</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-code text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <MagneticButton className="px-6 py-2 text-xs">
              REGISTER NOW
            </MagneticButton>
          </div>

          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-[90] p-12 flex flex-col items-center justify-center gap-8 pointer-events-auto md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="font-headline text-4xl font-bold text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <MagneticButton className="mt-8 text-xl px-12 py-6">
              REGISTER NOW
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
