export interface Project {
  id: string;
  title: string;
  category: 'reels' | 'brands' | 'travel' | 'films';
  aspectRatio: '9:16' | '16:9';
  tagline: string;
  description: string;
  tools: string[];
  duration: string;
  turnaroundTime: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export interface CreatorProfile {
  name: string;
  title: string;
  shortBio: string;
  detailedBio: string[];
  turnaround: string;
  location: string;
  contact: {
    phone: string;
    whatsapp: string;
    whatsappUrl: string;
    email: string;
    instagram: string;
    instagramUrl: string;
  };
  skills: {
    software: { name: string; level: string; icon: string }[];
    craft: string[];
  };
  resumeUrl: string;
}

export const CREATOR_PROFILE: CreatorProfile = {
  name: "Rachamalla Rishikesh",
  title: "Video Editor & Cinematic Storyteller",
  shortBio: "Crafting hyper-engaging brand reels, heartfelt wedding films, adrenaline bike edits, and wholesome mountain expeditions. Guaranteed 24–48hr turnaround.",
  detailedBio: [
    "I'm Rishikesh — a video editor and visual storyteller focused on rhythm, mood, and emotional resonance.",
    "From viral 9:16 short-form reels for streetwear and lifestyle brands to cinematic 16:9 wedding films and breathtaking mountain trek documentaries, I bring raw footage to life through surgical pacing, dynamic sound design, and custom color grading.",
    "Armed with Premiere Pro and CapCut Desktop, I specialize in high-efficiency editing workflows that guarantee delivery within 24 to 48 hours without compromising artistic depth."
  ],
  turnaround: "24–48 Hours",
  location: "India • Available Worldwide",
  contact: {
    phone: "+91 8143937553",
    whatsapp: "+918143937553",
    whatsappUrl: "https://wa.me/918143937553?text=Hi%20Rishikesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20video%20project!",
    email: "rachamallarishikesh09@gmail.com",
    instagram: "@the.southguy.delulu",
    instagramUrl: "https://instagram.com/the.southguy.delulu"
  },
  skills: {
    software: [
      { name: "Adobe Premiere Pro", level: "Expert", icon: "Pr" },
      { name: "CapCut Desktop", level: "Advanced (Speed & Trending)", icon: "CC" },
      { name: "Sound Design & SFX", level: "Pro Freq & Impact", icon: "Sfx" },
      { name: "Color Grading (LUTs & Log)", level: "Cinematic Warm/Film", icon: "Lut" }
    ],
    craft: [
      "Dynamic 9:16 Reel Sequencing",
      "Rhythm & Beat-Synced Cutting",
      "Speed Ramping & Seamless Transitions",
      "Wholesome Travel Vlogging Flow",
      "Emotional Wedding Story Arc",
      "Product & Commercial Aesthetic"
    ]
  },
  resumeUrl: "/rishikesh_resume.pdf"
};

export const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'reels', label: 'Vertical Reels (9:16)' },
  { id: 'films', label: 'Films & BTS (16:9)' }
] as const;

