"use client";

import { useState, useEffect } from "react";
import { CREATOR_PROFILE } from "@/data/projects";
import { Film, MessageSquare, Menu, X, ArrowUpRight, Zap } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Works", href: "#work" },
    { label: "Showreel", href: "#showreel" },
    { label: "About", href: "#about" },
    { label: "24-48h Fast Edit", href: "#delivery", highlight: true },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      <div
        className={`max-w-6xl mx-auto pointer-events-auto transition-all duration-500 rounded-full ${
          scrolled
            ? "bg-black/75 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] py-2.5 px-4 sm:px-6"
            : "bg-black/40 backdrop-blur-md border border-white/5 py-3 px-5 sm:px-8"
        } flex items-center justify-between`}
      >
        {/* Brand / Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform duration-300">
            <Film className="w-4 h-4 text-amber-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-sm sm:text-base text-zinc-100 flex items-center gap-2">
              {CREATOR_PROFILE.name}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            </span>
            <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-mono">
              Video Editor • 24–48h Delivery
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                link.highlight
                  ? "text-amber-400 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20"
                  : "text-zinc-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.highlight && <Zap className="w-3 h-3 inline mr-1 text-amber-400" />}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions / Direct WhatsApp */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={CREATOR_PROFILE.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold tracking-wide transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>Chat on WhatsApp</span>
            <div className="w-5 h-5 rounded-full bg-black/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowUpRight className="w-3 h-3 text-black" />
            </div>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto mt-2 max-w-sm mx-auto bg-[#0d0d12]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    24h FAST
                  </span>
                )}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href={CREATOR_PROFILE.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-amber-500 text-black text-sm font-semibold shadow-lg shadow-amber-500/20"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp (+91 8143937553)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
