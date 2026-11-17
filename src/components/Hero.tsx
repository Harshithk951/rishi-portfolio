"use client";

import { CREATOR_PROFILE } from "@/data/projects";
import { Play, ArrowDown, Download, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenShowreel: () => void;
}

export default function Hero({ onOpenShowreel }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 pt-32 pb-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Creator Portrait Avatar */}
        <div className="relative mb-5 group">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-white/20 shadow-2xl bg-zinc-900 mx-auto transition-transform duration-500 group-hover:scale-105">
            <img
              src="/profile.jpg"
              alt={CREATOR_PROFILE.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Understated Editorial Kicker */}
        <div className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 uppercase mb-6 sm:mb-8">
          Video Editor &amp; Videographer • 24–48h Turnaround
        </div>

        {/* Clean, Monumental Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white mb-6 leading-[1.04]">
          Rhythm. Motion. <br />
          <span className="text-zinc-400">
            Human emotion.
          </span>
        </h1>

        {/* Crisp Editorial Tagline */}
        <p className="max-w-xl text-sm sm:text-base md:text-lg text-zinc-400 font-normal mb-10 leading-relaxed">
          Crafting high-retention brand reels, cinematic wedding narratives, and wholesome travel films with precision pacing and bespoke sound design.
        </p>

        {/* Clean Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Watch Showreel */}
          <button
            onClick={onOpenShowreel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-medium text-xs tracking-wide transition-all hover:bg-zinc-200 active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            <span>Watch Showreel</span>
          </button>

          {/* WhatsApp Direct */}
          <a
            href={CREATOR_PROFILE.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-transparent hover:bg-white/[0.04] text-zinc-200 hover:text-white border border-white/[0.12] text-xs font-mono transition-all active:scale-95"
          >
            <span>Book via WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>

          {/* Download Resume */}
          <a
            href={CREATOR_PROFILE.resumeUrl}
            download="Rachamalla_Rishikesh_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-zinc-400 hover:text-white text-xs font-mono transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-zinc-500" />
            <span>Resume (PDF)</span>
          </a>
        </div>

        {/* Simple Editorial Categories */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] w-full max-w-xl flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
          <span>Brand Reels</span>
          <span className="text-zinc-700">/</span>
          <span>Weddings</span>
          <span className="text-zinc-700">/</span>
          <span>Bikes &amp; Auto</span>
          <span className="text-zinc-700">/</span>
          <span>Mountain Treks</span>
          <span className="text-zinc-700">/</span>
          <span>Short Films</span>
        </div>
      </div>

      {/* Subtle Scroll Down */}
      <a
        href="#work"
        aria-label="Scroll to work"
        className="mt-14 text-zinc-600 hover:text-zinc-300 transition-colors flex flex-col items-center gap-2 group"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-600 group-hover:text-zinc-300">
          Selected Works
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-300" />
      </a>
    </section>
  );
}
