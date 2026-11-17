"use client";

import { useEffect, useRef, useState } from "react";
import { Project, CREATOR_PROFILE } from "@/data/projects";
import { X, Play, Pause, Volume2, VolumeX, Maximize2, MessageSquare, Clock, Zap, Film } from "lucide-react";

interface VideoModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ project, isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " " && isOpen) {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isPlaying]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setHasVideoError(false);
      setIsPlaying(true);
      setProgress(0);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    } else {
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      if (total > 0) {
        setProgress((current / total) * 100);
      }
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const customWhatsAppText = encodeURIComponent(
    `Hi Rishikesh, I loved your "${project.title}" (${project.aspectRatio} ${project.category}) edit on your portfolio. Can you edit something similar for me?`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${
          project.aspectRatio === "9:16" ? "max-w-md" : "max-w-4xl"
        } bg-[#0c0c11] border border-amber-500/20 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-medium">
              [TC {project.duration}] • {project.aspectRatio}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Visual Viewport */}
        <div
          className={`relative bg-black flex items-center justify-center overflow-hidden ${
            project.aspectRatio === "9:16" ? "aspect-[9/16] max-h-[68vh]" : "aspect-[16/9]"
          }`}
        >
          {!hasVideoError && project.videoUrl ? (
            <video
              ref={videoRef}
              src={project.videoUrl}
              poster={project.thumbnailUrl}
              autoPlay
              playsInline
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onError={() => setHasVideoError(true)}
              className="w-full h-full object-cover"
              onClick={togglePlay}
            />
          ) : (
            /* Graceful Visual Fallback when raw video file is being uploaded */
            <div
              className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-zinc-900 via-black to-[#0c0c11]"
              style={{
                backgroundImage: `radial-gradient(circle at center, rgba(245,158,11,0.12) 0%, transparent 70%), url(${project.thumbnailUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

              <div className="relative z-10 flex flex-col items-center max-w-sm">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-4 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                  <Film className="w-8 h-8 animate-pulse" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                <p className="text-xs text-amber-300 font-mono mb-4">{project.tagline}</p>

                <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-[11px] text-zinc-300 mb-4">
                  <p className="text-amber-400 font-semibold mb-1 flex items-center justify-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> Video Asset Placeholder
                  </p>
                  <span>Drop your project video as </span>
                  <code className="text-amber-300 font-mono px-1 py-0.5 bg-white/5 rounded">
                    {project.videoUrl}
                  </code>
                  <span> inside the </span>
                  <code className="text-amber-300 font-mono px-1 py-0.5 bg-white/5 rounded">
                    public/videos/
                  </code>
                  <span> folder to stream this cut.</span>
                </div>

                <a
                  href={`https://wa.me/918143937553?text=${customWhatsAppText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold shadow-lg shadow-amber-500/30"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Inquire for Similar Edit</span>
                </a>
              </div>
            </div>
          )}

          {/* Interactive Player Floating Overlay Controls */}
          {!hasVideoError && (
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-2">
              {/* Scrubber progress */}
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                <div
                  className="h-full bg-amber-500 transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    className="p-1 hover:text-amber-400"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                    className="p-1 hover:text-amber-400"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="font-mono text-[11px] text-zinc-300">{project.duration}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono uppercase text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    {project.aspectRatio === "9:16" ? "9:16 REEL" : "16:9 CINEMA"}
                  </span>

                  <button
                    onClick={toggleFullscreen}
                    aria-label="Toggle Fullscreen"
                    className="p-1 hover:text-amber-400"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Project Details Footer */}
        <div className="p-5 sm:p-6 bg-[#0a0a0f] border-t border-white/5 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
                {project.turnaroundTime && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    <Zap className="w-2.5 h-2.5" /> {project.turnaroundTime}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-zinc-400">{project.description}</p>
            </div>

            <a
              href={`https://wa.me/918143937553?text=${customWhatsAppText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold tracking-wide whitespace-nowrap self-start sm:self-center shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-transform active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>

          {/* Tools & Workflow badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
            <span className="text-[11px] font-mono text-zinc-500 uppercase">Crafted with:</span>
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/10"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
