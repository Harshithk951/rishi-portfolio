"use client";

import { CREATOR_PROFILE } from "@/data/projects";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070709] border-t border-white/[0.06] py-10 sm:py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-xs font-mono text-zinc-500 text-center sm:text-left">
        
        <div>
          © 2026 {CREATOR_PROFILE.name}. All rights reserved.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={CREATOR_PROFILE.resumeUrl}
            download="Rachamalla_Rishikesh_Resume.pdf"
            className="hover:text-white transition-colors"
          >
            Resume (PDF)
          </a>
          <a
            href={CREATOR_PROFILE.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href={CREATOR_PROFILE.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-500 hover:text-white active:bg-white/[0.08] transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
