"use client";

import { useEffect, useRef, useState } from "react";
import { Project } from "@/data/projects";
import { X, Play, Pause, Volume2, VolumeX, Maximize2, ArrowUpRight } from "lucide-react";

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
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const customWhatsAppText = encodeURIComponent(
    `Hi Rishikesh, regarding your "${project.title}" (${project.category}) project on your portfolio: can you edit a similar video for me?`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${
          project.aspectRatio === "9:16" ? "max-w-md" : "max-w-4xl"
        } bg-[#0e0e12] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-black/40">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-white font-medium">{project.title}</span>
            <span>•</span>
            <span>{project.duration}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1 rounded-full text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Viewport */}
        <div
          className={`relative bg-black flex items-center justify-center overflow-hidden ${
            project.aspectRatio === "9:16" ? "aspect-[9/16] max-h-[70vh]" : "aspect-[16/9]"
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
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            />
          ) : (
            <div
              className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-zinc-950"
              style={{
                backgroundImage: `url(${project.thumbnailUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
              <div className="relative z-10 flex flex-col items-center max-w-sm">
                <h3 className="text-base font-medium text-white mb-1">{project.title}</h3>
                <p className="text-xs text-zinc-400 font-mono mb-4">{project.tagline}</p>
                <div className="text-[11px] text-zinc-500 font-mono bg-white/[0.04] p-3 rounded-lg border border-white/[0.06]">
                  Drop video file into <code className="text-zinc-300">public/videos/</code> to stream.
                </div>
              </div>
            </div>
          )}

          {/* Minimal Floating Controls */}
          {!hasVideoError && (
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-2">
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                <div
                  className="h-full bg-white transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-white text-xs font-mono">
                <div className="flex items-center gap-3">
                  <button onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  </button>
                  <button onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-[11px] text-zinc-400">{project.duration}</span>
                </div>

                <button onClick={toggleFullscreen} aria-label="Fullscreen">
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Details */}
        <div className="p-5 bg-[#0a0a0d] border-t border-white/[0.06] flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-zinc-400">{project.description}</p>
          </div>

          <a
            href={`https://api.whatsapp.com/send/?phone=918143937553&text=${customWhatsAppText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-semibold whitespace-nowrap transition-all"
          >
            <span>Inquire Edit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
