"use client";

import { CREATOR_PROFILE } from "@/data/projects";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070709] border-t border-white/[0.06] py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500">
        
        <div>
          © 2026 {CREATOR_PROFILE.name}. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
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
            className="p-1 text-zinc-600 hover:text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