export const PROJECTS: Project[] = [
  {
    id: "kinetic-speed-cut-02",
    title: "Velocity Sequence (4K 60FPS)",
    category: "films",
    aspectRatio: "16:9",
    tagline: "High frame-rate 60fps kinetic speed ramped commercial sequence",
    description: "Ultra-sharp 60fps motion with surgical speed ramping, bass impact, and HDR color grading in 16:9 widescreen.",
    tools: ["Premiere Pro", "60 FPS Ramps"],
    duration: "0:16",
    turnaroundTime: "24h Delivery",
    videoUrl: "/videos/velocity-16x9.mp4",
    thumbnailUrl: "/thumbnails/reel-02.jpg"
  },
  {
    id: "reel-b13v35",
    title: "Cinematic Reel 01",
    category: "reels",
    aspectRatio: "9:16",
    tagline: "High-retention 9:16 vertical reel edit",
    description: "Dynamic pacing, rhythmic cutting synced with audio transitions, and crisp color timing.",
    tools: ["CapCut Desktop", "Premiere Pro"],
    duration: "0:23",
    turnaroundTime: "24h Delivery",
    videoUrl: "/videos/reel-b13v35.mp4",
    thumbnailUrl: "/thumbnails/reel-b13v35.jpg"
  },
  {
    id: "reel-b13v17",
    title: "Cinematic Reel 02",
    category: "reels",
    aspectRatio: "9:16",
    tagline: "Kinetic short-form social edit",
    description: "Punchy visual transitions with custom impact sound design calibrated for Instagram and TikTok.",
    tools: ["Premiere Pro", "Sound Design"],
    duration: "0:18",
    turnaroundTime: "24h Delivery",
    videoUrl: "/videos/reel-b13v17.mp4",
    thumbnailUrl: "/thumbnails/reel-b13v17.jpg"
  },
  {
    id: "creator-story-reel-01",
    title: "Wholesome Story Reel",
    category: "reels",
    aspectRatio: "9:16",
    tagline: "Evocative 9:16 vertical travel & lifestyle cut",
    description: "Organic pacing, ambient soundscapes, and rich color grading tailored for maximum watch time.",
    tools: ["CapCut Desktop", "Premiere Pro"],
    duration: "0:48",
    turnaroundTime: "24h Delivery",
    videoUrl: "/videos/reel-01.mov",
    thumbnailUrl: "/thumbnails/reel-01.jpg"
  },
  {
    id: "reel-b14v10",
    title: "Cinematic Reel 03",
    category: "reels",
    aspectRatio: "9:16",
    tagline: "Rhythm-matched creator sequence",
    description: "Clean visual flow, seamless match cuts, and warm cinematic tone.",
    tools: ["CapCut Desktop", "Speed Ramping"],
    duration: "0:19",
    turnaroundTime: "24h Delivery",
    videoUrl: "/videos/reel-b14v10.mp4",
    thumbnailUrl: "/thumbnails/reel-b14v10.jpg"
  },
  {
    id: "reel-b14v23",
    title: "Cinematic Reel 04",
    category: "reels",
    aspectRatio: "9:16",
    tagline: "Atmospheric motion edit",
    description: "Subtle speed ramping and precise audio ducking for immersive viewer engagement.",
    tools: ["Premiere Pro", "CapCut Desktop"],
    duration: "0:18",
    turnaroundTime: "24h Delivery",
    videoUrl: "/videos/reel-b14v23.mp4",
    thumbnailUrl: "/thumbnails/reel-b14v23.jpg"
  },
  {
    id: "nishabdam-bts-reel",
    title: "Nishabdam — BTS Production Reel",
    category: "films",
    aspectRatio: "16:9",
    tagline: "Behind-the-scenes film production cut",
    description: "Capturing the raw energy, camera setups, and artistic camaraderie on set with beat-synced cuts.",
    tools: ["Premiere Pro", "Sound Sync"],
    duration: "0:23",
    turnaroundTime: "24h Delivery",
    videoUrl: "/videos/nishabdam-bts.mp4",
    thumbnailUrl: "/thumbnails/nishabdam-bts.jpg"
  },
  {
    id: "film-333-master",
    title: "333 — Narrative Master Cut",
    category: "films",
    aspectRatio: "16:9",
    tagline: "4K Master narrative cut with dramatic pacing and cinematic grading",
    description: "Full-scale 4K production edit featuring evocative lighting, tension-building cuts, and rich sound design.",
    tools: ["Premiere Pro", "Color Grading", "Sound Design"],
    duration: "3:45",
    turnaroundTime: "48h Rough Cut",
    videoUrl: "/videos/film-333-master.mp4",
    thumbnailUrl: "/thumbnails/film-333.jpg"
  }
];
