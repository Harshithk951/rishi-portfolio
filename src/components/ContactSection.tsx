"use client";

import { useState } from "react";
import { CREATOR_PROFILE } from "@/data/projects";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [brief, setBrief] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CREATOR_PROFILE.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const whatsAppUrl = brief.trim()
    ? `https://wa.me/918143937553?text=${encodeURIComponent(`Hi Rishikesh, regarding a project: ${brief}`)}`
    : CREATOR_PROFILE.contact.whatsappUrl;

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-8 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em] mb-3">
          04 / Contact
        </div>

        <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
          Start a conversation.
        </h2>

        <p className="text-sm text-zinc-400 max-w-lg mb-12 font-normal">
          Available for commercial reels, wedding edits, music cuts, and narrative projects worldwide. Inquire below for immediate 24–48h booking.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct channels */}
          <div className="md:col-span-6 space-y-4">
            
            {/* WhatsApp */}
            <a
              href={CREATOR_PROFILE.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#111115] border border-white/[0.06] hover:border-white/[0.2] transition-colors flex items-center justify-between group"
            >
              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">
                  WhatsApp Direct
                </div>
                <div className="text-base font-medium text-white group-hover:text-zinc-200">
                  +91 8143937553
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            {/* Email */}
            <div className="p-5 rounded-xl bg-[#111115] border border-white/[0.06] flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">
                  Email
                </div>
                <div className="text-sm font-mono text-zinc-200">
                  {CREATOR_PROFILE.contact.email}
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg text-zinc-400 hover:text-white transition-colors"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Instagram */}
            <a
              href={CREATOR_PROFILE.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#111115] border border-white/[0.06] hover:border-white/[0.2] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <InstagramIcon className="w-4 h-4 text-zinc-400" />
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">
                    Instagram
                  </div>
                  <div className="text-sm font-medium text-white">
                    @the.southguy.delulu
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Right Column: Direct Message Box */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#111115] border border-white/[0.08]">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Send a Quick Brief
            </div>
            <p className="text-xs text-zinc-500 mb-4">
              Describe your project or paste a cloud footage link. It will open directly in WhatsApp.
            </p>

            <textarea
              rows={3}
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
              placeholder="e.g. 30s streetwear reel with fast cuts, needed within 48h..."
              className="w-full p-3.5 rounded-xl bg-black/50 border border-white/[0.08] text-xs sm:text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-white/[0.25] transition-colors mb-4 resize-none"
            />

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-semibold tracking-wide transition-all active:scale-[0.99]"
            >
              <span>Continue on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
