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
import { Project, PROJECTS } from "@/data/projects";

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

      {/* Cinematic Video Player Modal */}
      <VideoModal
        project={activeProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
