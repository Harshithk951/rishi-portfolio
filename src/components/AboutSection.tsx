"use client";

import { CREATOR_PROFILE } from "@/data/projects";
import { User, Sparkles, Layers, Sliders, CheckCircle, ExternalLink } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Artistic Creator Frame with 35mm Film Borders */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-3xl p-3 bg-gradient-to-b from-white/10 via-zinc-900 to-black border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Film Perforations simulation */}
              <div className="flex justify-between px-3 py-2 border-b border-white/10 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                <span>EASTMAN 5219</span>
                <span>ISO 500T</span>
                <span>KODAK FILM</span>
              </div>

              {/* Portrait Frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-950 my-2">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

                {/* Live Camera Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span>Rachamalla Rishikesh</span>
                  </div>
                  <a
                    href={CREATOR_PROFILE.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-black/70 hover:bg-amber-500 hover:text-black text-amber-400 border border-white/10 transition-colors"
                    title="Instagram Profile"
                    aria-label="Instagram Profile"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Bottom Film Strip Footer */}
              <div className="flex justify-between px-3 py-2 border-t border-white/10 text-[9px] font-mono text-zinc-500">
                <span>RISHIKESH_TIMELINE_01</span>
                <span className="text-amber-500/80">35MM CINE 24FPS</span>
              </div>
            </div>

            {/* Quick Instagram Mention */}
            <a
              href={CREATOR_PROFILE.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
              <span>@the.southguy.delulu</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Right Column: Bio, Philosophy & Technical Arsenal */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3 self-start">
              <User className="w-3.5 h-3.5" />
              <span>About the Creator</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Turning Raw Footage into <span className="text-amber-400">Pure Emotion</span> &amp; Velocity.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal mb-8">
              {CREATOR_PROFILE.detailedBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Editing Software Stack */}
            <div className="mb-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Primary Software Arsenal</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CREATOR_PROFILE.skills.software.map((sw, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-2xl bg-zinc-900/60 border border-white/5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-xs text-amber-400">
                        {sw.icon}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-white">{sw.name}</div>
                        <div className="text-[10px] text-zinc-400">{sw.level}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Creative Disciplines */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5" />
                <span>Core Editing Specializations</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 font-mono">
                {CREATOR_PROFILE.skills.craft.map((craft, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02]">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{craft}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
