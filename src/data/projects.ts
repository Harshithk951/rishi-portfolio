export interface Project {
  id: string;
  title: string;
  client?: string;
  category: 'reels' | 'brands' | 'travel' | 'weddings' | 'films';
  aspectRatio: '9:16' | '16:9';
  tagline: string;
  description: string;
  tools: string[];
  duration: string;
  turnaroundTime?: string;
  videoUrl?: string; // Path in /videos/ or direct URL
  thumbnailUrl: string;
  featured?: boolean;
  metrics?: { label: string; value: string };
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
  stats: { label: string; value: string; helper: string }[];
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
  stats: [
    { label: "Turnaround Time", value: "24–48h", helper: "Instant reel delivery guarantee" },
    { label: "Reel Retention", value: "85%+", helper: "Engineered for high watch time" },
    { label: "Specialties", value: "6 Styles", helper: "Reels, weddings, bikes, treks & more" },
    { label: "Client Satisfaction", value: "100%", helper: "Revisions until perfection" }
  ],
  resumeUrl: "/rishikesh_resume.pdf"
};

export const CATEGORIES = [
  { id: 'all', label: 'All Works' },
  { id: 'reels', label: 'Vertical Reels (9:16)' },
  { id: 'brands', label: 'Brands & Apparel' },
  { id: 'travel', label: 'Mountain Treks' },
  { id: 'weddings', label: 'Weddings & Songs' },
  { id: 'films', label: 'Short Films & BTS' }
] as const;

export const PROJECTS: Project[] = [
  {
    id: "film-333-master",
    title: "333 — Cinematic Master Cut",
    category: "films",
    aspectRatio: "16:9",
    tagline: "4K Master narrative cut with dramatic pacing and cinematic grading",
    description: "Full-scale 4K production edit featuring evocative lighting, tension-building cuts, and rich sound design calibrated for emotional impact.",
    tools: ["Premiere Pro", "Color Grading", "Sound Design"],
    duration: "3:45",
    turnaroundTime: "48h Rough Cut",
    videoUrl: "/videos/film-333-master.mp4",
    thumbnailUrl: "/thumbnails/film-333.jpg",
    featured: true,
    metrics: { label: "Quality", value: "4K UHD Master" }
  },
  {
    id: "nishabdam-bts-reel",
    title: "Nishabdam — BTS Cinematic Reel",
    category: "films",
    aspectRatio: "16:9",
    tagline: "High-energy behind-the-scenes film production reel",
    description: "Capturing the raw energy, camera setups, and artistic camaraderie on set with fast-paced cuts, sound sync, and punchy transitions.",
    tools: ["Premiere Pro", "CapCut Desktop", "Speed Ramping"],
    duration: "0:23",
    turnaroundTime: "24h Delivery",
    videoUrl: "/videos/nishabdam-bts.mp4",
    thumbnailUrl: "/thumbnails/nishabdam-bts.jpg",
    featured: true,
    metrics: { label: "Pacing", value: "High-Energy BTS" }
  },
  {
    id: "creator-story-reel-01",
    title: "Echoes & Horizons (Wholesome Cut)",
    category: "travel",
    aspectRatio: "9:16",
    tagline: "Emotional 9:16 vertical storytelling reel",
    description: "Wholesome expedition aesthetic edited with natural ambiences, fluid pacing, and warm film color timing for maximum Instagram retention.",
    tools: ["CapCut Desktop", "Premiere Pro", "Audio Foley"],
    duration: "0:48",
    turnaroundTime: "24h Delivery",
    videoUrl: "/videos/reel-01.mov",
    thumbnailUrl: "/thumbnails/reel-01.jpg",
    featured: true,
    metrics: { label: "Format", value: "9:16 Vertical Reel" }
  },
  {
    id: "kinetic-speed-cut-02",
    title: "Velocity & Impact (4K 60FPS)",
    category: "brands",
    aspectRatio: "16:9",
    tagline: "Ultra-sharp 60fps kinetic speed ramped commercial sequence",
    description: "High frame-rate motion with surgical speed ramping, punchy bass hits, and HDR color grading tailored for luxury and automotive aesthetics.",
    tools: ["Premiere Pro", "60 FPS Speed Ramps", "HDR Grade"],
    duration: "0:16",
    turnaroundTime: "24h Delivery",
    videoUrl: "/videos/reel-02.mov",
    thumbnailUrl: "/thumbnails/reel-02.jpg",
    featured: true,
    metrics: { label: "Framerate", value: "60 FPS Smooth" }
  },
  {
    id: "streetwear-brand-reel",
    title: "Urban Monolith Apparel",
    client: "Nocturne Clothing",
    category: "brands",
    aspectRatio: "9:16",
    tagline: "High-octane commercial reel for urban streetwear drop",
    description: "Fast-paced kinetic typography, hard rhythmic cuts on bass drops, textural glitch accents, and vibrant color isolation highlighting garment fabrics.",
    tools: ["CapCut Desktop", "Premiere Pro", "Speed Ramps"],
    duration: "0:30",
    turnaroundTime: "24h Delivery",
    thumbnailUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    metrics: { label: "Pacing", value: "Hyper-Kinetic" }
  },
  {
    id: "superbike-cinematic",
    title: "Midnight Throttle: Apex 900",
    category: "reels",
    aspectRatio: "9:16",
    tagline: "Aggressive automotive/motorcycle sound design and color grade",
    description: "Exhaust notes captured with surgical audio panning, speed-ramped cornering transitions, and deep contrast neon night visuals.",
    tools: ["Premiere Pro", "Audio Panning", "Speed Ramping"],
    duration: "0:38",
    turnaroundTime: "24h Delivery",
    thumbnailUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
    metrics: { label: "Sound", value: "Custom SFX & Throttle" }
  },
  {
    id: "eternal-vows-wedding",
    title: "Golden Hour in Udaipur",
    category: "weddings",
    aspectRatio: "16:9",
    tagline: "Cinematic traditional wedding edit with royal tones",
    description: "Tender vows interlaced with slow-motion heritage architecture, warm sun flares, and orchestral instrumentation creating a timeless keepsake.",
    tools: ["Premiere Pro", "LUT Color Grading", "Story Sequencing"],
    duration: "3:42",
    turnaroundTime: "48h Rough Cut",
    thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    metrics: { label: "Format", value: "16:9 Cinema Widescreen" }
  },
  {
    id: "indie-music-video-cut",
    title: "Midnight Mirage (Song Edit)",
    client: "Indie Acoustic Duo",
    category: "weddings",
    aspectRatio: "16:9",
    tagline: "Lyrical music video edit with beat sync & dreamlike dissolves",
    description: "Precision cut against 128 BPM track. Highlights subtle performance glances, warm tungsten lighting, and evocative retro film halation.",
    tools: ["Premiere Pro", "Beat Matching", "Halation FX"],
    duration: "2:55",
    turnaroundTime: "48h Delivery",
    thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80",
    metrics: { label: "Audio Sync", value: "Sub-Frame Precision" }
  }
];
