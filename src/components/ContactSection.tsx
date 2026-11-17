"use client";

import { useState } from "react";
import { CREATOR_PROFILE } from "@/data/projects";
import { MessageSquare, Mail, Phone, Zap, Send, Check, Copy } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function ContactSection() {
  const [projectType, setProjectType] = useState<string>("Brand Reel (9:16)");
  const [timeline, setTimeline] = useState<string>("Express: 24–48 Hours");
  const [rawFootageLength, setRawFootageLength] = useState<string>("Under 10 minutes");
  const [notes, setNotes] = useState<string>("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CREATOR_PROFILE.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const projectTypes = [
    "Brand Reel (9:16)",
    "Bike / Automotive Edit",
    "Mountain Trek / Travel Vlog",
    "Wedding Film / Teaser",
    "Song / Music Video Edit",
    "Narrative Short Film"
  ];

  const timelineOptions = [
    "⚡ Instant: 24 Hours",
    "🚀 Express: 48 Hours",
    "🎬 Standard: 3–5 Days"
  ];

  const generatedWhatsAppMessage = encodeURIComponent(
    `Hi Rishikesh! I would like to book a video edit:\n\n` +
    `• Project: ${projectType}\n` +
    `• Turnaround: ${timeline}\n` +
    `• Raw Footage: ${rawFootageLength}\n` +
    (notes ? `• Details: ${notes}\n\n` : `\n`) +
    `Let's discuss pricing and workflow!`
  );

  const directWhatsAppLink = `https://wa.me/918143937553?text=${generatedWhatsAppMessage}`;

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      {/* Background Ambience */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info & Speed Guarantee */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3 self-start">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Let&apos;s Create</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Ready to Craft Your Next <span className="text-amber-400">Viral Masterpiece?</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 mb-8 leading-relaxed">
              Whether you need rapid 24-hour turnaround for brand reels, an emotional wedding film, or a soul-stirring travel documentary, I&apos;m ready to cut.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-3 mb-8">
              {/* WhatsApp Card */}
              <a
                href={CREATOR_PROFILE.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800/90 border border-emerald-500/30 hover:border-emerald-400/50 flex items-center justify-between transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-emerald-400 font-semibold">
                      Fastest Response • WhatsApp
                    </div>
                    <div className="text-sm font-bold text-white">
                      +91 8143937553
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-400 group-hover:text-emerald-300">
                  Chat Now →
                </span>
              </a>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-zinc-300 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-zinc-500">
                      Official Inquiries
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-zinc-200 truncate max-w-[190px] sm:max-w-xs">
                      {CREATOR_PROFILE.contact.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy Email"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Instagram Card */}
              <a
                href={CREATOR_PROFILE.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/5 hover:border-pink-500/30 flex items-center justify-between transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-pink-400">
                      Instagram Stories &amp; Edits
                    </div>
                    <div className="text-sm font-bold text-white">
                      @the.southguy.delulu
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-400 group-hover:text-pink-300">
                  Follow →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Booking Builder */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 bg-[#0d0d12] border border-amber-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-lg font-bold text-white">Instant Project Booking</h3>
                  <p className="text-xs text-zinc-400">Configure your edit &amp; launch directly into WhatsApp</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  <Zap className="w-3 h-3" /> 24–48h SLA
                </span>
              </div>

              {/* 1. Select Project Type */}
              <div className="mb-6">
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                  1. Select Video Style / Format
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`p-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                        projectType === type
                          ? "bg-amber-500 text-black font-semibold shadow-md"
                          : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/5"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Turnaround Preference */}
              <div className="mb-6">
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                  2. Required Delivery Timeline
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {timelineOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setTimeline(opt)}
                      className={`p-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                        timeline === opt
                          ? "bg-amber-500 text-black font-semibold shadow-md"
                          : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/5"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Raw Footage Volume */}
              <div className="mb-6">
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                  3. Approximate Raw Footage Length
                </label>
                <select
                  value={rawFootageLength}
                  onChange={(e) => setRawFootageLength(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="Under 10 minutes" className="bg-zinc-900">Under 10 minutes of raw clips</option>
                  <option value="10 to 30 minutes" className="bg-zinc-900">10 to 30 minutes</option>
                  <option value="30 to 60 minutes" className="bg-zinc-900">30 to 60 minutes</option>
                  <option value="Multi-cam / Full event" className="bg-zinc-900">Multi-cam / Full event / Wedding footage</option>
                </select>
              </div>

              {/* 4. Notes / Footage Link */}
              <div className="mb-6">
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                  4. Brief Notes or Google Drive / Cloud Link (Optional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Fast cuts, bass drops, urban clothing brand reel, reference: @example..."
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Submit CTA */}
              <a
                href={directWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all active:scale-[0.99]"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Send Booking Request to WhatsApp (+91 8143937553)</span>
                <Send className="w-4 h-4 ml-1" />
              </a>

              <p className="text-[11px] text-center text-zinc-500 mt-3 font-mono">
                Clicking opens WhatsApp with your project parameters pre-filled.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
