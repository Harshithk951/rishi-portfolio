"use client";

import { useState } from "react";
import { Project, CATEGORIES, PROJECTS } from "@/data/projects";
import { Play } from "lucide-react";

interface ProjectsGalleryProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsGallery({ onSelectProject }: ProjectsGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects = selectedCategory === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (selectedCategory === "reels") return p.aspectRatio === "9:16";
        if (selectedCategory === "films") return p.aspectRatio === "16:9";
        return true;
      });

  return (
    <section id="work" className="py-20 sm:py-28 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4 pb-4 border-b border-white/[0.06]">
          <div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em] mb-2">
              02 / Archive
            </div>
            <h2 className="text-2xl sm:text-4xl font-normal text-white tracking-tight">
              Selected Works
            </h2>
          </div>

          <div className="text-xs font-mono text-zinc-500">
            {filteredProjects.length} Verified Projects
          </div>
        </div>

        {/* Minimal Category Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black font-semibold"
                    : "bg-transparent text-zinc-400 hover:text-white border border-white/[0.06] hover:border-white/[0.15]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Equal 4-Column Grid (All cards identical height & aspect ratio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Equal Media Container */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#111115] border border-white/[0.06] group-hover:border-white/[0.2] transition-colors duration-300">
                {/* Poster Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.thumbnailUrl})` }}
                />

                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />

                {/* Corner Badges */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-zinc-300 border border-white/[0.06]">
                    {project.aspectRatio}
                  </span>

                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-zinc-300 border border-white/[0.06]">
                    {project.duration}
                  </span>
                </div>

                {/* Center Play Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                    <Play className="w-4 h-4 fill-current ml-0.5 text-black" />
                  </div>
                </div>
              </div>

              {/* Typographic Metadata */}
              <div className="pt-3 flex flex-col">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-1">
                  <span className="uppercase tracking-wider">
                    {project.aspectRatio === "9:16" ? "Vertical Reel" : "Cinema Cut"}
                  </span>
                  <span>{project.turnaroundTime}</span>
                </div>

                <h3 className="text-sm font-medium text-white group-hover:text-zinc-300 transition-colors truncate">
                  {project.title}
                </h3>

                <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5 font-normal">
                  {project.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
