
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
    <section id="scout" className="py-24 bg-background relative overflow-hidden border-t border-foreground/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary mb-8">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="font-code text-[9px] font-bold tracking-[0.3em] uppercase">Neural Engine Online</span>
            </div>
            <h2 className="font-headline text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase text-foreground">TRACK SCOUT AGENT</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Upload your prototype specs. Our specialized AI analyses your hardware architecture to identify the highest compatibility tracks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="glass-card p-1 rounded-2xl group transition-all duration-500 hover:border-primary/20 cursor-target">
                <div className="bg-background/40 rounded-[15px] p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6 border-b border-black/5 pb-4">
                    <Terminal className="w-4 h-4 text-muted-foreground" />
                    <span className="font-code text-[10px] text-muted-foreground uppercase tracking-widest">Input_Spec.v</span>
                  </div>
                  <textarea
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Describe your hardware project... (e.g., FPGA-based drone image processor)"
                    className="w-full h-40 bg-transparent border-none focus:ring-0 text-xl font-headline resize-none placeholder:text-foreground/10 text-foreground cursor-target"
                  />
                  <div className="flex flex-col sm:flex-row justify-between items-center mt-6 border-t border-black/5 pt-6 gap-4">
                    <span className="text-[9px] font-code text-muted-foreground uppercase tracking-widest">
                      Gemini 2.5 Flash Hardware Optimized
                    </span>
                    <MagneticButton 
                      onClick={handleScout} 
                      className="min-w-[200px] cursor-target"
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
                    <div className="glass-card p-8 rounded-2xl border-primary/20 bg-primary/5 cursor-target">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <h3 className="font-headline text-2xl font-black uppercase tracking-tight text-foreground">Suggestions</h3>
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
                              className="px-4 py-2 rounded-lg bg-background border border-foreground/5 text-[10px] font-code text-primary font-bold cursor-target"
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
                              className="px-4 py-2 rounded-lg bg-background border border-foreground/5 text-[10px] font-code text-secondary font-bold cursor-target"
                            >
                              {cat}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full min-h-[300px] border border-dashed border-foreground/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center bg-foreground/[0.01]">
                    <div className="w-16 h-16 rounded-full bg-foreground/[0.03] flex items-center justify-center mb-6">
                      <Zap className="w-8 h-8 text-muted-foreground opacity-30" />
                    </div>
                    <p className="font-code text-[10px] text-muted-foreground/50 uppercase tracking-widest max-w-[180px]">
                      Awaiting Project Specs for Deep Analysis
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
