"use client";

import { Zap, Clock, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";
import { CREATOR_PROFILE } from "@/data/projects";

export default function TurnaroundBanner() {
  const steps = [
    {
      step: "01",
      title: "Drop Raw Footage",
      desc: "Send your files via Google Drive, WeTransfer, or Telegram. Any format or resolution.",
    },
    {
      step: "02",
      title: "Beat & Story Cut",
      desc: "Edited with custom sound design, speed ramps, and warm color grading in Premiere Pro or CapCut.",
    },
    {
      step: "03",
      title: "Delivery in 24–48h",
      desc: "Receive your final 4K/1080p export ready to post and captivate your audience immediately.",
    },
  ];

  return (
    <section id="delivery" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-amber-500/10 via-zinc-950 to-zinc-950 border border-amber-500/30 p-8 sm:p-14 overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.15)]">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/15 blur-[120px] pointer-events-none rounded-full" />

          {/* Top Tag */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono uppercase tracking-widest mb-3">
                <Zap className="w-3.5 h-3.5" />
                <span>Express Turnaround Guarantee</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Instant Reels in <span className="text-amber-400">24–48 Hours</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
                Social media moves at lightning speed. Don&apos;t wait weeks for an edit. Get high-retention reels delivered when your trend is peak.
              </p>
            </div>

            <a
              href={CREATOR_PROFILE.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all active:scale-95 whitespace-nowrap self-start md:self-center"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Book Express Edit Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* 3 Step Workflow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {steps.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-black/50 border border-white/5 backdrop-blur-md relative"
              >
                <div className="text-3xl font-black font-mono text-amber-500/30 mb-3">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Guarantee Badges */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Satisfaction with Flexible Revisions</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Strict 24h &amp; 48h Delivery Milestones</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Direct WhatsApp Communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
