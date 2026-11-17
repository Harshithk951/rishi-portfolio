"use client";

import { useState } from "react";
import { CREATOR_PROFILE } from "@/data/projects";
import { Play, Sparkles, Film, Zap, CheckCircle2 } from "lucide-react";

interface ShowreelSectionProps {
  onPlayShowreel: () => void;
}

export default function ShowreelSection({ onPlayShowreel }: ShowreelSectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="showreel" className="relative py-20 sm:py-28 px-4 sm:px-6">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>Featured Cut</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            The 2026 Showreel
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A fast-paced showcase of brand campaigns, bike rhythm edits, wedding films, and mountain expeditions.
          </p>
        </div>

        {/* Featured Video Frame (Double-Bezel Design) */}
        <div className="relative p-2 sm:p-3 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.8)]">
          <div
            className="relative aspect-video rounded-2xl sm:rounded-[2rem] overflow-hidden bg-black cursor-pointer group"
            onClick={onPlayShowreel}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Poster Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                backgroundImage: `url('/thumbnails/film-333.jpg')`,
              }}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 group-hover:via-black/20 transition-colors duration-500" />

            {/* Cinema Timecode & Specs */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                DIRECTOR&apos;S CUT • 4K
              </span>
              <span className="hidden sm:inline-block text-xs font-mono text-zinc-400 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-sm">
                24 FPS
              </span>
            </div>

            <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-mono font-medium">
                <Zap className="w-3 h-3" /> 24–48H RAPID EDIT
              </span>
            </div>

            {/* Center Play Button with Magnetic Amber Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Expanding Glow Waves */}
                <div className="absolute -inset-4 rounded-full bg-amber-500/30 blur-xl group-hover:bg-amber-500/50 transition-colors duration-300 animate-pulse" />
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500 group-hover:bg-amber-400 text-black flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.6)] transition-all duration-300 group-hover:scale-110 active:scale-95">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1 text-black" />
                </div>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 flex items-end justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                  Rachamalla Rishikesh
                </span>
                <h3 className="text-base sm:text-2xl font-bold text-white">
                  Motion, Sound &amp; Cinematic Emotion
                </h3>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Tap to Play Video</span>
              </div>
            </div>
          </div>
        </div>

        {/* Proof & Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 sm:mt-12">
          {CREATOR_PROFILE.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-zinc-950/60 border border-white/5 backdrop-blur-sm flex flex-col justify-between"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono mb-1">
                {stat.value}
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold text-zinc-200">
                  {stat.label}
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  {stat.helper}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
