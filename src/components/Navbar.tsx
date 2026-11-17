"use client";

import { useState, useEffect } from "react";
import { CREATOR_PROFILE } from "@/data/projects";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Showreel", href: "#showreel" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 sm:pt-6 pointer-events-none">
      <div
        className={`max-w-5xl mx-auto pointer-events-auto transition-all duration-500 rounded-full ${
          scrolled
            ? "bg-[#0c0c0e]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.8)] py-3 px-5 sm:px-7"
            : "bg-[#0c0c0e]/40 backdrop-blur-md border border-white/[0.04] py-3.5 px-6 sm:px-8"
        } flex items-center justify-between`}
      >
        {/* Name & Avatar */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 shrink-0">
            <img
              src="/profile.jpg"
              alt={CREATOR_PROFILE.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm sm:text-base tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              {CREATOR_PROFILE.name}
            </span>
            <span className="text-zinc-600 font-mono text-xs hidden sm:inline">/</span>
            <span className="text-xs text-zinc-400 font-normal tracking-wide hidden sm:inline">
              Editor
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-wider text-zinc-400 hover:text-white transition-colors uppercase font-mono"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions: Resume & WhatsApp */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={CREATOR_PROFILE.resumeUrl}
            download="Rachamalla_Rishikesh_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all"
            title="Download Resume"
          >
            <Download className="w-3.5 h-3.5 text-zinc-400" />
            <span>Resume</span>
          </a>

          <a
            href={CREATOR_PROFILE.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-medium tracking-wide transition-all active:scale-95"
          >
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-full text-zinc-400 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto mt-2 max-w-sm mx-auto bg-[#0e0e12]/95 backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-5 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-white/[0.08] flex flex-col gap-2">
              <a
                href={CREATOR_PROFILE.resumeUrl}
                download="Rachamalla_Rishikesh_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] text-zinc-300 text-xs font-mono"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={CREATOR_PROFILE.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-xs font-semibold"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
