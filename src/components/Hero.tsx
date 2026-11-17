"use client";

import { CREATOR_PROFILE } from "@/data/projects";
import { Play, ArrowDown, Download, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenShowreel: () => void;
}

export default function Hero({ onOpenShowreel }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Creator Portrait Avatar */}
        <div className="relative mb-4 sm:mb-5 group">
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-white/20 shadow-2xl bg-zinc-900 mx-auto transition-transform duration-500 group-hover:scale-105">
            <img
              src="/profile.jpg"
              alt={CREATOR_PROFILE.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Understated Editorial Kicker */}
        <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] sm:tracking-[0.25em] text-zinc-400 uppercase mb-4 sm:mb-8">
          Video Editor &amp; Videographer • 24–48h Turnaround
        </div>

        {/* Clean, Monumental Headline */}
        <h1 className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white mb-4 sm:mb-6 leading-[1.08]">
          Rhythm. Motion. <br />
          <span className="text-zinc-400">
            Human emotion.
          </span>
        </h1>

        {/* Crisp Editorial Tagline */}
        <p className="max-w-xl text-xs sm:text-base md:text-lg text-zinc-400 font-normal mb-8 sm:mb-10 leading-relaxed px-2">
          Crafting high-retention brand reels, cinematic wedding narratives, and wholesome travel films with precision pacing and bespoke sound design.
        </p>

        {/* Clean Action Buttons */}
        <div className="flex flex-col min-[480px]:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none">
          {/* Watch Showreel */}
          <button
            onClick={onOpenShowreel}
            className="w-full min-[480px]:w-auto min-h-[44px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wide transition-all hover:bg-zinc-200 active:scale-95 shadow-md"
          >
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            <span>Watch Showreel</span>
          </button>

          {/* WhatsApp Direct */}
          <a
            href={CREATOR_PROFILE.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-[480px]:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-transparent hover:bg-white/[0.04] text-zinc-200 hover:text-white border border-white/[0.12] text-xs font-mono transition-all active:scale-95"
          >
            <span>Book via WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>

          {/* Download Resume */}
          <a
            href={CREATOR_PROFILE.resumeUrl}
            download="Rachamalla_Rishikesh_Resume.pdf"
            className="w-full min-[480px]:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-zinc-400 hover:text-white text-xs font-mono transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-zinc-500" />
            <span>Resume (PDF)</span>
          </a>
        </div>

        {/* Simple Editorial Categories */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/[0.06] w-full max-w-xl flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 gap-y-1.5 text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-widest px-2">
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
        className="mt-10 sm:mt-14 text-zinc-600 hover:text-zinc-300 transition-colors flex flex-col items-center gap-1.5 sm:gap-2 group"
      >
        <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-zinc-600 group-hover:text-zinc-300">
          Selected Works
        </span>
        <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-600 group-hover:text-zinc-300" />
      </a>
    </section>
  );
}
