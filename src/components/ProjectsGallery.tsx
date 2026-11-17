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
    <section id="work" className="py-14 sm:py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-12 gap-3 sm:gap-4 pb-4 border-b border-white/[0.06]">
          <div>
            <div className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em] mb-1.5 sm:mb-2">
              02 / Archive
            </div>
            <h2 className="text-2xl sm:text-4xl font-normal text-white tracking-tight">
              Selected Works
            </h2>
          </div>

          <div className="text-[11px] sm:text-xs font-mono text-zinc-500">
            {filteredProjects.length} Verified Projects
          </div>
        </div>

        {/* Minimal Category Filter - Edge to Edge Horizontal Scroll on Mobile */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 sm:mb-10 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-200 shrink-0 ${
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

        {/* Responsive Grid: 2 Columns on Mobile, 4 Columns on Large Screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col active:scale-[0.98] transition-transform duration-200"
            >
              {/* Equal Media Container */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#111115] border border-white/[0.06] group-hover:border-white/[0.2] transition-colors duration-300">
                {/* Poster Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.thumbnailUrl})` }}
                />

                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-300" />

                {/* Corner Badges */}
                <div className="absolute top-2 inset-x-2 sm:top-3 sm:inset-x-3 flex items-center justify-between text-[9px] sm:text-[10px] font-mono">
                  <span className="px-1.5 py-0.5 sm:px-2 rounded bg-black/65 backdrop-blur-md text-zinc-300 border border-white/[0.06]">
                    {project.aspectRatio}
                  </span>

                  <span className="px-1.5 py-0.5 sm:px-2 rounded bg-black/65 backdrop-blur-md text-zinc-300 border border-white/[0.06]">
                    {project.duration}
                  </span>
                </div>

                {/* Center Play Button: subtle tap hint on mobile, bold on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-60 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 text-black flex items-center justify-center shadow-2xl backdrop-blur-xs">
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5 text-black" />
                  </div>
                </div>
              </div>

              {/* Typographic Metadata */}
              <div className="pt-2 sm:pt-3 flex flex-col">
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-zinc-500 mb-0.5 sm:mb-1">
                  <span className="uppercase tracking-wider truncate mr-1">
                    {project.aspectRatio === "9:16" ? "Reel" : "Cinema"}
                  </span>
                  <span className="shrink-0">{project.turnaroundTime.replace(" Delivery", "")}</span>
                </div>

                <h3 className="text-xs sm:text-sm font-medium text-white group-hover:text-zinc-300 transition-colors truncate">
                  {project.title}
                </h3>

                <p className="text-[10px] sm:text-xs text-zinc-400 line-clamp-1 mt-0.5 font-normal">
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
