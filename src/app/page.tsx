"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowreelSection from "@/components/ShowreelSection";
import ProjectsGallery from "@/components/ProjectsGallery";
import TurnaroundBanner from "@/components/TurnaroundBanner";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import FilmGrain from "@/components/FilmGrain";
import { Project, PROJECTS, CREATOR_PROFILE } from "@/data/projects";
import { MessageSquare } from "lucide-react";

const FEATURED_SHOWREEL: Project = {
  id: "showreel-2026-master",
  title: "Rachamalla Rishikesh — 2026 Cinematic Director's Cut",
  category: "films",
  aspectRatio: "16:9",
  tagline: "4K narrative master cut featuring dramatic pacing and cinematic grading.",
  description: "A master cut highlighting rhythm cuts, beat-synced sound design, speed ramping, and warm 35mm cinematic grading edited across Premiere Pro and CapCut Desktop.",
  tools: ["Adobe Premiere Pro", "CapCut Desktop", "Sound Design", "Color Timing"],
  duration: "3:45",
  turnaroundTime: "24–48h Delivery",
  videoUrl: "/videos/film-333-master.mp4",
  thumbnailUrl: "/thumbnails/film-333.jpg"
};

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenShowreel = () => {
    setActiveProject(FEATURED_SHOWREEL);
    setIsModalOpen(true);
  };

  const handleSelectProject = (project: Project) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#070709] text-zinc-100 relative selection:bg-amber-500 selection:text-black">
      {/* 35mm Film Grain Overlay & Vignette */}
      <FilmGrain />

      {/* Floating Island Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero onOpenShowreel={handleOpenShowreel} />

      {/* Showreel Highlight */}
      <ShowreelSection onPlayShowreel={handleOpenShowreel} />

      {/* Selected Works Gallery with 9:16 & 16:9 Filter */}
      <ProjectsGallery onSelectProject={handleSelectProject} />

      {/* Express 24-48h Delivery Banner */}
      <TurnaroundBanner />

      {/* About & Craft / Software Arsenal */}
      <AboutSection />

      {/* Contact & Interactive Booking Calculator */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Quick-Chat */}
      <a
        href={CREATOR_PROFILE.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center w-12 h-12 sm:w-auto sm:h-auto sm:px-4 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs shadow-[0_4px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageSquare className="w-5 h-5 sm:w-4 sm:h-4 fill-current" />
        <span className="hidden sm:inline sm:ml-2">WhatsApp</span>
      </a>

      {/* Cinematic Video Player Modal */}
      <VideoModal
        project={activeProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
