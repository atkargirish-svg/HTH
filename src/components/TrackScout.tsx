
"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Loader2, Zap, Cpu } from 'lucide-react';
import { aiHardwareTrackScout, type AiHardwareTrackScoutOutput } from '@/ai/flows/ai-hardware-track-scout';
import { MagneticButton } from './MagneticButton';
import { Card, CardContent } from './ui/card';

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
    <section id="scout" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="font-code text-xs font-bold tracking-widest uppercase">AI Agent Active</span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">TRACK SCOUT ENGINE</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Not sure where your prototype fits? Our AI analyzes your hardware spec and matches you with the ideal competition tracks.
            </p>
          </motion.div>

          <div className="glass-card p-1 rounded-3xl mb-12">
            <div className="bg-background/40 rounded-[22px] p-8">
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Describe your hardware project... (e.g., A wearable IoT device using ESP32 to monitor soil moisture for smart farming with real-time solar battery optimization)"
                className="w-full h-40 bg-transparent border-none focus:ring-0 text-xl font-headline resize-none placeholder:text-muted-foreground/30 text-foreground"
              />
              <div className="flex justify-between items-center mt-6 border-t border-white/5 pt-6">
                <span className="text-xs font-code text-muted-foreground uppercase">
                  Engine: Gemini 2.5 Flash Hardware Optimized
                </span>
                <MagneticButton 
                  onClick={handleScout} 
                  className="min-w-[200px]"
                  disabled={isLoading || !summary.trim()}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      ANALYZING...
                    </>
                  ) : (
                    <>
                      SCOUT TRACKS
                      <Zap className="w-4 h-4" />
                    </>
                  )}
                </MagneticButton>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="glass-card p-8 rounded-2xl border-primary/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="font-headline text-xl font-bold uppercase tracking-tight">Suggested Tracks</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.suggestedTracks.map((track, i) => (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-code text-primary"
                      >
                        {track}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-8 rounded-2xl border-secondary/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="font-headline text-xl font-bold uppercase tracking-tight">Project Categories</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.suggestedCategories.map((cat, i) => (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-code text-secondary"
                      >
                        {cat}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
