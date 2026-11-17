"use client";

import { CREATOR_PROFILE } from "@/data/projects";
import { Play, MessageSquare, Zap, Clock, Sparkles, ArrowDown } from "lucide-react";

interface HeroProps {
  onOpenShowreel: () => void;
}

export default function Hero({ onOpenShowreel }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden">
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[400px] bg-gradient-to-b from-amber-500/15 via-amber-700/5 to-transparent blur-[120px] pointer-events-none rounded-full" />
      
      {/* 35mm Viewfinder Frame Marks */}
      <div className="absolute top-28 left-6 sm:left-12 pointer-events-none select-none text-zinc-600 font-mono text-xs hidden md:block">
        + FRAME 01 <span className="text-zinc-700">|</span> 2.39:1
      </div>
      <div className="absolute top-28 right-6 sm:right-12 pointer-events-none select-none text-zinc-600 font-mono text-xs hidden md:block">
        ISO 800 <span className="text-zinc-700">|</span> 5600K
      </div>
      <div className="absolute bottom-12 left-6 sm:left-12 pointer-events-none select-none text-zinc-600 font-mono text-xs hidden md:block">
        LOG_PROFILE: ARRI_V3 <span className="text-zinc-700">|</span> PRORES 422
      </div>
      <div className="absolute bottom-12 right-6 sm:right-12 pointer-events-none select-none text-zinc-600 font-mono text-xs hidden md:block">
        EDIT: PREMIERE PRO • CAPCUT
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Rec & Fast Delivery Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-amber-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-xs font-mono font-medium tracking-widest text-amber-300 uppercase">
            REC • 24–48H INSTANT REEL DELIVERY
          </span>
        </div>

        {/* Creator Name & Title */}
        <h2 className="text-sm sm:text-base md:text-lg font-mono text-amber-400/90 tracking-[0.25em] uppercase mb-3">
          {CREATOR_PROFILE.name}
        </h2>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
          Rhythm. Emotion. <br />
          <span className="bg-gradient-to-r from-white via-zinc-200 to-amber-400 bg-clip-text text-transparent">
            Cinematic Impact.
          </span>
        </h1>

        {/* Short Bio / Tagline */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 font-normal mb-8 leading-relaxed">
          Video Editor & Videographer turning raw footage into viral brand reels, heartfelt wedding films, high-octane bike edits, and wholesome mountain expeditions.
        </p>

        {/* Fast Value Proposition Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl mb-10 text-left">
          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-200">24–48h Delivery</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-tight">Instant reel turnaround for brands & creators.</p>
          </div>

          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-200">Pro Editing</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-tight">Premiere Pro & CapCut Desktop mastery.</p>
          </div>

          <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-200">All Formats</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-tight">9:16 Vertical Reels & 16:9 Cinema Widescreen.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Showreel Button */}
          <button
            onClick={onOpenShowreel}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-amber-400 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]"
          >
            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <Play className="w-3 h-3 fill-current ml-0.5 text-amber-400" />
            </div>
            <span>Watch 2026 Showreel</span>
          </button>

          {/* Direct WhatsApp Consultation */}
          <a
            href={CREATOR_PROFILE.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 text-sm font-medium transition-all duration-300 active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
            <span>Book Instant Edit (+91 8143937553)</span>
          </a>
        </div>

        {/* Categories Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full max-w-2xl flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <span>Brand Reels</span>
          <span className="text-amber-500/60">•</span>
          <span>Wedding Edits</span>
          <span className="text-amber-500/60">•</span>
          <span>Bike Cinematics</span>
          <span className="text-amber-500/60">•</span>
          <span>Mountain Treks</span>
          <span className="text-amber-500/60">•</span>
          <span>Short Films</span>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#work"
        aria-label="Scroll to work"
        className="mt-12 text-zinc-500 hover:text-amber-400 transition-colors duration-300 flex flex-col items-center gap-1 group"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 group-hover:text-amber-400">
          Scroll to explore
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-zinc-500 group-hover:text-amber-400" />
      </a>
    </section>
  );
}
