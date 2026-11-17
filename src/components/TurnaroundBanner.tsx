"use client";

import { ArrowUpRight } from "lucide-react";
import { CREATOR_PROFILE } from "@/data/projects";

export default function TurnaroundBanner() {
  return (
    <section id="delivery" className="py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl bg-[#0f0f13] border border-white/[0.08] p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 mb-2">
              Turnaround SLA
            </div>
            <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight mb-3">
              Need your video delivered in 24–48 hours?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Optimized desktop proxy workflows in Premiere Pro and CapCut Desktop enable rapid, high-retention cuts for brand launches, event teasers, and trending social drops.
            </p>
          </div>

          <a
            href={CREATOR_PROFILE.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-semibold tracking-wide transition-all active:scale-95 whitespace-nowrap self-start md:self-center"
          >
            <span>Inquire for 24h Edit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
