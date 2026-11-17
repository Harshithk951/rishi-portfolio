"use client";

import { CREATOR_PROFILE } from "@/data/projects";
import { Download, ArrowUpRight } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-8 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Left Column: Portrait & Handle */}
          <div className="md:col-span-5 flex flex-col">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#111115] border border-white/[0.08] mb-4">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/profile.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
                <span>Rachamalla Rishikesh</span>
                <span>Hyderabad, IN</span>
              </div>
            </div>

            <a
              href={CREATOR_PROFILE.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@the.southguy.delulu</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>

          {/* Right Column: Editorial Bio, Software & Resume */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em] mb-3">
                03 / Background
              </div>

              <h2 className="text-2xl sm:text-4xl font-normal text-white tracking-tight mb-6">
                Cutting with an obsession for rhythm, tempo, and emotion.
              </h2>

              <div className="space-y-4 text-sm text-zinc-400 leading-relaxed font-normal mb-8">
                {CREATOR_PROFILE.detailedBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Software & Specializations */}
              <div className="pt-6 border-t border-white/[0.06] mb-8">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">
                  Software &amp; Disciplines
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    Adobe Premiere Pro
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    CapCut Desktop
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    Sound Design &amp; SFX
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    Color Timing &amp; LUTs
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    9:16 Kinetic Reels
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    16:9 Narrative Films
                  </span>
                </div>
              </div>
            </div>

            {/* Resume Action */}
            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <div>
                <div className="text-xs font-medium text-white">Full Work History</div>
                <div className="text-[11px] text-zinc-500 font-mono">Updated for 2026 • 150 KB PDF</div>
              </div>

              <a
                href={CREATOR_PROFILE.resumeUrl}
                download="Rachamalla_Rishikesh_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-medium tracking-wide transition-all active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
