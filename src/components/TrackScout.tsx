"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2, Zap, Cpu, Terminal } from 'lucide-react';
import { aiHardwareTrackScout, type AiHardwareTrackScoutOutput } from '@/ai/flows/ai-hardware-track-scout';
import { MagneticButton } from './MagneticButton';

export const TrackScout = () => {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AiHardwareTrackScoutOutput | null>(null);

  const handleScout = async () => {
    if (!summary.trim()) return;
    setIsLoading(true);
    try {
      const output = await aiHardwareTrackScout({ hardwareSummary: summary });
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="scout" className="py-40 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary mb-8">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="font-code text-[10px] font-bold tracking-[0.3em] uppercase">Neural Engine Online</span>
            </div>
            <h2 className="font-headline text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">TRACK SCOUT AGENT</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Upload your prototype specs. Our specialized AI analyses your hardware architecture to identify the highest compatibility tracks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="glass-card p-1 rounded-2xl group transition-all duration-500 hover:border-primary/30">
                <div className="bg-background/40 rounded-[15px] p-8">
                  <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                    <Terminal className="w-4 h-4 text-muted-foreground" />
                    <span className="font-code text-[10px] text-muted-foreground uppercase tracking-widest">Input_Spec.v</span>
                  </div>
                  <textarea
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Describe your hardware project in detail... (e.g., An FPGA-based real-time image processor for low-latency agricultural drones using specialized RISC-V cores)"
                    className="w-full h-48 bg-transparent border-none focus:ring-0 text-xl font-headline resize-none placeholder:text-white/10 text-white"
                  />
                  <div className="flex justify-between items-center mt-6 border-t border-white/5 pt-6">
                    <span className="text-[10px] font-code text-muted-foreground uppercase tracking-[0.1em]">
                      Model: Gemini 2.5 Flash Hardware Optimized
                    </span>
                    <MagneticButton 
                      onClick={handleScout} 
                      className="min-w-[220px]"
                      disabled={isLoading || !summary.trim()}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          PROCESSING...
                        </>
                      ) : (
                        <>
                          RUN ANALYSIS
                          <Zap className="w-4 h-4" />
                        </>
                      )}
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-6"
                  >
                    <div className="glass-card p-8 rounded-2xl border-primary/20 bg-primary/5">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <h3 className="font-headline text-2xl font-black uppercase tracking-tight">System Suggestions</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="text-[10px] font-code text-muted-foreground uppercase tracking-widest mb-2">Recommended Tracks</div>
                        <div className="flex flex-wrap gap-2">
                          {result.suggestedTracks.map((track, i) => (
                            <motion.span
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              key={i}
                              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[11px] font-code text-primary font-bold"
                            >
                              {track}
                            </motion.span>
                          ))}
                        </div>
                        
                        <div className="text-[10px] font-code text-muted-foreground uppercase tracking-widest mt-6 mb-2">Category Tags</div>
                        <div className="flex flex-wrap gap-2">
                          {result.suggestedCategories.map((cat, i) => (
                            <motion.span
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              key={i}
                              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[11px] font-code text-secondary font-bold"
                            >
                              {cat}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full min-h-[300px] border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center bg-white/[0.01]">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                      <Zap className="w-8 h-8 text-muted-foreground opacity-20" />
                    </div>
                    <p className="font-code text-xs text-muted-foreground/40 uppercase tracking-widest max-w-[200px]">
                      Awaiting Project Specifications for Deep Analysis
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
