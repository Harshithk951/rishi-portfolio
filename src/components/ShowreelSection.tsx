"use client";

import { Play } from "lucide-react";

interface ShowreelSectionProps {
  onPlayShowreel: () => void;
}

export default function ShowreelSection({ onPlayShowreel }: ShowreelSectionProps) {
  return (
    <section id="showreel" className="py-14 sm:py-24 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-12 gap-3 sm:gap-4 pb-4 border-b border-white/[0.06]">
          <div>
            <div className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em] mb-1.5 sm:mb-2">
              01 / Showcase
            </div>
            <h2 className="text-2xl sm:text-4xl font-normal text-white tracking-tight">
              Director&apos;s Cut Showreel
            </h2>
          </div>

          <span className="text-[11px] sm:text-xs font-mono text-zinc-500">
            Runtime 3:45 • 4K UHD
          </span>
        </div>

        {/* Featured Video Frame */}
        <div
          onClick={onPlayShowreel}
          className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-white/[0.08] cursor-pointer group shadow-[0_20px_60px_rgba(0,0,0,0.8)] active:scale-[0.99] transition-transform duration-200"
        >
          {/* Poster Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              backgroundImage: `url('/thumbnails/film-333.jpg')`,
            }}
          />

          {/* Minimal Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

          {/* Centered Minimal Play Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-300 group-hover:scale-110 active:scale-95 shadow-2xl">
              <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-current ml-0.5 text-black" />
            </div>
          </div>

          {/* Corner Caption */}
          <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 flex items-center justify-between text-[10px] sm:text-xs font-mono text-white/80">
            <span>Rachamalla Rishikesh</span>
            <span>Tap to play cut</span>
          </div>
        </div>

      </div>
    </section>
  );
}
