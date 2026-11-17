"use client";

import { useState } from "react";
import { Project, CATEGORIES, PROJECTS } from "@/data/projects";
import { Play, Zap, Smartphone, Monitor, Sparkles, MessageSquare } from "lucide-react";

interface ProjectsGalleryProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsGallery({ onSelectProject }: ProjectsGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects = selectedCategory === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (selectedCategory === "reels") return p.aspectRatio === "9:16";
        if (selectedCategory === "brands") return p.category === "brands";
        if (selectedCategory === "travel") return p.category === "travel";
        if (selectedCategory === "weddings") return p.category === "weddings";
        if (selectedCategory === "films") return p.category === "films";
        return true;
      });

  return (
    <section id="work" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              From viral 9:16 Instagram &amp; brand reels to emotional 16:9 wedding films and soulful mountain treks.
            </p>
          </div>

          {/* Quick Notice */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-900/60 border border-amber-500/20 text-xs text-zinc-300 font-mono">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>All projects editable within 24–48 hours upon request.</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-amber-500 text-black font-semibold shadow-[0_0_20px_rgba(245,158,11,0.35)]"
                    : "bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isVertical = project.aspectRatio === "9:16";

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-[#0e0e14] border border-white/5 hover:border-amber-500/30 transition-all duration-500 flex flex-col overflow-hidden hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
              >
                {/* Visual Preview Container */}
                <div
                  className={`relative cursor-pointer overflow-hidden bg-black ${
                    isVertical ? "aspect-[9/12] sm:aspect-[9/13]" : "aspect-[16/10]"
                  }`}
                  onClick={() => onSelectProject(project)}
                >
                  {/* Thumbnail Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.thumbnailUrl})` }}
                  />

                  {/* Dark Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] via-black/30 to-black/50 group-hover:via-black/20 transition-colors duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300">
                      {isVertical ? (
                        <>
                          <Smartphone className="w-3 h-3 text-amber-400" /> 9:16 REEL
                        </>
                      ) : (
                        <>
                          <Monitor className="w-3 h-3 text-amber-400" /> 16:9 CINEMA
                        </>
                      )}
                    </span>

                    {project.turnaroundTime && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-300 text-[10px] font-mono font-medium">
                        <Zap className="w-2.5 h-2.5" /> {project.turnaroundTime}
                      </span>
                    )}
                  </div>

                  {/* Center Play Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-black/60 group-hover:bg-amber-500 text-white group-hover:text-black border border-white/20 group-hover:border-transparent flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Timecode */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md font-mono text-[10px] text-zinc-300 border border-white/10">
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
                      <span className="uppercase tracking-wider">
                        {project.client ? project.client : project.category}
                      </span>
                      {project.metrics && (
                        <span className="text-zinc-500 text-[11px]">
                          {project.metrics.label}: {project.metrics.value}
                        </span>
                      )}
                    </div>

                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer mb-2"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer Tools & Action */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 2).map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/918143937553?text=${encodeURIComponent(
                        `Hi Rishikesh, I want a video edit similar to your "${project.title}" project.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-amber-500 hover:text-black text-zinc-300 transition-colors"
                      title="Quick Inquiry on WhatsApp"
                      aria-label="Quick WhatsApp Inquiry"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
