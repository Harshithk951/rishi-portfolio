"use client";

import { CREATOR_PROFILE } from "@/data/projects";
import { Film, ArrowUp, MessageSquare, Mail, Heart } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050508] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                <Film className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-white tracking-tight text-base sm:text-lg">
                {CREATOR_PROFILE.name}
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Video Editor &amp; Videographer • 24–48h Instant Reel Turnaround
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
            <a href="#work" className="hover:text-amber-400 transition-colors">
              Selected Works
            </a>
            <a href="#showreel" className="hover:text-amber-400 transition-colors">
              Showreel
            </a>
            <a href="#about" className="hover:text-amber-400 transition-colors">
              About
            </a>
            <a href="#delivery" className="hover:text-amber-400 transition-colors text-amber-300">
              24–48h Delivery
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
            <a
              href={CREATOR_PROFILE.resumeUrl}
              download="Rachamalla_Rishikesh_Resume.pdf"
              className="hover:text-amber-400 transition-colors text-amber-400 flex items-center gap-1"
            >
              Resume (PDF)
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={CREATOR_PROFILE.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-black text-zinc-300 transition-colors"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
            </a>

            <a
              href={CREATOR_PROFILE.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-pink-500 hover:text-white text-zinc-300 transition-colors"
              title="Instagram"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${CREATOR_PROFILE.contact.email}`}
              className="p-2.5 rounded-full bg-white/5 hover:bg-amber-500 hover:text-black text-zinc-300 transition-colors"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Slate Information */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            © 2026 {CREATOR_PROFILE.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted for high retention &amp; cinematic emotion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
