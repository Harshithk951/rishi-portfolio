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
        if (selectedCategory === "brands") return p.category === "brands";
        if (selectedCategory === "travel") return p.category === "travel";
        if (selectedCategory === "weddings") return p.category === "weddings";
        if (selectedCategory === "films") return p.category === "films";
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
            {filteredProjects.length} Projects Shown
          </div>
        </div>

        {/* Minimal Category Switcher */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isVertical = project.aspectRatio === "9:16";

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col"
              >
                {/* Media Container */}
                <div
                  className={`relative rounded-xl overflow-hidden bg-[#111115] border border-white/[0.06] group-hover:border-white/[0.2] transition-colors duration-300 ${
                    isVertical ? "aspect-[9/13]" : "aspect-[16/10]"
                  }`}
                >
                  {/* Poster Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.thumbnailUrl})` }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />

                  {/* Minimal Top Badges */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-zinc-300 border border-white/[0.06]">
                      {project.aspectRatio}
                    </span>

                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-zinc-300 border border-white/[0.06]">
                      {project.duration}
                    </span>
                  </div>

                  {/* Minimal Play Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
                      <Play className="w-4 h-4 fill-current ml-0.5 text-black" />
                    </div>
                  </div>
                </div>

                {/* Typography Metadata Underneath */}
                <div className="pt-3.5 flex flex-col">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1">
                    <span className="uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.turnaroundTime && (
                      <span className="text-zinc-400">
                        {project.turnaroundTime}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-medium text-white group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-1 mt-1 font-normal">
                    {project.tagline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
